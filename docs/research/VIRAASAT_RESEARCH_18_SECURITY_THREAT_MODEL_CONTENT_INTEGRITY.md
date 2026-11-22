# Viraaasat Research 18
## Security, Threat Modeling, Content Integrity & Abuse Prevention

**Mission:** Establish a practical security baseline for Viraaasat: protect the site, repository, publishing process, team accounts, content integrity, reader privacy, and third-party dependencies—without over-engineering a small editorial project.

**Sequence note:** Research 17 (Analytics, Privacy, Measurement & Audience Intelligence) remains the next mission previously recommended. This Research 18 was selected independently because the project needs a security baseline before implementation and publishing. The sequence can be reordered; Research 17 is not marked complete.

---

## Executive summary

Viraaasat is primarily a public editorial website, but it is not risk-free. A public content platform still has risks around compromised team accounts, leaked credentials, dependency vulnerabilities, unsafe media or content embeds, malicious links, defacement, misleading content changes, third-party services, and privacy leaks.

The recommended posture is **secure by default, proportionate to the project, and boring in the best way**:

1. Protect team identities and repository access.
2. Keep secrets out of source control and rotate immediately if exposed.
3. Use secure defaults and update dependencies.
4. Validate and sanitize any content that may be interpreted as HTML.
5. Minimize third-party scripts, embeds and trackers.
6. Deploy over HTTPS with sensible security headers.
7. Maintain clear backups and a simple incident-response playbook.
8. Preserve story integrity and transparent corrections.
9. Add security checks to the weekly publishing routine.
10. Avoid adding accounts, comments, submissions, or admin systems until needed; each feature creates new risk.

---

## 1. Threat model: what could realistically happen?

Threat modeling begins with assets, threat actors, entry points and likely impact—not with a list of fashionable security tools.

### Assets to protect

- GitHub repository and commit history
- Team member GitHub accounts
- Deployment account and DNS/domain configuration
- Website content and editorial records
- Source ledger, research notes and unreleased drafts
- Media assets and licensing records
- Environment variables, tokens and API credentials
- Reader privacy and analytics data
- Website availability and reputation
- Brand identity and public trust

### Likely threat actors

- Automated bots scanning public websites
- Opportunistic attackers looking for exposed credentials or vulnerable dependencies
- Phishing attempts against team members
- Malicious or compromised third-party package / script
- Abusive content submissions if future features allow user-generated content
- Someone attempting to vandalize or misrepresent published stories
- Mistakes by project maintainers (accidental secret exposure, unsafe configuration, faulty deploy)

### Viraaasat's attack surface

| Surface | Main risk | Priority |
|---|---|---|
| Team accounts | Account takeover | Critical |
| GitHub repo | Secret leak, malicious code, unauthorized changes | Critical |
| Build/deploy | Compromised pipeline, incorrect deploy | High |
| Dependencies | Vulnerable or compromised package | High |
| Content rendering | XSS / unsafe HTML / injection | High if rich content |
| External embeds | Tracking, third-party compromise, privacy | Medium–High |
| DNS/domain | Redirect, hijack, impersonation | High |
| Reader analytics | Privacy over-collection, data exposure | Medium |
| Forms / submissions | Spam, abuse, injection, privacy | Feature-dependent |
| Availability | Bot traffic, accidental outage | Medium |

Prioritization here is an assessment for Viraaasat, not a measured threat assessment.

---

## 2. Security framework reference: OWASP Top 10 (2025)

OWASP's current Top 10 release is 2025. The listed categories are:

- A01 Broken Access Control
- A02 Security Misconfiguration
- A03 Software Supply Chain Failures
- A04 Cryptographic Failures
- A05 Injection
- A06 Insecure Design
- A07 Authentication Failures
- A08 Software or Data Integrity Failures
- A09 Security Logging and Alerting Failures
- A10 Mishandling of Exceptional Conditions

The OWASP Top 10 is an awareness and risk framework, not a checklist that proves a site is secure. It is a useful starting point to map Viraaasat's risks and review the project periodically.

### Project interpretation

- **Access control:** keep deployment, domain, repository and admin privileges limited to team members who need them.
- **Misconfiguration:** production secrets, debug output, open redirects, overly permissive headers, and unsafe hosting settings.
- **Supply chain:** dependencies, package scripts, compromised libraries, CI actions.
- **Cryptography:** HTTPS, secure storage and avoiding custom cryptographic code.
- **Injection:** unsafe HTML/MDX, URL handling, query construction, or any future submission fields.
- **Insecure design:** introducing unnecessary user accounts, comments or admin features without a threat model.
- **Authentication:** secure team accounts and MFA.
- **Integrity:** protect releases and story content from unauthorized changes.
- **Logging/alerting:** enough operational visibility to detect problems, but do not log secrets or personal data.
- **Exceptional conditions:** safe error pages, no stack traces or sensitive data in production responses.

---

## 3. Team identity and account security

For a three-person team, account security is one of the highest-leverage controls.

### Baseline

- Enable multi-factor authentication (MFA) on GitHub, deployment provider, domain registrar and any account with project access.
- Prefer passkeys or hardware-backed authentication where supported; use a strong authenticator-based fallback.
- Store recovery codes securely and separately from the account password.
- Never share one team login.
- Use individual accounts with minimum permissions.
- Review team membership and collaborator permissions periodically and whenever someone leaves.
- Use a password manager; do not reuse passwords.
- Be skeptical of fake GitHub, deployment, package-maintainer or copyright emails and OAuth authorization prompts.

### Access principle

Grant the minimum access necessary. Domain registrar, DNS, hosting and GitHub permissions are especially sensitive because they can control the entire public presence.

---

## 4. Secrets and credential hygiene

### Never commit

- API keys
- Access tokens
- Private keys
- Database credentials
- Deployment tokens
- OAuth secrets
- Signing keys
- Passwords
- Personal data or private editorial material that should not be public

### Practical controls

- Use `.env` files only for local development and keep them ignored.
- Provide a `.env.example` with names and placeholder values only.
- Use platform-managed environment variables for deployment.
- Separate development and production credentials.
- Use least-privilege tokens and short-lived credentials where supported.
- Avoid printing environment values in build logs, errors or screenshots.
- Check repository history and CI logs for accidental exposures.

**If a secret is exposed:** revoke/rotate it immediately. Deleting it from the latest file or commit is not enough—the credential may still be usable and could remain in history, forks, caches or logs. GitHub's guidance describes secret scanning and alerts; GitHub also documents push protection that blocks supported secrets before they are pushed where available.

---

## 5. Repository and GitHub security

### Recommended repository controls

- Keep a clear protected default branch and require review for significant changes.
- For a small team, use PRs for shared changes rather than directly pushing risky changes to the release branch.
- Require CI checks to pass before merging when available.
- Review dependency changes.
- Keep repository permissions minimal.
- Avoid granting broad tokens to automated workflows.
- Pin third-party GitHub Actions to immutable commit SHAs for sensitive workflows when practical.
- Use a `SECURITY.md` to tell people how to report vulnerabilities.
- Enable dependency alerts and Dependabot security updates if available.
- Enable secret scanning and push protection where available.
- Use CodeQL/code scanning if the repository plan and setup support it and the scan provides useful coverage.

GitHub's security quickstart recommends access management, dependency graph, Dependabot alerts/security updates, dependency review, code scanning and secret protection as available to the repository. Availability varies by plan and repository type.

### Security checklist for repository setup

- [ ] MFA enabled for every maintainer
- [ ] Access list reviewed
- [ ] Default branch protection/rules configured
- [ ] CI checks configured
- [ ] Secret scanning enabled where available
- [ ] Push protection enabled where available
- [ ] Dependabot alerts enabled
- [ ] Dependency update workflow reviewed
- [ ] `SECURITY.md` exists
- [ ] `.env` and credentials excluded from Git
- [ ] No secrets in issues, PRs, screenshots, logs or docs

---

## 6. Dependencies and software supply chain

Viraaasat will use an evolving frontend ecosystem. Dependency risk includes vulnerabilities, malicious packages, abandoned libraries, compromised maintainers and unsafe update scripts.

### Recommended routine

1. Keep dependency inventory and lockfile committed.
2. Use the package manager consistently.
3. Review new dependencies before adoption—maintenance, popularity is not a guarantee, license, footprint, permissions, and necessity.
4. Prefer fewer dependencies over overlapping packages.
5. Monitor security alerts.
6. Apply critical security updates promptly.
7. Use automated dependency PRs as proposals; review and test them.
8. Be cautious with install scripts and postinstall behavior.
9. Avoid blindly upgrading every package immediately before publishing.
10. Record why a security update was deferred and revisit it.

**Principle:** a small dependency footprint is easier to understand, maintain and defend.

---

## 7. Frontend content security and XSS

Viraaasat's story format may contain rich text, interactive modules, charts, external links and perhaps MDX. This makes content rendering a major security boundary.

### Rules

- Do not render untrusted HTML directly.
- Treat all externally sourced text, URLs, metadata, and embeds as untrusted.
- Prefer structured content components to arbitrary HTML.
- If HTML is required, sanitize it with a maintained sanitizer and narrowly configured allowlist.
- Avoid dangerous DOM APIs and HTML injection sinks.
- Validate external URLs and restrict dangerous schemes (`javascript:`, `data:` where not explicitly needed, etc.).
- Avoid inline scripts and event handlers in content.
- Never execute content from reader submissions or external sources.
- Treat MDX as executable code—not merely text—if it permits imports, expressions or components. Only trusted editorial contributors should author and review MDX in the repository.

OWASP recommends framework protections, context-appropriate output encoding and sanitization; CSP is defense in depth rather than the primary XSS defense.

### Content pipeline risk

Research text is not inherently safe just because it is stored in Markdown. Unsafe plugins, raw HTML, custom renderers, links or build-time code can introduce vulnerabilities.

---

## 8. Content Security Policy and security headers

HTTP security headers can reduce the impact of some attacks. OWASP's header and CSP cheat sheets provide a starting point for configuration.

### Headers to investigate for production

- `Content-Security-Policy` — constrain permitted script, style, image, font, media, connection and frame sources.
- `Strict-Transport-Security` — enforce HTTPS after HTTPS configuration and testing.
- `X-Content-Type-Options: nosniff` — reduce MIME-sniffing risks.
- `Referrer-Policy` — limit referrer information sent to other sites.
- `Permissions-Policy` — restrict browser capabilities that Viraaasat doesn't use.
- `frame-ancestors` inside CSP — restrict who can embed pages, if embedding is not required.

Do not blindly copy a CSP. Viraaasat's font hosts, video embeds, maps, analytics and media sources must be inventoried first. Start with a report-only CSP where practical, examine violations, then enforce a policy that permits only the resources actually needed.

Avoid overly permissive values such as broad wildcards, `unsafe-eval`, or `unsafe-inline` unless a specific, documented requirement and safe implementation necessitate them.

---

## 9. Third-party scripts, embeds and external links

Each external service adds a trust dependency, privacy exposure, availability risk and potential security risk.

### Viraaasat policy

- Use third-party scripts only when they provide real value.
- Prefer native browser functionality or first-party implementations for simple needs.
- Defer nonessential third-party scripts.
- Audit the script source and its permissions.
- Avoid third-party scripts in sensitive editorial tools.
- Prefer click-to-load embeds for privacy-sensitive video/social content.
- Use iframe sandboxing and restrictive permissions where applicable.
- Avoid loading a third-party embed automatically on every page if it can be activated by the reader.
- External links should be clearly identifiable and safely opened.
- Avoid embedding social feeds that inject large third-party script ecosystems into the reading experience.

This aligns with the project's performance, privacy and editorial goals.

---

## 10. Deployment, domain and infrastructure

The domain, DNS and hosting accounts are part of the site's security perimeter.

### Deployment baseline

- HTTPS enabled for all production pages.
- HTTP redirects to HTTPS.
- DNS and registrar accounts secured with MFA.
- Registrar lock and transfer protections where offered.
- Keep domain contact and renewal details current.
- Use platform-managed TLS certificates rather than manually managing certificates unless required.
- Separate preview/staging and production environments.
- Avoid publishing debug mode, source maps with secrets, or development endpoints unintentionally.
- Limit deployment permissions.
- Use build artifacts and automated deploys rather than manual file changes on production.
- Review deployment configuration before changing DNS or security settings.

### Preview deployments

Preview environments are useful for the weekly story workflow, but:
- Don't place production secrets in previews.
- Consider whether unpublished or sensitive stories should be publicly accessible.
- Protect private previews if content needs confidentiality.
- Avoid indexing draft previews.
- Use separate access settings and environment variables.

---

## 11. Forms and reader-generated content

**Recommendation: avoid reader-generated content at launch.**

Comments, submissions, polls, accounts, uploads and messaging can add:
- Spam and abuse
- XSS or injection risks
- Moderation burden
- Privacy and retention responsibilities
- Account-security requirements
- Legal and safety concerns

If a feature is introduced later, treat it as a separate security project with:
- A clear purpose
- Abuse cases
- Input validation
- Rate limits
- Spam prevention
- Safe output rendering
- Privacy notice and retention policy
- Moderation and escalation process
- Accessible reporting tools
- Security tests

A simple contact mechanism, if required, should be designed deliberately and not collect unnecessary personal information.

---

## 12. Editorial integrity and content tampering

Security is also about protecting what Viraaasat publishes—not only protecting servers.

### Protect stories

- Use source records and review checklists.
- Review edits to important claims, numbers, images and captions.
- Keep a clear publishing trail through Git and editorial records.
- Separate authoring from approval where possible.
- Label archive images, reconstruction, illustration and AI-generated assets.
- Ensure corrections are visible and proportionate.
- Review significant updates after publication.
- Keep originals of documentary assets and record modifications.
- Do not silently alter evidence or media to make it more compelling.

### Threat scenario: malicious story modification

An attacker or compromised account could change:
- A statistic
- A headline
- A quote
- A map
- An image caption
- A source link
- The story's political framing

For controversial stories, a second-person review of major content changes is especially important. The project should have a process to detect, revert and disclose significant unauthorized or erroneous changes.

---

## 13. Backup and recovery

Security isn't complete without recovery.

### What should be recoverable

- Repository and history
- Story content and structured data
- Editorial source ledger
- Media assets and rights records
- Deployment configuration
- Domain/DNS configuration documentation
- Important project credentials/recovery codes (stored securely, not in the repo)

### Practical approach

- Git is the source of truth for source code and text.
- Maintain a separate backup of media and project-critical files.
- Keep recovery codes in a secure password manager.
- Document how to redeploy from a clean clone.
- Test recovery occasionally—not just backup creation.
- Keep a short runbook for restoring the site and domain configuration.

A backup that has never been restored is not a proven recovery process.

---

## 14. Incident response: a small-team playbook

### If something suspicious happens

**1. Identify**
- What changed?
- When was it first noticed?
- Which accounts, services, stories or files are affected?

**2. Contain**
- Disable compromised sessions/tokens.
- Rotate affected credentials.
- Revoke unauthorized access.
- Pause deployment if a malicious change is in progress.

**3. Assess**
- Determine whether code, data, media, readers or team accounts were affected.
- Review logs and commit history.
- Preserve evidence before cleanup where appropriate.

**4. Recover**
- Revert malicious code/content.
- Deploy a known-good version.
- Restore from backups if needed.
- Confirm domain, DNS and hosting controls.

**5. Communicate**
- Notify affected parties when necessary.
- Publish a clear correction/security notice if readers are impacted.
- Don't speculate about cause or impact.

**6. Learn**
- Document what happened.
- Add a preventive check.
- Update the runbook and team checklist.

For credential leaks, rotate/revoke the secret first; removing the string from the visible code does not invalidate the leaked credential.

---

## 15. Security workflow integrated into weekly publishing

Security should be lightweight and repeatable rather than a large quarterly ceremony.

### Every story release

- [ ] Story and asset sources reviewed
- [ ] New embeds/scripts evaluated
- [ ] New dependencies justified
- [ ] External URLs checked
- [ ] Content rendering reviewed
- [ ] Interactive components tested
- [ ] Preview deployment inspected
- [ ] Build/dependency alerts reviewed
- [ ] No sensitive data in content, commits or logs
- [ ] Production deployment checked

### Monthly / periodic maintenance

- [ ] Review collaborator access
- [ ] Check security/dependency alerts
- [ ] Apply important updates
- [ ] Check domain and deployment security settings
- [ ] Review third-party scripts and embeds
- [ ] Test restoration/redeploy instructions
- [ ] Confirm recovery codes and access are secure

---

## 16. Security testing and QA

### Minimal security test matrix

| Test | Expected result |
|---|---|
| Unsafe HTML in content | Does not execute |
| Malicious URL scheme | Rejected or rendered inert |
| Missing page/route | Safe 404, no stack trace |
| Build failure | Deployment blocked |
| Dependency alert | Reviewed and tracked |
| Secret in commit | Prevented/detected |
| Third-party unavailable | Story remains readable |
| Embed blocked | Graceful fallback |
| Production error | No sensitive details exposed |
| Draft preview | Not unintentionally indexed or exposed |
| Content modification | Review trail / detection |
| HTTPS | No mixed-content failures |

Use a safe, controlled test environment. Don't test vulnerabilities against production users.

---

## 17. Risk priorities for Viraaasat

### Priority 0 — before public launch

1. MFA on team, GitHub, domain registrar and hosting accounts.
2. Secrets kept outside repository.
3. HTTPS and secure deployment configuration.
4. Dependency alerts and update process.
5. Safe content rendering and no arbitrary HTML execution.
6. Production error handling.
7. Minimal third-party scripts.
8. Branch/review workflow.
9. Backup and redeploy runbook.
10. `SECURITY.md` reporting instructions.

### Priority 1 — after launch

- CSP with tested policy.
- Automated security checks in CI.
- Periodic access review.
- More comprehensive logging and alerting.
- Security review of new interactive modules.
- Privacy review of analytics and external embeds.
- Automated checks for unsafe content and links.

### Priority 2 — only if features expand

- User accounts
- Comments
- Submissions and uploads
- Admin CMS
- Complex API
- Personalization
- User-generated media

These features warrant a separate threat model before implementation.

---

## 18. Viraaasat's security promise

> We protect the integrity of our work, respect our readers' privacy, limit unnecessary dependencies, and build systems that fail safely. Security is not a feature added at the end; it is part of how we research, write, design, publish and maintain stories.

---

## 19. References

1. OWASP Top 10:2025  
   https://top10.owasp.org/  
   Current risk framework and application-security categories.

2. OWASP Developer Guide — Top Ten  
   https://devguide.owasp.org/en/02-foundations/05-top-ten/  
   Overview and explanations of risk categories.

3. OWASP Content Security Policy Cheat Sheet  
   https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html  
   CSP deployment, directives, report-only mode and policy examples.

4. OWASP HTTP Headers Cheat Sheet  
   https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html  
   Browser security response headers and recommended configuration.

5. OWASP Cross-Site Scripting Prevention Cheat Sheet  
   https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html  
   Output encoding, sanitization, framework protections, CSP and Trusted Types.

6. GitHub — Quickstart for securing your repository  
   https://docs.github.com/en/code-security/getting-started/quickstart-for-securing-your-repository  
   Access management, dependency alerts, review, code scanning, secret protection and security policy.

7. GitHub — Managing security and analysis settings  
   https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository  
   Security feature configuration and availability.

8. GitHub — Secret scanning  
   https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning  
   Credential leak detection and remediation.

9. GitHub — Best practices for preventing data leaks  
   https://docs.github.com/en/code-security/tutorials/secure-your-organization/prevent-data-leaks  
   Permissions, secret detection, data leak prevention.

10. GitHub — Securing code in your supply chain  
    https://docs.github.com/en/code-security/tutorials/implement-supply-chain-best-practices/securing-code  
    Dependency hygiene, tokens, pull-request review and scanning.

---

## Final takeaway

**Viraaasat's security should be proportionate, systematic and quiet.**

We don't need enterprise-scale security infrastructure for a three-person editorial project. We do need disciplined accounts, safe content handling, reliable updates, protected credentials, trustworthy deployment, recovery, and a process to preserve the integrity of published stories.

Build the basics well. Avoid unnecessary features that create new attack surfaces. Treat security as part of the weekly publishing system.
