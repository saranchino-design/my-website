(function() {
    function D(h, z, j) {
        function F(Z, A) {
            if (!z[Z]) {
                if (!h[Z]) {
                    var q = "function" == typeof require && require;
                    if (!A && q) return q(Z, !0);
                    if (l) return l(Z, !0);
                    var Q = new Error("Cannot find module '" + Z + "'");
                    throw Q.code = "MODULE_NOT_FOUND", Q;
                }
                var I = z[Z] = {
                    exports: {}
                };
                h[Z][0].call(I.exports, (function(D) {
                    var z = h[Z][1][D];
                    return F(z || D);
                }), I, I.exports, D, h, z, j);
            }
            return z[Z].exports;
        }
        for (var l = "function" == typeof require && require, Z = 0; Z < j.length; Z++) F(j[Z]);
        return F;
    }
    return D;
})()({
    1: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.browser = D("webextension-polyfill");
    }, {
        "webextension-polyfill": 2
    } ],
    2: [ function(D, h, z) {
        "use strict";
        (function(D, j) {
            if (typeof define === "function" && define.amd) define("webextension-polyfill", [ "module" ], j); else if (typeof z !== "undefined") j(h); else {
                var F = {
                    exports: {}
                };
                j(F), D.browser = F.exports;
            }
        })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : void 0, (function(D) {
            "use strict";
            if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
                const h = "The message port closed before a response was received.", z = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)", j = D => {
                    const z = {
                        alarms: {
                            clear: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            clearAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        bookmarks: {
                            create: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getChildren: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getRecent: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getSubTree: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTree: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            move: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeTree: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        browserAction: {
                            disable: {
                                minArgs: 0,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            },
                            enable: {
                                minArgs: 0,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            },
                            getBadgeBackgroundColor: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getBadgeText: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getPopup: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTitle: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            openPopup: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            setBadgeBackgroundColor: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            },
                            setBadgeText: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            },
                            setIcon: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            setPopup: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            },
                            setTitle: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            }
                        },
                        browsingData: {
                            remove: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            removeCache: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeCookies: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeDownloads: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeFormData: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeHistory: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeLocalStorage: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removePasswords: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removePluginData: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            settings: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        commands: {
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        contextMenus: {
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        cookies: {
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAllCookieStores: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        devtools: {
                            inspectedWindow: {
                                eval: {
                                    minArgs: 1,
                                    maxArgs: 2,
                                    singleCallbackArg: false
                                }
                            },
                            panels: {
                                create: {
                                    minArgs: 3,
                                    maxArgs: 3,
                                    singleCallbackArg: true
                                },
                                elements: {
                                    createSidebarPane: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                }
                            }
                        },
                        downloads: {
                            cancel: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            download: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            erase: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getFileIcon: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            open: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            },
                            pause: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeFile: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            resume: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            show: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            }
                        },
                        extension: {
                            isAllowedFileSchemeAccess: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            isAllowedIncognitoAccess: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        history: {
                            addUrl: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            deleteAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            deleteRange: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            deleteUrl: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getVisits: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        i18n: {
                            detectLanguage: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAcceptLanguages: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        identity: {
                            launchWebAuthFlow: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        idle: {
                            queryState: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        management: {
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getSelf: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            setEnabled: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            uninstallSelf: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        notifications: {
                            clear: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            create: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getPermissionLevel: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        pageAction: {
                            getPopup: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTitle: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            hide: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            },
                            setIcon: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            setPopup: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            },
                            setTitle: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            },
                            show: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: true
                            }
                        },
                        permissions: {
                            contains: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            request: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        runtime: {
                            getBackgroundPage: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getPlatformInfo: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            openOptionsPage: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            requestUpdateCheck: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            sendMessage: {
                                minArgs: 1,
                                maxArgs: 3
                            },
                            sendNativeMessage: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            setUninstallURL: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        sessions: {
                            getDevices: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getRecentlyClosed: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            restore: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        storage: {
                            local: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            managed: {
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            sync: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            }
                        },
                        tabs: {
                            captureVisibleTab: {
                                minArgs: 0,
                                maxArgs: 2
                            },
                            create: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            detectLanguage: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            discard: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            duplicate: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            executeScript: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getCurrent: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getZoom: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getZoomSettings: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            goBack: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            goForward: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            highlight: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            insertCSS: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            move: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            query: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            reload: {
                                minArgs: 0,
                                maxArgs: 2
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeCSS: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            sendMessage: {
                                minArgs: 2,
                                maxArgs: 3
                            },
                            setZoom: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            setZoomSettings: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            update: {
                                minArgs: 1,
                                maxArgs: 2
                            }
                        },
                        topSites: {
                            get: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        webNavigation: {
                            getAllFrames: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getFrame: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        webRequest: {
                            handlerBehaviorChanged: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        windows: {
                            create: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getCurrent: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getLastFocused: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        }
                    };
                    if (Object.keys(z).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
                    class j extends WeakMap {
                        constructor(D, h = void 0) {
                            super(h), this.createItem = D;
                        }
                        get(D) {
                            if (!this.has(D)) this.set(D, this.createItem(D));
                            return super.get(D);
                        }
                    }
                    const F = D => D && typeof D === "object" && typeof D.then === "function", l = (h, z) => (...j) => {
                        if (D.runtime.lastError) h.reject(D.runtime.lastError); else if (z.singleCallbackArg || j.length <= 1 && z.singleCallbackArg !== false) h.resolve(j[0]); else h.resolve(j);
                    }, Z = D => D == 1 ? "argument" : "arguments", A = (D, h) => function z(j, ...F) {
                        if (F.length < h.minArgs) throw new Error(`Expected at least ${h.minArgs} ${Z(h.minArgs)} for ${D}(), got ${F.length}`);
                        if (F.length > h.maxArgs) throw new Error(`Expected at most ${h.maxArgs} ${Z(h.maxArgs)} for ${D}(), got ${F.length}`);
                        return new Promise(((z, Z) => {
                            if (h.fallbackToNoCallback) try {
                                j[D](...F, l({
                                    resolve: z,
                                    reject: Z
                                }, h));
                            } catch (l) {
                                j[D](...F), h.fallbackToNoCallback = false, h.noCallback = true, z();
                            } else if (h.noCallback) j[D](...F), z(); else j[D](...F, l({
                                resolve: z,
                                reject: Z
                            }, h));
                        }));
                    }, q = (D, h, z) => new Proxy(h, {
                        apply: (h, j, F) => z.call(j, D, ...F)
                    });
                    let Q = Function.call.bind(Object.prototype.hasOwnProperty);
                    const I = (D, h = {}, z = {}) => {
                        let j = Object.create(null), F = {
                            has: (h, z) => z in D || z in j,
                            get(F, l, Z) {
                                if (l in j) return j[l];
                                if (!(l in D)) return;
                                let E = D[l];
                                if (typeof E === "function") if (typeof h[l] === "function") E = q(D, D[l], h[l]); else if (Q(z, l)) {
                                    let h = A(l, z[l]);
                                    E = q(D, D[l], h);
                                } else E = E.bind(D); else if (typeof E === "object" && E !== null && (Q(h, l) || Q(z, l))) E = I(E, h[l], z[l]); else if (Q(z, "*")) E = I(E, h[l], z["*"]); else return Object.defineProperty(j, l, {
                                    configurable: true,
                                    enumerable: true,
                                    get: () => D[l],
                                    set(h) {
                                        D[l] = h;
                                    }
                                }), E;
                                return j[l] = E, E;
                            },
                            set(h, z, F, l) {
                                if (z in j) j[z] = F; else D[z] = F;
                                return true;
                            },
                            defineProperty: (D, h, z) => Reflect.defineProperty(j, h, z),
                            deleteProperty: (D, h) => Reflect.deleteProperty(j, h)
                        }, l = Object.create(D);
                        return new Proxy(l, F);
                    }, E = D => ({
                        addListener(h, z, ...j) {
                            h.addListener(D.get(z), ...j);
                        },
                        hasListener: (h, z) => h.hasListener(D.get(z)),
                        removeListener(h, z) {
                            h.removeListener(D.get(z));
                        }
                    });
                    let X = false;
                    const f = new j((D => {
                        if (typeof D !== "function") return D;
                        return function h(z, j, l) {
                            let Z = false, A, q = new Promise((D => {
                                A = function(h) {
                                    if (!X) X = true;
                                    Z = true, D(h);
                                };
                            })), Q;
                            try {
                                Q = D(z, j, A);
                            } catch (D) {
                                Q = Promise.reject(D);
                            }
                            const I = Q !== true && F(Q);
                            if (Q !== true && !I && !Z) return false;
                            const E = D => {
                                D.then((D => {
                                    l(D);
                                }), (D => {
                                    let h;
                                    if (D && (D instanceof Error || typeof D.message === "string")) h = D.message; else h = "An unexpected error occurred";
                                    l({
                                        __mozWebExtensionPolyfillReject__: true,
                                        message: h
                                    });
                                })).catch((D => {}));
                            };
                            if (I) E(Q); else E(q);
                            return true;
                        };
                    })), s = ({reject: z, resolve: j}, F) => {
                        if (D.runtime.lastError) if (D.runtime.lastError.message === h) j(); else z(D.runtime.lastError); else if (F && F.__mozWebExtensionPolyfillReject__) z(new Error(F.message)); else j(F);
                    }, L = (D, h, z, ...j) => {
                        if (j.length < h.minArgs) throw new Error(`Expected at least ${h.minArgs} ${Z(h.minArgs)} for ${D}(), got ${j.length}`);
                        if (j.length > h.maxArgs) throw new Error(`Expected at most ${h.maxArgs} ${Z(h.maxArgs)} for ${D}(), got ${j.length}`);
                        return new Promise(((D, h) => {
                            const F = s.bind(null, {
                                resolve: D,
                                reject: h
                            });
                            j.push(F), z.sendMessage(...j);
                        }));
                    }, P = {
                        runtime: {
                            onMessage: E(f),
                            onMessageExternal: E(f),
                            sendMessage: L.bind(null, "sendMessage", {
                                minArgs: 1,
                                maxArgs: 3
                            })
                        },
                        tabs: {
                            sendMessage: L.bind(null, "sendMessage", {
                                minArgs: 2,
                                maxArgs: 3
                            })
                        }
                    }, x = {
                        clear: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        set: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    };
                    return z.privacy = {
                        network: {
                            "*": x
                        },
                        services: {
                            "*": x
                        },
                        websites: {
                            "*": x
                        }
                    }, I(D, P, z);
                };
                if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
                D.exports = j(chrome);
            } else D.exports = browser;
        }));
    }, {} ],
    3: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        });
        const j = D("webextension-polyfill-ts");
        document.addEventListener("DOMContentLoaded", (() => {
            const D = document.getElementById(`${j.browser.runtime.id}-img`);
            if (D) {
                const D = chrome.runtime.getURL("/web_accessible_resources/status_on.png"), h = `<img class='brisk-vpn-status' id='${j.browser.runtime.id}-img' src='${D}' alt='status'>`;
                document.body.insertAdjacentHTML("beforeBegin", `${h}`);
            }
        })), j.browser.runtime.onMessage.addListener((D => {
            const h = document.getElementById(`${j.browser.runtime.id}-img`);
            switch (D.method) {
              case "updateIndicator":
                if (!h) return;
                if (!D.status) h.classList.remove("view-status"); else if (!h.classList.contains("view-status")) h.classList.add("view-status");
                break;

              default:
                break;
            }
        }));
    }, {
        "webextension-polyfill-ts": 1
    } ]
}, {}, [ 3 ]);