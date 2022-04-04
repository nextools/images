// see https://github.com/ghacksuserjs/ghacks-user.js/blob/master/user.js for details

// startup
user_pref("browser.startup.page", 0);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", "");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);
user_pref("browser.onboarding.enabled", false);

// tabs
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
// optimize memory
user_pref("browser.tabs.remote.autostart", false);

/* Prop: browser.link.open_newwindow
1 = force new window into same tab
2 = allow link to open a new window
3 = divert new window to a new tab (default)
*/
user_pref("browser.link.open_newwindow", 1);
/* Prop: browser.link.open_newwindow.restriction
0 = apply the setting under (browser.link.open_newwindow) to ALL new windows (even script windows)
1 = override the setting under (browser.link.open_newwindow) and always use new windows
2 = apply the setting under (browser.link.open_newwindow) to normal windows, but NOT to script windows with features (default)
*/
user_pref("browser.link.open_newwindow.restriction", 0);
/* Prop: browser.link.open_newwindow.override.external
-1 = apply the setting under (browser.link.open_newwindow) to external links (default)
1 = open external links in the last active tab replacing the current page
2 = open external links in a new window
3 = open external links in a new tab in the last active window
*/
user_pref("browser.link.open_newwindow.override.external", 1);

// updates
user_pref("media.eme.enabled", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-gmpopenh264.autoupdate", false);
user_pref("media.gmp-manager.cert.checkAttributes", false);
user_pref("media.gmp-gmpopenh264.visible", false);
user_pref("media.gmp-manager.cert.checkAttributes", false);
user_pref("media.gmp-manager.cert.requireBuiltIn", false);
user_pref("media.gmp-manager.url", "about:blank");
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp-widevinecdm.visible", false)
user_pref("media.gmp.trial-create.enabled", false);
user_pref("app.update.enabled", false);
user_pref("extensions.update.enabled", false);
user_pref("extensions.update.autoUpdateDefault", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.systemAddon.update.enabled", false);
user_pref("extensions.systemAddon.update.url", "");
user_pref("app.update.auto", false);
user_pref("app.update.service.enabled", false);
user_pref("app.update.staging.enabled", false);
user_pref("lightweightThemes.update.enabled", false);
user_pref("browser.search.update", false);

// crash reports
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.chrome.errorReporter.enabled", false);
user_pref("browser.chrome.errorReporter.submitUrl", "");

// telemetry and data reporting
user_pref("toolkit.telemetry.unifiedIsOptIn", false);
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("shield.savant.enabled", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.library.activity-stream.enabled", false);
user_pref("extensions.webcompat-reporter.enabled", false);

// built-in extensions
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.screenshots.disabled", true);
user_pref("extensions.screenshots.upload-disabled", true);

// experiments
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("experiments.activeExperiment", false);
user_pref("network.allow-experiments", false);

// Marionette settings
user_pref("marionette.log.level", "debug");

// Enable authless screencapture
user_pref("media.getusermedia.browser.enabled", true);
user_pref("media.navigator.permission.disabled", true);

// Don't fetch Favico
user_pref("browser.chrome.favicons", false);
user_pref("browser.chrome.site_icons", false);

// Allow proxying of 127.0.0.1/localhost
user_pref("network.proxy.allow_hijacking_localhost", true);

// Don't ask to save stuff to disk
user_pref("browser.helperApps.neverAsk.saveToDisk", "application/octet-stream,text/plain");

// Don't send silly data to Mozzila
user_pref("extensions.blocklist.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("messaging-system.rsexperimentloader.enabled", false);
user_pref("browser.aboutHomeSnippets.updateUrl", "");
user_pref("app.normandy.enabled", false);
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("identity.fxaccounts.enabled", false);

// Handle SSL errors and such without popping screens
user_pref("security.insecure_field_warning.contextual.enabled", false);
user_pref("security.certerrors.permanentOverride", false);
user_pref("network.stricttransportsecurity.preloadlist", false);
user_pref("security.enterprise_roots.enabled", true);

// Disable Cache
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", false);
user_pref("browser.cache.offline.enable", false);
user_pref("network.http.use-cache", false);
user_pref("browser.cache.disk.capacity", 0);

// Disable service workers
user_pref("dom.serviceWorkers.enabled", false);

// For finally disable external urls requests
user_pref("app.update.url.details", "about:blank");
user_pref("app.update.url.manual", "about:blank");
user_pref("browser.safebrowsing.provider.google.updateURL", "about:blank");
user_pref("browser.safebrowsing.provider.google4.updateURL", "about:blank");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "about:blank");
user_pref("extensions.update.background.url", "about:blank");
user_pref("extensions.update.url", "about:blank");
