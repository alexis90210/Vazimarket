"use strict";
function _typeof(t) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(t);
}
function _classCallCheck(t, s) {
  if (!(t instanceof s))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(t, s) {
  for (var i = 0; i < s.length; i++) {
    var e = s[i];
    (e.enumerable = e.enumerable || !1),
      (e.configurable = !0),
      "value" in e && (e.writable = !0),
      Object.defineProperty(t, e.key, e);
  }
}
function _createClass(t, s, i) {
  return (
    s && _defineProperties(t.prototype, s), i && _defineProperties(t, i), t
  );
}
/*!
 * jQuery SmartTab v3.0.0
 * The flexible jQuery tab control plugin
 * http://www.techlaboratory.net/jquery-smarttab
 *
 * Created by Dipu Raj
 * http://dipu.me
 *
 * @license Licensed under the terms of the MIT License
 * https://github.com/techlab/jquery-smarttab/blob/master/LICENSE
 */ !(function (_, e, t) {
  var n = {
      selected: 0,
      theme: "default",
      orientation: "vertical",
      justified: !0,
      autoAdjustHeight: !0,
      backButtonSupport: !0,
      enableURLhash: !0,
      transition: { animation: "none", speed: "400", easing: "" },
      autoProgress: { enabled: !1, interval: 3500, stopOnFocus: !0 },
      keyboardSettings: { keyNavigation: !0, keyLeft: [37], keyRight: [39] },
    },
    i = (function () {
      function i(t, s) {
        _classCallCheck(this, i),
          (this.options = _.extend(!0, {}, n, s)),
          (this.main = _(t)),
          (this.nav = this._getFirstDescendant(".nav")),
          (this.tabs = this.nav.find(".nav-link")),
          (this.container = this._getFirstDescendant(".tab-content")),
          (this.pages = this.container.children(".tab-pane")),
          (this.current_index = null),
          (this.autoProgressId = null),
          this.pages.hide(),
          this.tabs.removeClass("active"),
          this.init();
      }
      return (
        _createClass(i, [
          {
            key: "init",
            value: function () {
              this._setElements(), this._setEvents();
              var t = this._getTabIndex();
              this._showTab(t);
            },
          },
          {
            key: "_getFirstDescendant",
            value: function (e) {
              var n = this.main.children(e);
              return 0 < n.length
                ? n
                : (this.main.children().each(function (t, s) {
                    var i = _(s).children(e);
                    if (0 < i.length) return (n = i), !1;
                  }),
                  0 < n.length
                    ? n
                    : (this._showError("Element not found " + e), !1));
            },
          },
          {
            key: "_setElements",
            value: function () {
              this.main.addClass("st"),
                !0 === this.options.justified
                  ? this.main.addClass("st-justified")
                  : this.main.removeClass("st-justified"),
                this._setTheme(this.options.theme),
                this._setOrientation(this.options.orientation);
            },
          },
          {
            key: "_setEvents",
            value: function () {
              var i = this;
              if (this.main.data("click-init")) return !0;
              this.main.data("click-init", !0),
                _(this.tabs).on("click", function (t) {
                  t.preventDefault(), i._showTab(i.tabs.index(t.currentTarget));
                }),
                this.options.keyboardSettings.keyNavigation &&
                  _(t).keyup(function (t) {
                    i._keyNav(t);
                  }),
                this.options.backButtonSupport &&
                  _(e).on("hashchange", function (t) {
                    var s = i._getURLHashIndex();
                    !1 !== s && (t.preventDefault(), i._showTab(s));
                  }),
                this.options.autoProgress.enabled &&
                  this.options.autoProgress.stopOnFocus &&
                  (_(this.main).on("mouseover", function (t) {
                    t.preventDefault(), i._stopAutoProgress();
                  }),
                  _(this.main).on("mouseleave", function (t) {
                    t.preventDefault(), i._startAutoProgress();
                  }));
            },
          },
          {
            key: "_showNext",
            value: function () {
              for (
                var t = 0, s = this.current_index + 1;
                s < this.tabs.length;
                s++
              )
                if (this._isShowable(s)) {
                  t = s;
                  break;
                }
              this._showTab(t);
            },
          },
          {
            key: "_showPrevious",
            value: function () {
              for (
                var t = this.tabs.length - 1, s = this.current_index - 1;
                0 <= s;
                s--
              )
                if (this._isShowable(s)) {
                  t = s;
                  break;
                }
              this._showTab(t);
            },
          },
          {
            key: "_isShowable",
            value: function (t) {
              return (
                !this.tabs.eq(t).hasClass("disabled") &&
                !this.tabs.eq(t).hasClass("hidden")
              );
            },
          },
          {
            key: "_showTab",
            value: function (t) {
              return (
                t != this.current_index &&
                !!this.tabs.eq(t) &&
                !!this._isShowable(t) &&
                void this._loadTab(t)
              );
            },
          },
          {
            key: "_loadTab",
            value: function (s) {
              var i = this,
                t = this._getAnchor(this.current_index);
              if (
                null !== this.current_index &&
                !1 === this._triggerEvent("leaveTab", [t, this.current_index])
              )
                return !1;
              var e = this._getAnchor(s),
                n = this._triggerEvent("tabContent", [e, s]);
              n
                ? "object" == _typeof(n)
                  ? n
                      .then(function (t) {
                        i._setTabContent(s, t), i._transitTab(s);
                      })
                      .catch(function (t) {
                        console.error(t),
                          i._setTabContent(s, t),
                          i._transitTab(s);
                      })
                  : ("string" == typeof n && this._setTabContent(s, n),
                    this._transitTab(s))
                : this._transitTab(s);
            },
          },
          {
            key: "_getAnchor",
            value: function (t) {
              return null == t ? null : this.tabs.eq(t);
            },
          },
          {
            key: "_getPage",
            value: function (t) {
              if (null == t) return null;
              var s = this._getAnchor(t);
              return 0 < s.length ? this.main.find(s.attr("href")) : null;
            },
          },
          {
            key: "_setTabContent",
            value: function (t, s) {
              var i = this._getPage(t);
              i && i.html(s);
            },
          },
          {
            key: "_transitTab",
            value: function (t) {
              var s = this,
                i = this._getAnchor(t);
              this._setURLHash(i.attr("href")),
                this._setAnchor(t),
                this._doTabAnimation(t, function () {
                  s._fixHeight(t),
                    s._triggerEvent("showTab", [i, s.current_index]),
                    s._restartAutoProgress();
                }),
                (this.current_index = t);
            },
          },
          {
            key: "_doTabAnimation",
            value: function (t, s) {
              var i = this,
                e = this._getPage(this.current_index),
                n = this._getPage(t),
                o = this.options.transition.animation.toLowerCase();
              switch ((this._stopAnimations(), o)) {
                case "slide-horizontal":
                case "slide-h":
                  var a,
                    r,
                    h = this.container.width(),
                    u = h,
                    l = -2 * h;
                  t > this.current_index && ((u = -1 * h), (l = h)),
                    null == this.current_index &&
                      this.container.height(n.outerHeight()),
                    e &&
                      ((a = e.css("position")),
                      (r = e.css("left")),
                      e
                        .css("position", "absolute")
                        .css("left", 0)
                        .animate(
                          { left: u },
                          this.options.transition.speed,
                          this.options.transition.easing,
                          function () {
                            _(this).hide(), e.css("position", a).css("left", r);
                          }
                        )),
                    (a = n.css("position")),
                    (r = n.css("left")),
                    n
                      .css("position", "absolute")
                      .css("left", l)
                      .outerWidth(h)
                      .show()
                      .animate(
                        { left: 0 },
                        this.options.transition.speed,
                        this.options.transition.easing,
                        function () {
                          n.css("position", a).css("left", r), s();
                        }
                      );
                  break;
                case "slide-vertical":
                case "slide-v":
                  var c,
                    f,
                    d = this.container.height(),
                    p = d,
                    g = -2 * d;
                  t > this.current_index && ((p = -1 * d), (g = d)),
                    e &&
                      ((c = e.css("position")),
                      (f = e.css("top")),
                      e
                        .css("position", "absolute")
                        .css("top", 0)
                        .animate(
                          { top: p },
                          this.options.transition.speed,
                          this.options.transition.easing,
                          function () {
                            _(this).hide(), e.css("position", c).css("top", f);
                          }
                        )),
                    (c = n.css("position")),
                    (f = n.css("top")),
                    n
                      .css("position", "absolute")
                      .css("top", g)
                      .show()
                      .animate(
                        { top: 0 },
                        this.options.transition.speed,
                        this.options.transition.easing,
                        function () {
                          n.css("position", c).css("top", f), s();
                        }
                      );
                  break;
                case "slide-swing":
                case "slide-s":
                  e
                    ? e.slideUp(
                        "fast",
                        this.options.transition.easing,
                        function () {
                          n.slideDown(
                            i.options.transition.speed,
                            i.options.transition.easing,
                            function () {
                              s();
                            }
                          );
                        }
                      )
                    : n.slideDown(
                        this.options.transition.speed,
                        this.options.transition.easing,
                        function () {
                          s();
                        }
                      );
                  break;
                case "fade":
                  e
                    ? e.fadeOut(
                        "fast",
                        this.options.transition.easing,
                        function () {
                          n.fadeIn(
                            "fast",
                            i.options.transition.easing,
                            function () {
                              s();
                            }
                          );
                        }
                      )
                    : n.fadeIn(
                        this.options.transition.speed,
                        this.options.transition.easing,
                        function () {
                          s();
                        }
                      );
                  break;
                default:
                  e && e.hide(), n.show(), s();
              }
            },
          },
          {
            key: "_stopAnimations",
            value: function () {
              this.pages.finish(), this.container.finish();
            },
          },
          {
            key: "_setAnchor",
            value: function (t) {
              this.tabs.eq(this.current_index).removeClass("active"),
                this.tabs.eq(t).addClass("active");
            },
          },
          {
            key: "_getTabIndex",
            value: function () {
              var t = this._getURLHashIndex();
              return !1 === t ? this.options.selected : t;
            },
          },
          {
            key: "_fixHeight",
            value: function (t) {
              if (this.options.autoAdjustHeight) {
                var s = this._getPage(t);
                this.container
                  .finish()
                  .animate(
                    { height: s.outerHeight() },
                    this.options.transition.speed
                  );
              }
            },
          },
          {
            key: "_setTheme",
            value: function (t) {
              this.main
                .removeClass(function (t, s) {
                  return (s.match(/(^|\s)st-theme-\S+/g) || []).join(" ");
                })
                .addClass("st-theme-" + t);
            },
          },
          {
            key: "_setOrientation",
            value: function (t) {
              this.main
                .removeClass("st-vertical st-horizontal")
                .addClass("st-" + t);
            },
          },
          {
            key: "_keyNav",
            value: function (t) {
              if (
                -1 < _.inArray(t.which, this.options.keyboardSettings.keyLeft)
              )
                this._showPrevious(), t.preventDefault();
              else {
                if (
                  !(
                    -1 <
                    _.inArray(t.which, this.options.keyboardSettings.keyRight)
                  )
                )
                  return;
                this._showNext(), t.preventDefault();
              }
            },
          },
          {
            key: "_startAutoProgress",
            value: function () {
              var t = this;
              this.options.autoProgress.enabled &&
                !this.autoProgressId &&
                (this.autoProgressId = setInterval(function () {
                  return t._showNext();
                }, this.options.autoProgress.interval));
            },
          },
          {
            key: "_stopAutoProgress",
            value: function () {
              this.autoProgressId &&
                (clearInterval(this.autoProgressId),
                (this.autoProgressId = null));
            },
          },
          {
            key: "_restartAutoProgress",
            value: function () {
              this._stopAutoProgress(), this._startAutoProgress();
            },
          },
          {
            key: "_triggerEvent",
            value: function (t, s) {
              var i = _.Event(t);
              return (
                this.main.trigger(i, s), !i.isDefaultPrevented() && i.result
              );
            },
          },
          {
            key: "_setURLHash",
            value: function (t) {
              this.options.enableURLhash &&
                e.location.hash !== t &&
                history.pushState(null, null, t);
            },
          },
          {
            key: "_getURLHashIndex",
            value: function () {
              if (this.options.enableURLhash) {
                var t = e.location.hash;
                if (0 < t.length) {
                  var s = this.nav.find("a[href*='" + t + "']");
                  if (0 < s.length) return this.tabs.index(s);
                }
              }
              return !1;
            },
          },
          {
            key: "_loader",
            value: function (t) {
              switch (t) {
                case "show":
                  this.main.addClass("st-loading");
                  break;
                case "hide":
                  this.main.removeClass("st-loading");
                  break;
                default:
                  this.main.toggleClass("st-loading");
              }
            },
          },
          {
            key: "_showError",
            value: function (t) {
              console.error(t);
            },
          },
          {
            key: "goToTab",
            value: function (t) {
              this._showTab(t);
            },
          },
          {
            key: "setOptions",
            value: function (t) {
              (this.options = _.extend(!0, {}, this.options, t)), this.init();
            },
          },
          {
            key: "loader",
            value: function (t) {
              "show" === t
                ? this.main.addClass("st-loading")
                : this.main.removeClass("st-loading");
            },
          },
        ]),
        i
      );
    })();
  _.fn.smartTab = function (t) {
    if (void 0 === t || "object" === _typeof(t))
      return this.each(function () {
        _.data(this, "smartTab") || _.data(this, "smartTab", new i(this, t));
      });
    if ("string" == typeof t && "_" !== t[0] && "init" !== t) {
      var s = _.data(this[0], "smartTab");
      return (
        "destroy" === t && _.data(this, "smartTab", null),
        s instanceof i && "function" == typeof s[t]
          ? s[t].apply(s, Array.prototype.slice.call(arguments, 1))
          : this
      );
    }
  };
})(jQuery, window, document);
