(function () {
  function O(E, j, F) {
    function o(c, Y) {
      if (!j[c]) {
        if (!E[c]) {
          var p = "function" == typeof require && require;
          if (!Y && p) return p(c, !0);
          if (S) return S(c, !0);
          var b = new Error("Cannot find module '" + c + "'");
          throw ((b.code = "MODULE_NOT_FOUND"), b);
        }
        var M = (j[c] = {
          exports: {},
        });
        E[c][0].call(
          M.exports,
          function (O) {
            var j = E[c][1][O];
            return o(j || O);
          },
          M,
          M.exports,
          O,
          E,
          j,
          F
        );
      }
      return j[c].exports;
    }
    for (
      var S = "function" == typeof require && require, c = 0;
      c < F.length;
      c++
    )
      o(F[c]);
    return o;
  }
  return O;
})()(
  {
    1: [
      function (O, E, j) {
        "use strict";
        Object.defineProperty(j, "__esModule", {
          value: true,
        }),
          (j.browser = O("webextension-polyfill"));
      },
      {
        "webextension-polyfill": 2,
      },
    ],
    2: [
      function (O, E, j) {
        "use strict";
        (function (O, F) {
          if (typeof define === "function" && define.amd)
            define("webextension-polyfill", ["module"], F);
          else if (typeof j !== "undefined") F(E);
          else {
            var o = {
              exports: {},
            };
            F(o), (O.browser = o.exports);
          }
        })(
          typeof globalThis !== "undefined"
            ? globalThis
            : typeof self !== "undefined"
            ? self
            : void 0,
          function (O) {
            "use strict";
            if (
              typeof browser === "undefined" ||
              Object.getPrototypeOf(browser) !== Object.prototype
            ) {
              const E =
                  "The message port closed before a response was received.",
                j =
                  "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
                F = (O) => {
                  const j = {
                    alarms: {
                      clear: {
                        minArgs: 0,
                        maxArgs: 1,
                      },
                      clearAll: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                      get: {
                        minArgs: 0,
                        maxArgs: 1,
                      },
                      getAll: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                    },
                    bookmarks: {
                      create: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      get: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      getChildren: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      getRecent: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      getSubTree: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      getTree: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                      move: {
                        minArgs: 2,
                        maxArgs: 2,
                      },
                      remove: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      removeTree: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      search: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      update: {
                        minArgs: 2,
                        maxArgs: 2,
                      },
                    },
                    browserAction: {
                      disable: {
                        minArgs: 0,
                        maxArgs: 1,
                        fallbackToNoCallback: true,
                      },
                      enable: {
                        minArgs: 0,
                        maxArgs: 1,
                        fallbackToNoCallback: true,
                      },
                      getBadgeBackgroundColor: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      getBadgeText: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      getPopup: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      getTitle: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      openPopup: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                      setBadgeBackgroundColor: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: true,
                      },
                      setBadgeText: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: true,
                      },
                      setIcon: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      setPopup: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: true,
                      },
                      setTitle: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: true,
                      },
                    },
                    browsingData: {
                      remove: {
                        minArgs: 2,
                        maxArgs: 2,
                      },
                      removeCache: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      removeCookies: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      removeDownloads: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      removeFormData: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      removeHistory: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      removeLocalStorage: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      removePasswords: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      removePluginData: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      settings: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                    },
                    commands: {
                      getAll: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                    },
                    contextMenus: {
                      remove: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      removeAll: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                      update: {
                        minArgs: 2,
                        maxArgs: 2,
                      },
                    },
                    cookies: {
                      get: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      getAll: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      getAllCookieStores: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                      remove: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      set: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                    },
                    devtools: {
                      inspectedWindow: {
                        eval: {
                          minArgs: 1,
                          maxArgs: 2,
                          singleCallbackArg: false,
                        },
                      },
                      panels: {
                        create: {
                          minArgs: 3,
                          maxArgs: 3,
                          singleCallbackArg: true,
                        },
                        elements: {
                          createSidebarPane: {
                            minArgs: 1,
                            maxArgs: 1,
                          },
                        },
                      },
                    },
                    downloads: {
                      cancel: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      download: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      erase: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      getFileIcon: {
                        minArgs: 1,
                        maxArgs: 2,
                      },
                      open: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: true,
                      },
                      pause: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      removeFile: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      resume: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      search: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      show: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: true,
                      },
                    },
                    extension: {
                      isAllowedFileSchemeAccess: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                      isAllowedIncognitoAccess: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                    },
                    history: {
                      addUrl: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      deleteAll: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                      deleteRange: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      deleteUrl: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      getVisits: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      search: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                    },
                    i18n: {
                      detectLanguage: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      getAcceptLanguages: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                    },
                    identity: {
                      launchWebAuthFlow: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                    },
                    idle: {
                      queryState: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                    },
                    management: {
                      get: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      getAll: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                      getSelf: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                      setEnabled: {
                        minArgs: 2,
                        maxArgs: 2,
                      },
                      uninstallSelf: {
                        minArgs: 0,
                        maxArgs: 1,
                      },
                    },
                    notifications: {
                      clear: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      create: {
                        minArgs: 1,
                        maxArgs: 2,
                      },
                      getAll: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                      getPermissionLevel: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                      update: {
                        minArgs: 2,
                        maxArgs: 2,
                      },
                    },
                    pageAction: {
                      getPopup: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      getTitle: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      hide: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: true,
                      },
                      setIcon: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      setPopup: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: true,
                      },
                      setTitle: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: true,
                      },
                      show: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: true,
                      },
                    },
                    permissions: {
                      contains: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      getAll: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                      remove: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      request: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                    },
                    runtime: {
                      getBackgroundPage: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                      getPlatformInfo: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                      openOptionsPage: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                      requestUpdateCheck: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                      sendMessage: {
                        minArgs: 1,
                        maxArgs: 3,
                      },
                      sendNativeMessage: {
                        minArgs: 2,
                        maxArgs: 2,
                      },
                      setUninstallURL: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                    },
                    sessions: {
                      getDevices: {
                        minArgs: 0,
                        maxArgs: 1,
                      },
                      getRecentlyClosed: {
                        minArgs: 0,
                        maxArgs: 1,
                      },
                      restore: {
                        minArgs: 0,
                        maxArgs: 1,
                      },
                    },
                    storage: {
                      local: {
                        clear: {
                          minArgs: 0,
                          maxArgs: 0,
                        },
                        get: {
                          minArgs: 0,
                          maxArgs: 1,
                        },
                        getBytesInUse: {
                          minArgs: 0,
                          maxArgs: 1,
                        },
                        remove: {
                          minArgs: 1,
                          maxArgs: 1,
                        },
                        set: {
                          minArgs: 1,
                          maxArgs: 1,
                        },
                      },
                      managed: {
                        get: {
                          minArgs: 0,
                          maxArgs: 1,
                        },
                        getBytesInUse: {
                          minArgs: 0,
                          maxArgs: 1,
                        },
                      },
                      sync: {
                        clear: {
                          minArgs: 0,
                          maxArgs: 0,
                        },
                        get: {
                          minArgs: 0,
                          maxArgs: 1,
                        },
                        getBytesInUse: {
                          minArgs: 0,
                          maxArgs: 1,
                        },
                        remove: {
                          minArgs: 1,
                          maxArgs: 1,
                        },
                        set: {
                          minArgs: 1,
                          maxArgs: 1,
                        },
                      },
                    },
                    tabs: {
                      captureVisibleTab: {
                        minArgs: 0,
                        maxArgs: 2,
                      },
                      create: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      detectLanguage: {
                        minArgs: 0,
                        maxArgs: 1,
                      },
                      discard: {
                        minArgs: 0,
                        maxArgs: 1,
                      },
                      duplicate: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      executeScript: {
                        minArgs: 1,
                        maxArgs: 2,
                      },
                      get: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      getCurrent: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                      getZoom: {
                        minArgs: 0,
                        maxArgs: 1,
                      },
                      getZoomSettings: {
                        minArgs: 0,
                        maxArgs: 1,
                      },
                      goBack: {
                        minArgs: 0,
                        maxArgs: 1,
                      },
                      goForward: {
                        minArgs: 0,
                        maxArgs: 1,
                      },
                      highlight: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      insertCSS: {
                        minArgs: 1,
                        maxArgs: 2,
                      },
                      move: {
                        minArgs: 2,
                        maxArgs: 2,
                      },
                      query: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      reload: {
                        minArgs: 0,
                        maxArgs: 2,
                      },
                      remove: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      removeCSS: {
                        minArgs: 1,
                        maxArgs: 2,
                      },
                      sendMessage: {
                        minArgs: 2,
                        maxArgs: 3,
                      },
                      setZoom: {
                        minArgs: 1,
                        maxArgs: 2,
                      },
                      setZoomSettings: {
                        minArgs: 1,
                        maxArgs: 2,
                      },
                      update: {
                        minArgs: 1,
                        maxArgs: 2,
                      },
                    },
                    topSites: {
                      get: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                    },
                    webNavigation: {
                      getAllFrames: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      getFrame: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                    },
                    webRequest: {
                      handlerBehaviorChanged: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                    },
                    windows: {
                      create: {
                        minArgs: 0,
                        maxArgs: 1,
                      },
                      get: {
                        minArgs: 1,
                        maxArgs: 2,
                      },
                      getAll: {
                        minArgs: 0,
                        maxArgs: 1,
                      },
                      getCurrent: {
                        minArgs: 0,
                        maxArgs: 1,
                      },
                      getLastFocused: {
                        minArgs: 0,
                        maxArgs: 1,
                      },
                      remove: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      update: {
                        minArgs: 2,
                        maxArgs: 2,
                      },
                    },
                  };
                  if (Object.keys(j).length === 0)
                    throw new Error(
                      "api-metadata.json has not been included in browser-polyfill"
                    );
                  class F extends WeakMap {
                    constructor(O, E = void 0) {
                      super(E), (this.createItem = O);
                    }
                    get(O) {
                      if (!this.has(O)) this.set(O, this.createItem(O));
                      return super.get(O);
                    }
                  }
                  const o = (O) =>
                      O &&
                      typeof O === "object" &&
                      typeof O.then === "function",
                    S =
                      (E, j) =>
                      (...F) => {
                        if (O.runtime.lastError) E.reject(O.runtime.lastError);
                        else if (
                          j.singleCallbackArg ||
                          (F.length <= 1 && j.singleCallbackArg !== false)
                        )
                          E.resolve(F[0]);
                        else E.resolve(F);
                      },
                    c = (O) => (O == 1 ? "argument" : "arguments"),
                    Y = (O, E) =>
                      function j(F, ...o) {
                        if (o.length < E.minArgs)
                          throw new Error(
                            `Expected at least ${E.minArgs} ${c(
                              E.minArgs
                            )} for ${O}(), got ${o.length}`
                          );
                        if (o.length > E.maxArgs)
                          throw new Error(
                            `Expected at most ${E.maxArgs} ${c(
                              E.maxArgs
                            )} for ${O}(), got ${o.length}`
                          );
                        return new Promise((j, c) => {
                          if (E.fallbackToNoCallback)
                            try {
                              F[O](
                                ...o,
                                S(
                                  {
                                    resolve: j,
                                    reject: c,
                                  },
                                  E
                                )
                              );
                            } catch (S) {
                              F[O](...o),
                                (E.fallbackToNoCallback = false),
                                (E.noCallback = true),
                                j();
                            }
                          else if (E.noCallback) F[O](...o), j();
                          else
                            F[O](
                              ...o,
                              S(
                                {
                                  resolve: j,
                                  reject: c,
                                },
                                E
                              )
                            );
                        });
                      },
                    p = (O, E, j) =>
                      new Proxy(E, {
                        apply: (E, F, o) => j.call(F, O, ...o),
                      });
                  let b = Function.call.bind(Object.prototype.hasOwnProperty);
                  const M = (O, E = {}, j = {}) => {
                      let F = Object.create(null),
                        o = {
                          has: (E, j) => j in O || j in F,
                          get(o, S, c) {
                            if (S in F) return F[S];
                            if (!(S in O)) return;
                            let d = O[S];
                            if (typeof d === "function")
                              if (typeof E[S] === "function")
                                d = p(O, O[S], E[S]);
                              else if (b(j, S)) {
                                let E = Y(S, j[S]);
                                d = p(O, O[S], E);
                              } else d = d.bind(O);
                            else if (
                              typeof d === "object" &&
                              d !== null &&
                              (b(E, S) || b(j, S))
                            )
                              d = M(d, E[S], j[S]);
                            else if (b(j, "*")) d = M(d, E[S], j["*"]);
                            else
                              return (
                                Object.defineProperty(F, S, {
                                  configurable: true,
                                  enumerable: true,
                                  get: () => O[S],
                                  set(E) {
                                    O[S] = E;
                                  },
                                }),
                                d
                              );
                            return (F[S] = d), d;
                          },
                          set(E, j, o, S) {
                            if (j in F) F[j] = o;
                            else O[j] = o;
                            return true;
                          },
                          defineProperty: (O, E, j) =>
                            Reflect.defineProperty(F, E, j),
                          deleteProperty: (O, E) =>
                            Reflect.deleteProperty(F, E),
                        },
                        S = Object.create(O);
                      return new Proxy(S, o);
                    },
                    d = (O) => ({
                      addListener(E, j, ...F) {
                        E.addListener(O.get(j), ...F);
                      },
                      hasListener: (E, j) => E.hasListener(O.get(j)),
                      removeListener(E, j) {
                        E.removeListener(O.get(j));
                      },
                    });
                  let Q = false;
                  const z = new F((O) => {
                      if (typeof O !== "function") return O;
                      return function E(j, F, S) {
                        let c = false,
                          Y,
                          p = new Promise((O) => {
                            Y = function (E) {
                              if (!Q) Q = true;
                              (c = true), O(E);
                            };
                          }),
                          b;
                        try {
                          b = O(j, F, Y);
                        } catch (O) {
                          b = Promise.reject(O);
                        }
                        const M = b !== true && o(b);
                        if (b !== true && !M && !c) return false;
                        const d = (O) => {
                          O.then(
                            (O) => {
                              S(O);
                            },
                            (O) => {
                              let E;
                              if (
                                O &&
                                (O instanceof Error ||
                                  typeof O.message === "string")
                              )
                                E = O.message;
                              else E = "An unexpected error occurred";
                              S({
                                __mozWebExtensionPolyfillReject__: true,
                                message: E,
                              });
                            }
                          ).catch((O) => {});
                        };
                        if (M) d(b);
                        else d(p);
                        return true;
                      };
                    }),
                    A = ({ reject: j, resolve: F }, o) => {
                      if (O.runtime.lastError)
                        if (O.runtime.lastError.message === E) F();
                        else j(O.runtime.lastError);
                      else if (o && o.__mozWebExtensionPolyfillReject__)
                        j(new Error(o.message));
                      else F(o);
                    },
                    N = (O, E, j, ...F) => {
                      if (F.length < E.minArgs)
                        throw new Error(
                          `Expected at least ${E.minArgs} ${c(
                            E.minArgs
                          )} for ${O}(), got ${F.length}`
                        );
                      if (F.length > E.maxArgs)
                        throw new Error(
                          `Expected at most ${E.maxArgs} ${c(
                            E.maxArgs
                          )} for ${O}(), got ${F.length}`
                        );
                      return new Promise((O, E) => {
                        const o = A.bind(null, {
                          resolve: O,
                          reject: E,
                        });
                        F.push(o), j.sendMessage(...F);
                      });
                    },
                    J = {
                      runtime: {
                        onMessage: d(z),
                        onMessageExternal: d(z),
                        sendMessage: N.bind(null, "sendMessage", {
                          minArgs: 1,
                          maxArgs: 3,
                        }),
                      },
                      tabs: {
                        sendMessage: N.bind(null, "sendMessage", {
                          minArgs: 2,
                          maxArgs: 3,
                        }),
                      },
                    },
                    a = {
                      clear: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      get: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      set: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                    };
                  return (
                    (j.privacy = {
                      network: {
                        "*": a,
                      },
                      services: {
                        "*": a,
                      },
                      websites: {
                        "*": a,
                      },
                    }),
                    M(O, J, j)
                  );
                };
              if (
                typeof chrome != "object" ||
                !chrome ||
                !chrome.runtime ||
                !chrome.runtime.id
              )
                throw new Error(
                  "This script should only be loaded in a browser extension."
                );
              O.exports = F(chrome);
            } else O.exports = browser;
          }
        );
      },
      {},
    ],
    3: [
      function (O, E, j) {
        "use strict";
        var F =
          (void 0 && (void 0).__importDefault) ||
          function (O) {
            return O && O.__esModule
              ? O
              : {
                  default: O,
                };
          };
        Object.defineProperty(j, "__esModule", {
          value: true,
        });
        const o = O("webextension-polyfill-ts"),
          S = O("hh"),
          c = F(O("4u")),
          Y = new S.Connection();
        async function p() {
          Y.addStateChangeListener((O) => {
            o.browser.runtime.sendMessage({
              action: "stateChanged",
              state: O,
            });
          }),
            await Y.init();
        }
        async function b(O) {
          const E = await o.browser.tabs.get(O);
          if (
            !E ||
            !E.url ||
            E.url.startsWith("chrome") ||
            E.url.startsWith("https://chrome.google.com/webstore")
          )
            return;
          const j = await o.browser.storage.local.get(["indicator"]),
            F = await Y.getConnectionState(),
            c =
              (j === null || j === void 0 ? void 0 : j.indicator) &&
              F.status === S.ConnectionStatus.Connected;
          o.browser.tabs.sendMessage(O, {
            method: "updateIndicator",
            status: c,
          });
        }
        function M() {
          chrome.tabs.query(
            {},
            (O) => (
              O.forEach((O) => {
                if (O.id) b(O.id);
              }),
              true
            )
          );
        }
        p(),
          o.browser.runtime.onInstalled.addListener(async (O) => {
            if (O.reason === "install")
              o.browser.storage.local.set({
                indicator: true,
              });
          }),
          o.browser.runtime.onMessage.addListener(async (O) => {
            let E;
            if (O.action === "proxylist") E = await Y.getProxyList();
            else if (O.action === "getConnectionState")
              E = await Y.getConnectionState();
            else if (O.action === "connect") E = await Y.connect(O.countryCode);
            else if (O.action === "disconnect") E = await Y.disconnect();
            else if (O.action === "updateIndicators") E = M();
            else if (O.action === "getIp") E = await S.Connection.getIp();
            return E;
          }),
          chrome.tabs.onCreated.addListener((O) => {
            if (O.id) setTimeout(() => b(O.id), 500);
          }),
          chrome.tabs.onUpdated.addListener((O) => {
            setTimeout(() => b(O), 500);
          }),
          (0, c.default)("G-GRNZ3W5EH1", "0jSS93MMSaeQt4FDVMdWkQ");
      },
      {
        "4u": 4,
        hh: 23,
        "webextension-polyfill-ts": 1,
      },
    ],
    4: [
      function (O, E, j) {
        "use strict";
        Object.defineProperty(j, "__esModule", {
          value: true,
        }),
          (j.default = j.analytics = j.Analytics = void 0);
        const F = O("uuid"),
          o = "https://www.google-analytics.com/mp/collect",
          S = "https://www.google-analytics.com/debug/mp/collect",
          c = "cid",
          Y = 100,
          p = 30;
        class b {
          constructor(O, E, j = false) {
            (this.measurement_id = O), (this.api_secret = E), (this.debug = j);
          }
          async getOrCreateClientId() {
            const O = await chrome.storage.local.get(c);
            let E = O[c];
            if (!E)
              (E = (0, F.v4)()),
                await chrome.storage.local.set({
                  [c]: E,
                });
            return E;
          }
          async getOrCreateSessionId() {
            let { sessionData: O } = await chrome.storage.session.get(
              "sessionData"
            );
            const E = Date.now();
            if (O && O.timestamp) {
              const j = (E - O.timestamp) / 6e4;
              if (j > p) O = null;
              else
                (O.timestamp = E),
                  await chrome.storage.session.set({
                    sessionData: O,
                  });
            }
            if (!O)
              (O = {
                session_id: E.toString(),
                timestamp: E.toString(),
              }),
                await chrome.storage.session.set({
                  sessionData: O,
                });
            return O.session_id;
          }
          async fireEvent(O, E = {}) {
            if (!E.session_id) E.session_id = await this.getOrCreateSessionId();
            if (!E.engagement_time_msec) E.engagement_time_msec = Y;
            try {
              const j = await fetch(
                `${this.debug ? S : o}?measurement_id=${
                  this.measurement_id
                }&api_secret=${this.api_secret}`,
                {
                  method: "POST",
                  body: JSON.stringify({
                    client_id: await this.getOrCreateClientId(),
                    events: [
                      {
                        name: O,
                        params: E,
                      },
                    ],
                  }),
                }
              );
              if (!this.debug) return;
            } catch (O) {}
          }
          async firePageViewEvent(O, E, j = {}) {
            return this.fireEvent(
              "page_view",
              Object.assign(
                {
                  page_title: O,
                  page_location: E,
                },
                j
              )
            );
          }
          async fireErrorEvent(O, E = {}) {
            return this.fireEvent(
              "extension_error",
              Object.assign(Object.assign({}, O), E)
            );
          }
        }
        function M(O, E) {
          const j = new b(O, E);
          j.fireEvent("run"),
            chrome.alarms.create(O, {
              periodInMinutes: 60,
            }),
            chrome.alarms.onAlarm.addListener(() => {
              j.fireEvent("run");
            });
        }
        (j.Analytics = b), (j.analytics = M), (j.default = M);
      },
      {
        uuid: 5,
      },
    ],
    5: [
      function (O, E, j) {
        "use strict";
        Object.defineProperty(j, "__esModule", {
          value: true,
        }),
          Object.defineProperty(j, "NIL", {
            enumerable: true,
            get: function () {
              return Y.default;
            },
          }),
          Object.defineProperty(j, "parse", {
            enumerable: true,
            get: function () {
              return d.default;
            },
          }),
          Object.defineProperty(j, "stringify", {
            enumerable: true,
            get: function () {
              return M.default;
            },
          }),
          Object.defineProperty(j, "v1", {
            enumerable: true,
            get: function () {
              return F.default;
            },
          }),
          Object.defineProperty(j, "v3", {
            enumerable: true,
            get: function () {
              return o.default;
            },
          }),
          Object.defineProperty(j, "v4", {
            enumerable: true,
            get: function () {
              return S.default;
            },
          }),
          Object.defineProperty(j, "v5", {
            enumerable: true,
            get: function () {
              return c.default;
            },
          }),
          Object.defineProperty(j, "validate", {
            enumerable: true,
            get: function () {
              return b.default;
            },
          }),
          Object.defineProperty(j, "version", {
            enumerable: true,
            get: function () {
              return p.default;
            },
          });
        var F = Q(O("gT")),
          o = Q(O("pe")),
          S = Q(O("Dz")),
          c = Q(O("zv")),
          Y = Q(O("9d")),
          p = Q(O("wb")),
          b = Q(O("Db")),
          M = Q(O("jV")),
          d = Q(O("LS"));
        function Q(O) {
          return O && O.__esModule
            ? O
            : {
                default: O,
              };
        }
      },
      {
        "9d": 8,
        LS: 9,
        jV: 13,
        gT: 14,
        pe: 15,
        Dz: 17,
        zv: 18,
        Db: 19,
        wb: 20,
      },
    ],
    6: [
      function (O, E, j) {
        "use strict";
        function F(O) {
          if (typeof O === "string") {
            const E = unescape(encodeURIComponent(O));
            O = new Uint8Array(E.length);
            for (let j = 0; j < E.length; ++j) O[j] = E.charCodeAt(j);
          }
          return o(c(Y(O), O.length * 8));
        }
        function o(O) {
          const E = [],
            j = O.length * 32,
            F = "0123456789abcdef";
          for (let o = 0; o < j; o += 8) {
            const j = (O[o >> 5] >>> o % 32) & 255,
              S = parseInt(F.charAt((j >>> 4) & 15) + F.charAt(j & 15), 16);
            E.push(S);
          }
          return E;
        }
        function S(O) {
          return (((O + 64) >>> 9) << 4) + 14 + 1;
        }
        function c(O, E) {
          (O[E >> 5] |= 128 << E % 32), (O[S(E) - 1] = E);
          let j = 1732584193,
            F = -271733879,
            o = -1732584194,
            c = 271733878;
          for (let E = 0; E < O.length; E += 16) {
            const S = j,
              Y = F,
              b = o,
              M = c;
            (j = d(j, F, o, c, O[E], 7, -680876936)),
              (c = d(c, j, F, o, O[E + 1], 12, -389564586)),
              (o = d(o, c, j, F, O[E + 2], 17, 606105819)),
              (F = d(F, o, c, j, O[E + 3], 22, -1044525330)),
              (j = d(j, F, o, c, O[E + 4], 7, -176418897)),
              (c = d(c, j, F, o, O[E + 5], 12, 1200080426)),
              (o = d(o, c, j, F, O[E + 6], 17, -1473231341)),
              (F = d(F, o, c, j, O[E + 7], 22, -45705983)),
              (j = d(j, F, o, c, O[E + 8], 7, 1770035416)),
              (c = d(c, j, F, o, O[E + 9], 12, -1958414417)),
              (o = d(o, c, j, F, O[E + 10], 17, -42063)),
              (F = d(F, o, c, j, O[E + 11], 22, -1990404162)),
              (j = d(j, F, o, c, O[E + 12], 7, 1804603682)),
              (c = d(c, j, F, o, O[E + 13], 12, -40341101)),
              (o = d(o, c, j, F, O[E + 14], 17, -1502002290)),
              (F = d(F, o, c, j, O[E + 15], 22, 1236535329)),
              (j = Q(j, F, o, c, O[E + 1], 5, -165796510)),
              (c = Q(c, j, F, o, O[E + 6], 9, -1069501632)),
              (o = Q(o, c, j, F, O[E + 11], 14, 643717713)),
              (F = Q(F, o, c, j, O[E], 20, -373897302)),
              (j = Q(j, F, o, c, O[E + 5], 5, -701558691)),
              (c = Q(c, j, F, o, O[E + 10], 9, 38016083)),
              (o = Q(o, c, j, F, O[E + 15], 14, -660478335)),
              (F = Q(F, o, c, j, O[E + 4], 20, -405537848)),
              (j = Q(j, F, o, c, O[E + 9], 5, 568446438)),
              (c = Q(c, j, F, o, O[E + 14], 9, -1019803690)),
              (o = Q(o, c, j, F, O[E + 3], 14, -187363961)),
              (F = Q(F, o, c, j, O[E + 8], 20, 1163531501)),
              (j = Q(j, F, o, c, O[E + 13], 5, -1444681467)),
              (c = Q(c, j, F, o, O[E + 2], 9, -51403784)),
              (o = Q(o, c, j, F, O[E + 7], 14, 1735328473)),
              (F = Q(F, o, c, j, O[E + 12], 20, -1926607734)),
              (j = z(j, F, o, c, O[E + 5], 4, -378558)),
              (c = z(c, j, F, o, O[E + 8], 11, -2022574463)),
              (o = z(o, c, j, F, O[E + 11], 16, 1839030562)),
              (F = z(F, o, c, j, O[E + 14], 23, -35309556)),
              (j = z(j, F, o, c, O[E + 1], 4, -1530992060)),
              (c = z(c, j, F, o, O[E + 4], 11, 1272893353)),
              (o = z(o, c, j, F, O[E + 7], 16, -155497632)),
              (F = z(F, o, c, j, O[E + 10], 23, -1094730640)),
              (j = z(j, F, o, c, O[E + 13], 4, 681279174)),
              (c = z(c, j, F, o, O[E], 11, -358537222)),
              (o = z(o, c, j, F, O[E + 3], 16, -722521979)),
              (F = z(F, o, c, j, O[E + 6], 23, 76029189)),
              (j = z(j, F, o, c, O[E + 9], 4, -640364487)),
              (c = z(c, j, F, o, O[E + 12], 11, -421815835)),
              (o = z(o, c, j, F, O[E + 15], 16, 530742520)),
              (F = z(F, o, c, j, O[E + 2], 23, -995338651)),
              (j = A(j, F, o, c, O[E], 6, -198630844)),
              (c = A(c, j, F, o, O[E + 7], 10, 1126891415)),
              (o = A(o, c, j, F, O[E + 14], 15, -1416354905)),
              (F = A(F, o, c, j, O[E + 5], 21, -57434055)),
              (j = A(j, F, o, c, O[E + 12], 6, 1700485571)),
              (c = A(c, j, F, o, O[E + 3], 10, -1894986606)),
              (o = A(o, c, j, F, O[E + 10], 15, -1051523)),
              (F = A(F, o, c, j, O[E + 1], 21, -2054922799)),
              (j = A(j, F, o, c, O[E + 8], 6, 1873313359)),
              (c = A(c, j, F, o, O[E + 15], 10, -30611744)),
              (o = A(o, c, j, F, O[E + 6], 15, -1560198380)),
              (F = A(F, o, c, j, O[E + 13], 21, 1309151649)),
              (j = A(j, F, o, c, O[E + 4], 6, -145523070)),
              (c = A(c, j, F, o, O[E + 11], 10, -1120210379)),
              (o = A(o, c, j, F, O[E + 2], 15, 718787259)),
              (F = A(F, o, c, j, O[E + 9], 21, -343485551)),
              (j = p(j, S)),
              (F = p(F, Y)),
              (o = p(o, b)),
              (c = p(c, M));
          }
          return [j, F, o, c];
        }
        function Y(O) {
          if (O.length === 0) return [];
          const E = O.length * 8,
            j = new Uint32Array(S(E));
          for (let F = 0; F < E; F += 8)
            j[F >> 5] |= (O[F / 8] & 255) << F % 32;
          return j;
        }
        function p(O, E) {
          const j = (O & 65535) + (E & 65535),
            F = (O >> 16) + (E >> 16) + (j >> 16);
          return (F << 16) | (j & 65535);
        }
        function b(O, E) {
          return (O << E) | (O >>> (32 - E));
        }
        function M(O, E, j, F, o, S) {
          return p(b(p(p(E, O), p(F, S)), o), j);
        }
        function d(O, E, j, F, o, S, c) {
          return M((E & j) | (~E & F), O, E, o, S, c);
        }
        function Q(O, E, j, F, o, S, c) {
          return M((E & F) | (j & ~F), O, E, o, S, c);
        }
        function z(O, E, j, F, o, S, c) {
          return M(E ^ j ^ F, O, E, o, S, c);
        }
        function A(O, E, j, F, o, S, c) {
          return M(j ^ (E | ~F), O, E, o, S, c);
        }
        Object.defineProperty(j, "__esModule", {
          value: true,
        }),
          (j.default = void 0);
        var N = F;
        j.default = N;
      },
      {},
    ],
    7: [
      function (O, E, j) {
        "use strict";
        Object.defineProperty(j, "__esModule", {
          value: true,
        }),
          (j.default = void 0);
        const F =
          typeof crypto !== "undefined" &&
          crypto.randomUUID &&
          crypto.randomUUID.bind(crypto);
        var o = {
          randomUUID: F,
        };
        j.default = o;
      },
      {},
    ],
    8: [
      function (O, E, j) {
        "use strict";
        Object.defineProperty(j, "__esModule", {
          value: true,
        }),
          (j.default = void 0);
        var F = "00000000-0000-0000-0000-000000000000";
        j.default = F;
      },
      {},
    ],
    9: [
      function (O, E, j) {
        "use strict";
        Object.defineProperty(j, "__esModule", {
          value: true,
        }),
          (j.default = void 0);
        var F = o(O("Db"));
        function o(O) {
          return O && O.__esModule
            ? O
            : {
                default: O,
              };
        }
        function S(O) {
          if (!(0, F.default)(O)) throw TypeError("Invalid UUID");
          let E;
          const j = new Uint8Array(16);
          return (
            (j[0] = (E = parseInt(O.slice(0, 8), 16)) >>> 24),
            (j[1] = (E >>> 16) & 255),
            (j[2] = (E >>> 8) & 255),
            (j[3] = E & 255),
            (j[4] = (E = parseInt(O.slice(9, 13), 16)) >>> 8),
            (j[5] = E & 255),
            (j[6] = (E = parseInt(O.slice(14, 18), 16)) >>> 8),
            (j[7] = E & 255),
            (j[8] = (E = parseInt(O.slice(19, 23), 16)) >>> 8),
            (j[9] = E & 255),
            (j[10] =
              ((E = parseInt(O.slice(24, 36), 16)) / 1099511627776) & 255),
            (j[11] = (E / 4294967296) & 255),
            (j[12] = (E >>> 24) & 255),
            (j[13] = (E >>> 16) & 255),
            (j[14] = (E >>> 8) & 255),
            (j[15] = E & 255),
            j
          );
        }
        var c = S;
        j.default = c;
      },
      {
        Db: 19,
      },
    ],
    10: [
      function (O, E, j) {
        "use strict";
        Object.defineProperty(j, "__esModule", {
          value: true,
        }),
          (j.default = void 0);
        var F =
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        j.default = F;
      },
      {},
    ],
    11: [
      function (O, E, j) {
        "use strict";
        let F;
        Object.defineProperty(j, "__esModule", {
          value: true,
        }),
          (j.default = S);
        const o = new Uint8Array(16);
        function S() {
          if (!F)
            if (
              ((F =
                typeof crypto !== "undefined" &&
                crypto.getRandomValues &&
                crypto.getRandomValues.bind(crypto)),
              !F)
            )
              throw new Error(
                "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
              );
          return F(o);
        }
      },
      {},
    ],
    12: [
      function (O, E, j) {
        "use strict";
        function F(O, E, j, F) {
          switch (O) {
            case 0:
              return (E & j) ^ (~E & F);

            case 1:
              return E ^ j ^ F;

            case 2:
              return (E & j) ^ (E & F) ^ (j & F);

            case 3:
              return E ^ j ^ F;
          }
        }
        function o(O, E) {
          return (O << E) | (O >>> (32 - E));
        }
        function S(O) {
          const E = [1518500249, 1859775393, 2400959708, 3395469782],
            j = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
          if (typeof O === "string") {
            const E = unescape(encodeURIComponent(O));
            O = [];
            for (let j = 0; j < E.length; ++j) O.push(E.charCodeAt(j));
          } else if (!Array.isArray(O)) O = Array.prototype.slice.call(O);
          O.push(128);
          const S = O.length / 4 + 2,
            c = Math.ceil(S / 16),
            Y = new Array(c);
          for (let E = 0; E < c; ++E) {
            const j = new Uint32Array(16);
            for (let F = 0; F < 16; ++F)
              j[F] =
                (O[E * 64 + F * 4] << 24) |
                (O[E * 64 + F * 4 + 1] << 16) |
                (O[E * 64 + F * 4 + 2] << 8) |
                O[E * 64 + F * 4 + 3];
            Y[E] = j;
          }
          (Y[c - 1][14] = ((O.length - 1) * 8) / Math.pow(2, 32)),
            (Y[c - 1][14] = Math.floor(Y[c - 1][14])),
            (Y[c - 1][15] = ((O.length - 1) * 8) & 4294967295);
          for (let O = 0; O < c; ++O) {
            const S = new Uint32Array(80);
            for (let E = 0; E < 16; ++E) S[E] = Y[O][E];
            for (let O = 16; O < 80; ++O)
              S[O] = o(S[O - 3] ^ S[O - 8] ^ S[O - 14] ^ S[O - 16], 1);
            let c = j[0],
              p = j[1],
              b = j[2],
              M = j[3],
              d = j[4];
            for (let O = 0; O < 80; ++O) {
              const j = Math.floor(O / 20),
                Y = (o(c, 5) + F(j, p, b, M) + d + E[j] + S[O]) >>> 0;
              (d = M), (M = b), (b = o(p, 30) >>> 0), (p = c), (c = Y);
            }
            (j[0] = (j[0] + c) >>> 0),
              (j[1] = (j[1] + p) >>> 0),
              (j[2] = (j[2] + b) >>> 0),
              (j[3] = (j[3] + M) >>> 0),
              (j[4] = (j[4] + d) >>> 0);
          }
          return [
            (j[0] >> 24) & 255,
            (j[0] >> 16) & 255,
            (j[0] >> 8) & 255,
            j[0] & 255,
            (j[1] >> 24) & 255,
            (j[1] >> 16) & 255,
            (j[1] >> 8) & 255,
            j[1] & 255,
            (j[2] >> 24) & 255,
            (j[2] >> 16) & 255,
            (j[2] >> 8) & 255,
            j[2] & 255,
            (j[3] >> 24) & 255,
            (j[3] >> 16) & 255,
            (j[3] >> 8) & 255,
            j[3] & 255,
            (j[4] >> 24) & 255,
            (j[4] >> 16) & 255,
            (j[4] >> 8) & 255,
            j[4] & 255,
          ];
        }
        Object.defineProperty(j, "__esModule", {
          value: true,
        }),
          (j.default = void 0);
        var c = S;
        j.default = c;
      },
      {},
    ],
    13: [
      function (O, E, j) {
        "use strict";
        Object.defineProperty(j, "__esModule", {
          value: true,
        }),
          (j.default = void 0),
          (j.unsafeStringify = c);
        var F = o(O("Db"));
        function o(O) {
          return O && O.__esModule
            ? O
            : {
                default: O,
              };
        }
        const S = [];
        for (let O = 0; O < 256; ++O) S.push((O + 256).toString(16).slice(1));
        function c(O, E = 0) {
          return (
            S[O[E + 0]] +
            S[O[E + 1]] +
            S[O[E + 2]] +
            S[O[E + 3]] +
            "-" +
            S[O[E + 4]] +
            S[O[E + 5]] +
            "-" +
            S[O[E + 6]] +
            S[O[E + 7]] +
            "-" +
            S[O[E + 8]] +
            S[O[E + 9]] +
            "-" +
            S[O[E + 10]] +
            S[O[E + 11]] +
            S[O[E + 12]] +
            S[O[E + 13]] +
            S[O[E + 14]] +
            S[O[E + 15]]
          ).toLowerCase();
        }
        function Y(O, E = 0) {
          const j = c(O, E);
          if (!(0, F.default)(j))
            throw TypeError("Stringified UUID is invalid");
          return j;
        }
        var p = Y;
        j.default = p;
      },
      {
        Db: 19,
      },
    ],
    14: [
      function (O, E, j) {
        "use strict";
        Object.defineProperty(j, "__esModule", {
          value: true,
        }),
          (j.default = void 0);
        var F = S(O("HE")),
          o = O("jV");
        function S(O) {
          return O && O.__esModule
            ? O
            : {
                default: O,
              };
        }
        let c,
          Y,
          p = 0,
          b = 0;
        function M(O, E, j) {
          let S = (E && j) || 0;
          const M = E || new Array(16);
          O = O || {};
          let d = O.node || c,
            Q = O.clockseq !== void 0 ? O.clockseq : Y;
          if (d == null || Q == null) {
            const E = O.random || (O.rng || F.default)();
            if (d == null) d = c = [E[0] | 1, E[1], E[2], E[3], E[4], E[5]];
            if (Q == null) Q = Y = ((E[6] << 8) | E[7]) & 16383;
          }
          let z = O.msecs !== void 0 ? O.msecs : Date.now(),
            A = O.nsecs !== void 0 ? O.nsecs : b + 1;
          const N = z - p + (A - b) / 1e4;
          if (N < 0 && O.clockseq === void 0) Q = (Q + 1) & 16383;
          if ((N < 0 || z > p) && O.nsecs === void 0) A = 0;
          if (A >= 1e4)
            throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
          (p = z), (b = A), (Y = Q), (z += 122192928e5);
          const J = ((z & 268435455) * 1e4 + A) % 4294967296;
          (M[S++] = (J >>> 24) & 255),
            (M[S++] = (J >>> 16) & 255),
            (M[S++] = (J >>> 8) & 255),
            (M[S++] = J & 255);
          const a = ((z / 4294967296) * 1e4) & 268435455;
          (M[S++] = (a >>> 8) & 255),
            (M[S++] = a & 255),
            (M[S++] = ((a >>> 24) & 15) | 16),
            (M[S++] = (a >>> 16) & 255),
            (M[S++] = (Q >>> 8) | 128),
            (M[S++] = Q & 255);
          for (let O = 0; O < 6; ++O) M[S + O] = d[O];
          return E || (0, o.unsafeStringify)(M);
        }
        var d = M;
        j.default = d;
      },
      {
        HE: 11,
        jV: 13,
      },
    ],
    15: [
      function (O, E, j) {
        "use strict";
        Object.defineProperty(j, "__esModule", {
          value: true,
        }),
          (j.default = void 0);
        var F = S(O("N4")),
          o = S(O("Hs"));
        function S(O) {
          return O && O.__esModule
            ? O
            : {
                default: O,
              };
        }
        const c = (0, F.default)("v3", 48, o.default);
        var Y = c;
        j.default = Y;
      },
      {
        Hs: 6,
        N4: 16,
      },
    ],
    16: [
      function (O, E, j) {
        "use strict";
        Object.defineProperty(j, "__esModule", {
          value: true,
        }),
          (j.URL = j.DNS = void 0),
          (j.default = b);
        var F = O("jV"),
          o = S(O("LS"));
        function S(O) {
          return O && O.__esModule
            ? O
            : {
                default: O,
              };
        }
        function c(O) {
          O = unescape(encodeURIComponent(O));
          const E = [];
          for (let j = 0; j < O.length; ++j) E.push(O.charCodeAt(j));
          return E;
        }
        const Y = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
        j.DNS = Y;
        const p = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
        function b(O, E, j) {
          function S(O, S, Y, p) {
            var b;
            if (typeof O === "string") O = c(O);
            if (typeof S === "string") S = (0, o.default)(S);
            if (((b = S) === null || b === void 0 ? void 0 : b.length) !== 16)
              throw TypeError(
                "Namespace must be array-like (16 iterable integer values, 0-255)"
              );
            let M = new Uint8Array(16 + O.length);
            if (
              (M.set(S),
              M.set(O, S.length),
              (M = j(M)),
              (M[6] = (M[6] & 15) | E),
              (M[8] = (M[8] & 63) | 128),
              Y)
            ) {
              p = p || 0;
              for (let O = 0; O < 16; ++O) Y[p + O] = M[O];
              return Y;
            }
            return (0, F.unsafeStringify)(M);
          }
          try {
            S.name = O;
          } catch (O) {}
          return (S.DNS = Y), (S.URL = p), S;
        }
        j.URL = p;
      },
      {
        LS: 9,
        jV: 13,
      },
    ],
    17: [
      function (O, E, j) {
        "use strict";
        Object.defineProperty(j, "__esModule", {
          value: true,
        }),
          (j.default = void 0);
        var F = c(O("r8")),
          o = c(O("HE")),
          S = O("jV");
        function c(O) {
          return O && O.__esModule
            ? O
            : {
                default: O,
              };
        }
        function Y(O, E, j) {
          if (F.default.randomUUID && !E && !O) return F.default.randomUUID();
          O = O || {};
          const c = O.random || (O.rng || o.default)();
          if (((c[6] = (c[6] & 15) | 64), (c[8] = (c[8] & 63) | 128), E)) {
            j = j || 0;
            for (let O = 0; O < 16; ++O) E[j + O] = c[O];
            return E;
          }
          return (0, S.unsafeStringify)(c);
        }
        var p = Y;
        j.default = p;
      },
      {
        r8: 7,
        HE: 11,
        jV: 13,
      },
    ],
    18: [
      function (O, E, j) {
        "use strict";
        Object.defineProperty(j, "__esModule", {
          value: true,
        }),
          (j.default = void 0);
        var F = S(O("N4")),
          o = S(O("rk"));
        function S(O) {
          return O && O.__esModule
            ? O
            : {
                default: O,
              };
        }
        const c = (0, F.default)("v5", 80, o.default);
        var Y = c;
        j.default = Y;
      },
      {
        rk: 12,
        N4: 16,
      },
    ],
    19: [
      function (O, E, j) {
        "use strict";
        Object.defineProperty(j, "__esModule", {
          value: true,
        }),
          (j.default = void 0);
        var F = o(O("ke"));
        function o(O) {
          return O && O.__esModule
            ? O
            : {
                default: O,
              };
        }
        function S(O) {
          return typeof O === "string" && F.default.test(O);
        }
        var c = S;
        j.default = c;
      },
      {
        ke: 10,
      },
    ],
    20: [
      function (O, E, j) {
        "use strict";
        Object.defineProperty(j, "__esModule", {
          value: true,
        }),
          (j.default = void 0);
        var F = o(O("Db"));
        function o(O) {
          return O && O.__esModule
            ? O
            : {
                default: O,
              };
        }
        function S(O) {
          if (!(0, F.default)(O)) throw TypeError("Invalid UUID");
          return parseInt(O.slice(14, 15), 16);
        }
        var c = S;
        j.default = c;
      },
      {
        Db: 19,
      },
    ],
    21: [
      function (O, E, j) {
        arguments[4][1][0].apply(j, arguments);
      },
      {
        dup: 1,
        "webextension-polyfill": 22,
      },
    ],
    22: [
      function (O, E, j) {
        arguments[4][2][0].apply(j, arguments);
      },
      {
        dup: 2,
      },
    ],
    23: [
      function (O, E, j) {
        "use strict";
        Object.defineProperty(j, "__esModule", {
          value: true,
        }),
          (j.ConnectionStatus = j.Connection = void 0);
        const F = O("webextension-polyfill-ts"),
          o = 3e3;
        var S;
        (function (O) {
          (O[(O["NotConnected"] = 0)] = "NotConnected"),
            (O[(O["Connecting"] = 1)] = "Connecting"),
            (O[(O["Cancelling"] = 2)] = "Cancelling"),
            (O[(O["Connected"] = 3)] = "Connected"),
            (O[(O["Unknown"] = 4)] = "Unknown");
        })(S || (S = {})),
          (j.ConnectionStatus = S);
        class c {
          constructor() {
            (this.state = {
              status: S.Unknown,
            }),
              (this.proxyList = []),
              (this.listeners = []);
          }
          static async getCurrentConnectionState(O) {
            const E = await new Promise((O) =>
                chrome.proxy.settings.get({}, O)
              ),
              j = E.value;
            if (j.mode === "system")
              return {
                status: S.NotConnected,
              };
            if (j.mode === "fixed_servers") {
              const E = `${j.rules.singleProxy.host}:${j.rules.singleProxy.port}`,
                F = O.find((O) => O.host === E);
              if (!F)
                return {
                  status: S.Unknown,
                };
              return {
                status: S.Connected,
                proxy: F,
              };
            }
            return {
              status: S.Unknown,
            };
          }
          static async getProxyList() {
            let O = [];
            const E = await fetch("https://api.nucleusvpn.com/api/proxy");
            if (E.ok) {
              O = (await E.json()).proxy_list;
              for (let E = 0; E < O.length; E += 1)
                O[E].country = O[E].country.toLowerCase();
            }
            return O;
          }
          static async checkProxy(O) {
            let E = false;
            const j = {
              mode: "pac_script",
              pacScript: {
                data: `function FindProxyForURL(url, host) {\n          if (dnsDomainIs(host,'ifconfig.me'))\n            return 'PROXY ${O}';\n          return 'DIRECT';\n        }`,
              },
            };
            await F.browser.proxy.settings.set({
              value: j,
              scope: "regular",
            });
            const S = new AbortController();
            setTimeout(() => S.abort(), o);
            try {
              const O = await fetch("https://ifconfig.me/ip", {
                signal: S.signal,
              });
              E = O.ok;
            } catch (O) {}
            if (!E);
            return await F.browser.proxy.settings.clear({}), E;
          }
          static async setProxy(O) {
            const [E, j] = O.split(":"),
              o = {
                mode: "fixed_servers",
                rules: {
                  singleProxy: {
                    host: E,
                    port: Number(j),
                  },
                  bypassList: ["*api.nucleusvpn.com*"],
                },
              };
            await F.browser.proxy.settings.set({
              value: o,
              scope: "regular",
            });
          }
          static async getIp() {
            let O = null;
            const E = new AbortController();
            setTimeout(() => E.abort(), o);
            try {
              const j = await fetch("https://ifconfig.me/ip", {
                signal: E.signal,
              });
              O = await j.text();
            } catch (O) {}
            return O;
          }
          addStateChangeListener(O) {
            this.listeners.push(O);
          }
          async getProxyList() {
            return (this.proxyList = await c.getProxyList()), this.proxyList;
          }
          getConnectionState() {
            if (this.state.status === S.Unknown)
              return {
                status: S.NotConnected,
                proxy: this.state.proxy,
              };
            return this.state;
          }
          setState(O) {
            if (this.state.status !== O.status)
              for (const E of this.listeners) E(O);
            this.state = O;
          }
          async connect(O) {
            if (this.state.status === S.Connecting)
              return void this.setState({
                status: S.Cancelling,
              });
            if (this.state.status === S.Connected)
              return void (await this.disconnect());
            this.proxyList = await c.getProxyList();
            const E = this.proxyList.filter((E) => E.country === O);
            if (E.length === 0) return;
            E.sort(
              (O, E) => O.quality - E.quality || (Math.random() > 0.5 ? 1 : -1)
            ),
              this.setState({
                status: S.Connecting,
              });
            for (const O of E)
              for (let E = 0; E < 2; E++) {
                const E = await c.checkProxy(O.host);
                if (this.state.status === S.Cancelling) break;
                if (E)
                  return (
                    await c.setProxy(O.host),
                    void this.setState({
                      status: S.Connected,
                      proxy: O,
                    })
                  );
              }
            this.setState({
              status: S.NotConnected,
            });
          }
          async disconnect() {
            if (this.state.status === S.Connecting)
              this.setState({
                status: S.Cancelling,
              }),
                await new Promise((O) => setTimeout(O, o + 1e3));
            await F.browser.proxy.settings.clear({}),
              this.setState({
                status: S.NotConnected,
              });
          }
          async init() {
            (this.proxyList = await c.getProxyList()),
              (this.state = await c.getCurrentConnectionState(this.proxyList));
          }
        }
        j.Connection = c;
      },
      {
        "webextension-polyfill-ts": 21,
      },
    ],
  },
  {},
  [3]
);
