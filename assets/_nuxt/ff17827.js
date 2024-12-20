/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [135],
  {
    112: function (t, e, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (t) {
                for (var s, i = 1, e = arguments.length; i < e; i++)
                  for (var p in (s = arguments[i]))
                    Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                return t;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.initAccordions = void 0);
      var o = r(26),
        c = {
          alwaysOpen: !1,
          activeClasses:
            "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
          inactiveClasses: "text-gray-500 dark:text-gray-400",
          onOpen: function () {},
          onClose: function () {},
          onToggle: function () {},
        },
        l = { id: null, override: !0 },
        d = (function () {
          function t(t, e, r, d) {
            void 0 === t && (t = null),
              void 0 === e && (e = []),
              void 0 === r && (r = c),
              void 0 === d && (d = l),
              (this._instanceId = d.id ? d.id : t.id),
              (this._accordionEl = t),
              (this._items = e),
              (this._options = n(n({}, c), r)),
              (this._initialized = !1),
              this.init(),
              o.default.addInstance(
                "Accordion",
                this,
                this._instanceId,
                d.override
              );
          }
          return (
            (t.prototype.init = function () {
              var t = this;
              this._items.length &&
                !this._initialized &&
                (this._items.forEach(function (e) {
                  e.active && t.open(e.id);
                  var r = function () {
                    t.toggle(e.id);
                  };
                  e.triggerEl.addEventListener("click", r),
                    (e.clickHandler = r);
                }),
                (this._initialized = !0));
            }),
            (t.prototype.destroy = function () {
              this._items.length &&
                this._initialized &&
                (this._items.forEach(function (t) {
                  t.triggerEl.removeEventListener("click", t.clickHandler),
                    delete t.clickHandler;
                }),
                (this._initialized = !1));
            }),
            (t.prototype.removeInstance = function () {
              o.default.removeInstance("Accordion", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
              this.destroy(), this.removeInstance();
            }),
            (t.prototype.getItem = function (t) {
              return this._items.filter(function (e) {
                return e.id === t;
              })[0];
            }),
            (t.prototype.open = function (t) {
              var e,
                r,
                n = this,
                o = this.getItem(t);
              this._options.alwaysOpen ||
                this._items.map(function (i) {
                  var t, e;
                  i !== o &&
                    ((t = i.triggerEl.classList).remove.apply(
                      t,
                      n._options.activeClasses.split(" ")
                    ),
                    (e = i.triggerEl.classList).add.apply(
                      e,
                      n._options.inactiveClasses.split(" ")
                    ),
                    i.targetEl.classList.add("hidden"),
                    i.triggerEl.setAttribute("aria-expanded", "false"),
                    (i.active = !1),
                    i.iconEl && i.iconEl.classList.remove("rotate-180"));
                }),
                (e = o.triggerEl.classList).add.apply(
                  e,
                  this._options.activeClasses.split(" ")
                ),
                (r = o.triggerEl.classList).remove.apply(
                  r,
                  this._options.inactiveClasses.split(" ")
                ),
                o.triggerEl.setAttribute("aria-expanded", "true"),
                o.targetEl.classList.remove("hidden"),
                (o.active = !0),
                o.iconEl && o.iconEl.classList.add("rotate-180"),
                this._options.onOpen(this, o);
            }),
            (t.prototype.toggle = function (t) {
              var e = this.getItem(t);
              e.active ? this.close(t) : this.open(t),
                this._options.onToggle(this, e);
            }),
            (t.prototype.close = function (t) {
              var e,
                r,
                n = this.getItem(t);
              (e = n.triggerEl.classList).remove.apply(
                e,
                this._options.activeClasses.split(" ")
              ),
                (r = n.triggerEl.classList).add.apply(
                  r,
                  this._options.inactiveClasses.split(" ")
                ),
                n.targetEl.classList.add("hidden"),
                n.triggerEl.setAttribute("aria-expanded", "false"),
                (n.active = !1),
                n.iconEl && n.iconEl.classList.remove("rotate-180"),
                this._options.onClose(this, n);
            }),
            t
          );
        })();
      function h() {
        document.querySelectorAll("[data-accordion]").forEach(function (t) {
          var e = t.getAttribute("data-accordion"),
            r = t.getAttribute("data-active-classes"),
            n = t.getAttribute("data-inactive-classes"),
            o = [];
          t.querySelectorAll("[data-accordion-target]").forEach(function (e) {
            if (e.closest("[data-accordion]") === t) {
              var r = {
                id: e.getAttribute("data-accordion-target"),
                triggerEl: e,
                targetEl: document.querySelector(
                  e.getAttribute("data-accordion-target")
                ),
                iconEl: e.querySelector("[data-accordion-icon]"),
                active: "true" === e.getAttribute("aria-expanded"),
              };
              o.push(r);
            }
          }),
            new d(t, o, {
              alwaysOpen: "open" === e,
              activeClasses: r || c.activeClasses,
              inactiveClasses: n || c.inactiveClasses,
            });
        });
      }
      (e.initAccordions = h),
        "undefined" != typeof window &&
          ((window.Accordion = d), (window.initAccordions = h)),
        (e.default = d);
    },
    113: function (t, e, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (t) {
                for (var s, i = 1, e = arguments.length; i < e; i++)
                  for (var p in (s = arguments[i]))
                    Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                return t;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.initCollapses = void 0);
      var o = r(26),
        c = {
          onCollapse: function () {},
          onExpand: function () {},
          onToggle: function () {},
        },
        l = { id: null, override: !0 },
        d = (function () {
          function t(t, e, r, d) {
            void 0 === t && (t = null),
              void 0 === e && (e = null),
              void 0 === r && (r = c),
              void 0 === d && (d = l),
              (this._instanceId = d.id ? d.id : t.id),
              (this._targetEl = t),
              (this._triggerEl = e),
              (this._options = n(n({}, c), r)),
              (this._visible = !1),
              (this._initialized = !1),
              this.init(),
              o.default.addInstance(
                "Collapse",
                this,
                this._instanceId,
                d.override
              );
          }
          return (
            (t.prototype.init = function () {
              var t = this;
              this._triggerEl &&
                this._targetEl &&
                !this._initialized &&
                (this._triggerEl.hasAttribute("aria-expanded")
                  ? (this._visible =
                      "true" === this._triggerEl.getAttribute("aria-expanded"))
                  : (this._visible =
                      !this._targetEl.classList.contains("hidden")),
                (this._clickHandler = function () {
                  t.toggle();
                }),
                this._triggerEl.addEventListener("click", this._clickHandler),
                (this._initialized = !0));
            }),
            (t.prototype.destroy = function () {
              this._triggerEl &&
                this._initialized &&
                (this._triggerEl.removeEventListener(
                  "click",
                  this._clickHandler
                ),
                (this._initialized = !1));
            }),
            (t.prototype.removeInstance = function () {
              o.default.removeInstance("Collapse", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
              this.destroy(), this.removeInstance();
            }),
            (t.prototype.collapse = function () {
              this._targetEl.classList.add("hidden"),
                this._triggerEl &&
                  this._triggerEl.setAttribute("aria-expanded", "false"),
                (this._visible = !1),
                this._options.onCollapse(this);
            }),
            (t.prototype.expand = function () {
              this._targetEl.classList.remove("hidden"),
                this._triggerEl &&
                  this._triggerEl.setAttribute("aria-expanded", "true"),
                (this._visible = !0),
                this._options.onExpand(this);
            }),
            (t.prototype.toggle = function () {
              this._visible ? this.collapse() : this.expand(),
                this._options.onToggle(this);
            }),
            t
          );
        })();
      function h() {
        document
          .querySelectorAll("[data-collapse-toggle]")
          .forEach(function (t) {
            var e = t.getAttribute("data-collapse-toggle"),
              r = document.getElementById(e);
            r
              ? o.default.instanceExists("Collapse", r.getAttribute("id"))
                ? new d(
                    r,
                    t,
                    {},
                    {
                      id:
                        r.getAttribute("id") +
                        "_" +
                        o.default._generateRandomId(),
                    }
                  )
                : new d(r, t)
              : console.error(
                  'The target element with id "'.concat(
                    e,
                    '" does not exist. Please check the data-collapse-toggle attribute.'
                  )
                );
          });
      }
      (e.initCollapses = h),
        "undefined" != typeof window &&
          ((window.Collapse = d), (window.initCollapses = h)),
        (e.default = d);
    },
    114: function (t, e, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (t) {
                for (var s, i = 1, e = arguments.length; i < e; i++)
                  for (var p in (s = arguments[i]))
                    Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                return t;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.initCarousels = void 0);
      var o = r(26),
        c = {
          defaultPosition: 0,
          indicators: {
            items: [],
            activeClasses: "bg-white dark:bg-gray-800",
            inactiveClasses:
              "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
          },
          interval: 3e3,
          onNext: function () {},
          onPrev: function () {},
          onChange: function () {},
        },
        l = { id: null, override: !0 },
        d = (function () {
          function t(t, e, r, d) {
            void 0 === t && (t = null),
              void 0 === e && (e = []),
              void 0 === r && (r = c),
              void 0 === d && (d = l),
              (this._instanceId = d.id ? d.id : t.id),
              (this._carouselEl = t),
              (this._items = e),
              (this._options = n(n(n({}, c), r), {
                indicators: n(n({}, c.indicators), r.indicators),
              })),
              (this._activeItem = this.getItem(this._options.defaultPosition)),
              (this._indicators = this._options.indicators.items),
              (this._intervalDuration = this._options.interval),
              (this._intervalInstance = null),
              (this._initialized = !1),
              this.init(),
              o.default.addInstance(
                "Carousel",
                this,
                this._instanceId,
                d.override
              );
          }
          return (
            (t.prototype.init = function () {
              var t = this;
              this._items.length &&
                !this._initialized &&
                (this._items.map(function (t) {
                  t.el.classList.add(
                    "absolute",
                    "inset-0",
                    "transition-transform",
                    "transform"
                  );
                }),
                this._getActiveItem()
                  ? this.slideTo(this._getActiveItem().position)
                  : this.slideTo(0),
                this._indicators.map(function (e, r) {
                  e.el.addEventListener("click", function () {
                    t.slideTo(r);
                  });
                }),
                (this._initialized = !0));
            }),
            (t.prototype.destroy = function () {
              this._initialized && (this._initialized = !1);
            }),
            (t.prototype.removeInstance = function () {
              o.default.removeInstance("Carousel", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
              this.destroy(), this.removeInstance();
            }),
            (t.prototype.getItem = function (t) {
              return this._items[t];
            }),
            (t.prototype.slideTo = function (t) {
              var e = this._items[t],
                r = {
                  left:
                    0 === e.position
                      ? this._items[this._items.length - 1]
                      : this._items[e.position - 1],
                  middle: e,
                  right:
                    e.position === this._items.length - 1
                      ? this._items[0]
                      : this._items[e.position + 1],
                };
              this._rotate(r),
                this._setActiveItem(e),
                this._intervalInstance && (this.pause(), this.cycle()),
                this._options.onChange(this);
            }),
            (t.prototype.next = function () {
              var t = this._getActiveItem(),
                e = null;
              (e =
                t.position === this._items.length - 1
                  ? this._items[0]
                  : this._items[t.position + 1]),
                this.slideTo(e.position),
                this._options.onNext(this);
            }),
            (t.prototype.prev = function () {
              var t = this._getActiveItem(),
                e = null;
              (e =
                0 === t.position
                  ? this._items[this._items.length - 1]
                  : this._items[t.position - 1]),
                this.slideTo(e.position),
                this._options.onPrev(this);
            }),
            (t.prototype._rotate = function (t) {
              this._items.map(function (t) {
                t.el.classList.add("hidden");
              }),
                t.left.el.classList.remove(
                  "-translate-x-full",
                  "translate-x-full",
                  "translate-x-0",
                  "hidden",
                  "z-20"
                ),
                t.left.el.classList.add("-translate-x-full", "z-10"),
                t.middle.el.classList.remove(
                  "-translate-x-full",
                  "translate-x-full",
                  "translate-x-0",
                  "hidden",
                  "z-10"
                ),
                t.middle.el.classList.add("translate-x-0", "z-20"),
                t.right.el.classList.remove(
                  "-translate-x-full",
                  "translate-x-full",
                  "translate-x-0",
                  "hidden",
                  "z-20"
                ),
                t.right.el.classList.add("translate-x-full", "z-10");
            }),
            (t.prototype.cycle = function () {
              var t = this;
              "undefined" != typeof window &&
                (this._intervalInstance = window.setInterval(function () {
                  t.next();
                }, this._intervalDuration));
            }),
            (t.prototype.pause = function () {
              clearInterval(this._intervalInstance);
            }),
            (t.prototype._getActiveItem = function () {
              return this._activeItem;
            }),
            (t.prototype._setActiveItem = function (t) {
              var e,
                r,
                n = this;
              this._activeItem = t;
              var o = t.position;
              this._indicators.length &&
                (this._indicators.map(function (t) {
                  var e, r;
                  t.el.setAttribute("aria-current", "false"),
                    (e = t.el.classList).remove.apply(
                      e,
                      n._options.indicators.activeClasses.split(" ")
                    ),
                    (r = t.el.classList).add.apply(
                      r,
                      n._options.indicators.inactiveClasses.split(" ")
                    );
                }),
                (e = this._indicators[o].el.classList).add.apply(
                  e,
                  this._options.indicators.activeClasses.split(" ")
                ),
                (r = this._indicators[o].el.classList).remove.apply(
                  r,
                  this._options.indicators.inactiveClasses.split(" ")
                ),
                this._indicators[o].el.setAttribute("aria-current", "true"));
            }),
            t
          );
        })();
      function h() {
        document.querySelectorAll("[data-carousel]").forEach(function (t) {
          var e = t.getAttribute("data-carousel-interval"),
            r = "slide" === t.getAttribute("data-carousel"),
            n = [],
            o = 0;
          t.querySelectorAll("[data-carousel-item]").length &&
            Array.from(t.querySelectorAll("[data-carousel-item]")).map(
              function (t, e) {
                n.push({ position: e, el: t }),
                  "active" === t.getAttribute("data-carousel-item") && (o = e);
              }
            );
          var l = [];
          t.querySelectorAll("[data-carousel-slide-to]").length &&
            Array.from(t.querySelectorAll("[data-carousel-slide-to]")).map(
              function (t) {
                l.push({
                  position: parseInt(t.getAttribute("data-carousel-slide-to")),
                  el: t,
                });
              }
            );
          var h = new d(t, n, {
            defaultPosition: o,
            indicators: { items: l },
            interval: e || c.interval,
          });
          r && h.cycle();
          var f = t.querySelector("[data-carousel-next]"),
            m = t.querySelector("[data-carousel-prev]");
          f &&
            f.addEventListener("click", function () {
              h.next();
            }),
            m &&
              m.addEventListener("click", function () {
                h.prev();
              });
        });
      }
      (e.initCarousels = h),
        "undefined" != typeof window &&
          ((window.Carousel = d), (window.initCarousels = h)),
        (e.default = d);
    },
    115: function (t, e, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (t) {
                for (var s, i = 1, e = arguments.length; i < e; i++)
                  for (var p in (s = arguments[i]))
                    Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                return t;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.initDismisses = void 0);
      var o = r(26),
        c = {
          transition: "transition-opacity",
          duration: 300,
          timing: "ease-out",
          onHide: function () {},
        },
        l = { id: null, override: !0 },
        d = (function () {
          function t(t, e, r, d) {
            void 0 === t && (t = null),
              void 0 === e && (e = null),
              void 0 === r && (r = c),
              void 0 === d && (d = l),
              (this._instanceId = d.id ? d.id : t.id),
              (this._targetEl = t),
              (this._triggerEl = e),
              (this._options = n(n({}, c), r)),
              (this._initialized = !1),
              this.init(),
              o.default.addInstance(
                "Dismiss",
                this,
                this._instanceId,
                d.override
              );
          }
          return (
            (t.prototype.init = function () {
              var t = this;
              this._triggerEl &&
                this._targetEl &&
                !this._initialized &&
                ((this._clickHandler = function () {
                  t.hide();
                }),
                this._triggerEl.addEventListener("click", this._clickHandler),
                (this._initialized = !0));
            }),
            (t.prototype.destroy = function () {
              this._triggerEl &&
                this._initialized &&
                (this._triggerEl.removeEventListener(
                  "click",
                  this._clickHandler
                ),
                (this._initialized = !1));
            }),
            (t.prototype.removeInstance = function () {
              o.default.removeInstance("Dismiss", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
              this.destroy(), this.removeInstance();
            }),
            (t.prototype.hide = function () {
              var t = this;
              this._targetEl.classList.add(
                this._options.transition,
                "duration-".concat(this._options.duration),
                this._options.timing,
                "opacity-0"
              ),
                setTimeout(function () {
                  t._targetEl.classList.add("hidden");
                }, this._options.duration),
                this._options.onHide(this, this._targetEl);
            }),
            t
          );
        })();
      function h() {
        document
          .querySelectorAll("[data-dismiss-target]")
          .forEach(function (t) {
            var e = t.getAttribute("data-dismiss-target"),
              r = document.querySelector(e);
            r
              ? new d(r, t)
              : console.error(
                  'The dismiss element with id "'.concat(
                    e,
                    '" does not exist. Please check the data-dismiss-target attribute.'
                  )
                );
          });
      }
      (e.initDismisses = h),
        "undefined" != typeof window &&
          ((window.Dismiss = d), (window.initDismisses = h)),
        (e.default = d);
    },
    116: function (t, e, r) {
      "use strict";
      var n =
          (this && this.__assign) ||
          function () {
            return (
              (n =
                Object.assign ||
                function (t) {
                  for (var s, i = 1, e = arguments.length; i < e; i++)
                    for (var p in (s = arguments[i]))
                      Object.prototype.hasOwnProperty.call(s, p) &&
                        (t[p] = s[p]);
                  return t;
                }),
              n.apply(this, arguments)
            );
          },
        o =
          (this && this.__spreadArray) ||
          function (t, e, r) {
            if (r || 2 === arguments.length)
              for (var n, i = 0, o = e.length; i < o; i++)
                (!n && i in e) ||
                  (n || (n = Array.prototype.slice.call(e, 0, i)),
                  (n[i] = e[i]));
            return t.concat(n || Array.prototype.slice.call(e));
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.initDropdowns = void 0);
      var c = r(151),
        l = r(26),
        d = {
          placement: "bottom",
          triggerType: "click",
          offsetSkidding: 0,
          offsetDistance: 10,
          delay: 300,
          ignoreClickOutsideClass: !1,
          onShow: function () {},
          onHide: function () {},
          onToggle: function () {},
        },
        h = { id: null, override: !0 },
        f = (function () {
          function t(t, e, r, o) {
            void 0 === t && (t = null),
              void 0 === e && (e = null),
              void 0 === r && (r = d),
              void 0 === o && (o = h),
              (this._instanceId = o.id ? o.id : t.id),
              (this._targetEl = t),
              (this._triggerEl = e),
              (this._options = n(n({}, d), r)),
              (this._popperInstance = null),
              (this._visible = !1),
              (this._initialized = !1),
              this.init(),
              l.default.addInstance(
                "Dropdown",
                this,
                this._instanceId,
                o.override
              );
          }
          return (
            (t.prototype.init = function () {
              this._triggerEl &&
                this._targetEl &&
                !this._initialized &&
                ((this._popperInstance = this._createPopperInstance()),
                this._setupEventListeners(),
                (this._initialized = !0));
            }),
            (t.prototype.destroy = function () {
              var t = this,
                e = this._getTriggerEvents();
              "click" === this._options.triggerType &&
                e.showEvents.forEach(function (e) {
                  t._triggerEl.removeEventListener(e, t._clickHandler);
                }),
                "hover" === this._options.triggerType &&
                  (e.showEvents.forEach(function (e) {
                    t._triggerEl.removeEventListener(
                      e,
                      t._hoverShowTriggerElHandler
                    ),
                      t._targetEl.removeEventListener(
                        e,
                        t._hoverShowTargetElHandler
                      );
                  }),
                  e.hideEvents.forEach(function (e) {
                    t._triggerEl.removeEventListener(e, t._hoverHideHandler),
                      t._targetEl.removeEventListener(e, t._hoverHideHandler);
                  })),
                this._popperInstance.destroy(),
                (this._initialized = !1);
            }),
            (t.prototype.removeInstance = function () {
              l.default.removeInstance("Dropdown", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
              this.destroy(), this.removeInstance();
            }),
            (t.prototype._setupEventListeners = function () {
              var t = this,
                e = this._getTriggerEvents();
              (this._clickHandler = function () {
                t.toggle();
              }),
                "click" === this._options.triggerType &&
                  e.showEvents.forEach(function (e) {
                    t._triggerEl.addEventListener(e, t._clickHandler);
                  }),
                (this._hoverShowTriggerElHandler = function (e) {
                  "click" === e.type
                    ? t.toggle()
                    : setTimeout(function () {
                        t.show();
                      }, t._options.delay);
                }),
                (this._hoverShowTargetElHandler = function () {
                  t.show();
                }),
                (this._hoverHideHandler = function () {
                  setTimeout(function () {
                    t._targetEl.matches(":hover") || t.hide();
                  }, t._options.delay);
                }),
                "hover" === this._options.triggerType &&
                  (e.showEvents.forEach(function (e) {
                    t._triggerEl.addEventListener(
                      e,
                      t._hoverShowTriggerElHandler
                    ),
                      t._targetEl.addEventListener(
                        e,
                        t._hoverShowTargetElHandler
                      );
                  }),
                  e.hideEvents.forEach(function (e) {
                    t._triggerEl.addEventListener(e, t._hoverHideHandler),
                      t._targetEl.addEventListener(e, t._hoverHideHandler);
                  }));
            }),
            (t.prototype._createPopperInstance = function () {
              return (0, c.createPopper)(this._triggerEl, this._targetEl, {
                placement: this._options.placement,
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [
                        this._options.offsetSkidding,
                        this._options.offsetDistance,
                      ],
                    },
                  },
                ],
              });
            }),
            (t.prototype._setupClickOutsideListener = function () {
              var t = this;
              (this._clickOutsideEventListener = function (e) {
                t._handleClickOutside(e, t._targetEl);
              }),
                document.body.addEventListener(
                  "click",
                  this._clickOutsideEventListener,
                  !0
                );
            }),
            (t.prototype._removeClickOutsideListener = function () {
              document.body.removeEventListener(
                "click",
                this._clickOutsideEventListener,
                !0
              );
            }),
            (t.prototype._handleClickOutside = function (t, e) {
              var r = t.target,
                n = this._options.ignoreClickOutsideClass,
                o = !1;
              n &&
                document.querySelectorAll(".".concat(n)).forEach(function (t) {
                  t.contains(r) && (o = !0);
                });
              r === e ||
                e.contains(r) ||
                this._triggerEl.contains(r) ||
                o ||
                !this.isVisible() ||
                this.hide();
            }),
            (t.prototype._getTriggerEvents = function () {
              switch (this._options.triggerType) {
                case "hover":
                  return {
                    showEvents: ["mouseenter", "click"],
                    hideEvents: ["mouseleave"],
                  };
                case "click":
                default:
                  return { showEvents: ["click"], hideEvents: [] };
                case "none":
                  return { showEvents: [], hideEvents: [] };
              }
            }),
            (t.prototype.toggle = function () {
              this.isVisible() ? this.hide() : this.show(),
                this._options.onToggle(this);
            }),
            (t.prototype.isVisible = function () {
              return this._visible;
            }),
            (t.prototype.show = function () {
              this._targetEl.classList.remove("hidden"),
                this._targetEl.classList.add("block"),
                this._popperInstance.setOptions(function (t) {
                  return n(n({}, t), {
                    modifiers: o(
                      o([], t.modifiers, !0),
                      [{ name: "eventListeners", enabled: !0 }],
                      !1
                    ),
                  });
                }),
                this._setupClickOutsideListener(),
                this._popperInstance.update(),
                (this._visible = !0),
                this._options.onShow(this);
            }),
            (t.prototype.hide = function () {
              this._targetEl.classList.remove("block"),
                this._targetEl.classList.add("hidden"),
                this._popperInstance.setOptions(function (t) {
                  return n(n({}, t), {
                    modifiers: o(
                      o([], t.modifiers, !0),
                      [{ name: "eventListeners", enabled: !1 }],
                      !1
                    ),
                  });
                }),
                (this._visible = !1),
                this._removeClickOutsideListener(),
                this._options.onHide(this);
            }),
            t
          );
        })();
      function m() {
        document
          .querySelectorAll("[data-dropdown-toggle]")
          .forEach(function (t) {
            var e = t.getAttribute("data-dropdown-toggle"),
              r = document.getElementById(e);
            if (r) {
              var n = t.getAttribute("data-dropdown-placement"),
                o = t.getAttribute("data-dropdown-offset-skidding"),
                c = t.getAttribute("data-dropdown-offset-distance"),
                l = t.getAttribute("data-dropdown-trigger"),
                h = t.getAttribute("data-dropdown-delay"),
                m = t.getAttribute("data-dropdown-ignore-click-outside-class");
              new f(r, t, {
                placement: n || d.placement,
                triggerType: l || d.triggerType,
                offsetSkidding: o ? parseInt(o) : d.offsetSkidding,
                offsetDistance: c ? parseInt(c) : d.offsetDistance,
                delay: h ? parseInt(h) : d.delay,
                ignoreClickOutsideClass: m || d.ignoreClickOutsideClass,
              });
            } else console.error('The dropdown element with id "'.concat(e, '" does not exist. Please check the data-dropdown-toggle attribute.'));
          });
      }
      (e.initDropdowns = m),
        "undefined" != typeof window &&
          ((window.Dropdown = f), (window.initDropdowns = m)),
        (e.default = f);
    },
    117: function (t, e, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (t) {
                for (var s, i = 1, e = arguments.length; i < e; i++)
                  for (var p in (s = arguments[i]))
                    Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                return t;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.initModals = void 0);
      var o = r(26),
        c = {
          placement: "center",
          backdropClasses:
            "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
          backdrop: "dynamic",
          closable: !0,
          onHide: function () {},
          onShow: function () {},
          onToggle: function () {},
        },
        l = { id: null, override: !0 },
        d = (function () {
          function t(t, e, r) {
            void 0 === t && (t = null),
              void 0 === e && (e = c),
              void 0 === r && (r = l),
              (this._eventListenerInstances = []),
              (this._instanceId = r.id ? r.id : t.id),
              (this._targetEl = t),
              (this._options = n(n({}, c), e)),
              (this._isHidden = !0),
              (this._backdropEl = null),
              (this._initialized = !1),
              this.init(),
              o.default.addInstance(
                "Modal",
                this,
                this._instanceId,
                r.override
              );
          }
          return (
            (t.prototype.init = function () {
              var t = this;
              this._targetEl &&
                !this._initialized &&
                (this._getPlacementClasses().map(function (e) {
                  t._targetEl.classList.add(e);
                }),
                (this._initialized = !0));
            }),
            (t.prototype.destroy = function () {
              this._initialized &&
                (this.removeAllEventListenerInstances(),
                this._destroyBackdropEl(),
                (this._initialized = !1));
            }),
            (t.prototype.removeInstance = function () {
              o.default.removeInstance("Modal", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
              this.destroy(), this.removeInstance();
            }),
            (t.prototype._createBackdrop = function () {
              var t;
              if (this._isHidden) {
                var e = document.createElement("div");
                e.setAttribute("modal-backdrop", ""),
                  (t = e.classList).add.apply(
                    t,
                    this._options.backdropClasses.split(" ")
                  ),
                  document.querySelector("body").append(e),
                  (this._backdropEl = e);
              }
            }),
            (t.prototype._destroyBackdropEl = function () {
              this._isHidden ||
                document.querySelector("[modal-backdrop]").remove();
            }),
            (t.prototype._setupModalCloseEventListeners = function () {
              var t = this;
              "dynamic" === this._options.backdrop &&
                ((this._clickOutsideEventListener = function (e) {
                  t._handleOutsideClick(e.target);
                }),
                this._targetEl.addEventListener(
                  "click",
                  this._clickOutsideEventListener,
                  !0
                )),
                (this._keydownEventListener = function (e) {
                  "Escape" === e.key && t.hide();
                }),
                document.body.addEventListener(
                  "keydown",
                  this._keydownEventListener,
                  !0
                );
            }),
            (t.prototype._removeModalCloseEventListeners = function () {
              "dynamic" === this._options.backdrop &&
                this._targetEl.removeEventListener(
                  "click",
                  this._clickOutsideEventListener,
                  !0
                ),
                document.body.removeEventListener(
                  "keydown",
                  this._keydownEventListener,
                  !0
                );
            }),
            (t.prototype._handleOutsideClick = function (t) {
              (t === this._targetEl ||
                (t === this._backdropEl && this.isVisible())) &&
                this.hide();
            }),
            (t.prototype._getPlacementClasses = function () {
              switch (this._options.placement) {
                case "top-left":
                  return ["justify-start", "items-start"];
                case "top-center":
                  return ["justify-center", "items-start"];
                case "top-right":
                  return ["justify-end", "items-start"];
                case "center-left":
                  return ["justify-start", "items-center"];
                case "center":
                default:
                  return ["justify-center", "items-center"];
                case "center-right":
                  return ["justify-end", "items-center"];
                case "bottom-left":
                  return ["justify-start", "items-end"];
                case "bottom-center":
                  return ["justify-center", "items-end"];
                case "bottom-right":
                  return ["justify-end", "items-end"];
              }
            }),
            (t.prototype.toggle = function () {
              this._isHidden ? this.show() : this.hide(),
                this._options.onToggle(this);
            }),
            (t.prototype.show = function () {
              this.isHidden &&
                (this._targetEl.classList.add("flex"),
                this._targetEl.classList.remove("hidden"),
                this._targetEl.setAttribute("aria-modal", "true"),
                this._targetEl.setAttribute("role", "dialog"),
                this._targetEl.removeAttribute("aria-hidden"),
                this._createBackdrop(),
                (this._isHidden = !1),
                this._options.closable && this._setupModalCloseEventListeners(),
                document.body.classList.add("overflow-hidden"),
                this._options.onShow(this));
            }),
            (t.prototype.hide = function () {
              this.isVisible &&
                (this._targetEl.classList.add("hidden"),
                this._targetEl.classList.remove("flex"),
                this._targetEl.setAttribute("aria-hidden", "true"),
                this._targetEl.removeAttribute("aria-modal"),
                this._targetEl.removeAttribute("role"),
                this._destroyBackdropEl(),
                (this._isHidden = !0),
                document.body.classList.remove("overflow-hidden"),
                this._options.closable &&
                  this._removeModalCloseEventListeners(),
                this._options.onHide(this));
            }),
            (t.prototype.isVisible = function () {
              return !this._isHidden;
            }),
            (t.prototype.isHidden = function () {
              return this._isHidden;
            }),
            (t.prototype.addEventListenerInstance = function (element, t, e) {
              this._eventListenerInstances.push({
                element: element,
                type: t,
                handler: e,
              });
            }),
            (t.prototype.removeAllEventListenerInstances = function () {
              this._eventListenerInstances.map(function (t) {
                t.element.removeEventListener(t.type, t.handler);
              }),
                (this._eventListenerInstances = []);
            }),
            (t.prototype.getAllEventListenerInstances = function () {
              return this._eventListenerInstances;
            }),
            t
          );
        })();
      function h() {
        document.querySelectorAll("[data-modal-target]").forEach(function (t) {
          var e = t.getAttribute("data-modal-target"),
            r = document.getElementById(e);
          if (r) {
            var n = r.getAttribute("data-modal-placement"),
              o = r.getAttribute("data-modal-backdrop");
            new d(r, {
              placement: n || c.placement,
              backdrop: o || c.backdrop,
            });
          } else console.error("Modal with id ".concat(e, " does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."));
        }),
          document
            .querySelectorAll("[data-modal-toggle]")
            .forEach(function (t) {
              var e = t.getAttribute("data-modal-toggle");
              if (document.getElementById(e)) {
                var r = o.default.getInstance("Modal", e);
                if (r) {
                  var n = function () {
                    r.toggle();
                  };
                  t.addEventListener("click", n),
                    r.addEventListenerInstance(t, "click", n);
                } else
                  console.error(
                    "Modal with id ".concat(
                      e,
                      " has not been initialized. Please initialize it using the data-modal-target attribute."
                    )
                  );
              } else console.error("Modal with id ".concat(e, " does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"));
            }),
          document.querySelectorAll("[data-modal-show]").forEach(function (t) {
            var e = t.getAttribute("data-modal-show");
            if (document.getElementById(e)) {
              var r = o.default.getInstance("Modal", e);
              if (r) {
                var n = function () {
                  r.show();
                };
                t.addEventListener("click", n),
                  r.addEventListenerInstance(t, "click", n);
              } else
                console.error(
                  "Modal with id ".concat(
                    e,
                    " has not been initialized. Please initialize it using the data-modal-target attribute."
                  )
                );
            } else console.error("Modal with id ".concat(e, " does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"));
          }),
          document.querySelectorAll("[data-modal-hide]").forEach(function (t) {
            var e = t.getAttribute("data-modal-hide");
            if (document.getElementById(e)) {
              var r = o.default.getInstance("Modal", e);
              if (r) {
                var n = function () {
                  r.hide();
                };
                t.addEventListener("click", n),
                  r.addEventListenerInstance(t, "click", n);
              } else
                console.error(
                  "Modal with id ".concat(
                    e,
                    " has not been initialized. Please initialize it using the data-modal-target attribute."
                  )
                );
            } else console.error("Modal with id ".concat(e, " does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"));
          });
      }
      (e.initModals = h),
        "undefined" != typeof window &&
          ((window.Modal = d), (window.initModals = h)),
        (e.default = d);
    },
    118: function (t, e, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (t) {
                for (var s, i = 1, e = arguments.length; i < e; i++)
                  for (var p in (s = arguments[i]))
                    Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                return t;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.initDrawers = void 0);
      var o = r(26),
        c = {
          placement: "left",
          bodyScrolling: !1,
          backdrop: !0,
          edge: !1,
          edgeOffset: "bottom-[60px]",
          backdropClasses:
            "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30",
          onShow: function () {},
          onHide: function () {},
          onToggle: function () {},
        },
        l = { id: null, override: !0 },
        d = (function () {
          function t(t, e, r) {
            void 0 === t && (t = null),
              void 0 === e && (e = c),
              void 0 === r && (r = l),
              (this._eventListenerInstances = []),
              (this._instanceId = r.id ? r.id : t.id),
              (this._targetEl = t),
              (this._options = n(n({}, c), e)),
              (this._visible = !1),
              (this._initialized = !1),
              this.init(),
              o.default.addInstance(
                "Drawer",
                this,
                this._instanceId,
                r.override
              );
          }
          return (
            (t.prototype.init = function () {
              var t = this;
              this._targetEl &&
                !this._initialized &&
                (this._targetEl.setAttribute("aria-hidden", "true"),
                this._targetEl.classList.add("transition-transform"),
                this._getPlacementClasses(this._options.placement).base.map(
                  function (e) {
                    t._targetEl.classList.add(e);
                  }
                ),
                (this._handleEscapeKey = function (e) {
                  "Escape" === e.key && t.isVisible() && t.hide();
                }),
                document.addEventListener("keydown", this._handleEscapeKey),
                (this._initialized = !0));
            }),
            (t.prototype.destroy = function () {
              this._initialized &&
                (this.removeAllEventListenerInstances(),
                this._destroyBackdropEl(),
                document.removeEventListener("keydown", this._handleEscapeKey),
                (this._initialized = !1));
            }),
            (t.prototype.removeInstance = function () {
              o.default.removeInstance("Drawer", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
              this.destroy(), this.removeInstance();
            }),
            (t.prototype.hide = function () {
              var t = this;
              this._options.edge
                ? (this._getPlacementClasses(
                    this._options.placement + "-edge"
                  ).active.map(function (e) {
                    t._targetEl.classList.remove(e);
                  }),
                  this._getPlacementClasses(
                    this._options.placement + "-edge"
                  ).inactive.map(function (e) {
                    t._targetEl.classList.add(e);
                  }))
                : (this._getPlacementClasses(
                    this._options.placement
                  ).active.map(function (e) {
                    t._targetEl.classList.remove(e);
                  }),
                  this._getPlacementClasses(
                    this._options.placement
                  ).inactive.map(function (e) {
                    t._targetEl.classList.add(e);
                  })),
                this._targetEl.setAttribute("aria-hidden", "true"),
                this._targetEl.removeAttribute("aria-modal"),
                this._targetEl.removeAttribute("role"),
                this._options.bodyScrolling ||
                  document.body.classList.remove("overflow-hidden"),
                this._options.backdrop && this._destroyBackdropEl(),
                (this._visible = !1),
                this._options.onHide(this);
            }),
            (t.prototype.show = function () {
              var t = this;
              this._options.edge
                ? (this._getPlacementClasses(
                    this._options.placement + "-edge"
                  ).active.map(function (e) {
                    t._targetEl.classList.add(e);
                  }),
                  this._getPlacementClasses(
                    this._options.placement + "-edge"
                  ).inactive.map(function (e) {
                    t._targetEl.classList.remove(e);
                  }))
                : (this._getPlacementClasses(
                    this._options.placement
                  ).active.map(function (e) {
                    t._targetEl.classList.add(e);
                  }),
                  this._getPlacementClasses(
                    this._options.placement
                  ).inactive.map(function (e) {
                    t._targetEl.classList.remove(e);
                  })),
                this._targetEl.setAttribute("aria-modal", "true"),
                this._targetEl.setAttribute("role", "dialog"),
                this._targetEl.removeAttribute("aria-hidden"),
                this._options.bodyScrolling ||
                  document.body.classList.add("overflow-hidden"),
                this._options.backdrop && this._createBackdrop(),
                (this._visible = !0),
                this._options.onShow(this);
            }),
            (t.prototype.toggle = function () {
              this.isVisible() ? this.hide() : this.show();
            }),
            (t.prototype._createBackdrop = function () {
              var t,
                e = this;
              if (!this._visible) {
                var r = document.createElement("div");
                r.setAttribute("drawer-backdrop", ""),
                  (t = r.classList).add.apply(
                    t,
                    this._options.backdropClasses.split(" ")
                  ),
                  document.querySelector("body").append(r),
                  r.addEventListener("click", function () {
                    e.hide();
                  });
              }
            }),
            (t.prototype._destroyBackdropEl = function () {
              this._visible &&
                document.querySelector("[drawer-backdrop]").remove();
            }),
            (t.prototype._getPlacementClasses = function (t) {
              switch (t) {
                case "top":
                  return {
                    base: ["top-0", "left-0", "right-0"],
                    active: ["transform-none"],
                    inactive: ["-translate-y-full"],
                  };
                case "right":
                  return {
                    base: ["right-0", "top-0"],
                    active: ["transform-none"],
                    inactive: ["translate-x-full"],
                  };
                case "bottom":
                  return {
                    base: ["bottom-0", "left-0", "right-0"],
                    active: ["transform-none"],
                    inactive: ["translate-y-full"],
                  };
                case "left":
                default:
                  return {
                    base: ["left-0", "top-0"],
                    active: ["transform-none"],
                    inactive: ["-translate-x-full"],
                  };
                case "bottom-edge":
                  return {
                    base: ["left-0", "top-0"],
                    active: ["transform-none"],
                    inactive: ["translate-y-full", this._options.edgeOffset],
                  };
              }
            }),
            (t.prototype.isHidden = function () {
              return !this._visible;
            }),
            (t.prototype.isVisible = function () {
              return this._visible;
            }),
            (t.prototype.addEventListenerInstance = function (element, t, e) {
              this._eventListenerInstances.push({
                element: element,
                type: t,
                handler: e,
              });
            }),
            (t.prototype.removeAllEventListenerInstances = function () {
              this._eventListenerInstances.map(function (t) {
                t.element.removeEventListener(t.type, t.handler);
              }),
                (this._eventListenerInstances = []);
            }),
            (t.prototype.getAllEventListenerInstances = function () {
              return this._eventListenerInstances;
            }),
            t
          );
        })();
      function h() {
        document.querySelectorAll("[data-drawer-target]").forEach(function (t) {
          var e = t.getAttribute("data-drawer-target"),
            r = document.getElementById(e);
          if (r) {
            var n = t.getAttribute("data-drawer-placement"),
              o = t.getAttribute("data-drawer-body-scrolling"),
              l = t.getAttribute("data-drawer-backdrop"),
              h = t.getAttribute("data-drawer-edge"),
              f = t.getAttribute("data-drawer-edge-offset");
            new d(r, {
              placement: n || c.placement,
              bodyScrolling: o ? "true" === o : c.bodyScrolling,
              backdrop: l ? "true" === l : c.backdrop,
              edge: h ? "true" === h : c.edge,
              edgeOffset: f || c.edgeOffset,
            });
          } else console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
        }),
          document
            .querySelectorAll("[data-drawer-toggle]")
            .forEach(function (t) {
              var e = t.getAttribute("data-drawer-toggle");
              if (document.getElementById(e)) {
                var r = o.default.getInstance("Drawer", e);
                if (r) {
                  var n = function () {
                    r.toggle();
                  };
                  t.addEventListener("click", n),
                    r.addEventListenerInstance(t, "click", n);
                } else
                  console.error(
                    "Drawer with id ".concat(
                      e,
                      " has not been initialized. Please initialize it using the data-drawer-target attribute."
                    )
                  );
              } else console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
            }),
          document
            .querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]")
            .forEach(function (t) {
              var e = t.getAttribute("data-drawer-dismiss")
                ? t.getAttribute("data-drawer-dismiss")
                : t.getAttribute("data-drawer-hide");
              if (document.getElementById(e)) {
                var r = o.default.getInstance("Drawer", e);
                if (r) {
                  var n = function () {
                    r.hide();
                  };
                  t.addEventListener("click", n),
                    r.addEventListenerInstance(t, "click", n);
                } else
                  console.error(
                    "Drawer with id ".concat(
                      e,
                      " has not been initialized. Please initialize it using the data-drawer-target attribute."
                    )
                  );
              } else console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"));
            }),
          document.querySelectorAll("[data-drawer-show]").forEach(function (t) {
            var e = t.getAttribute("data-drawer-show");
            if (document.getElementById(e)) {
              var r = o.default.getInstance("Drawer", e);
              if (r) {
                var n = function () {
                  r.show();
                };
                t.addEventListener("click", n),
                  r.addEventListenerInstance(t, "click", n);
              } else
                console.error(
                  "Drawer with id ".concat(
                    e,
                    " has not been initialized. Please initialize it using the data-drawer-target attribute."
                  )
                );
            } else console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
          });
      }
      (e.initDrawers = h),
        "undefined" != typeof window &&
          ((window.Drawer = d), (window.initDrawers = h)),
        (e.default = d);
    },
    119: function (t, e, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (t) {
                for (var s, i = 1, e = arguments.length; i < e; i++)
                  for (var p in (s = arguments[i]))
                    Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                return t;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.initTabs = void 0);
      var o = r(26),
        c = {
          defaultTabId: null,
          activeClasses:
            "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",
          inactiveClasses:
            "dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
          onShow: function () {},
        },
        l = { id: null, override: !0 },
        d = (function () {
          function t(t, e, r, d) {
            void 0 === t && (t = null),
              void 0 === e && (e = []),
              void 0 === r && (r = c),
              void 0 === d && (d = l),
              (this._instanceId = d.id ? d.id : t.id),
              (this._tabsEl = t),
              (this._items = e),
              (this._activeTab = r ? this.getTab(r.defaultTabId) : null),
              (this._options = n(n({}, c), r)),
              (this._initialized = !1),
              this.init(),
              o.default.addInstance("Tabs", this, this._tabsEl.id, !0),
              o.default.addInstance("Tabs", this, this._instanceId, d.override);
          }
          return (
            (t.prototype.init = function () {
              var t = this;
              this._items.length &&
                !this._initialized &&
                (this._activeTab || this.setActiveTab(this._items[0]),
                this.show(this._activeTab.id, !0),
                this._items.map(function (e) {
                  e.triggerEl.addEventListener("click", function () {
                    t.show(e.id);
                  });
                }));
            }),
            (t.prototype.destroy = function () {
              this._initialized && (this._initialized = !1);
            }),
            (t.prototype.removeInstance = function () {
              this.destroy(),
                o.default.removeInstance("Tabs", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
              this.destroy(), this.removeInstance();
            }),
            (t.prototype.getActiveTab = function () {
              return this._activeTab;
            }),
            (t.prototype.setActiveTab = function (t) {
              this._activeTab = t;
            }),
            (t.prototype.getTab = function (t) {
              return this._items.filter(function (e) {
                return e.id === t;
              })[0];
            }),
            (t.prototype.show = function (t, e) {
              var r,
                n,
                o = this;
              void 0 === e && (e = !1);
              var c = this.getTab(t);
              (c !== this._activeTab || e) &&
                (this._items.map(function (t) {
                  var e, r;
                  t !== c &&
                    ((e = t.triggerEl.classList).remove.apply(
                      e,
                      o._options.activeClasses.split(" ")
                    ),
                    (r = t.triggerEl.classList).add.apply(
                      r,
                      o._options.inactiveClasses.split(" ")
                    ),
                    t.targetEl.classList.add("hidden"),
                    t.triggerEl.setAttribute("aria-selected", "false"));
                }),
                (r = c.triggerEl.classList).add.apply(
                  r,
                  this._options.activeClasses.split(" ")
                ),
                (n = c.triggerEl.classList).remove.apply(
                  n,
                  this._options.inactiveClasses.split(" ")
                ),
                c.triggerEl.setAttribute("aria-selected", "true"),
                c.targetEl.classList.remove("hidden"),
                this.setActiveTab(c),
                this._options.onShow(this, c));
            }),
            t
          );
        })();
      function h() {
        document.querySelectorAll("[data-tabs-toggle]").forEach(function (t) {
          var e = [],
            r = null;
          t.querySelectorAll('[role="tab"]').forEach(function (t) {
            var n = "true" === t.getAttribute("aria-selected"),
              o = {
                id: t.getAttribute("data-tabs-target"),
                triggerEl: t,
                targetEl: document.querySelector(
                  t.getAttribute("data-tabs-target")
                ),
              };
            e.push(o), n && (r = o.id);
          }),
            new d(t, e, { defaultTabId: r });
        });
      }
      (e.initTabs = h),
        "undefined" != typeof window &&
          ((window.Tabs = d), (window.initTabs = h)),
        (e.default = d);
    },
    120: function (t, e, r) {
      "use strict";
      var n =
          (this && this.__assign) ||
          function () {
            return (
              (n =
                Object.assign ||
                function (t) {
                  for (var s, i = 1, e = arguments.length; i < e; i++)
                    for (var p in (s = arguments[i]))
                      Object.prototype.hasOwnProperty.call(s, p) &&
                        (t[p] = s[p]);
                  return t;
                }),
              n.apply(this, arguments)
            );
          },
        o =
          (this && this.__spreadArray) ||
          function (t, e, r) {
            if (r || 2 === arguments.length)
              for (var n, i = 0, o = e.length; i < o; i++)
                (!n && i in e) ||
                  (n || (n = Array.prototype.slice.call(e, 0, i)),
                  (n[i] = e[i]));
            return t.concat(n || Array.prototype.slice.call(e));
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.initTooltips = void 0);
      var c = r(151),
        l = r(26),
        d = {
          placement: "top",
          triggerType: "hover",
          onShow: function () {},
          onHide: function () {},
          onToggle: function () {},
        },
        h = { id: null, override: !0 },
        f = (function () {
          function t(t, e, r, o) {
            void 0 === t && (t = null),
              void 0 === e && (e = null),
              void 0 === r && (r = d),
              void 0 === o && (o = h),
              (this._instanceId = o.id ? o.id : t.id),
              (this._targetEl = t),
              (this._triggerEl = e),
              (this._options = n(n({}, d), r)),
              (this._popperInstance = null),
              (this._visible = !1),
              (this._initialized = !1),
              this.init(),
              l.default.addInstance(
                "Tooltip",
                this,
                this._instanceId,
                o.override
              );
          }
          return (
            (t.prototype.init = function () {
              this._triggerEl &&
                this._targetEl &&
                !this._initialized &&
                (this._setupEventListeners(),
                (this._popperInstance = this._createPopperInstance()),
                (this._initialized = !0));
            }),
            (t.prototype.destroy = function () {
              var t = this;
              if (this._initialized) {
                var e = this._getTriggerEvents();
                e.showEvents.forEach(function (e) {
                  t._triggerEl.removeEventListener(e, t._showHandler);
                }),
                  e.hideEvents.forEach(function (e) {
                    t._triggerEl.removeEventListener(e, t._hideHandler);
                  }),
                  this._removeKeydownListener(),
                  this._removeClickOutsideListener(),
                  this._popperInstance && this._popperInstance.destroy(),
                  (this._initialized = !1);
              }
            }),
            (t.prototype.removeInstance = function () {
              l.default.removeInstance("Tooltip", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
              this.destroy(), this.removeInstance();
            }),
            (t.prototype._setupEventListeners = function () {
              var t = this,
                e = this._getTriggerEvents();
              (this._showHandler = function () {
                t.show();
              }),
                (this._hideHandler = function () {
                  t.hide();
                }),
                e.showEvents.forEach(function (e) {
                  t._triggerEl.addEventListener(e, t._showHandler);
                }),
                e.hideEvents.forEach(function (e) {
                  t._triggerEl.addEventListener(e, t._hideHandler);
                });
            }),
            (t.prototype._createPopperInstance = function () {
              return (0, c.createPopper)(this._triggerEl, this._targetEl, {
                placement: this._options.placement,
                modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
              });
            }),
            (t.prototype._getTriggerEvents = function () {
              switch (this._options.triggerType) {
                case "hover":
                default:
                  return {
                    showEvents: ["mouseenter", "focus"],
                    hideEvents: ["mouseleave", "blur"],
                  };
                case "click":
                  return {
                    showEvents: ["click", "focus"],
                    hideEvents: ["focusout", "blur"],
                  };
                case "none":
                  return { showEvents: [], hideEvents: [] };
              }
            }),
            (t.prototype._setupKeydownListener = function () {
              var t = this;
              (this._keydownEventListener = function (e) {
                "Escape" === e.key && t.hide();
              }),
                document.body.addEventListener(
                  "keydown",
                  this._keydownEventListener,
                  !0
                );
            }),
            (t.prototype._removeKeydownListener = function () {
              document.body.removeEventListener(
                "keydown",
                this._keydownEventListener,
                !0
              );
            }),
            (t.prototype._setupClickOutsideListener = function () {
              var t = this;
              (this._clickOutsideEventListener = function (e) {
                t._handleClickOutside(e, t._targetEl);
              }),
                document.body.addEventListener(
                  "click",
                  this._clickOutsideEventListener,
                  !0
                );
            }),
            (t.prototype._removeClickOutsideListener = function () {
              document.body.removeEventListener(
                "click",
                this._clickOutsideEventListener,
                !0
              );
            }),
            (t.prototype._handleClickOutside = function (t, e) {
              var r = t.target;
              r === e ||
                e.contains(r) ||
                this._triggerEl.contains(r) ||
                !this.isVisible() ||
                this.hide();
            }),
            (t.prototype.isVisible = function () {
              return this._visible;
            }),
            (t.prototype.toggle = function () {
              this.isVisible() ? this.hide() : this.show();
            }),
            (t.prototype.show = function () {
              this._targetEl.classList.remove("opacity-0", "invisible"),
                this._targetEl.classList.add("opacity-100", "visible"),
                this._popperInstance.setOptions(function (t) {
                  return n(n({}, t), {
                    modifiers: o(
                      o([], t.modifiers, !0),
                      [{ name: "eventListeners", enabled: !0 }],
                      !1
                    ),
                  });
                }),
                this._setupClickOutsideListener(),
                this._setupKeydownListener(),
                this._popperInstance.update(),
                (this._visible = !0),
                this._options.onShow(this);
            }),
            (t.prototype.hide = function () {
              this._targetEl.classList.remove("opacity-100", "visible"),
                this._targetEl.classList.add("opacity-0", "invisible"),
                this._popperInstance.setOptions(function (t) {
                  return n(n({}, t), {
                    modifiers: o(
                      o([], t.modifiers, !0),
                      [{ name: "eventListeners", enabled: !1 }],
                      !1
                    ),
                  });
                }),
                this._removeClickOutsideListener(),
                this._removeKeydownListener(),
                (this._visible = !1),
                this._options.onHide(this);
            }),
            t
          );
        })();
      function m() {
        document
          .querySelectorAll("[data-tooltip-target]")
          .forEach(function (t) {
            var e = t.getAttribute("data-tooltip-target"),
              r = document.getElementById(e);
            if (r) {
              var n = t.getAttribute("data-tooltip-trigger"),
                o = t.getAttribute("data-tooltip-placement");
              new f(r, t, {
                placement: o || d.placement,
                triggerType: n || d.triggerType,
              });
            } else console.error('The tooltip element with id "'.concat(e, '" does not exist. Please check the data-tooltip-target attribute.'));
          });
      }
      (e.initTooltips = m),
        "undefined" != typeof window &&
          ((window.Tooltip = f), (window.initTooltips = m)),
        (e.default = f);
    },
    121: function (t, e, r) {
      "use strict";
      var n =
          (this && this.__assign) ||
          function () {
            return (
              (n =
                Object.assign ||
                function (t) {
                  for (var s, i = 1, e = arguments.length; i < e; i++)
                    for (var p in (s = arguments[i]))
                      Object.prototype.hasOwnProperty.call(s, p) &&
                        (t[p] = s[p]);
                  return t;
                }),
              n.apply(this, arguments)
            );
          },
        o =
          (this && this.__spreadArray) ||
          function (t, e, r) {
            if (r || 2 === arguments.length)
              for (var n, i = 0, o = e.length; i < o; i++)
                (!n && i in e) ||
                  (n || (n = Array.prototype.slice.call(e, 0, i)),
                  (n[i] = e[i]));
            return t.concat(n || Array.prototype.slice.call(e));
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.initPopovers = void 0);
      var c = r(151),
        l = r(26),
        d = {
          placement: "top",
          offset: 10,
          triggerType: "hover",
          onShow: function () {},
          onHide: function () {},
          onToggle: function () {},
        },
        h = { id: null, override: !0 },
        f = (function () {
          function t(t, e, r, o) {
            void 0 === t && (t = null),
              void 0 === e && (e = null),
              void 0 === r && (r = d),
              void 0 === o && (o = h),
              (this._instanceId = o.id ? o.id : t.id),
              (this._targetEl = t),
              (this._triggerEl = e),
              (this._options = n(n({}, d), r)),
              (this._popperInstance = null),
              (this._visible = !1),
              (this._initialized = !1),
              this.init(),
              l.default.addInstance(
                "Popover",
                this,
                o.id ? o.id : this._targetEl.id,
                o.override
              );
          }
          return (
            (t.prototype.init = function () {
              this._triggerEl &&
                this._targetEl &&
                !this._initialized &&
                (this._setupEventListeners(),
                (this._popperInstance = this._createPopperInstance()),
                (this._initialized = !0));
            }),
            (t.prototype.destroy = function () {
              var t = this;
              if (this._initialized) {
                var e = this._getTriggerEvents();
                e.showEvents.forEach(function (e) {
                  t._triggerEl.removeEventListener(e, t._showHandler),
                    t._targetEl.removeEventListener(e, t._showHandler);
                }),
                  e.hideEvents.forEach(function (e) {
                    t._triggerEl.removeEventListener(e, t._hideHandler),
                      t._targetEl.removeEventListener(e, t._hideHandler);
                  }),
                  this._removeKeydownListener(),
                  this._removeClickOutsideListener(),
                  this._popperInstance && this._popperInstance.destroy(),
                  (this._initialized = !1);
              }
            }),
            (t.prototype.removeInstance = function () {
              l.default.removeInstance("Popover", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
              this.destroy(), this.removeInstance();
            }),
            (t.prototype._setupEventListeners = function () {
              var t = this,
                e = this._getTriggerEvents();
              (this._showHandler = function () {
                t.show();
              }),
                (this._hideHandler = function () {
                  setTimeout(function () {
                    t._targetEl.matches(":hover") || t.hide();
                  }, 100);
                }),
                e.showEvents.forEach(function (e) {
                  t._triggerEl.addEventListener(e, t._showHandler),
                    t._targetEl.addEventListener(e, t._showHandler);
                }),
                e.hideEvents.forEach(function (e) {
                  t._triggerEl.addEventListener(e, t._hideHandler),
                    t._targetEl.addEventListener(e, t._hideHandler);
                });
            }),
            (t.prototype._createPopperInstance = function () {
              return (0, c.createPopper)(this._triggerEl, this._targetEl, {
                placement: this._options.placement,
                modifiers: [
                  {
                    name: "offset",
                    options: { offset: [0, this._options.offset] },
                  },
                ],
              });
            }),
            (t.prototype._getTriggerEvents = function () {
              switch (this._options.triggerType) {
                case "hover":
                default:
                  return {
                    showEvents: ["mouseenter", "focus"],
                    hideEvents: ["mouseleave", "blur"],
                  };
                case "click":
                  return {
                    showEvents: ["click", "focus"],
                    hideEvents: ["focusout", "blur"],
                  };
                case "none":
                  return { showEvents: [], hideEvents: [] };
              }
            }),
            (t.prototype._setupKeydownListener = function () {
              var t = this;
              (this._keydownEventListener = function (e) {
                "Escape" === e.key && t.hide();
              }),
                document.body.addEventListener(
                  "keydown",
                  this._keydownEventListener,
                  !0
                );
            }),
            (t.prototype._removeKeydownListener = function () {
              document.body.removeEventListener(
                "keydown",
                this._keydownEventListener,
                !0
              );
            }),
            (t.prototype._setupClickOutsideListener = function () {
              var t = this;
              (this._clickOutsideEventListener = function (e) {
                t._handleClickOutside(e, t._targetEl);
              }),
                document.body.addEventListener(
                  "click",
                  this._clickOutsideEventListener,
                  !0
                );
            }),
            (t.prototype._removeClickOutsideListener = function () {
              document.body.removeEventListener(
                "click",
                this._clickOutsideEventListener,
                !0
              );
            }),
            (t.prototype._handleClickOutside = function (t, e) {
              var r = t.target;
              r === e ||
                e.contains(r) ||
                this._triggerEl.contains(r) ||
                !this.isVisible() ||
                this.hide();
            }),
            (t.prototype.isVisible = function () {
              return this._visible;
            }),
            (t.prototype.toggle = function () {
              this.isVisible() ? this.hide() : this.show(),
                this._options.onToggle(this);
            }),
            (t.prototype.show = function () {
              this._targetEl.classList.remove("opacity-0", "invisible"),
                this._targetEl.classList.add("opacity-100", "visible"),
                this._popperInstance.setOptions(function (t) {
                  return n(n({}, t), {
                    modifiers: o(
                      o([], t.modifiers, !0),
                      [{ name: "eventListeners", enabled: !0 }],
                      !1
                    ),
                  });
                }),
                this._setupClickOutsideListener(),
                this._setupKeydownListener(),
                this._popperInstance.update(),
                (this._visible = !0),
                this._options.onShow(this);
            }),
            (t.prototype.hide = function () {
              this._targetEl.classList.remove("opacity-100", "visible"),
                this._targetEl.classList.add("opacity-0", "invisible"),
                this._popperInstance.setOptions(function (t) {
                  return n(n({}, t), {
                    modifiers: o(
                      o([], t.modifiers, !0),
                      [{ name: "eventListeners", enabled: !1 }],
                      !1
                    ),
                  });
                }),
                this._removeClickOutsideListener(),
                this._removeKeydownListener(),
                (this._visible = !1),
                this._options.onHide(this);
            }),
            t
          );
        })();
      function m() {
        document
          .querySelectorAll("[data-popover-target]")
          .forEach(function (t) {
            var e = t.getAttribute("data-popover-target"),
              r = document.getElementById(e);
            if (r) {
              var n = t.getAttribute("data-popover-trigger"),
                o = t.getAttribute("data-popover-placement"),
                c = t.getAttribute("data-popover-offset");
              new f(r, t, {
                placement: o || d.placement,
                offset: c ? parseInt(c) : d.offset,
                triggerType: n || d.triggerType,
              });
            } else console.error('The popover element with id "'.concat(e, '" does not exist. Please check the data-popover-target attribute.'));
          });
      }
      (e.initPopovers = m),
        "undefined" != typeof window &&
          ((window.Popover = f), (window.initPopovers = m)),
        (e.default = f);
    },
    122: function (t, e, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (t) {
                for (var s, i = 1, e = arguments.length; i < e; i++)
                  for (var p in (s = arguments[i]))
                    Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                return t;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.initDials = void 0);
      var o = r(26),
        c = {
          triggerType: "hover",
          onShow: function () {},
          onHide: function () {},
          onToggle: function () {},
        },
        l = { id: null, override: !0 },
        d = (function () {
          function t(t, e, r, d, h) {
            void 0 === t && (t = null),
              void 0 === e && (e = null),
              void 0 === r && (r = null),
              void 0 === d && (d = c),
              void 0 === h && (h = l),
              (this._instanceId = h.id ? h.id : r.id),
              (this._parentEl = t),
              (this._triggerEl = e),
              (this._targetEl = r),
              (this._options = n(n({}, c), d)),
              (this._visible = !1),
              (this._initialized = !1),
              this.init(),
              o.default.addInstance("Dial", this, this._instanceId, h.override);
          }
          return (
            (t.prototype.init = function () {
              var t = this;
              if (this._triggerEl && this._targetEl && !this._initialized) {
                var e = this._getTriggerEventTypes(this._options.triggerType);
                (this._showEventHandler = function () {
                  t.show();
                }),
                  e.showEvents.forEach(function (e) {
                    t._triggerEl.addEventListener(e, t._showEventHandler),
                      t._targetEl.addEventListener(e, t._showEventHandler);
                  }),
                  (this._hideEventHandler = function () {
                    t._parentEl.matches(":hover") || t.hide();
                  }),
                  e.hideEvents.forEach(function (e) {
                    t._parentEl.addEventListener(e, t._hideEventHandler);
                  }),
                  (this._initialized = !0);
              }
            }),
            (t.prototype.destroy = function () {
              var t = this;
              if (this._initialized) {
                var e = this._getTriggerEventTypes(this._options.triggerType);
                e.showEvents.forEach(function (e) {
                  t._triggerEl.removeEventListener(e, t._showEventHandler),
                    t._targetEl.removeEventListener(e, t._showEventHandler);
                }),
                  e.hideEvents.forEach(function (e) {
                    t._parentEl.removeEventListener(e, t._hideEventHandler);
                  }),
                  (this._initialized = !1);
              }
            }),
            (t.prototype.removeInstance = function () {
              o.default.removeInstance("Dial", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
              this.destroy(), this.removeInstance();
            }),
            (t.prototype.hide = function () {
              this._targetEl.classList.add("hidden"),
                this._triggerEl &&
                  this._triggerEl.setAttribute("aria-expanded", "false"),
                (this._visible = !1),
                this._options.onHide(this);
            }),
            (t.prototype.show = function () {
              this._targetEl.classList.remove("hidden"),
                this._triggerEl &&
                  this._triggerEl.setAttribute("aria-expanded", "true"),
                (this._visible = !0),
                this._options.onShow(this);
            }),
            (t.prototype.toggle = function () {
              this._visible ? this.hide() : this.show();
            }),
            (t.prototype.isHidden = function () {
              return !this._visible;
            }),
            (t.prototype.isVisible = function () {
              return this._visible;
            }),
            (t.prototype._getTriggerEventTypes = function (t) {
              switch (t) {
                case "hover":
                default:
                  return {
                    showEvents: ["mouseenter", "focus"],
                    hideEvents: ["mouseleave", "blur"],
                  };
                case "click":
                  return {
                    showEvents: ["click", "focus"],
                    hideEvents: ["focusout", "blur"],
                  };
                case "none":
                  return { showEvents: [], hideEvents: [] };
              }
            }),
            t
          );
        })();
      function h() {
        document.querySelectorAll("[data-dial-init]").forEach(function (t) {
          var e = t.querySelector("[data-dial-toggle]");
          if (e) {
            var r = e.getAttribute("data-dial-toggle"),
              n = document.getElementById(r);
            if (n) {
              var o = e.getAttribute("data-dial-trigger");
              new d(t, e, n, { triggerType: o || c.triggerType });
            } else
              console.error(
                "Dial with id ".concat(
                  r,
                  " does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"
                )
              );
          } else console.error("Dial with id ".concat(t.id, " does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"));
        });
      }
      (e.initDials = h),
        "undefined" != typeof window &&
          ((window.Dial = d), (window.initDials = h)),
        (e.default = d);
    },
    123: function (t, e, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (t) {
                for (var s, i = 1, e = arguments.length; i < e; i++)
                  for (var p in (s = arguments[i]))
                    Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                return t;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.initInputCounters = void 0);
      var o = r(26),
        c = {
          minValue: null,
          maxValue: null,
          onIncrement: function () {},
          onDecrement: function () {},
        },
        l = { id: null, override: !0 },
        d = (function () {
          function t(t, e, r, d, h) {
            void 0 === t && (t = null),
              void 0 === e && (e = null),
              void 0 === r && (r = null),
              void 0 === d && (d = c),
              void 0 === h && (h = l),
              (this._instanceId = h.id ? h.id : t.id),
              (this._targetEl = t),
              (this._incrementEl = e),
              (this._decrementEl = r),
              (this._options = n(n({}, c), d)),
              (this._initialized = !1),
              this.init(),
              o.default.addInstance(
                "InputCounter",
                this,
                this._instanceId,
                h.override
              );
          }
          return (
            (t.prototype.init = function () {
              var t = this;
              this._targetEl &&
                !this._initialized &&
                ((this._inputHandler = function (e) {
                  var r = e.target;
                  /^\d*$/.test(r.value) ||
                    (r.value = r.value.replace(/[^\d]/g, "")),
                    null !== t._options.maxValue &&
                      parseInt(r.value) > t._options.maxValue &&
                      (r.value = t._options.maxValue.toString()),
                    null !== t._options.minValue &&
                      parseInt(r.value) < t._options.minValue &&
                      (r.value = t._options.minValue.toString());
                }),
                (this._incrementClickHandler = function () {
                  t.increment();
                }),
                (this._decrementClickHandler = function () {
                  t.decrement();
                }),
                this._targetEl.addEventListener("input", this._inputHandler),
                this._incrementEl &&
                  this._incrementEl.addEventListener(
                    "click",
                    this._incrementClickHandler
                  ),
                this._decrementEl &&
                  this._decrementEl.addEventListener(
                    "click",
                    this._decrementClickHandler
                  ),
                (this._initialized = !0));
            }),
            (t.prototype.destroy = function () {
              this._targetEl &&
                this._initialized &&
                (this._targetEl.removeEventListener(
                  "input",
                  this._inputHandler
                ),
                this._incrementEl &&
                  this._incrementEl.removeEventListener(
                    "click",
                    this._incrementClickHandler
                  ),
                this._decrementEl &&
                  this._decrementEl.removeEventListener(
                    "click",
                    this._decrementClickHandler
                  ),
                (this._initialized = !1));
            }),
            (t.prototype.removeInstance = function () {
              o.default.removeInstance("InputCounter", this._instanceId);
            }),
            (t.prototype.destroyAndRemoveInstance = function () {
              this.destroy(), this.removeInstance();
            }),
            (t.prototype.getCurrentValue = function () {
              return parseInt(this._targetEl.value) || 0;
            }),
            (t.prototype.increment = function () {
              (null !== this._options.maxValue &&
                this.getCurrentValue() >= this._options.maxValue) ||
                ((this._targetEl.value = (
                  this.getCurrentValue() + 1
                ).toString()),
                this._options.onIncrement(this));
            }),
            (t.prototype.decrement = function () {
              (null !== this._options.minValue &&
                this.getCurrentValue() <= this._options.minValue) ||
                ((this._targetEl.value = (
                  this.getCurrentValue() - 1
                ).toString()),
                this._options.onDecrement(this));
            }),
            t
          );
        })();
      function h() {
        document.querySelectorAll("[data-input-counter]").forEach(function (t) {
          var e = t.id,
            r = document.querySelector(
              '[data-input-counter-increment="' + e + '"]'
            ),
            n = document.querySelector(
              '[data-input-counter-decrement="' + e + '"]'
            ),
            c = t.getAttribute("data-input-counter-min"),
            l = t.getAttribute("data-input-counter-max");
          t
            ? o.default.instanceExists("InputCounter", t.getAttribute("id")) ||
              new d(t, r || null, n || null, {
                minValue: c ? parseInt(c) : null,
                maxValue: l ? parseInt(l) : null,
              })
            : console.error(
                'The target element with id "'.concat(
                  e,
                  '" does not exist. Please check the data-input-counter attribute.'
                )
              );
        });
      }
      (e.initInputCounters = h),
        "undefined" != typeof window &&
          ((window.InputCounter = d), (window.initInputCounters = h)),
        (e.default = d);
    },
    151: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, "top", function () {
          return n;
        }),
        r.d(e, "bottom", function () {
          return o;
        }),
        r.d(e, "right", function () {
          return c;
        }),
        r.d(e, "left", function () {
          return l;
        }),
        r.d(e, "auto", function () {
          return d;
        }),
        r.d(e, "basePlacements", function () {
          return h;
        }),
        r.d(e, "start", function () {
          return f;
        }),
        r.d(e, "end", function () {
          return m;
        }),
        r.d(e, "clippingParents", function () {
          return v;
        }),
        r.d(e, "viewport", function () {
          return y;
        }),
        r.d(e, "popper", function () {
          return w;
        }),
        r.d(e, "reference", function () {
          return x;
        }),
        r.d(e, "variationPlacements", function () {
          return _;
        }),
        r.d(e, "placements", function () {
          return k;
        }),
        r.d(e, "beforeRead", function () {
          return E;
        }),
        r.d(e, "read", function () {
          return C;
        }),
        r.d(e, "afterRead", function () {
          return T;
        }),
        r.d(e, "beforeMain", function () {
          return S;
        }),
        r.d(e, "main", function () {
          return main;
        }),
        r.d(e, "afterMain", function () {
          return O;
        }),
        r.d(e, "beforeWrite", function () {
          return A;
        }),
        r.d(e, "write", function () {
          return j;
        }),
        r.d(e, "afterWrite", function () {
          return D;
        }),
        r.d(e, "modifierPhases", function () {
          return I;
        }),
        r.d(e, "applyStyles", function () {
          return N;
        }),
        r.d(e, "arrow", function () {
          return at;
        }),
        r.d(e, "computeStyles", function () {
          return ut;
        }),
        r.d(e, "eventListeners", function () {
          return ht;
        }),
        r.d(e, "flip", function () {
          return Ot;
        }),
        r.d(e, "hide", function () {
          return Dt;
        }),
        r.d(e, "offset", function () {
          return It;
        }),
        r.d(e, "popperOffsets", function () {
          return Lt;
        }),
        r.d(e, "preventOverflow", function () {
          return $t;
        }),
        r.d(e, "popperGenerator", function () {
          return qt;
        }),
        r.d(e, "detectOverflow", function () {
          return St;
        }),
        r.d(e, "createPopperBase", function () {
          return Ht;
        }),
        r.d(e, "createPopper", function () {
          return Ft;
        }),
        r.d(e, "createPopperLite", function () {
          return Rt;
        });
      var n = "top",
        o = "bottom",
        c = "right",
        l = "left",
        d = "auto",
        h = [n, o, c, l],
        f = "start",
        m = "end",
        v = "clippingParents",
        y = "viewport",
        w = "popper",
        x = "reference",
        _ = h.reduce(function (t, e) {
          return t.concat([e + "-" + f, e + "-" + m]);
        }, []),
        k = [].concat(h, [d]).reduce(function (t, e) {
          return t.concat([e, e + "-" + f, e + "-" + m]);
        }, []),
        E = "beforeRead",
        C = "read",
        T = "afterRead",
        S = "beforeMain",
        main = "main",
        O = "afterMain",
        A = "beforeWrite",
        j = "write",
        D = "afterWrite",
        I = [E, C, T, S, main, O, A, j, D];
      function L(element) {
        return element ? (element.nodeName || "").toLowerCase() : null;
      }
      function $(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
          var e = t.ownerDocument;
          return (e && e.defaultView) || window;
        }
        return t;
      }
      function P(t) {
        return t instanceof $(t).Element || t instanceof Element;
      }
      function z(t) {
        return t instanceof $(t).HTMLElement || t instanceof HTMLElement;
      }
      function M(t) {
        return (
          "undefined" != typeof ShadowRoot &&
          (t instanceof $(t).ShadowRoot || t instanceof ShadowRoot)
        );
      }
      var N = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (t) {
          var e = t.state;
          Object.keys(e.elements).forEach(function (t) {
            var style = e.styles[t] || {},
              r = e.attributes[t] || {},
              element = e.elements[t];
            z(element) &&
              L(element) &&
              (Object.assign(element.style, style),
              Object.keys(r).forEach(function (t) {
                var e = r[t];
                !1 === e
                  ? element.removeAttribute(t)
                  : element.setAttribute(t, !0 === e ? "" : e);
              }));
          });
        },
        effect: function (t) {
          var e = t.state,
            r = {
              popper: {
                position: e.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          return (
            Object.assign(e.elements.popper.style, r.popper),
            (e.styles = r),
            e.elements.arrow && Object.assign(e.elements.arrow.style, r.arrow),
            function () {
              Object.keys(e.elements).forEach(function (t) {
                var element = e.elements[t],
                  n = e.attributes[t] || {},
                  style = Object.keys(
                    e.styles.hasOwnProperty(t) ? e.styles[t] : r[t]
                  ).reduce(function (style, t) {
                    return (style[t] = ""), style;
                  }, {});
                z(element) &&
                  L(element) &&
                  (Object.assign(element.style, style),
                  Object.keys(n).forEach(function (t) {
                    element.removeAttribute(t);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      };
      function H(t) {
        return t.split("-")[0];
      }
      var F = Math.max,
        R = Math.min,
        B = Math.round;
      function W() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands)
          ? t.brands
              .map(function (t) {
                return t.brand + "/" + t.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function U() {
        return !/^((?!chrome|android).)*safari/i.test(W());
      }
      function V(element, t, e) {
        void 0 === t && (t = !1), void 0 === e && (e = !1);
        var r = element.getBoundingClientRect(),
          n = 1,
          o = 1;
        t &&
          z(element) &&
          ((n =
            (element.offsetWidth > 0 && B(r.width) / element.offsetWidth) || 1),
          (o =
            (element.offsetHeight > 0 && B(r.height) / element.offsetHeight) ||
            1));
        var c = (P(element) ? $(element) : window).visualViewport,
          l = !U() && e,
          d = (r.left + (l && c ? c.offsetLeft : 0)) / n,
          h = (r.top + (l && c ? c.offsetTop : 0)) / o,
          f = r.width / n,
          m = r.height / o;
        return {
          width: f,
          height: m,
          top: h,
          right: d + f,
          bottom: h + m,
          left: d,
          x: d,
          y: h,
        };
      }
      function Y(element) {
        var t = V(element),
          e = element.offsetWidth,
          r = element.offsetHeight;
        return (
          Math.abs(t.width - e) <= 1 && (e = t.width),
          Math.abs(t.height - r) <= 1 && (r = t.height),
          { x: element.offsetLeft, y: element.offsetTop, width: e, height: r }
        );
      }
      function Z(t, e) {
        var r = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (r && M(r)) {
          var n = e;
          do {
            if (n && t.isSameNode(n)) return !0;
            n = n.parentNode || n.host;
          } while (n);
        }
        return !1;
      }
      function X(element) {
        return $(element).getComputedStyle(element);
      }
      function Q(element) {
        return ["table", "td", "th"].indexOf(L(element)) >= 0;
      }
      function G(element) {
        return (
          (P(element) ? element.ownerDocument : element.document) ||
          window.document
        ).documentElement;
      }
      function K(element) {
        return "html" === L(element)
          ? element
          : element.assignedSlot ||
              element.parentNode ||
              (M(element) ? element.host : null) ||
              G(element);
      }
      function J(element) {
        return z(element) && "fixed" !== X(element).position
          ? element.offsetParent
          : null;
      }
      function tt(element) {
        for (
          var t = $(element), e = J(element);
          e && Q(e) && "static" === X(e).position;

        )
          e = J(e);
        return e &&
          ("html" === L(e) || ("body" === L(e) && "static" === X(e).position))
          ? t
          : e ||
              (function (element) {
                var t = /firefox/i.test(W());
                if (
                  /Trident/i.test(W()) &&
                  z(element) &&
                  "fixed" === X(element).position
                )
                  return null;
                var e = K(element);
                for (
                  M(e) && (e = e.host);
                  z(e) && ["html", "body"].indexOf(L(e)) < 0;

                ) {
                  var r = X(e);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return e;
                  e = e.parentNode;
                }
                return null;
              })(element) ||
              t;
      }
      function et(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
      }
      function nt(t, e, r) {
        return F(t, R(e, r));
      }
      function it(t) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
      }
      function ot(t, e) {
        return e.reduce(function (e, r) {
          return (e[r] = t), e;
        }, {});
      }
      var at = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e,
            r = t.state,
            d = t.name,
            f = t.options,
            m = r.elements.arrow,
            v = r.modifiersData.popperOffsets,
            y = H(r.placement),
            w = et(y),
            x = [l, c].indexOf(y) >= 0 ? "height" : "width";
          if (m && v) {
            var _ = (function (t, e) {
                return it(
                  "number" !=
                    typeof (t =
                      "function" == typeof t
                        ? t(
                            Object.assign({}, e.rects, {
                              placement: e.placement,
                            })
                          )
                        : t)
                    ? t
                    : ot(t, h)
                );
              })(f.padding, r),
              k = Y(m),
              E = "y" === w ? n : l,
              C = "y" === w ? o : c,
              T =
                r.rects.reference[x] +
                r.rects.reference[w] -
                v[w] -
                r.rects.popper[x],
              S = v[w] - r.rects.reference[w],
              O = tt(m),
              A = O
                ? "y" === w
                  ? O.clientHeight || 0
                  : O.clientWidth || 0
                : 0,
              j = T / 2 - S / 2,
              D = _[E],
              I = A - k[x] - _[C],
              L = A / 2 - k[x] / 2 + j,
              $ = nt(D, L, I),
              P = w;
            r.modifiersData[d] =
              (((e = {})[P] = $), (e.centerOffset = $ - L), e);
          }
        },
        effect: function (t) {
          var e = t.state,
            r = t.options.element,
            n = void 0 === r ? "[data-popper-arrow]" : r;
          null != n &&
            ("string" != typeof n ||
              (n = e.elements.popper.querySelector(n))) &&
            Z(e.elements.popper, n) &&
            (e.elements.arrow = n);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function st(t) {
        return t.split("-")[1];
      }
      var ct = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function lt(t) {
        var e,
          r = t.popper,
          d = t.popperRect,
          h = t.placement,
          f = t.variation,
          v = t.offsets,
          y = t.position,
          w = t.gpuAcceleration,
          x = t.adaptive,
          _ = t.roundOffsets,
          k = t.isFixed,
          E = v.x,
          C = void 0 === E ? 0 : E,
          T = v.y,
          S = void 0 === T ? 0 : T,
          O = "function" == typeof _ ? _({ x: C, y: S }) : { x: C, y: S };
        (C = O.x), (S = O.y);
        var A = v.hasOwnProperty("x"),
          j = v.hasOwnProperty("y"),
          D = l,
          I = n,
          L = window;
        if (x) {
          var P = tt(r),
            z = "clientHeight",
            M = "clientWidth";
          if (
            (P === $(r) &&
              "static" !== X((P = G(r))).position &&
              "absolute" === y &&
              ((z = "scrollHeight"), (M = "scrollWidth")),
            h === n || ((h === l || h === c) && f === m))
          )
            (I = o),
              (S -=
                (k && P === L && L.visualViewport
                  ? L.visualViewport.height
                  : P[z]) - d.height),
              (S *= w ? 1 : -1);
          if (h === l || ((h === n || h === o) && f === m))
            (D = c),
              (C -=
                (k && P === L && L.visualViewport
                  ? L.visualViewport.width
                  : P[M]) - d.width),
              (C *= w ? 1 : -1);
        }
        var N,
          H = Object.assign({ position: y }, x && ct),
          F =
            !0 === _
              ? (function (t, e) {
                  var r = t.x,
                    n = t.y,
                    o = e.devicePixelRatio || 1;
                  return { x: B(r * o) / o || 0, y: B(n * o) / o || 0 };
                })({ x: C, y: S }, $(r))
              : { x: C, y: S };
        return (
          (C = F.x),
          (S = F.y),
          w
            ? Object.assign(
                {},
                H,
                (((N = {})[I] = j ? "0" : ""),
                (N[D] = A ? "0" : ""),
                (N.transform =
                  (L.devicePixelRatio || 1) <= 1
                    ? "translate(" + C + "px, " + S + "px)"
                    : "translate3d(" + C + "px, " + S + "px, 0)"),
                N)
              )
            : Object.assign(
                {},
                H,
                (((e = {})[I] = j ? S + "px" : ""),
                (e[D] = A ? C + "px" : ""),
                (e.transform = ""),
                e)
              )
        );
      }
      var ut = {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function (t) {
            var e = t.state,
              r = t.options,
              n = r.gpuAcceleration,
              o = void 0 === n || n,
              c = r.adaptive,
              l = void 0 === c || c,
              d = r.roundOffsets,
              h = void 0 === d || d,
              f = {
                placement: H(e.placement),
                variation: st(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: o,
                isFixed: "fixed" === e.options.strategy,
              };
            null != e.modifiersData.popperOffsets &&
              (e.styles.popper = Object.assign(
                {},
                e.styles.popper,
                lt(
                  Object.assign({}, f, {
                    offsets: e.modifiersData.popperOffsets,
                    position: e.options.strategy,
                    adaptive: l,
                    roundOffsets: h,
                  })
                )
              )),
              null != e.modifiersData.arrow &&
                (e.styles.arrow = Object.assign(
                  {},
                  e.styles.arrow,
                  lt(
                    Object.assign({}, f, {
                      offsets: e.modifiersData.arrow,
                      position: "absolute",
                      adaptive: !1,
                      roundOffsets: h,
                    })
                  )
                )),
              (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement,
              }));
          },
          data: {},
        },
        pt = { passive: !0 };
      var ht = {
          name: "eventListeners",
          enabled: !0,
          phase: "write",
          fn: function () {},
          effect: function (t) {
            var e = t.state,
              r = t.instance,
              n = t.options,
              o = n.scroll,
              c = void 0 === o || o,
              l = n.resize,
              d = void 0 === l || l,
              h = $(e.elements.popper),
              f = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return (
              c &&
                f.forEach(function (t) {
                  t.addEventListener("scroll", r.update, pt);
                }),
              d && h.addEventListener("resize", r.update, pt),
              function () {
                c &&
                  f.forEach(function (t) {
                    t.removeEventListener("scroll", r.update, pt);
                  }),
                  d && h.removeEventListener("resize", r.update, pt);
              }
            );
          },
          data: {},
        },
        ft = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function gt(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
          return ft[t];
        });
      }
      var mt = { start: "end", end: "start" };
      function vt(t) {
        return t.replace(/start|end/g, function (t) {
          return mt[t];
        });
      }
      function yt(t) {
        var e = $(t);
        return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function wt(element) {
        return V(G(element)).left + yt(element).scrollLeft;
      }
      function bt(element) {
        var t = X(element),
          e = t.overflow,
          r = t.overflowX,
          n = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(e + n + r);
      }
      function xt(t) {
        return ["html", "body", "#document"].indexOf(L(t)) >= 0
          ? t.ownerDocument.body
          : z(t) && bt(t)
          ? t
          : xt(K(t));
      }
      function _t(element, t) {
        var e;
        void 0 === t && (t = []);
        var r = xt(element),
          n = r === (null == (e = element.ownerDocument) ? void 0 : e.body),
          o = $(r),
          c = n ? [o].concat(o.visualViewport || [], bt(r) ? r : []) : r,
          l = t.concat(c);
        return n ? l : l.concat(_t(K(c)));
      }
      function kt(rect) {
        return Object.assign({}, rect, {
          left: rect.x,
          top: rect.y,
          right: rect.x + rect.width,
          bottom: rect.y + rect.height,
        });
      }
      function Et(element, t, e) {
        return t === y
          ? kt(
              (function (element, t) {
                var e = $(element),
                  html = G(element),
                  r = e.visualViewport,
                  n = html.clientWidth,
                  o = html.clientHeight,
                  c = 0,
                  l = 0;
                if (r) {
                  (n = r.width), (o = r.height);
                  var d = U();
                  (d || (!d && "fixed" === t)) &&
                    ((c = r.offsetLeft), (l = r.offsetTop));
                }
                return { width: n, height: o, x: c + wt(element), y: l };
              })(element, e)
            )
          : P(t)
          ? (function (element, t) {
              var rect = V(element, !1, "fixed" === t);
              return (
                (rect.top = rect.top + element.clientTop),
                (rect.left = rect.left + element.clientLeft),
                (rect.bottom = rect.top + element.clientHeight),
                (rect.right = rect.left + element.clientWidth),
                (rect.width = element.clientWidth),
                (rect.height = element.clientHeight),
                (rect.x = rect.left),
                (rect.y = rect.top),
                rect
              );
            })(t, e)
          : kt(
              (function (element) {
                var t,
                  html = G(element),
                  e = yt(element),
                  body = null == (t = element.ownerDocument) ? void 0 : t.body,
                  r = F(
                    html.scrollWidth,
                    html.clientWidth,
                    body ? body.scrollWidth : 0,
                    body ? body.clientWidth : 0
                  ),
                  n = F(
                    html.scrollHeight,
                    html.clientHeight,
                    body ? body.scrollHeight : 0,
                    body ? body.clientHeight : 0
                  ),
                  o = -e.scrollLeft + wt(element),
                  c = -e.scrollTop;
                return (
                  "rtl" === X(body || html).direction &&
                    (o += F(html.clientWidth, body ? body.clientWidth : 0) - r),
                  { width: r, height: n, x: o, y: c }
                );
              })(G(element))
            );
      }
      function Ct(element, t, e, r) {
        var n =
            "clippingParents" === t
              ? (function (element) {
                  var t = _t(K(element)),
                    e =
                      ["absolute", "fixed"].indexOf(X(element).position) >= 0 &&
                      z(element)
                        ? tt(element)
                        : element;
                  return P(e)
                    ? t.filter(function (t) {
                        return P(t) && Z(t, e) && "body" !== L(t);
                      })
                    : [];
                })(element)
              : [].concat(t),
          o = [].concat(n, [e]),
          c = o[0],
          l = o.reduce(function (t, e) {
            var rect = Et(element, e, r);
            return (
              (t.top = F(rect.top, t.top)),
              (t.right = R(rect.right, t.right)),
              (t.bottom = R(rect.bottom, t.bottom)),
              (t.left = F(rect.left, t.left)),
              t
            );
          }, Et(element, c, r));
        return (
          (l.width = l.right - l.left),
          (l.height = l.bottom - l.top),
          (l.x = l.left),
          (l.y = l.top),
          l
        );
      }
      function Tt(t) {
        var e,
          r = t.reference,
          element = t.element,
          d = t.placement,
          h = d ? H(d) : null,
          v = d ? st(d) : null,
          y = r.x + r.width / 2 - element.width / 2,
          w = r.y + r.height / 2 - element.height / 2;
        switch (h) {
          case n:
            e = { x: y, y: r.y - element.height };
            break;
          case o:
            e = { x: y, y: r.y + r.height };
            break;
          case c:
            e = { x: r.x + r.width, y: w };
            break;
          case l:
            e = { x: r.x - element.width, y: w };
            break;
          default:
            e = { x: r.x, y: r.y };
        }
        var x = h ? et(h) : null;
        if (null != x) {
          var _ = "y" === x ? "height" : "width";
          switch (v) {
            case f:
              e[x] = e[x] - (r[_] / 2 - element[_] / 2);
              break;
            case m:
              e[x] = e[x] + (r[_] / 2 - element[_] / 2);
          }
        }
        return e;
      }
      function St(t, e) {
        void 0 === e && (e = {});
        var r = e,
          l = r.placement,
          d = void 0 === l ? t.placement : l,
          f = r.strategy,
          m = void 0 === f ? t.strategy : f,
          _ = r.boundary,
          k = void 0 === _ ? v : _,
          E = r.rootBoundary,
          C = void 0 === E ? y : E,
          T = r.elementContext,
          S = void 0 === T ? w : T,
          O = r.altBoundary,
          A = void 0 !== O && O,
          j = r.padding,
          D = void 0 === j ? 0 : j,
          I = it("number" != typeof D ? D : ot(D, h)),
          L = S === w ? x : w,
          $ = t.rects.popper,
          element = t.elements[A ? L : S],
          z = Ct(
            P(element)
              ? element
              : element.contextElement || G(t.elements.popper),
            k,
            C,
            m
          ),
          M = V(t.elements.reference),
          N = Tt({
            reference: M,
            element: $,
            strategy: "absolute",
            placement: d,
          }),
          H = kt(Object.assign({}, $, N)),
          F = S === w ? H : M,
          R = {
            top: z.top - F.top + I.top,
            bottom: F.bottom - z.bottom + I.bottom,
            left: z.left - F.left + I.left,
            right: F.right - z.right + I.right,
          },
          B = t.modifiersData.offset;
        if (S === w && B) {
          var W = B[d];
          Object.keys(R).forEach(function (t) {
            var e = [c, o].indexOf(t) >= 0 ? 1 : -1,
              r = [n, o].indexOf(t) >= 0 ? "y" : "x";
            R[t] += W[r] * e;
          });
        }
        return R;
      }
      var Ot = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e = t.state,
            r = t.options,
            m = t.name;
          if (!e.modifiersData[m]._skip) {
            for (
              var v = r.mainAxis,
                y = void 0 === v || v,
                w = r.altAxis,
                x = void 0 === w || w,
                E = r.fallbackPlacements,
                C = r.padding,
                T = r.boundary,
                S = r.rootBoundary,
                O = r.altBoundary,
                A = r.flipVariations,
                j = void 0 === A || A,
                D = r.allowedAutoPlacements,
                I = e.options.placement,
                L = H(I),
                $ =
                  E ||
                  (L === I || !j
                    ? [gt(I)]
                    : (function (t) {
                        if (H(t) === d) return [];
                        var e = gt(t);
                        return [vt(t), e, vt(e)];
                      })(I)),
                P = [I].concat($).reduce(function (t, r) {
                  return t.concat(
                    H(r) === d
                      ? (function (t, e) {
                          void 0 === e && (e = {});
                          var r = e,
                            n = r.placement,
                            o = r.boundary,
                            c = r.rootBoundary,
                            l = r.padding,
                            d = r.flipVariations,
                            f = r.allowedAutoPlacements,
                            m = void 0 === f ? k : f,
                            v = st(n),
                            y = v
                              ? d
                                ? _
                                : _.filter(function (t) {
                                    return st(t) === v;
                                  })
                              : h,
                            w = y.filter(function (t) {
                              return m.indexOf(t) >= 0;
                            });
                          0 === w.length && (w = y);
                          var x = w.reduce(function (e, r) {
                            return (
                              (e[r] = St(t, {
                                placement: r,
                                boundary: o,
                                rootBoundary: c,
                                padding: l,
                              })[H(r)]),
                              e
                            );
                          }, {});
                          return Object.keys(x).sort(function (a, b) {
                            return x[a] - x[b];
                          });
                        })(e, {
                          placement: r,
                          boundary: T,
                          rootBoundary: S,
                          padding: C,
                          flipVariations: j,
                          allowedAutoPlacements: D,
                        })
                      : r
                  );
                }, []),
                z = e.rects.reference,
                M = e.rects.popper,
                N = new Map(),
                F = !0,
                R = P[0],
                i = 0;
              i < P.length;
              i++
            ) {
              var B = P[i],
                W = H(B),
                U = st(B) === f,
                V = [n, o].indexOf(W) >= 0,
                Y = V ? "width" : "height",
                Z = St(e, {
                  placement: B,
                  boundary: T,
                  rootBoundary: S,
                  altBoundary: O,
                  padding: C,
                }),
                X = V ? (U ? c : l) : U ? o : n;
              z[Y] > M[Y] && (X = gt(X));
              var Q = gt(X),
                G = [];
              if (
                (y && G.push(Z[W] <= 0),
                x && G.push(Z[X] <= 0, Z[Q] <= 0),
                G.every(function (t) {
                  return t;
                }))
              ) {
                (R = B), (F = !1);
                break;
              }
              N.set(B, G);
            }
            if (F)
              for (
                var K = function (t) {
                    var e = P.find(function (e) {
                      var r = N.get(e);
                      if (r)
                        return r.slice(0, t).every(function (t) {
                          return t;
                        });
                    });
                    if (e) return (R = e), "break";
                  },
                  J = j ? 3 : 1;
                J > 0;
                J--
              ) {
                if ("break" === K(J)) break;
              }
            e.placement !== R &&
              ((e.modifiersData[m]._skip = !0),
              (e.placement = R),
              (e.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function At(t, rect, e) {
        return (
          void 0 === e && (e = { x: 0, y: 0 }),
          {
            top: t.top - rect.height - e.y,
            right: t.right - rect.width + e.x,
            bottom: t.bottom - rect.height + e.y,
            left: t.left - rect.width - e.x,
          }
        );
      }
      function jt(t) {
        return [n, c, o, l].some(function (e) {
          return t[e] >= 0;
        });
      }
      var Dt = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (t) {
          var e = t.state,
            r = t.name,
            n = e.rects.reference,
            o = e.rects.popper,
            c = e.modifiersData.preventOverflow,
            l = St(e, { elementContext: "reference" }),
            d = St(e, { altBoundary: !0 }),
            h = At(l, n),
            f = At(d, o, c),
            m = jt(h),
            v = jt(f);
          (e.modifiersData[r] = {
            referenceClippingOffsets: h,
            popperEscapeOffsets: f,
            isReferenceHidden: m,
            hasPopperEscaped: v,
          }),
            (e.attributes.popper = Object.assign({}, e.attributes.popper, {
              "data-popper-reference-hidden": m,
              "data-popper-escaped": v,
            }));
        },
      };
      var It = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (t) {
          var e = t.state,
            r = t.options,
            o = t.name,
            d = r.offset,
            h = void 0 === d ? [0, 0] : d,
            data = k.reduce(function (t, r) {
              return (
                (t[r] = (function (t, e, r) {
                  var o = H(t),
                    d = [l, n].indexOf(o) >= 0 ? -1 : 1,
                    h =
                      "function" == typeof r
                        ? r(Object.assign({}, e, { placement: t }))
                        : r,
                    f = h[0],
                    m = h[1];
                  return (
                    (f = f || 0),
                    (m = (m || 0) * d),
                    [l, c].indexOf(o) >= 0 ? { x: m, y: f } : { x: f, y: m }
                  );
                })(r, e.rects, h)),
                t
              );
            }, {}),
            f = data[e.placement],
            m = f.x,
            v = f.y;
          null != e.modifiersData.popperOffsets &&
            ((e.modifiersData.popperOffsets.x += m),
            (e.modifiersData.popperOffsets.y += v)),
            (e.modifiersData[o] = data);
        },
      };
      var Lt = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (t) {
          var e = t.state,
            r = t.name;
          e.modifiersData[r] = Tt({
            reference: e.rects.reference,
            element: e.rects.popper,
            strategy: "absolute",
            placement: e.placement,
          });
        },
        data: {},
      };
      var $t = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e = t.state,
            r = t.options,
            d = t.name,
            h = r.mainAxis,
            m = void 0 === h || h,
            v = r.altAxis,
            y = void 0 !== v && v,
            w = r.boundary,
            x = r.rootBoundary,
            _ = r.altBoundary,
            k = r.padding,
            E = r.tether,
            C = void 0 === E || E,
            T = r.tetherOffset,
            S = void 0 === T ? 0 : T,
            O = St(e, {
              boundary: w,
              rootBoundary: x,
              padding: k,
              altBoundary: _,
            }),
            A = H(e.placement),
            j = st(e.placement),
            D = !j,
            I = et(A),
            L = "x" === I ? "y" : "x",
            $ = e.modifiersData.popperOffsets,
            P = e.rects.reference,
            z = e.rects.popper,
            M =
              "function" == typeof S
                ? S(Object.assign({}, e.rects, { placement: e.placement }))
                : S,
            N =
              "number" == typeof M
                ? { mainAxis: M, altAxis: M }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, M),
            B = e.modifiersData.offset
              ? e.modifiersData.offset[e.placement]
              : null,
            data = { x: 0, y: 0 };
          if ($) {
            if (m) {
              var W,
                U = "y" === I ? n : l,
                V = "y" === I ? o : c,
                Z = "y" === I ? "height" : "width",
                X = $[I],
                Q = X + O[U],
                G = X - O[V],
                K = C ? -z[Z] / 2 : 0,
                J = j === f ? P[Z] : z[Z],
                it = j === f ? -z[Z] : -P[Z],
                ot = e.elements.arrow,
                at = C && ot ? Y(ot) : { width: 0, height: 0 },
                ct = e.modifiersData["arrow#persistent"]
                  ? e.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                lt = ct[U],
                ut = ct[V],
                pt = nt(0, P[Z], at[Z]),
                ht = D
                  ? P[Z] / 2 - K - pt - lt - N.mainAxis
                  : J - pt - lt - N.mainAxis,
                ft = D
                  ? -P[Z] / 2 + K + pt + ut + N.mainAxis
                  : it + pt + ut + N.mainAxis,
                gt = e.elements.arrow && tt(e.elements.arrow),
                mt = gt
                  ? "y" === I
                    ? gt.clientTop || 0
                    : gt.clientLeft || 0
                  : 0,
                vt = null != (W = null == B ? void 0 : B[I]) ? W : 0,
                yt = X + ft - vt,
                wt = nt(C ? R(Q, X + ht - vt - mt) : Q, X, C ? F(G, yt) : G);
              ($[I] = wt), (data[I] = wt - X);
            }
            if (y) {
              var bt,
                xt = "x" === I ? n : l,
                _t = "x" === I ? o : c,
                kt = $[L],
                Et = "y" === L ? "height" : "width",
                Ct = kt + O[xt],
                Tt = kt - O[_t],
                Ot = -1 !== [n, l].indexOf(A),
                At = null != (bt = null == B ? void 0 : B[L]) ? bt : 0,
                jt = Ot ? Ct : kt - P[Et] - z[Et] - At + N.altAxis,
                Dt = Ot ? kt + P[Et] + z[Et] - At - N.altAxis : Tt,
                It =
                  C && Ot
                    ? (function (t, e, r) {
                        var n = nt(t, e, r);
                        return n > r ? r : n;
                      })(jt, kt, Dt)
                    : nt(C ? jt : Ct, kt, C ? Dt : Tt);
              ($[L] = It), (data[L] = It - kt);
            }
            e.modifiersData[d] = data;
          }
        },
        requiresIfExists: ["offset"],
      };
      function Pt(t, e, r) {
        void 0 === r && (r = !1);
        var n,
          element,
          o = z(e),
          c =
            z(e) &&
            (function (element) {
              var rect = element.getBoundingClientRect(),
                t = B(rect.width) / element.offsetWidth || 1,
                e = B(rect.height) / element.offsetHeight || 1;
              return 1 !== t || 1 !== e;
            })(e),
          l = G(e),
          rect = V(t, c, r),
          d = { scrollLeft: 0, scrollTop: 0 },
          h = { x: 0, y: 0 };
        return (
          (o || (!o && !r)) &&
            (("body" !== L(e) || bt(l)) &&
              (d =
                (n = e) !== $(n) && z(n)
                  ? {
                      scrollLeft: (element = n).scrollLeft,
                      scrollTop: element.scrollTop,
                    }
                  : yt(n)),
            z(e)
              ? (((h = V(e, !0)).x += e.clientLeft), (h.y += e.clientTop))
              : l && (h.x = wt(l))),
          {
            x: rect.left + d.scrollLeft - h.x,
            y: rect.top + d.scrollTop - h.y,
            width: rect.width,
            height: rect.height,
          }
        );
      }
      function zt(t) {
        var map = new Map(),
          e = new Set(),
          r = [];
        function n(t) {
          e.add(t.name),
            []
              .concat(t.requires || [], t.requiresIfExists || [])
              .forEach(function (t) {
                if (!e.has(t)) {
                  var r = map.get(t);
                  r && n(r);
                }
              }),
            r.push(t);
        }
        return (
          t.forEach(function (t) {
            map.set(t.name, t);
          }),
          t.forEach(function (t) {
            e.has(t.name) || n(t);
          }),
          r
        );
      }
      var Mt = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function Nt() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return !e.some(function (element) {
          return !(
            element && "function" == typeof element.getBoundingClientRect
          );
        });
      }
      function qt(t) {
        void 0 === t && (t = {});
        var e = t,
          r = e.defaultModifiers,
          n = void 0 === r ? [] : r,
          o = e.defaultOptions,
          c = void 0 === o ? Mt : o;
        return function (t, e, r) {
          void 0 === r && (r = c);
          var o,
            l,
            d = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, Mt, c),
              modifiersData: {},
              elements: { reference: t, popper: e },
              attributes: {},
              styles: {},
            },
            h = [],
            f = !1,
            m = {
              state: d,
              setOptions: function (r) {
                var o = "function" == typeof r ? r(d.options) : r;
                v(),
                  (d.options = Object.assign({}, c, d.options, o)),
                  (d.scrollParents = {
                    reference: P(t)
                      ? _t(t)
                      : t.contextElement
                      ? _t(t.contextElement)
                      : [],
                    popper: _t(e),
                  });
                var l,
                  f,
                  y = (function (t) {
                    var e = zt(t);
                    return I.reduce(function (t, r) {
                      return t.concat(
                        e.filter(function (t) {
                          return t.phase === r;
                        })
                      );
                    }, []);
                  })(
                    ((l = [].concat(n, d.options.modifiers)),
                    (f = l.reduce(function (t, e) {
                      var r = t[e.name];
                      return (
                        (t[e.name] = r
                          ? Object.assign({}, r, e, {
                              options: Object.assign({}, r.options, e.options),
                              data: Object.assign({}, r.data, e.data),
                            })
                          : e),
                        t
                      );
                    }, {})),
                    Object.keys(f).map(function (t) {
                      return f[t];
                    }))
                  );
                return (
                  (d.orderedModifiers = y.filter(function (t) {
                    return t.enabled;
                  })),
                  d.orderedModifiers.forEach(function (t) {
                    var e = t.name,
                      r = t.options,
                      n = void 0 === r ? {} : r,
                      o = t.effect;
                    if ("function" == typeof o) {
                      var c = o({ state: d, name: e, instance: m, options: n }),
                        l = function () {};
                      h.push(c || l);
                    }
                  }),
                  m.update()
                );
              },
              forceUpdate: function () {
                if (!f) {
                  var t = d.elements,
                    e = t.reference,
                    r = t.popper;
                  if (Nt(e, r)) {
                    (d.rects = {
                      reference: Pt(e, tt(r), "fixed" === d.options.strategy),
                      popper: Y(r),
                    }),
                      (d.reset = !1),
                      (d.placement = d.options.placement),
                      d.orderedModifiers.forEach(function (t) {
                        return (d.modifiersData[t.name] = Object.assign(
                          {},
                          t.data
                        ));
                      });
                    for (var n = 0; n < d.orderedModifiers.length; n++)
                      if (!0 !== d.reset) {
                        var o = d.orderedModifiers[n],
                          c = o.fn,
                          l = o.options,
                          h = void 0 === l ? {} : l,
                          v = o.name;
                        "function" == typeof c &&
                          (d =
                            c({ state: d, options: h, name: v, instance: m }) ||
                            d);
                      } else (d.reset = !1), (n = -1);
                  }
                }
              },
              update:
                ((o = function () {
                  return new Promise(function (t) {
                    m.forceUpdate(), t(d);
                  });
                }),
                function () {
                  return (
                    l ||
                      (l = new Promise(function (t) {
                        Promise.resolve().then(function () {
                          (l = void 0), t(o());
                        });
                      })),
                    l
                  );
                }),
              destroy: function () {
                v(), (f = !0);
              },
            };
          if (!Nt(t, e)) return m;
          function v() {
            h.forEach(function (t) {
              return t();
            }),
              (h = []);
          }
          return (
            m.setOptions(r).then(function (t) {
              !f && r.onFirstUpdate && r.onFirstUpdate(t);
            }),
            m
          );
        };
      }
      var Ht = qt(),
        Ft = qt({ defaultModifiers: [ht, Lt, ut, N, It, Ot, $t, at, Dt] }),
        Rt = qt({ defaultModifiers: [ht, Lt, ut, N] });
    },
    153: function (t, e, r) {
      "use strict";
      var n = {
        name: "ClientOnly",
        functional: !0,
        props: {
          placeholder: String,
          placeholderTag: { type: String, default: "div" },
        },
        render: function (t, e) {
          var r = e.parent,
            n = e.slots,
            o = e.props,
            c = n(),
            l = c.default;
          void 0 === l && (l = []);
          var d = c.placeholder;
          return r._isMounted
            ? l
            : (r.$once("hook:mounted", function () {
                r.$forceUpdate();
              }),
              o.placeholderTag && (o.placeholder || d)
                ? t(
                    o.placeholderTag,
                    { class: ["client-only-placeholder"] },
                    o.placeholder || d
                  )
                : l.length > 0
                ? l.map(function () {
                    return t(!1);
                  })
                : t(!1));
        },
      };
      t.exports = n;
    },
    156: function (t, e, r) {
      "use strict";
      var n = function (t) {
          return H(
            [
              "text",
              "password",
              "search",
              "email",
              "tel",
              "url",
              "textarea",
              "number",
            ],
            t.type
          );
        },
        o = function (t) {
          return H(["radio", "checkbox"], t.type);
        },
        c = function (t, e) {
          return t.getAttribute("data-vv-" + e);
        },
        l = function (t) {
          return "isNaN" in Number
            ? Number.isNaN(t)
            : "number" == typeof t && t != t;
        },
        d = function () {
          for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
          return t.every(function (t) {
            return null == t;
          });
        },
        h = function (t, e) {
          if (t instanceof RegExp && e instanceof RegExp)
            return h(t.source, e.source) && h(t.flags, e.flags);
          if (Array.isArray(t) && Array.isArray(e)) {
            if (t.length !== e.length) return !1;
            for (var i = 0; i < t.length; i++) if (!h(t[i], e[i])) return !1;
            return !0;
          }
          return k(t) && k(e)
            ? Object.keys(t).every(function (r) {
                return h(t[r], e[r]);
              }) &&
                Object.keys(e).every(function (r) {
                  return h(t[r], e[r]);
                })
            : !(!l(t) || !l(e)) || t === e;
        },
        f = function (t) {
          return d(t)
            ? null
            : "FORM" === t.tagName
            ? t
            : d(t.form)
            ? d(t.parentNode)
              ? null
              : f(t.parentNode)
            : t.form;
        },
        m = function (path, t, e) {
          if ((void 0 === e && (e = void 0), !path || !t)) return e;
          var r = t;
          return (
            path.split(".").every(function (t) {
              return t in r ? ((r = r[t]), !0) : ((r = e), !1);
            }),
            r
          );
        },
        v = function (t, e, r) {
          return (
            void 0 === e && (e = 0),
            void 0 === r && (r = { cancelled: !1 }),
            0 === e
              ? t
              : function () {
                  for (var o = [], c = arguments.length; c--; )
                    o[c] = arguments[c];
                  clearTimeout(n),
                    (n = setTimeout(function () {
                      (n = null), r.cancelled || t.apply(void 0, o);
                    }, e)) || t.apply(void 0, o);
                }
          );
          var n;
        },
        y = function (t, e) {
          return e
            ? t
              ? ("string" == typeof e && (e = w(e)), A({}, e, w(t)))
              : w(e)
            : w(t);
        },
        w = function (t) {
          return t
            ? k(t)
              ? Object.keys(t).reduce(function (e, r) {
                  var n = [];
                  return (
                    (n =
                      !0 === t[r]
                        ? []
                        : Array.isArray(t[r]) || k(t[r])
                        ? t[r]
                        : [t[r]]),
                    !1 !== t[r] && (e[r] = n),
                    e
                  );
                }, {})
              : "string" != typeof t
              ? (x("rules must be either a string or an object."), {})
              : t.split("|").reduce(function (t, e) {
                  var r = (function (t) {
                    var e = [],
                      r = t.split(":")[0];
                    return (
                      H(t, ":") &&
                        (e = t.split(":").slice(1).join(":").split(",")),
                      { name: r, params: e }
                    );
                  })(e);
                  return r.name ? ((t[r.name] = r.params), t) : t;
                }, {})
            : {};
        },
        x = function (t) {
          console.warn("[vee-validate] " + t);
        },
        _ = function (t) {
          return new Error("[vee-validate] " + t);
        },
        k = function (t) {
          return null !== t && t && "object" == typeof t && !Array.isArray(t);
        },
        E = function (t) {
          return "function" == typeof t;
        },
        C = function (t, e) {
          return t.classList
            ? t.classList.contains(e)
            : !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"));
        },
        T = function (t, e, r) {
          if (t && e) {
            if (!Array.isArray(e))
              return r
                ? (function (t, e) {
                    t.classList
                      ? t.classList.add(e)
                      : C(t, e) || (t.className += " " + e);
                  })(t, e)
                : void (function (t, e) {
                    if (t.classList) t.classList.remove(e);
                    else if (C(t, e)) {
                      var r = new RegExp("(\\s|^)" + e + "(\\s|$)");
                      t.className = t.className.replace(r, " ");
                    }
                  })(t, e);
            e.forEach(function (e) {
              return T(t, e, r);
            });
          }
        },
        S = function (t) {
          if (E(Array.from)) return Array.from(t);
          for (var e = [], r = t.length, i = 0; i < r; i++) e.push(t[i]);
          return e;
        },
        O = function (t) {
          if (Array.isArray(t)) return [].concat(t);
          var e = S(t);
          return F(e) ? [t] : e;
        },
        A = function (t) {
          for (var e = [], r = arguments.length - 1; r-- > 0; )
            e[r] = arguments[r + 1];
          if (E(Object.assign))
            return Object.assign.apply(Object, [t].concat(e));
          if (null == t)
            throw new TypeError("Cannot convert undefined or null to object");
          var n = Object(t);
          return (
            e.forEach(function (t) {
              null != t &&
                Object.keys(t).forEach(function (e) {
                  n[e] = t[e];
                });
            }),
            n
          );
        },
        j = 0,
        D = "{id}",
        I = function (t, e) {
          for (var r = Array.isArray(t) ? t : S(t), i = 0; i < r.length; i++)
            if (e(r[i])) return i;
          return -1;
        },
        L = function (t, e) {
          var r = Array.isArray(t) ? t : S(t),
            n = I(r, e);
          return -1 === n ? void 0 : r[n];
        },
        $ = function (t) {
          if (!t) return !1;
          var e = t.componentOptions.tag;
          return /^(keep-alive|transition|transition-group)$/.test(e);
        },
        P = function (input) {
          if ("number" == typeof input) return input;
          if ("string" == typeof input) return parseInt(input);
          var map = {};
          for (var element in input) map[element] = parseInt(input[element]);
          return map;
        },
        z = function (t, source) {
          return k(t) && k(source)
            ? (Object.keys(source).forEach(function (e) {
                var r, n;
                if (k(source[e]))
                  return (
                    t[e] || A(t, (((r = {})[e] = {}), r)),
                    void z(t[e], source[e])
                  );
                A(t, (((n = {})[e] = source[e]), n));
              }),
              t)
            : t;
        },
        M = function (t, e) {
          if ((t.required && (e = y("required", e)), n(t)))
            return (
              "email" === t.type &&
                (e = y("email" + (t.multiple ? ":multiple" : ""), e)),
              t.pattern && (e = y({ regex: t.pattern }, e)),
              t.maxLength >= 0 &&
                t.maxLength < 524288 &&
                (e = y("max:" + t.maxLength, e)),
              t.minLength > 0 && (e = y("min:" + t.minLength, e)),
              "number" === t.type &&
                ((e = y("decimal", e)),
                "" !== t.min && (e = y("min_value:" + t.min, e)),
                "" !== t.max && (e = y("max_value:" + t.max, e))),
              e
            );
          if (
            (function (t) {
              return H(
                ["date", "week", "month", "datetime-local", "time"],
                t.type
              );
            })(t)
          ) {
            var r = t.step && Number(t.step) < 60 ? "HH:mm:ss" : "HH:mm";
            if ("date" === t.type) return y("date_format:yyyy-MM-dd", e);
            if ("datetime-local" === t.type)
              return y("date_format:yyyy-MM-ddT" + r, e);
            if ("month" === t.type) return y("date_format:yyyy-MM", e);
            if ("week" === t.type) return y("date_format:yyyy-[W]WW", e);
            if ("time" === t.type) return y("date_format:" + r, e);
          }
          return e;
        },
        N = function (t) {
          return E(Object.values)
            ? Object.values(t)
            : Object.keys(t).map(function (e) {
                return t[e];
              });
        },
        H = function (t, e) {
          return -1 !== t.indexOf(e);
        },
        F = function (t) {
          return Array.isArray(t) && 0 === t.length;
        },
        R = function (t, e, r) {
          Object.defineProperty(t, e, {
            configurable: !1,
            writable: !0,
            value: r,
          });
        },
        B = "en",
        W = function (t) {
          void 0 === t && (t = {}), (this.container = {}), this.merge(t);
        },
        U = { locale: { configurable: !0 } };
      (U.locale.get = function () {
        return B;
      }),
        (U.locale.set = function (t) {
          B = t || "en";
        }),
        (W.prototype.hasLocale = function (t) {
          return !!this.container[t];
        }),
        (W.prototype.setDateFormat = function (t, e) {
          this.container[t] || (this.container[t] = {}),
            (this.container[t].dateFormat = e);
        }),
        (W.prototype.getDateFormat = function (t) {
          return this.container[t] && this.container[t].dateFormat
            ? this.container[t].dateFormat
            : null;
        }),
        (W.prototype.getMessage = function (t, e, data) {
          var r = null;
          return (
            (r = this.hasMessage(t, e)
              ? this.container[t].messages[e]
              : this._getDefaultMessage(t)),
            E(r) ? r.apply(void 0, data) : r
          );
        }),
        (W.prototype.getFieldMessage = function (t, e, r, data) {
          if (!this.hasLocale(t)) return this.getMessage(t, r, data);
          var n = this.container[t].custom && this.container[t].custom[e];
          if (!n || !n[r]) return this.getMessage(t, r, data);
          var o = n[r];
          return E(o) ? o.apply(void 0, data) : o;
        }),
        (W.prototype._getDefaultMessage = function (t) {
          return this.hasMessage(t, "_default")
            ? this.container[t].messages._default
            : this.container.en.messages._default;
        }),
        (W.prototype.getAttribute = function (t, e, r) {
          return (
            void 0 === r && (r = ""),
            this.hasAttribute(t, e) ? this.container[t].attributes[e] : r
          );
        }),
        (W.prototype.hasMessage = function (t, e) {
          return !!(
            this.hasLocale(t) &&
            this.container[t].messages &&
            this.container[t].messages[e]
          );
        }),
        (W.prototype.hasAttribute = function (t, e) {
          return !!(
            this.hasLocale(t) &&
            this.container[t].attributes &&
            this.container[t].attributes[e]
          );
        }),
        (W.prototype.merge = function (t) {
          z(this.container, t);
        }),
        (W.prototype.setMessage = function (t, e, r) {
          this.hasLocale(t) ||
            (this.container[t] = { messages: {}, attributes: {} }),
            this.container[t].messages || (this.container[t].messages = {}),
            (this.container[t].messages[e] = r);
        }),
        (W.prototype.setAttribute = function (t, e, r) {
          this.hasLocale(t) ||
            (this.container[t] = { messages: {}, attributes: {} }),
            (this.container[t].attributes[e] = r);
        }),
        Object.defineProperties(W.prototype, U);
      var V = {
          default: new W({ en: { messages: {}, attributes: {}, custom: {} } }),
        },
        Y = "default",
        Z = function () {};
      (Z._checkDriverName = function (t) {
        if (!t) throw _("you must provide a name to the dictionary driver");
      }),
        (Z.setDriver = function (t, e) {
          void 0 === e && (e = null),
            this._checkDriverName(t),
            e && (V[t] = e),
            (Y = t);
        }),
        (Z.getDriver = function () {
          return V[Y];
        });
      var X = function t(e, r) {
        void 0 === e && (e = null),
          void 0 === r && (r = null),
          (this.vmId = r || null),
          (this.items = e && e instanceof t ? e.items : []);
      };
      (X.prototype[
        "function" == typeof Symbol ? Symbol.iterator : "@@iterator"
      ] = function () {
        var t = this,
          e = 0;
        return {
          next: function () {
            return { value: t.items[e++], done: e > t.items.length };
          },
        };
      }),
        (X.prototype.add = function (t) {
          var e;
          (e = this.items).push.apply(e, this._normalizeError(t));
        }),
        (X.prototype._normalizeError = function (t) {
          var e = this;
          return Array.isArray(t)
            ? t.map(function (t) {
                return (
                  (t.scope = d(t.scope) ? null : t.scope),
                  (t.vmId = d(t.vmId) ? e.vmId || null : t.vmId),
                  t
                );
              })
            : ((t.scope = d(t.scope) ? null : t.scope),
              (t.vmId = d(t.vmId) ? this.vmId || null : t.vmId),
              [t]);
        }),
        (X.prototype.regenerate = function () {
          this.items.forEach(function (i) {
            i.msg = E(i.regenerate) ? i.regenerate() : i.msg;
          });
        }),
        (X.prototype.update = function (t, e) {
          var r = L(this.items, function (i) {
            return i.id === t;
          });
          if (r) {
            var n = this.items.indexOf(r);
            this.items.splice(n, 1), (r.scope = e.scope), this.items.push(r);
          }
        }),
        (X.prototype.all = function (t) {
          var e = this;
          return this.items
            .filter(function (r) {
              var n = !0,
                o = !0;
              return (
                d(t) || (n = r.scope === t),
                d(e.vmId) || (o = r.vmId === e.vmId),
                o && n
              );
            })
            .map(function (t) {
              return t.msg;
            });
        }),
        (X.prototype.any = function (t) {
          var e = this;
          return !!this.items.filter(function (r) {
            var n = !0,
              o = !0;
            return (
              d(t) || (n = r.scope === t),
              d(e.vmId) || (o = r.vmId === e.vmId),
              o && n
            );
          }).length;
        }),
        (X.prototype.clear = function (t) {
          var e = this,
            r = d(this.vmId)
              ? function () {
                  return !0;
                }
              : function (i) {
                  return i.vmId === e.vmId;
                },
            n = function (i) {
              return i.scope === t;
            };
          0 === arguments.length
            ? (n = function () {
                return !0;
              })
            : d(t) && (t = null);
          for (var i = 0; i < this.items.length; ++i)
            r(this.items[i]) &&
              n(this.items[i]) &&
              (this.items.splice(i, 1), --i);
        }),
        (X.prototype.collect = function (t, e, map) {
          var r = this;
          void 0 === map && (map = !0);
          var n = !d(t) && !t.includes("*"),
            o = function (t) {
              var e = t.reduce(function (t, e) {
                return d(r.vmId) || e.vmId === r.vmId
                  ? (t[e.field] || (t[e.field] = []),
                    t[e.field].push(map ? e.msg : e),
                    t)
                  : t;
              }, {});
              return n ? N(e)[0] || [] : e;
            };
          if (d(t)) return o(this.items);
          var c = d(e) ? String(t) : e + "." + t,
            l = this._makeCandidateFilters(c),
            h = l.isPrimary,
            f = l.isAlt,
            m = this.items.reduce(
              function (t, e) {
                return h(e) && t.primary.push(e), f(e) && t.alt.push(e), t;
              },
              { primary: [], alt: [] }
            );
          return o((m = m.primary.length ? m.primary : m.alt));
        }),
        (X.prototype.count = function () {
          var t = this;
          return this.vmId
            ? this.items.filter(function (e) {
                return e.vmId === t.vmId;
              }).length
            : this.items.length;
        }),
        (X.prototype.firstById = function (t) {
          var e = L(this.items, function (i) {
            return i.id === t;
          });
          return e ? e.msg : void 0;
        }),
        (X.prototype.first = function (t, e) {
          void 0 === e && (e = null);
          var r = d(e) ? t : e + "." + t,
            n = this._match(r);
          return n && n.msg;
        }),
        (X.prototype.firstRule = function (t, e) {
          var r = this.collect(t, e, !1);
          return (r.length && r[0].rule) || void 0;
        }),
        (X.prototype.has = function (t, e) {
          return void 0 === e && (e = null), !!this.first(t, e);
        }),
        (X.prototype.firstByRule = function (t, e, r) {
          void 0 === r && (r = null);
          var n = this.collect(t, r, !1).filter(function (t) {
            return t.rule === e;
          })[0];
          return (n && n.msg) || void 0;
        }),
        (X.prototype.firstNot = function (t, e, r) {
          void 0 === e && (e = "required"), void 0 === r && (r = null);
          var n = this.collect(t, r, !1).filter(function (t) {
            return t.rule !== e;
          })[0];
          return (n && n.msg) || void 0;
        }),
        (X.prototype.removeById = function (t) {
          var e = function (e) {
            return e.id === t;
          };
          Array.isArray(t) &&
            (e = function (e) {
              return -1 !== t.indexOf(e.id);
            });
          for (var i = 0; i < this.items.length; ++i)
            e(this.items[i]) && (this.items.splice(i, 1), --i);
        }),
        (X.prototype.remove = function (t, e, r) {
          if (!d(t))
            for (
              var n,
                o = d(e) ? String(t) : e + "." + t,
                c = this._makeCandidateFilters(o),
                l = c.isPrimary,
                h = c.isAlt,
                f = function (t) {
                  return l(t) || h(t);
                },
                i = 0;
              i < this.items.length;
              ++i
            )
              (n = this.items[i]),
                (d(r) ? f(n) : f(n) && n.vmId === r) &&
                  (this.items.splice(i, 1), --i);
        }),
        (X.prototype._makeCandidateFilters = function (t) {
          var e = this,
            r = function () {
              return !0;
            },
            n = function () {
              return !0;
            },
            o = function () {
              return !0;
            },
            c = function () {
              return !0;
            },
            l = (function (t) {
              var e = null;
              if (
                (H(t, ":") &&
                  ((e = t.split(":").pop()), (t = t.replace(":" + e, ""))),
                "#" === t[0])
              )
                return { id: t.slice(1), rule: e, name: null, scope: null };
              var r = null,
                n = t;
              if (H(t, ".")) {
                var o = t.split(".");
                (r = o[0]), (n = o.slice(1).join("."));
              }
              return { id: null, scope: r, name: n, rule: e };
            })(t),
            h = l.id,
            f = l.rule,
            m = l.scope,
            v = l.name;
          if (
            (f &&
              (r = function (t) {
                return t.rule === f;
              }),
            h)
          )
            return {
              isPrimary: function (t) {
                return (
                  r(t) &&
                  function (t) {
                    return h === t.id;
                  }
                );
              },
              isAlt: function () {
                return !1;
              },
            };
          (n = d(m)
            ? function (t) {
                return d(t.scope);
              }
            : function (t) {
                return t.scope === m;
              }),
            d(v) ||
              "*" === v ||
              (o = function (t) {
                return t.field === v;
              }),
            d(this.vmId) ||
              (c = function (t) {
                return t.vmId === e.vmId;
              });
          return {
            isPrimary: function (t) {
              return c(t) && o(t) && r(t) && n(t);
            },
            isAlt: function (t) {
              return c(t) && r(t) && t.field === m + "." + v;
            },
          };
        }),
        (X.prototype._match = function (t) {
          if (!d(t)) {
            var e = this._makeCandidateFilters(t),
              r = e.isPrimary,
              n = e.isAlt;
            return this.items.reduce(function (t, e, o, c) {
              var l = o === c.length - 1;
              return t.primary
                ? l
                  ? t.primary
                  : t
                : (r(e) && (t.primary = e),
                  n(e) && (t.alt = e),
                  l ? t.primary || t.alt : t);
            }, {});
          }
        });
      var Q = A(
          {},
          {
            locale: "en",
            delay: 0,
            errorBagName: "errors",
            dictionary: null,
            fieldsBagName: "fields",
            classes: !1,
            classNames: null,
            events: "input",
            inject: !0,
            fastExit: !0,
            aria: !0,
            validity: !1,
            mode: "aggressive",
            useConstraintAttrs: !0,
            i18n: null,
            i18nRootKey: "validation",
          }
        ),
        G = function (t) {
          var e = m("$options.$_veeValidate", t, {});
          return A({}, Q, e);
        },
        K = function () {
          return Q;
        },
        J = function (t) {
          Q = A({}, Q, t);
        };
      function tt(t) {
        return t.data
          ? t.data.model
            ? t.data.model
            : !!t.data.directives &&
              L(t.data.directives, function (t) {
                return "model" === t.name;
              })
          : null;
      }
      function et(t) {
        if (tt(t)) return [t];
        var e = (function (t) {
          return Array.isArray(t)
            ? t
            : Array.isArray(t.children)
            ? t.children
            : t.componentOptions && Array.isArray(t.componentOptions.children)
            ? t.componentOptions.children
            : [];
        })(t);
        return e.reduce(function (t, e) {
          var r = et(e);
          return r.length && t.push.apply(t, r), t;
        }, []);
      }
      function nt(t) {
        return t.componentOptions
          ? t.componentOptions.Ctor.options.model
          : null;
      }
      function it(t, e, r) {
        if (E(t[e])) {
          var n = t[e];
          t[e] = [n];
        }
        d(t[e]) && (t[e] = []), t[e].push(r);
      }
      function ot(t, e, r) {
        t.componentOptions
          ? (function (t, e, r) {
              t.componentOptions.listeners ||
                (t.componentOptions.listeners = {}),
                it(t.componentOptions.listeners, e, r);
            })(t, e, r)
          : (function (t, e, r) {
              d(t.data.on) && (t.data.on = {}), it(t.data.on, e, r);
            })(t, e, r);
      }
      function at(t, e) {
        return t.componentOptions
          ? (nt(t) || { event: "input" }).event
          : (e && e.modifiers && e.modifiers.lazy) || "select" === t.tag
          ? "change"
          : t.data.attrs && n({ type: t.data.attrs.type || "text" })
          ? "input"
          : "change";
      }
      function st(t, e) {
        return Array.isArray(e) && e[0] ? e[0] : e || t();
      }
      var ct = function () {};
      (ct.generate = function (t, e, r) {
        var n = ct.resolveModel(e, r),
          o = G(r.context);
        return {
          name: ct.resolveName(t, r),
          el: t,
          listen: !e.modifiers.disable,
          bails:
            !!e.modifiers.bails || (!0 !== e.modifiers.continues && void 0),
          scope: ct.resolveScope(t, e, r),
          vm: r.context,
          expression: e.value,
          component: r.componentInstance,
          classes: o.classes,
          classNames: o.classNames,
          getter: ct.resolveGetter(t, r, n),
          events: ct.resolveEvents(t, r) || o.events,
          model: n,
          delay: ct.resolveDelay(t, r, o),
          rules: ct.resolveRules(t, e, r),
          immediate: !!e.modifiers.initial || !!e.modifiers.immediate,
          persist: !!e.modifiers.persist,
          validity: o.validity && !r.componentInstance,
          aria: o.aria && !r.componentInstance,
          initialValue: ct.resolveInitialValue(r),
        };
      }),
        (ct.getCtorConfig = function (t) {
          return t.componentInstance
            ? m("componentInstance.$options.$_veeValidate", t)
            : null;
        }),
        (ct.resolveRules = function (t, e, r) {
          var n = "";
          if (
            (e.value || (e && e.expression) || (n = c(t, "rules")),
            e.value && H(["string", "object"], typeof e.value.rules)
              ? (n = e.value.rules)
              : e.value && (n = e.value),
            r.componentInstance)
          )
            return n;
          var o = w(n);
          return K().useConstraintAttrs ? A({}, M(t, {}), o) : o;
        }),
        (ct.resolveInitialValue = function (t) {
          var e =
            t.data.model ||
            L(t.data.directives, function (t) {
              return "model" === t.name;
            });
          return e && e.value;
        }),
        (ct.resolveDelay = function (t, e, r) {
          var n = c(t, "delay"),
            o = r && "delay" in r ? r.delay : 0;
          return (
            !n &&
              e.componentInstance &&
              e.componentInstance.$attrs &&
              (n = e.componentInstance.$attrs["data-vv-delay"]),
            k(o) ? (d(n) || (o.input = n), P(o)) : P(n || o)
          );
        }),
        (ct.resolveEvents = function (t, e) {
          var r = c(t, "validate-on");
          if (
            (!r &&
              e.componentInstance &&
              e.componentInstance.$attrs &&
              (r = e.componentInstance.$attrs["data-vv-validate-on"]),
            !r && e.componentInstance)
          ) {
            var n = ct.getCtorConfig(e);
            r = n && n.events;
          }
          if (
            (!r && K().events && (r = K().events),
            r && e.componentInstance && H(r, "input"))
          ) {
            var o = (e.componentInstance.$options.model || { event: "input" })
              .event;
            if (!o) return r;
            r = r.replace("input", o);
          }
          return r;
        }),
        (ct.resolveScope = function (t, e, r) {
          void 0 === r && (r = {});
          var n = null;
          return (
            r.componentInstance &&
              d(n) &&
              (n =
                r.componentInstance.$attrs &&
                r.componentInstance.$attrs["data-vv-scope"]),
            d(n)
              ? (function (t) {
                  var e = c(t, "scope");
                  if (d(e)) {
                    var form = f(t);
                    form && (e = c(form, "scope"));
                  }
                  return d(e) ? null : e;
                })(t)
              : n
          );
        }),
        (ct.resolveModel = function (t, e) {
          if (t.arg) return { expression: t.arg };
          var r = tt(e);
          if (!r) return null;
          var n =
              !/[^\w.$]/.test(r.expression) &&
              (function (path, t) {
                var e = t,
                  r = null;
                return path.split(".").reduce(function (t, n) {
                  return null == e || "object" != typeof e
                    ? t && !1
                    : n in e
                    ? ((e = e[n]), (r = null === r ? n : r + "." + n), t && !0)
                    : t && !1;
                }, !0);
              })(r.expression, e.context),
            o = !(!r.modifiers || !r.modifiers.lazy);
          return n
            ? { expression: r.expression, lazy: o }
            : { expression: null, lazy: o };
        }),
        (ct.resolveName = function (t, e) {
          var r = c(t, "name");
          if (!r && !e.componentInstance) return t.name;
          if (
            (!r &&
              e.componentInstance &&
              e.componentInstance.$attrs &&
              (r =
                e.componentInstance.$attrs["data-vv-name"] ||
                e.componentInstance.$attrs.name),
            !r && e.componentInstance)
          ) {
            var n = ct.getCtorConfig(e);
            return n && E(n.name)
              ? n.name.bind(e.componentInstance)()
              : e.componentInstance.name;
          }
          return r;
        }),
        (ct.resolveGetter = function (t, e, r) {
          if (r && r.expression)
            return function () {
              return m(r.expression, e.context);
            };
          if (e.componentInstance) {
            var path =
              c(t, "value-path") ||
              (e.componentInstance.$attrs &&
                e.componentInstance.$attrs["data-vv-value-path"]);
            if (path)
              return function () {
                return m(path, e.componentInstance);
              };
            var n = ct.getCtorConfig(e);
            if (n && E(n.value)) {
              var o = n.value.bind(e.componentInstance);
              return function () {
                return o();
              };
            }
            var l = (e.componentInstance.$options.model || { prop: "value" })
              .prop;
            return function () {
              return e.componentInstance[l];
            };
          }
          switch (t.type) {
            case "checkbox":
              return function () {
                var e = document.querySelectorAll(
                  'input[name="' + t.name + '"]'
                );
                if (
                  ((e = S(e).filter(function (t) {
                    return t.checked;
                  })),
                  e.length)
                )
                  return e.map(function (t) {
                    return t.value;
                  });
              };
            case "radio":
              return function () {
                var e = document.querySelectorAll(
                    'input[name="' + t.name + '"]'
                  ),
                  r = L(e, function (t) {
                    return t.checked;
                  });
                return r && r.value;
              };
            case "file":
              return function (e) {
                return S(t.files);
              };
            case "select-multiple":
              return function () {
                return S(t.options)
                  .filter(function (t) {
                    return t.selected;
                  })
                  .map(function (t) {
                    return t.value;
                  });
              };
            default:
              return function () {
                return t && t.value;
              };
          }
        });
      var lt = {},
        ut = function () {},
        pt = { rules: { configurable: !0 } };
      (ut.add = function (t, e) {
        var r = e.validate,
          n = e.options,
          o = e.paramNames;
        lt[t] = { validate: r, options: n, paramNames: o };
      }),
        (pt.rules.get = function () {
          return lt;
        }),
        (ut.has = function (t) {
          return !!lt[t];
        }),
        (ut.isImmediate = function (t) {
          return !(!lt[t] || !lt[t].options.immediate);
        }),
        (ut.isRequireRule = function (t) {
          return !(!lt[t] || !lt[t].options.computesRequired);
        }),
        (ut.isTargetRule = function (t) {
          return !(!lt[t] || !lt[t].options.hasTarget);
        }),
        (ut.remove = function (t) {
          delete lt[t];
        }),
        (ut.getParamNames = function (t) {
          return lt[t] && lt[t].paramNames;
        }),
        (ut.getOptions = function (t) {
          return lt[t] && lt[t].options;
        }),
        (ut.getValidatorMethod = function (t) {
          return lt[t] ? lt[t].validate : null;
        }),
        Object.defineProperties(ut, pt);
      var ht = function (t) {
          return (
            ("undefined" != typeof Event && E(Event) && t instanceof Event) ||
            (t && t.srcElement)
          );
        },
        ft = function (t) {
          return t ? ("string" == typeof t ? t.split("|") : t) : [];
        },
        gt = !0,
        mt = function (t, e, r) {
          t.addEventListener(e, r, !!gt && { passive: !0 });
        },
        vt = {
          targetOf: null,
          immediate: !1,
          persist: !1,
          scope: null,
          listen: !0,
          name: null,
          rules: {},
          vm: null,
          classes: !1,
          validity: !0,
          aria: !0,
          events: "input|blur",
          delay: 0,
          classNames: {
            touched: "touched",
            untouched: "untouched",
            valid: "valid",
            invalid: "invalid",
            pristine: "pristine",
            dirty: "dirty",
          },
        },
        yt = function (t) {
          void 0 === t && (t = {}),
            (this.id =
              (j >= 9999 && ((j = 0), (D = D.replace("{id}", "_{id}"))),
              j++,
              D.replace("{id}", String(j)))),
            (this.el = t.el),
            (this.updated = !1),
            (this.vmId = t.vmId),
            R(this, "dependencies", []),
            R(this, "watchers", []),
            R(this, "events", []),
            (this.delay = 0),
            (this.rules = {}),
            (this.forceRequired = !1),
            this._cacheId(t),
            (this.classNames = A({}, vt.classNames)),
            (t = A({}, vt, t)),
            (this._delay = d(t.delay) ? 0 : t.delay),
            (this.validity = t.validity),
            (this.aria = t.aria),
            (this.flags = t.flags || {
              untouched: !0,
              touched: !1,
              dirty: !1,
              pristine: !0,
              valid: null,
              invalid: null,
              validated: !1,
              pending: !1,
              required: !1,
              changed: !1,
            }),
            R(this, "vm", t.vm),
            R(this, "componentInstance", t.component),
            (this.ctorConfig = this.componentInstance
              ? m("$options.$_veeValidate", this.componentInstance)
              : void 0),
            this.update(t),
            (this.initialValue = this.value),
            (this.updated = !1);
        },
        wt = {
          validator: { configurable: !0 },
          isRequired: { configurable: !0 },
          isDisabled: { configurable: !0 },
          alias: { configurable: !0 },
          value: { configurable: !0 },
          bails: { configurable: !0 },
          rejectsFalse: { configurable: !0 },
        };
      (wt.validator.get = function () {
        return this.vm && this.vm.$validator
          ? this.vm.$validator
          : {
              validate: function () {
                return Promise.resolve(!0);
              },
            };
      }),
        (wt.isRequired.get = function () {
          return !!this.rules.required || this.forceRequired;
        }),
        (wt.isDisabled.get = function () {
          return !(!this.el || !this.el.disabled);
        }),
        (wt.alias.get = function () {
          if (this._alias) return this._alias;
          var t = null;
          return (
            this.ctorConfig &&
              this.ctorConfig.alias &&
              (t = E(this.ctorConfig.alias)
                ? this.ctorConfig.alias.call(this.componentInstance)
                : this.ctorConfig.alias),
            !t && this.el && (t = c(this.el, "as")),
            !t && this.componentInstance
              ? this.componentInstance.$attrs &&
                this.componentInstance.$attrs["data-vv-as"]
              : t
          );
        }),
        (wt.value.get = function () {
          if (E(this.getter)) return this.getter();
        }),
        (wt.bails.get = function () {
          return this._bails;
        }),
        (wt.rejectsFalse.get = function () {
          return this.componentInstance && this.ctorConfig
            ? !!this.ctorConfig.rejectsFalse
            : !!this.el && "checkbox" === this.el.type;
        }),
        (yt.prototype.matches = function (t) {
          var e = this;
          if (!t) return !0;
          if (t.id) return this.id === t.id;
          var r = d(t.vmId)
            ? function () {
                return !0;
              }
            : function (t) {
                return t === e.vmId;
              };
          return (
            !!r(t.vmId) &&
            ((void 0 === t.name && void 0 === t.scope) ||
              (void 0 === t.scope
                ? this.name === t.name
                : void 0 === t.name
                ? this.scope === t.scope
                : t.name === this.name && t.scope === this.scope))
          );
        }),
        (yt.prototype._cacheId = function (t) {
          this.el && !t.targetOf && (this.el._veeValidateId = this.id);
        }),
        (yt.prototype.waitFor = function (t) {
          this._waitingFor = t;
        }),
        (yt.prototype.isWaitingFor = function (t) {
          return this._waitingFor === t;
        }),
        (yt.prototype.update = function (t) {
          var e,
            r,
            n,
            o = this;
          if (
            ((this.targetOf = t.targetOf || null),
            (this.immediate = t.immediate || this.immediate || !1),
            (this.persist = t.persist || this.persist || !1),
            !d(t.scope) &&
              t.scope !== this.scope &&
              E(this.validator.update) &&
              this.validator.update(this.id, { scope: t.scope }),
            (this.scope = d(t.scope)
              ? d(this.scope)
                ? null
                : this.scope
              : t.scope),
            (this.name =
              (d(t.name) ? t.name : String(t.name)) || this.name || null),
            (this.rules = void 0 !== t.rules ? w(t.rules) : this.rules),
            (this._bails = void 0 !== t.bails ? t.bails : this._bails),
            (this.model = t.model || this.model),
            (this.listen = void 0 !== t.listen ? t.listen : this.listen),
            (this.classes =
              !(!t.classes && !this.classes) && !this.componentInstance),
            (this.classNames = k(t.classNames)
              ? z(this.classNames, t.classNames)
              : this.classNames),
            (this.getter = E(t.getter) ? t.getter : this.getter),
            (this._alias = t.alias || this._alias),
            (this.events = t.events ? ft(t.events) : this.events),
            (this.delay =
              ((e = this.events),
              (r = t.delay || this.delay),
              (n = this._delay),
              "number" == typeof r
                ? e.reduce(function (t, e) {
                    return (t[e] = r), t;
                  }, {})
                : e.reduce(function (t, e) {
                    return "object" == typeof r && e in r
                      ? ((t[e] = r[e]), t)
                      : "number" == typeof n
                      ? ((t[e] = n), t)
                      : ((t[e] = (n && n[e]) || 0), t);
                  }, {}))),
            this.updateDependencies(),
            this.addActionListeners(),
            void 0 !== t.rules && (this.flags.required = this.isRequired),
            0 === Object.keys(t.rules || {}).length && this.updated)
          ) {
            var c = this.flags.validated;
            this.validator.validate("#" + this.id).then(function () {
              o.flags.validated = c;
            });
          }
          this.flags.validated &&
            void 0 !== t.rules &&
            this.updated &&
            this.validator.validate("#" + this.id),
            (this.updated = !0),
            this.addValueListeners(),
            this.el && (this.updateClasses(), this.updateAriaAttrs());
        }),
        (yt.prototype.reset = function () {
          var t = this;
          this._cancellationToken &&
            ((this._cancellationToken.cancelled = !0),
            delete this._cancellationToken);
          var e = {
            untouched: !0,
            touched: !1,
            dirty: !1,
            pristine: !0,
            valid: null,
            invalid: null,
            validated: !1,
            pending: !1,
            required: !1,
            changed: !1,
          };
          Object.keys(this.flags)
            .filter(function (t) {
              return "required" !== t;
            })
            .forEach(function (r) {
              t.flags[r] = e[r];
            }),
            (this.initialValue = this.value),
            (this.flags.changed = !1),
            this.addValueListeners(),
            this.addActionListeners(),
            this.updateClasses(!0),
            this.updateAriaAttrs(),
            this.updateCustomValidity();
        }),
        (yt.prototype.setFlags = function (t) {
          var e = this,
            r = {
              pristine: "dirty",
              dirty: "pristine",
              valid: "invalid",
              invalid: "valid",
              touched: "untouched",
              untouched: "touched",
            };
          Object.keys(t).forEach(function (n) {
            (e.flags[n] = t[n]),
              r[n] && void 0 === t[r[n]] && (e.flags[r[n]] = !t[n]);
          }),
            (void 0 === t.untouched &&
              void 0 === t.touched &&
              void 0 === t.dirty &&
              void 0 === t.pristine) ||
              this.addActionListeners(),
            this.updateClasses(),
            this.updateAriaAttrs(),
            this.updateCustomValidity();
        }),
        (yt.prototype.updateDependencies = function () {
          var t = this;
          this.dependencies.forEach(function (t) {
            return t.field.destroy();
          }),
            (this.dependencies = []);
          var e = Object.keys(this.rules).reduce(function (e, r) {
            return (
              ut.isTargetRule(r) &&
                e.push({ selector: t.rules[r][0], name: r }),
              e
            );
          }, []);
          e.length &&
            this.vm &&
            this.vm.$el &&
            e.forEach(function (e) {
              var r = e.selector,
                n = e.name,
                o = t.vm.$refs[r],
                c = Array.isArray(o) ? o[0] : o;
              if (c) {
                var l = {
                  vm: t.vm,
                  classes: t.classes,
                  classNames: t.classNames,
                  delay: t.delay,
                  scope: t.scope,
                  events: t.events.join("|"),
                  immediate: t.immediate,
                  targetOf: t.id,
                };
                E(c.$watch)
                  ? ((l.component = c),
                    (l.el = c.$el),
                    (l.getter = ct.resolveGetter(c.$el, c.$vnode)))
                  : ((l.el = c), (l.getter = ct.resolveGetter(c, {}))),
                  t.dependencies.push({ name: n, field: new yt(l) });
              }
            });
        }),
        (yt.prototype.unwatch = function (t) {
          if ((void 0 === t && (t = null), !t))
            return (
              this.watchers.forEach(function (t) {
                return t.unwatch();
              }),
              void (this.watchers = [])
            );
          this.watchers
            .filter(function (e) {
              return t.test(e.tag);
            })
            .forEach(function (t) {
              return t.unwatch();
            }),
            (this.watchers = this.watchers.filter(function (e) {
              return !t.test(e.tag);
            }));
        }),
        (yt.prototype.updateClasses = function (t) {
          var e = this;
          if ((void 0 === t && (t = !1), this.classes && !this.isDisabled)) {
            var r = function (r) {
              T(r, e.classNames.dirty, e.flags.dirty),
                T(r, e.classNames.pristine, e.flags.pristine),
                T(r, e.classNames.touched, e.flags.touched),
                T(r, e.classNames.untouched, e.flags.untouched),
                t &&
                  (T(r, e.classNames.valid, !1),
                  T(r, e.classNames.invalid, !1)),
                !d(e.flags.valid) &&
                  e.flags.validated &&
                  T(r, e.classNames.valid, e.flags.valid),
                !d(e.flags.invalid) &&
                  e.flags.validated &&
                  T(r, e.classNames.invalid, e.flags.invalid);
            };
            if (o(this.el)) {
              var n = document.querySelectorAll(
                'input[name="' + this.el.name + '"]'
              );
              S(n).forEach(r);
            } else r(this.el);
          }
        }),
        (yt.prototype.addActionListeners = function () {
          var t = this;
          if ((this.unwatch(/class/), this.el)) {
            var e = function () {
                (t.flags.touched = !0),
                  (t.flags.untouched = !1),
                  t.classes &&
                    (T(t.el, t.classNames.touched, !0),
                    T(t.el, t.classNames.untouched, !1)),
                  t.unwatch(/^class_blur$/);
              },
              r = n(this.el) ? "input" : "change",
              c = function () {
                (t.flags.dirty = !0),
                  (t.flags.pristine = !1),
                  t.classes &&
                    (T(t.el, t.classNames.pristine, !1),
                    T(t.el, t.classNames.dirty, !0)),
                  t.unwatch(/^class_input$/);
              };
            if (this.componentInstance && E(this.componentInstance.$once))
              return (
                this.componentInstance.$once("input", c),
                this.componentInstance.$once("blur", e),
                this.watchers.push({
                  tag: "class_input",
                  unwatch: function () {
                    t.componentInstance.$off("input", c);
                  },
                }),
                void this.watchers.push({
                  tag: "class_blur",
                  unwatch: function () {
                    t.componentInstance.$off("blur", e);
                  },
                })
              );
            if (this.el) {
              mt(this.el, r, c);
              var l = o(this.el) ? "change" : "blur";
              mt(this.el, l, e),
                this.watchers.push({
                  tag: "class_input",
                  unwatch: function () {
                    t.el.removeEventListener(r, c);
                  },
                }),
                this.watchers.push({
                  tag: "class_blur",
                  unwatch: function () {
                    t.el.removeEventListener(l, e);
                  },
                });
            }
          }
        }),
        (yt.prototype.checkValueChanged = function () {
          return (
            (null !== this.initialValue || "" !== this.value || !n(this.el)) &&
            this.value !== this.initialValue
          );
        }),
        (yt.prototype._determineInputEvent = function () {
          return this.componentInstance
            ? (this.componentInstance.$options.model &&
                this.componentInstance.$options.model.event) ||
                "input"
            : this.model && this.model.lazy
            ? "change"
            : n(this.el)
            ? "input"
            : "change";
        }),
        (yt.prototype._determineEventList = function (t) {
          var e = this;
          return !this.events.length || this.componentInstance || n(this.el)
            ? [].concat(this.events).map(function (t) {
                return "input" === t && e.model && e.model.lazy ? "change" : t;
              })
            : this.events.map(function (e) {
                return "input" === e ? t : e;
              });
        }),
        (yt.prototype.addValueListeners = function () {
          var t = this;
          if ((this.unwatch(/^input_.+/), this.listen && this.el)) {
            var e = { cancelled: !1 },
              r = this.targetOf
                ? function () {
                    var e = t.validator._resolveField("#" + t.targetOf);
                    e &&
                      e.flags.validated &&
                      t.validator.validate("#" + t.targetOf);
                  }
                : function () {
                    for (var r = [], n = arguments.length; n--; )
                      r[n] = arguments[n];
                    (0 === r.length || ht(r[0])) && (r[0] = t.value),
                      (t.flags.pending = !0),
                      (t._cancellationToken = e),
                      t.validator.validate("#" + t.id, r[0]);
                  },
              n = this._determineInputEvent(),
              o = this._determineEventList(n);
            if (H(o, n)) {
              var c = null,
                l = null,
                d = !1;
              if (
                (this.model &&
                  this.model.expression &&
                  ((c = this.vm), (l = this.model.expression), (d = !0)),
                !l &&
                  this.componentInstance &&
                  this.componentInstance.$options.model &&
                  ((c = this.componentInstance),
                  (l = this.componentInstance.$options.model.prop || "value")),
                c && l)
              ) {
                var h = v(r, this.delay[n], e),
                  f = c.$watch(l, h);
                this.watchers.push({
                  tag: "input_model",
                  unwatch: function () {
                    t.vm.$nextTick(function () {
                      f();
                    });
                  },
                }),
                  d &&
                    (o = o.filter(function (t) {
                      return t !== n;
                    }));
              }
            }
            o.forEach(function (n) {
              var o = v(r, t.delay[n], e);
              t._addComponentEventListener(n, o), t._addHTMLEventListener(n, o);
            });
          }
        }),
        (yt.prototype._addComponentEventListener = function (t, e) {
          var r = this;
          this.componentInstance &&
            (this.componentInstance.$on(t, e),
            this.watchers.push({
              tag: "input_vue",
              unwatch: function () {
                r.componentInstance.$off(t, e);
              },
            }));
        }),
        (yt.prototype._addHTMLEventListener = function (t, e) {
          var r = this;
          if (this.el && !this.componentInstance) {
            var n = function (n) {
              mt(n, t, e),
                r.watchers.push({
                  tag: "input_native",
                  unwatch: function () {
                    n.removeEventListener(t, e);
                  },
                });
            };
            if ((n(this.el), o(this.el))) {
              var c = document.querySelectorAll(
                'input[name="' + this.el.name + '"]'
              );
              S(c).forEach(function (t) {
                (t._veeValidateId && t !== r.el) || n(t);
              });
            }
          }
        }),
        (yt.prototype.updateAriaAttrs = function () {
          var t = this;
          if (this.aria && this.el && E(this.el.setAttribute)) {
            var e = function (e) {
              e.setAttribute("aria-required", t.isRequired ? "true" : "false"),
                e.setAttribute(
                  "aria-invalid",
                  t.flags.invalid ? "true" : "false"
                );
            };
            if (o(this.el)) {
              var r = document.querySelectorAll(
                'input[name="' + this.el.name + '"]'
              );
              S(r).forEach(e);
            } else e(this.el);
          }
        }),
        (yt.prototype.updateCustomValidity = function () {
          this.validity &&
            this.el &&
            E(this.el.setCustomValidity) &&
            this.validator.errors &&
            this.el.setCustomValidity(
              this.flags.valid
                ? ""
                : this.validator.errors.firstById(this.id) || ""
            );
        }),
        (yt.prototype.destroy = function () {
          this._cancellationToken && (this._cancellationToken.cancelled = !0),
            this.unwatch(),
            this.dependencies.forEach(function (t) {
              return t.field.destroy();
            }),
            (this.dependencies = []);
        }),
        Object.defineProperties(yt.prototype, wt);
      var bt = function (t) {
          void 0 === t && (t = []),
            (this.items = t || []),
            (this.itemsById = this.items.reduce(function (t, e) {
              return (t[e.id] = e), t;
            }, {}));
        },
        xt = { length: { configurable: !0 } };
      (bt.prototype[
        "function" == typeof Symbol ? Symbol.iterator : "@@iterator"
      ] = function () {
        var t = this,
          e = 0;
        return {
          next: function () {
            return { value: t.items[e++], done: e > t.items.length };
          },
        };
      }),
        (xt.length.get = function () {
          return this.items.length;
        }),
        (bt.prototype.find = function (t) {
          return L(this.items, function (e) {
            return e.matches(t);
          });
        }),
        (bt.prototype.findById = function (t) {
          return this.itemsById[t] || null;
        }),
        (bt.prototype.filter = function (t) {
          return Array.isArray(t)
            ? this.items.filter(function (e) {
                return t.some(function (t) {
                  return e.matches(t);
                });
              })
            : this.items.filter(function (e) {
                return e.matches(t);
              });
        }),
        (bt.prototype.map = function (t) {
          return this.items.map(t);
        }),
        (bt.prototype.remove = function (t) {
          var e = null;
          if (!(e = t instanceof yt ? t : this.find(t))) return null;
          var r = this.items.indexOf(e);
          return this.items.splice(r, 1), delete this.itemsById[e.id], e;
        }),
        (bt.prototype.push = function (t) {
          if (!(t instanceof yt))
            throw _(
              "FieldBag only accepts instances of Field that has an id defined."
            );
          if (!t.id) throw _("Field id must be defined.");
          if (this.findById(t.id))
            throw _("Field with id " + t.id + " is already added.");
          this.items.push(t), (this.itemsById[t.id] = t);
        }),
        Object.defineProperties(bt.prototype, xt);
      var _t = function (base, t) {
          (this.id = t._uid),
            (this._base = base),
            (this._paused = !1),
            (this.errors = new X(base.errors, this.id));
        },
        kt = {
          flags: { configurable: !0 },
          rules: { configurable: !0 },
          fields: { configurable: !0 },
          dictionary: { configurable: !0 },
          locale: { configurable: !0 },
        };
      (kt.flags.get = function () {
        var t = this;
        return this._base.fields.items
          .filter(function (e) {
            return e.vmId === t.id;
          })
          .reduce(function (t, e) {
            return (
              e.scope &&
                (t["$" + e.scope] || (t["$" + e.scope] = {}),
                (t["$" + e.scope][e.name] = e.flags)),
              (t[e.name] = e.flags),
              t
            );
          }, {});
      }),
        (kt.rules.get = function () {
          return this._base.rules;
        }),
        (kt.fields.get = function () {
          return new bt(this._base.fields.filter({ vmId: this.id }));
        }),
        (kt.dictionary.get = function () {
          return this._base.dictionary;
        }),
        (kt.locale.get = function () {
          return this._base.locale;
        }),
        (kt.locale.set = function (t) {
          this._base.locale = t;
        }),
        (_t.prototype.localize = function () {
          for (var t, e = [], r = arguments.length; r--; ) e[r] = arguments[r];
          return (t = this._base).localize.apply(t, e);
        }),
        (_t.prototype.update = function () {
          for (var t, e = [], r = arguments.length; r--; ) e[r] = arguments[r];
          return (t = this._base).update.apply(t, e);
        }),
        (_t.prototype.attach = function (t) {
          var e = A({}, t, { vmId: this.id });
          return this._base.attach(e);
        }),
        (_t.prototype.pause = function () {
          this._paused = !0;
        }),
        (_t.prototype.resume = function () {
          this._paused = !1;
        }),
        (_t.prototype.remove = function (t) {
          return this._base.remove(t);
        }),
        (_t.prototype.detach = function (t, e) {
          return this._base.detach(t, e, this.id);
        }),
        (_t.prototype.extend = function () {
          for (var t, e = [], r = arguments.length; r--; ) e[r] = arguments[r];
          return (t = this._base).extend.apply(t, e);
        }),
        (_t.prototype.validate = function (t, e, r) {
          return (
            void 0 === r && (r = {}),
            this._paused
              ? Promise.resolve(!0)
              : this._base.validate(t, e, A({}, { vmId: this.id }, r || {}))
          );
        }),
        (_t.prototype.verify = function () {
          for (var t, e = [], r = arguments.length; r--; ) e[r] = arguments[r];
          return (t = this._base).verify.apply(t, e);
        }),
        (_t.prototype.validateAll = function (t, e) {
          return (
            void 0 === e && (e = {}),
            this._paused
              ? Promise.resolve(!0)
              : this._base.validateAll(t, A({}, { vmId: this.id }, e || {}))
          );
        }),
        (_t.prototype.validateScopes = function (t) {
          return (
            void 0 === t && (t = {}),
            this._paused
              ? Promise.resolve(!0)
              : this._base.validateScopes(A({}, { vmId: this.id }, t || {}))
          );
        }),
        (_t.prototype.destroy = function () {
          delete this.id, delete this._base;
        }),
        (_t.prototype.reset = function (t) {
          return this._base.reset(
            Object.assign({}, t || {}, { vmId: this.id })
          );
        }),
        (_t.prototype.flag = function () {
          for (var t, e = [], r = arguments.length; r--; ) e[r] = arguments[r];
          return (t = this._base).flag.apply(t, e.concat([this.id]));
        }),
        (_t.prototype._resolveField = function () {
          for (var t, e = [], r = arguments.length; r--; ) e[r] = arguments[r];
          return (t = this._base)._resolveField.apply(t, e);
        }),
        Object.defineProperties(_t.prototype, kt);
      var Et = null,
        Ct = function () {
          return Et;
        },
        Tt = {
          provide: function () {
            return this.$validator && !$(this.$vnode)
              ? { $validator: this.$validator }
              : {};
          },
          beforeCreate: function () {
            if (!$(this.$vnode) && !1 !== this.$options.$__veeInject) {
              this.$parent || J(this.$options.$_veeValidate || {});
              var t = G(this);
              (!this.$parent ||
                (this.$options.$_veeValidate &&
                  /new/.test(this.$options.$_veeValidate.validator))) &&
                (this.$validator = new _t(Ct(), this));
              var e,
                r = ((e = this.$options.inject), !(!k(e) || !e.$validator));
              if (
                (this.$validator ||
                  !t.inject ||
                  r ||
                  (this.$validator = new _t(Ct(), this)),
                r || this.$validator)
              ) {
                if (!r && this.$validator)
                  this.$options._base.util.defineReactive(
                    this.$validator,
                    "errors",
                    this.$validator.errors
                  );
                this.$options.computed || (this.$options.computed = {}),
                  (this.$options.computed[t.errorBagName || "errors"] =
                    function () {
                      return this.$validator.errors;
                    }),
                  (this.$options.computed[t.fieldsBagName || "fields"] =
                    function () {
                      return this.$validator.fields.items.reduce(function (
                        t,
                        e
                      ) {
                        return e.scope
                          ? (t["$" + e.scope] || (t["$" + e.scope] = {}),
                            (t["$" + e.scope][e.name] = e.flags),
                            t)
                          : ((t[e.name] = e.flags), t);
                      },
                      {});
                    });
              }
            }
          },
          beforeDestroy: function () {
            this.$validator &&
              this._uid === this.$validator.id &&
              this.$validator.errors.clear();
          },
        };
      function St(t, e) {
        return e && e.$validator
          ? e.$validator.fields.findById(t._veeValidateId)
          : null;
      }
      var Ot = {
          bind: function (t, e, r) {
            var n = r.context.$validator;
            if (n) {
              var o = ct.generate(t, e, r);
              n.attach(o);
            }
          },
          inserted: function (t, e, r) {
            var n = St(t, r.context),
              o = ct.resolveScope(t, e, r);
            n && o !== n.scope && (n.update({ scope: o }), (n.updated = !1));
          },
          update: function (t, e, r) {
            var n = St(t, r.context);
            if (!(!n || (n.updated && h(e.value, e.oldValue)))) {
              var o = ct.resolveScope(t, e, r),
                c = ct.resolveRules(t, e, r);
              n.update({ scope: o, rules: c });
            }
          },
          unbind: function (t, e, r) {
            var n = r.context,
              o = St(t, n);
            o && n.$validator.detach(o);
          },
        },
        At = function (t, e, r) {
          void 0 === e && (e = { fastExit: !0 }),
            void 0 === r && (r = null),
            (this.errors = new X()),
            (this.fields = new bt()),
            this._createFields(t),
            (this.paused = !1),
            (this.fastExit = !!d(e && e.fastExit) || e.fastExit),
            (this.$vee = r || {
              _vm: {
                $nextTick: function (t) {
                  return E(t) ? t() : Promise.resolve();
                },
                $emit: function () {},
                $off: function () {},
              },
            });
        },
        jt = {
          rules: { configurable: !0 },
          dictionary: { configurable: !0 },
          flags: { configurable: !0 },
          locale: { configurable: !0 },
        },
        Dt = {
          rules: { configurable: !0 },
          dictionary: { configurable: !0 },
          locale: { configurable: !0 },
        };
      (Dt.rules.get = function () {
        return ut.rules;
      }),
        (jt.rules.get = function () {
          return ut.rules;
        }),
        (jt.dictionary.get = function () {
          return Z.getDriver();
        }),
        (Dt.dictionary.get = function () {
          return Z.getDriver();
        }),
        (jt.flags.get = function () {
          return this.fields.items.reduce(function (t, e) {
            var r;
            return e.scope
              ? ((t["$" + e.scope] = (((r = {})[e.name] = e.flags), r)), t)
              : ((t[e.name] = e.flags), t);
          }, {});
        }),
        (jt.locale.get = function () {
          return At.locale;
        }),
        (jt.locale.set = function (t) {
          At.locale = t;
        }),
        (Dt.locale.get = function () {
          return Z.getDriver().locale;
        }),
        (Dt.locale.set = function (t) {
          var e = t !== Z.getDriver().locale;
          (Z.getDriver().locale = t),
            e && At.$vee && At.$vee._vm && At.$vee._vm.$emit("localeChanged");
        }),
        (At.create = function (t, e) {
          return new At(t, e);
        }),
        (At.extend = function (t, e, r) {
          void 0 === r && (r = {}), At._guardExtend(t, e);
          var n = e.options || {};
          At._merge(t, {
            validator: e,
            paramNames: (r && r.paramNames) || e.paramNames,
            options: A({ hasTarget: !1, immediate: !0 }, n, r || {}),
          });
        }),
        (At.remove = function (t) {
          ut.remove(t);
        }),
        (At.prototype.localize = function (t, e) {
          At.localize(t, e);
        }),
        (At.localize = function (t, e) {
          var r;
          if (k(t)) Z.getDriver().merge(t);
          else {
            if (e) {
              var n = t || e.name;
              (e = A({}, e)), Z.getDriver().merge((((r = {})[n] = e), r));
            }
            t && (At.locale = t);
          }
        }),
        (At.prototype.attach = function (t) {
          var e = this,
            r = { name: t.name, scope: t.scope, persist: !0 },
            n = t.persist ? this.fields.find(r) : null;
          n && ((t.flags = n.flags), n.destroy(), this.fields.remove(n));
          var o = t.initialValue,
            c = new yt(t);
          return (
            this.fields.push(c),
            c.immediate
              ? this.$vee._vm.$nextTick(function () {
                  return e.validate("#" + c.id, o || c.value, { vmId: t.vmId });
                })
              : this._validate(c, o || c.value, { initial: !0 }).then(function (
                  t
                ) {
                  (c.flags.valid = t.valid), (c.flags.invalid = !t.valid);
                }),
            c
          );
        }),
        (At.prototype.flag = function (t, e, r) {
          void 0 === r && (r = null);
          var n = this._resolveField(t, void 0, r);
          n && e && n.setFlags(e);
        }),
        (At.prototype.detach = function (t, e, r) {
          var n = E(t.destroy) ? t : this._resolveField(t, e, r);
          n &&
            (n.persist ||
              (n.destroy(),
              this.errors.remove(n.name, n.scope, n.vmId),
              this.fields.remove(n)));
        }),
        (At.prototype.extend = function (t, e, r) {
          void 0 === r && (r = {}), At.extend(t, e, r);
        }),
        (At.prototype.reset = function (t) {
          var e = this;
          return this.$vee._vm
            .$nextTick()
            .then(function () {
              return e.$vee._vm.$nextTick();
            })
            .then(function () {
              e.fields.filter(t).forEach(function (r) {
                r.waitFor(null),
                  r.reset(),
                  e.errors.remove(r.name, r.scope, t && t.vmId);
              });
            });
        }),
        (At.prototype.update = function (t, e) {
          var r = e.scope;
          this._resolveField("#" + t) && this.errors.update(t, { scope: r });
        }),
        (At.prototype.remove = function (t) {
          At.remove(t);
        }),
        (At.prototype.validate = function (t, e, r) {
          var n = this;
          void 0 === r && (r = {});
          var o = r.silent,
            c = r.vmId;
          if (this.paused) return Promise.resolve(!0);
          if (d(t)) return this.validateScopes({ silent: o, vmId: c });
          if ("*" === t)
            return this.validateAll(void 0, { silent: o, vmId: c });
          if (/^(.+)\.\*$/.test(t)) {
            var l = t.match(/^(.+)\.\*$/)[1];
            return this.validateAll(l);
          }
          var h = this._resolveField(t);
          if (!h) return this._handleFieldNotFound(t);
          o || (h.flags.pending = !0), void 0 === e && (e = h.value);
          var f = this._validate(h, e);
          return (
            h.waitFor(f),
            f.then(function (t) {
              return (
                !o &&
                  h.isWaitingFor(f) &&
                  (h.waitFor(null), n._handleValidationResults([t], c)),
                t.valid
              );
            })
          );
        }),
        (At.prototype.pause = function () {
          return (this.paused = !0), this;
        }),
        (At.prototype.resume = function () {
          return (this.paused = !1), this;
        }),
        (At.prototype.validateAll = function (t, e) {
          var r = this;
          void 0 === e && (e = {});
          var n = e.silent,
            o = e.vmId;
          if (this.paused) return Promise.resolve(!0);
          var c = null,
            l = !1;
          return (
            "string" == typeof t
              ? (c = { scope: t, vmId: o })
              : k(t)
              ? ((c = Object.keys(t).map(function (t) {
                  return { name: t, vmId: o, scope: null };
                })),
                (l = !0))
              : (c = Array.isArray(t)
                  ? t.map(function (t) {
                      return "object" == typeof t
                        ? Object.assign({ vmId: o }, t)
                        : { name: t, vmId: o };
                    })
                  : { scope: null, vmId: o }),
            Promise.all(
              this.fields.filter(c).map(function (e) {
                return r._validate(e, l ? t[e.name] : e.value);
              })
            ).then(function (t) {
              return (
                n || r._handleValidationResults(t, o),
                t.every(function (t) {
                  return t.valid;
                })
              );
            })
          );
        }),
        (At.prototype.validateScopes = function (t) {
          var e = this;
          void 0 === t && (t = {});
          var r = t.silent,
            n = t.vmId;
          return this.paused
            ? Promise.resolve(!0)
            : Promise.all(
                this.fields.filter({ vmId: n }).map(function (t) {
                  return e._validate(t, t.value);
                })
              ).then(function (t) {
                return (
                  r || e._handleValidationResults(t, n),
                  t.every(function (t) {
                    return t.valid;
                  })
                );
              });
        }),
        (At.prototype.verify = function (t, e, r) {
          void 0 === r && (r = {});
          var n = {
              name: (r && r.name) || "{field}",
              rules: w(e),
              bails: m("bails", r, !0),
              forceRequired: !1,
              get isRequired() {
                return !!this.rules.required || this.forceRequired;
              },
            },
            o = Object.keys(n.rules).filter(ut.isTargetRule);
          return (
            o.length &&
              r &&
              k(r.values) &&
              (n.dependencies = o.map(function (t) {
                var e = n.rules[t][0];
                return { name: t, field: { value: r.values[e] } };
              })),
            this._validate(n, t).then(function (t) {
              var e = [],
                r = {};
              return (
                t.errors.forEach(function (t) {
                  e.push(t.msg), (r[t.rule] = t.msg);
                }),
                { valid: t.valid, errors: e, failedRules: r }
              );
            })
          );
        }),
        (At.prototype.destroy = function () {
          this.$vee._vm.$off("localeChanged");
        }),
        (At.prototype._createFields = function (t) {
          var e = this;
          t &&
            Object.keys(t).forEach(function (r) {
              var n = A({}, { name: r, rules: t[r] });
              e.attach(n);
            });
        }),
        (At.prototype._getDateFormat = function (t) {
          var e = null;
          return (
            t.date_format &&
              Array.isArray(t.date_format) &&
              (e = t.date_format[0]),
            e || Z.getDriver().getDateFormat(this.locale)
          );
        }),
        (At.prototype._formatErrorMessage = function (t, e, data, r) {
          void 0 === data && (data = {}), void 0 === r && (r = null);
          var n = this._getFieldDisplayName(t),
            o = this._getLocalizedParams(e, r);
          return Z.getDriver().getFieldMessage(this.locale, t.name, e.name, [
            n,
            o,
            data,
          ]);
        }),
        (At.prototype._convertParamObjectToArray = function (t, e) {
          if (Array.isArray(t)) return t;
          var r = ut.getParamNames(e);
          return r && k(t)
            ? r.reduce(function (e, r) {
                return r in t && e.push(t[r]), e;
              }, [])
            : t;
        }),
        (At.prototype._getLocalizedParams = function (t, e) {
          void 0 === e && (e = null);
          var r = this._convertParamObjectToArray(t.params, t.name);
          return t.options.hasTarget && r && r[0]
            ? [e || Z.getDriver().getAttribute(this.locale, r[0], r[0])].concat(
                r.slice(1)
              )
            : r;
        }),
        (At.prototype._getFieldDisplayName = function (t) {
          return (
            t.alias || Z.getDriver().getAttribute(this.locale, t.name, t.name)
          );
        }),
        (At.prototype._convertParamArrayToObj = function (t, e) {
          var r = ut.getParamNames(e);
          if (!r) return t;
          if (k(t)) {
            if (
              r.some(function (e) {
                return -1 !== Object.keys(t).indexOf(e);
              })
            )
              return t;
            t = [t];
          }
          return t.reduce(function (t, e, n) {
            return (t[r[n]] = e), t;
          }, {});
        }),
        (At.prototype._test = function (t, e, r) {
          var n = this,
            o = ut.getValidatorMethod(r.name),
            c = Array.isArray(r.params) ? S(r.params) : r.params;
          c || (c = []);
          var l = null;
          if (!o || "function" != typeof o)
            return Promise.reject(
              _("No such validator '" + r.name + "' exists.")
            );
          if (r.options.hasTarget && t.dependencies) {
            var d = L(t.dependencies, function (t) {
              return t.name === r.name;
            });
            d &&
              ((l = d.field.alias), (c = [d.field.value].concat(c.slice(1))));
          } else
            "required" === r.name &&
              t.rejectsFalse &&
              (c = c.length ? c : [!0]);
          if (r.options.isDate) {
            var h = this._getDateFormat(t.rules);
            "date_format" !== r.name && c.push(h);
          }
          var f = o(e, this._convertParamArrayToObj(c, r.name));
          return E(f.then)
            ? f.then(function (e) {
                var o = !0,
                  data = {};
                return (
                  Array.isArray(e)
                    ? (o = e.every(function (t) {
                        return k(t) ? t.valid : t;
                      }))
                    : ((o = k(e) ? e.valid : e), (data = e.data)),
                  {
                    valid: o,
                    data: f.data,
                    errors: o ? [] : [n._createFieldError(t, r, data, l)],
                  }
                );
              })
            : (k(f) || (f = { valid: f, data: {} }),
              {
                valid: f.valid,
                data: f.data,
                errors: f.valid
                  ? []
                  : [this._createFieldError(t, r, f.data, l)],
              });
        }),
        (At._merge = function (t, e) {
          var r = e.validator,
            n = e.options,
            o = e.paramNames,
            c = E(r) ? r : r.validate;
          r.getMessage && Z.getDriver().setMessage(At.locale, t, r.getMessage),
            ut.add(t, { validate: c, options: n, paramNames: o });
        }),
        (At._guardExtend = function (t, e) {
          if (!E(e) && !E(e.validate))
            throw _(
              "Extension Error: The validator '" +
                t +
                "' must be a function or have a 'validate' method."
            );
        }),
        (At.prototype._createFieldError = function (t, e, data, r) {
          var n = this;
          return {
            id: t.id,
            vmId: t.vmId,
            field: t.name,
            msg: this._formatErrorMessage(t, e, data, r),
            rule: e.name,
            scope: t.scope,
            regenerate: function () {
              return n._formatErrorMessage(t, e, data, r);
            },
          };
        }),
        (At.prototype._resolveField = function (t, e, r) {
          if ("#" === t[0]) return this.fields.findById(t.slice(1));
          if (!d(e)) return this.fields.find({ name: t, scope: e, vmId: r });
          if (H(t, ".")) {
            var n = t.split("."),
              o = n[0],
              c = n.slice(1),
              l = this.fields.find({ name: c.join("."), scope: o, vmId: r });
            if (l) return l;
          }
          return this.fields.find({ name: t, scope: null, vmId: r });
        }),
        (At.prototype._handleFieldNotFound = function (t, e) {
          var r = d(e) ? t : (d(e) ? "" : e + ".") + t;
          return Promise.reject(
            _(
              'Validating a non-existent field: "' +
                r +
                '". Use "attach()" first.'
            )
          );
        }),
        (At.prototype._handleValidationResults = function (t, e) {
          var r = this,
            n = t.map(function (t) {
              return { id: t.id };
            });
          this.errors.removeById(
            n.map(function (t) {
              return t.id;
            })
          ),
            t.forEach(function (t) {
              r.errors.remove(t.field, t.scope, e);
            });
          var o = t.reduce(function (t, e) {
            return t.push.apply(t, e.errors), t;
          }, []);
          this.errors.add(o),
            this.fields.filter(n).forEach(function (e) {
              var r = L(t, function (t) {
                return t.id === e.id;
              });
              e.setFlags({ pending: !1, valid: r.valid, validated: !0 });
            });
        }),
        (At.prototype._shouldSkip = function (t, e) {
          return (
            !1 !== t.bails &&
            (!(!t.isDisabled || !K().useConstraintAttrs) ||
              (!t.isRequired && (d(e) || "" === e || F(e))))
          );
        }),
        (At.prototype._shouldBail = function (t) {
          return void 0 !== t.bails ? t.bails : this.fastExit;
        }),
        (At.prototype._validate = function (t, e, r) {
          var n = this;
          void 0 === r && (r = {});
          var o = r.initial,
            c = Object.keys(t.rules).filter(ut.isRequireRule);
          if (
            ((t.forceRequired = !1),
            c.forEach(function (r) {
              var o = ut.getOptions(r),
                c = n._test(t, e, { name: r, params: t.rules[r], options: o });
              if (E(c.then)) throw _("Require rules cannot be async");
              if (!k(c))
                throw _("Require rules has to return an object (see docs)");
              !0 === c.data.required && (t.forceRequired = !0);
            }),
            this._shouldSkip(t, e))
          )
            return Promise.resolve({
              valid: !0,
              id: t.id,
              field: t.name,
              scope: t.scope,
              errors: [],
            });
          var l = [],
            d = [],
            h = !1;
          return (
            E(t.checkValueChanged) && (t.flags.changed = t.checkValueChanged()),
            Object.keys(t.rules)
              .filter(function (t) {
                return !o || !ut.has(t) || ut.isImmediate(t);
              })
              .some(function (r) {
                var o = ut.getOptions(r),
                  c = n._test(t, e, {
                    name: r,
                    params: t.rules[r],
                    options: o,
                  });
                return (
                  E(c.then)
                    ? l.push(c)
                    : !c.valid && n._shouldBail(t)
                    ? (d.push.apply(d, c.errors), (h = !0))
                    : l.push(
                        new Promise(function (t) {
                          return t(c);
                        })
                      ),
                  h
                );
              }),
            h
              ? Promise.resolve({
                  valid: !1,
                  errors: d,
                  id: t.id,
                  field: t.name,
                  scope: t.scope,
                })
              : Promise.all(l).then(function (e) {
                  return e.reduce(
                    function (t, e) {
                      var r;
                      return (
                        e.valid || (r = t.errors).push.apply(r, e.errors),
                        (t.valid = t.valid && e.valid),
                        t
                      );
                    },
                    {
                      valid: !0,
                      errors: d,
                      id: t.id,
                      field: t.name,
                      scope: t.scope,
                    }
                  );
                })
          );
        }),
        Object.defineProperties(At.prototype, jt),
        Object.defineProperties(At, Dt);
      var It = function (t) {
          return k(t)
            ? Object.keys(t).reduce(function (e, r) {
                return (e[r] = It(t[r])), e;
              }, {})
            : E(t)
            ? t("{0}", ["{1}", "{2}", "{3}"])
            : t;
        },
        Lt = function (t, e) {
          (this.i18n = t), (this.rootKey = e);
        },
        $t = { locale: { configurable: !0 } };
      ($t.locale.get = function () {
        return this.i18n.locale;
      }),
        ($t.locale.set = function (t) {
          x(
            "Cannot set locale from the validator when using vue-i18n, use i18n.locale setter instead"
          );
        }),
        (Lt.prototype.getDateFormat = function (t) {
          return this.i18n.getDateTimeFormat(t || this.locale);
        }),
        (Lt.prototype.setDateFormat = function (t, e) {
          this.i18n.setDateTimeFormat(t || this.locale, e);
        }),
        (Lt.prototype.getMessage = function (t, e, data) {
          var path = this.rootKey + ".messages." + e,
            r = data;
          return (
            Array.isArray(data) && (r = [].concat.apply([], data)),
            this.i18n.te(path)
              ? this.i18n.t(path, r)
              : this.i18n.te(path, this.i18n.fallbackLocale)
              ? this.i18n.t(path, this.i18n.fallbackLocale, r)
              : this.i18n.t(this.rootKey + ".messages._default", r)
          );
        }),
        (Lt.prototype.getAttribute = function (t, e, r) {
          void 0 === r && (r = "");
          var path = this.rootKey + ".attributes." + e;
          return this.i18n.te(path) ? this.i18n.t(path) : r;
        }),
        (Lt.prototype.getFieldMessage = function (t, e, r, data) {
          var path = this.rootKey + ".custom." + e + "." + r;
          return this.i18n.te(path)
            ? this.i18n.t(path, data)
            : this.getMessage(t, r, data);
        }),
        (Lt.prototype.merge = function (t) {
          var e = this;
          Object.keys(t).forEach(function (r) {
            var n,
              o = z({}, m(r + "." + e.rootKey, e.i18n.messages, {})),
              c = z(
                o,
                (function (t) {
                  var e = {};
                  return (
                    t.messages && (e.messages = It(t.messages)),
                    t.custom && (e.custom = It(t.custom)),
                    t.attributes && (e.attributes = t.attributes),
                    d(t.dateFormat) || (e.dateFormat = t.dateFormat),
                    e
                  );
                })(t[r])
              );
            e.i18n.mergeLocaleMessage(r, (((n = {})[e.rootKey] = c), n)),
              c.dateFormat && e.i18n.setDateTimeFormat(r, c.dateFormat);
          });
        }),
        (Lt.prototype.setMessage = function (t, e, r) {
          var n, o;
          this.merge(
            (((o = {})[t] = { messages: ((n = {}), (n[e] = r), n) }), o)
          );
        }),
        (Lt.prototype.setAttribute = function (t, e, r) {
          var n, o;
          this.merge(
            (((o = {})[t] = { attributes: ((n = {}), (n[e] = r), n) }), o)
          );
        }),
        Object.defineProperties(Lt.prototype, $t);
      var Pt,
        zt,
        Mt,
        Nt = {
          aggressive: function () {
            return { on: ["input"] };
          },
          eager: function (t) {
            return t.errors.length
              ? { on: ["input"] }
              : { on: ["change", "blur"] };
          },
          passive: function () {
            return { on: [] };
          },
          lazy: function () {
            return { on: ["change"] };
          },
        },
        qt = function (t, e) {
          var r;
          this.configure(t),
            (Mt = this),
            e && (Pt = e),
            (this._validator =
              ((r = new At(null, { fastExit: t && t.fastExit }, this)),
              (Et = r),
              r)),
            this._initVM(this.config),
            this._initI18n(this.config);
        },
        Ht = { i18nDriver: { configurable: !0 }, config: { configurable: !0 } },
        Ft = { i18nDriver: { configurable: !0 }, config: { configurable: !0 } };
      (qt.setI18nDriver = function (t, e) {
        Z.setDriver(t, e);
      }),
        (qt.configure = function (t) {
          J(t);
        }),
        (qt.setMode = function (t, e) {
          if ((J({ mode: t }), e)) {
            if (!E(e))
              throw new Error("A mode implementation must be a function");
            Nt[t] = e;
          }
        }),
        (qt.use = function (t, e) {
          return (
            void 0 === e && (e = {}),
            E(t)
              ? Mt
                ? void t({ Validator: At, ErrorBag: X, Rules: At.rules }, e)
                : (zt || (zt = []), void zt.push({ plugin: t, options: e }))
              : x("The plugin must be a callable function")
          );
        }),
        (qt.install = function (t, e) {
          (Pt && t === Pt) ||
            ((Pt = t),
            (Mt = new qt(e)),
            (At.$vee = Mt),
            (function () {
              try {
                var t = Object.defineProperty({}, "passive", {
                  get: function () {
                    gt = !0;
                  },
                });
                window.addEventListener("testPassive", null, t),
                  window.removeEventListener("testPassive", null, t);
              } catch (t) {
                gt = !1;
              }
            })(),
            Pt.mixin(Tt),
            Pt.directive("validate", Ot),
            zt &&
              (zt.forEach(function (t) {
                var e = t.plugin,
                  r = t.options;
                qt.use(e, r);
              }),
              (zt = null)));
        }),
        (Ht.i18nDriver.get = function () {
          return Z.getDriver();
        }),
        (Ft.i18nDriver.get = function () {
          return Z.getDriver();
        }),
        (Ht.config.get = function () {
          return K();
        }),
        (Ft.config.get = function () {
          return K();
        }),
        (qt.prototype._initVM = function (t) {
          var e = this;
          this._vm = new Pt({
            data: function () {
              return {
                errors: e._validator.errors,
                fields: e._validator.fields,
              };
            },
          });
        }),
        (qt.prototype._initI18n = function (t) {
          var e = this,
            r = t.dictionary,
            n = t.i18n,
            o = t.i18nRootKey,
            c = t.locale,
            l = function () {
              r && e.i18nDriver.merge(r), e._validator.errors.regenerate();
            };
          n
            ? (qt.setI18nDriver("i18n", new Lt(n, o)),
              n._vm.$watch("locale", l))
            : "undefined" != typeof window && this._vm.$on("localeChanged", l),
            r && this.i18nDriver.merge(r),
            c && !n && this._validator.localize(c);
        }),
        (qt.prototype.configure = function (t) {
          J(t);
        }),
        Object.defineProperties(qt.prototype, Ht),
        Object.defineProperties(qt, Ft),
        (qt.mixin = Tt),
        (qt.directive = Ot),
        (qt.Validator = At),
        (qt.ErrorBag = X);
      var Rt,
        Bt = {
          _default: function (t) {
            return "The " + t + " value is not valid";
          },
          after: function (t, e) {
            var r = e[0];
            return (
              "The " + t + " must be after " + (e[1] ? "or equal to " : "") + r
            );
          },
          alpha: function (t) {
            return "The " + t + " field may only contain alphabetic characters";
          },
          alpha_dash: function (t) {
            return (
              "The " +
              t +
              " field may contain alpha-numeric characters as well as dashes and underscores"
            );
          },
          alpha_num: function (t) {
            return (
              "The " + t + " field may only contain alpha-numeric characters"
            );
          },
          alpha_spaces: function (t) {
            return (
              "The " +
              t +
              " field may only contain alphabetic characters as well as spaces"
            );
          },
          before: function (t, e) {
            var r = e[0];
            return (
              "The " + t + " must be before " + (e[1] ? "or equal to " : "") + r
            );
          },
          between: function (t, e) {
            return (
              "The " + t + " field must be between " + e[0] + " and " + e[1]
            );
          },
          confirmed: function (t) {
            return "The " + t + " confirmation does not match";
          },
          credit_card: function (t) {
            return "The " + t + " field is invalid";
          },
          date_between: function (t, e) {
            return "The " + t + " must be between " + e[0] + " and " + e[1];
          },
          date_format: function (t, e) {
            return "The " + t + " must be in the format " + e[0];
          },
          decimal: function (t, e) {
            void 0 === e && (e = []);
            var r = e[0];
            return (
              void 0 === r && (r = "*"),
              "The " +
                t +
                " field must be numeric and may contain" +
                (r && "*" !== r ? " " + r : "") +
                " decimal points"
            );
          },
          digits: function (t, e) {
            return (
              "The " +
              t +
              " field must be numeric and contains exactly " +
              e[0] +
              " digits"
            );
          },
          dimensions: function (t, e) {
            return (
              "The " +
              t +
              " field must be " +
              e[0] +
              " pixels by " +
              e[1] +
              " pixels"
            );
          },
          email: function (t) {
            return "The " + t + " field must be a valid email";
          },
          excluded: function (t) {
            return "The " + t + " field must be a valid value";
          },
          ext: function (t) {
            return "The " + t + " field must be a valid file";
          },
          image: function (t) {
            return "The " + t + " field must be an image";
          },
          included: function (t) {
            return "The " + t + " field must be a valid value";
          },
          integer: function (t) {
            return "The " + t + " field must be an integer";
          },
          ip: function (t) {
            return "The " + t + " field must be a valid ip address";
          },
          ip_or_fqdn: function (t) {
            return "The " + t + " field must be a valid ip address or FQDN";
          },
          length: function (t, e) {
            var r = e[0],
              n = e[1];
            return n
              ? "The " + t + " length must be between " + r + " and " + n
              : "The " + t + " length must be " + r;
          },
          max: function (t, e) {
            return (
              "The " +
              t +
              " field may not be greater than " +
              e[0] +
              " characters"
            );
          },
          max_value: function (t, e) {
            return "The " + t + " field must be " + e[0] + " or less";
          },
          mimes: function (t) {
            return "The " + t + " field must have a valid file type";
          },
          min: function (t, e) {
            return (
              "The " + t + " field must be at least " + e[0] + " characters"
            );
          },
          min_value: function (t, e) {
            return "The " + t + " field must be " + e[0] + " or more";
          },
          numeric: function (t) {
            return "The " + t + " field may only contain numeric characters";
          },
          regex: function (t) {
            return "The " + t + " field format is invalid";
          },
          required: function (t) {
            return "The " + t + " field is required";
          },
          required_if: function (t, e) {
            return (
              "The " +
              t +
              " field is required when the " +
              e[0] +
              " field has this value"
            );
          },
          size: function (t, e) {
            return (
              "The " +
              t +
              " size must be less than " +
              (function (t) {
                var e = 1024,
                  i =
                    0 == (t = Number(t) * e)
                      ? 0
                      : Math.floor(Math.log(t) / Math.log(e));
                return (
                  1 * (t / Math.pow(e, i)).toFixed(2) +
                  " " +
                  ["Byte", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][i]
                );
              })(e[0])
            );
          },
          url: function (t) {
            return "The " + t + " field is not a valid URL";
          },
        },
        Wt = { name: "en", messages: Bt, attributes: {} };
      function Ut(t) {
        if (null === t || !0 === t || !1 === t) return NaN;
        var e = Number(t);
        return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
      }
      "undefined" != typeof VeeValidate &&
        VeeValidate.Validator.localize((((Rt = {})[Wt.name] = Wt), Rt));
      var Vt = 6e4;
      function Yt(t) {
        var e = new Date(t.getTime()),
          r = e.getTimezoneOffset();
        e.setSeconds(0, 0);
        var n = e.getTime() % Vt;
        return r * Vt + n;
      }
      var Zt = 36e5,
        Xt = 6e4,
        Qt = 2,
        Gt = {
          dateTimeDelimeter: /[T ]/,
          plainTime: /:/,
          timeZoneDelimeter: /[Z ]/i,
          YY: /^(\d{2})$/,
          YYY: [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
          YYYY: /^(\d{4})/,
          YYYYY: [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
          MM: /^-(\d{2})$/,
          DDD: /^-?(\d{3})$/,
          MMDD: /^-?(\d{2})-?(\d{2})$/,
          Www: /^-?W(\d{2})$/,
          WwwD: /^-?W(\d{2})-?(\d{1})$/,
          HH: /^(\d{2}([.,]\d*)?)$/,
          HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
          HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
          timezone: /([Z+-].*)$/,
          timezoneZ: /^(Z)$/,
          timezoneHH: /^([+-])(\d{2})$/,
          timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/,
        };
      function Kt(t, e) {
        if (arguments.length < 1)
          throw new TypeError(
            "1 argument required, but only " + arguments.length + " present"
          );
        if (null === t) return new Date(NaN);
        var r = e || {},
          n = null == r.additionalDigits ? Qt : Ut(r.additionalDigits);
        if (2 !== n && 1 !== n && 0 !== n)
          throw new RangeError("additionalDigits must be 0, 1 or 2");
        if (
          t instanceof Date ||
          ("object" == typeof t &&
            "[object Date]" === Object.prototype.toString.call(t))
        )
          return new Date(t.getTime());
        if (
          "number" == typeof t ||
          "[object Number]" === Object.prototype.toString.call(t)
        )
          return new Date(t);
        if (
          "string" != typeof t &&
          "[object String]" !== Object.prototype.toString.call(t)
        )
          return new Date(NaN);
        var o = (function (t) {
            var e,
              r = {},
              n = t.split(Gt.dateTimeDelimeter);
            Gt.plainTime.test(n[0])
              ? ((r.date = null), (e = n[0]))
              : ((r.date = n[0]),
                (e = n[1]),
                Gt.timeZoneDelimeter.test(r.date) &&
                  ((r.date = t.split(Gt.timeZoneDelimeter)[0]),
                  (e = t.substr(r.date.length, t.length))));
            if (e) {
              var o = Gt.timezone.exec(e);
              o
                ? ((r.time = e.replace(o[1], "")), (r.timezone = o[1]))
                : (r.time = e);
            }
            return r;
          })(t),
          c = (function (t, e) {
            var r,
              n = Gt.YYY[e],
              o = Gt.YYYYY[e];
            if ((r = Gt.YYYY.exec(t) || o.exec(t))) {
              var c = r[1];
              return {
                year: parseInt(c, 10),
                restDateString: t.slice(c.length),
              };
            }
            if ((r = Gt.YY.exec(t) || n.exec(t))) {
              var l = r[1];
              return {
                year: 100 * parseInt(l, 10),
                restDateString: t.slice(l.length),
              };
            }
            return { year: null };
          })(o.date, n),
          l = c.year,
          d = (function (t, e) {
            if (null === e) return null;
            var r, n, o, c;
            if (0 === t.length) return (n = new Date(0)).setUTCFullYear(e), n;
            if ((r = Gt.MM.exec(t)))
              return (
                (n = new Date(0)),
                ne(e, (o = parseInt(r[1], 10) - 1))
                  ? (n.setUTCFullYear(e, o), n)
                  : new Date(NaN)
              );
            if ((r = Gt.DDD.exec(t))) {
              n = new Date(0);
              var l = parseInt(r[1], 10);
              return (function (t, e) {
                if (e < 1) return !1;
                var r = re(t);
                if (r && e > 366) return !1;
                if (!r && e > 365) return !1;
                return !0;
              })(e, l)
                ? (n.setUTCFullYear(e, 0, l), n)
                : new Date(NaN);
            }
            if ((r = Gt.MMDD.exec(t))) {
              (n = new Date(0)), (o = parseInt(r[1], 10) - 1);
              var d = parseInt(r[2], 10);
              return ne(e, o, d)
                ? (n.setUTCFullYear(e, o, d), n)
                : new Date(NaN);
            }
            if ((r = Gt.Www.exec(t)))
              return ie(e, (c = parseInt(r[1], 10) - 1))
                ? Jt(e, c)
                : new Date(NaN);
            if ((r = Gt.WwwD.exec(t))) {
              c = parseInt(r[1], 10) - 1;
              var h = parseInt(r[2], 10) - 1;
              return ie(e, c, h) ? Jt(e, c, h) : new Date(NaN);
            }
            return null;
          })(c.restDateString, l);
        if (isNaN(d)) return new Date(NaN);
        if (d) {
          var h,
            f = d.getTime(),
            time = 0;
          if (
            o.time &&
            ((time = (function (t) {
              var e, r, n;
              if ((e = Gt.HH.exec(t)))
                return oe((r = parseFloat(e[1].replace(",", "."))))
                  ? (r % 24) * Zt
                  : NaN;
              if ((e = Gt.HHMM.exec(t)))
                return oe(
                  (r = parseInt(e[1], 10)),
                  (n = parseFloat(e[2].replace(",", ".")))
                )
                  ? (r % 24) * Zt + n * Xt
                  : NaN;
              if ((e = Gt.HHMMSS.exec(t))) {
                (r = parseInt(e[1], 10)), (n = parseInt(e[2], 10));
                var o = parseFloat(e[3].replace(",", "."));
                return oe(r, n, o) ? (r % 24) * Zt + n * Xt + 1e3 * o : NaN;
              }
              return null;
            })(o.time)),
            isNaN(time))
          )
            return new Date(NaN);
          if (o.timezone) {
            if (
              ((h = (function (t) {
                var e, r, n;
                if ((e = Gt.timezoneZ.exec(t))) return 0;
                if ((e = Gt.timezoneHH.exec(t)))
                  return (
                    (n = parseInt(e[2], 10)),
                    ae() ? ((r = n * Zt), "+" === e[1] ? -r : r) : NaN
                  );
                if ((e = Gt.timezoneHHMM.exec(t))) {
                  n = parseInt(e[2], 10);
                  var o = parseInt(e[3], 10);
                  return ae(n, o)
                    ? ((r = n * Zt + o * Xt), "+" === e[1] ? -r : r)
                    : NaN;
                }
                return 0;
              })(o.timezone)),
              isNaN(h))
            )
              return new Date(NaN);
          } else (h = Yt(new Date(f + time))), (h = Yt(new Date(f + time + h)));
          return new Date(f + time + h);
        }
        return new Date(NaN);
      }
      function Jt(t, e, r) {
        (e = e || 0), (r = r || 0);
        var n = new Date(0);
        n.setUTCFullYear(t, 0, 4);
        var o = 7 * e + r + 1 - (n.getUTCDay() || 7);
        return n.setUTCDate(n.getUTCDate() + o), n;
      }
      var te = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        ee = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function re(t) {
        return t % 400 == 0 || (t % 4 == 0 && t % 100 != 0);
      }
      function ne(t, e, r) {
        if (e < 0 || e > 11) return !1;
        if (null != r) {
          if (r < 1) return !1;
          var n = re(t);
          if (n && r > ee[e]) return !1;
          if (!n && r > te[e]) return !1;
        }
        return !0;
      }
      function ie(t, e, r) {
        return !(e < 0 || e > 52) && (null == r || !(r < 0 || r > 6));
      }
      function oe(t, e, r) {
        return (
          (null == t || !(t < 0 || t >= 25)) &&
          (null == e || !(e < 0 || e >= 60)) &&
          (null == r || !(r < 0 || r >= 60))
        );
      }
      function ae(t, e) {
        return null == e || !(e < 0 || e > 59);
      }
      function se(t, e) {
        if (arguments.length < 1)
          throw new TypeError(
            "1 argument required, but only " + arguments.length + " present"
          );
        var r = Kt(t, e);
        return !isNaN(r);
      }
      var ce = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
      };
      function le(t) {
        return function (e) {
          var r = e || {},
            n = r.width ? String(r.width) : t.defaultWidth;
          return t.formats[n] || t.formats[t.defaultWidth];
        };
      }
      var ue = {
          date: le({
            formats: {
              full: "EEEE, MMMM do, y",
              long: "MMMM do, y",
              medium: "MMM d, y",
              short: "MM/dd/yyyy",
            },
            defaultWidth: "full",
          }),
          time: le({
            formats: {
              full: "h:mm:ss a zzzz",
              long: "h:mm:ss a z",
              medium: "h:mm:ss a",
              short: "h:mm a",
            },
            defaultWidth: "full",
          }),
          dateTime: le({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        },
        de = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: "P",
        };
      function pe(t) {
        return function (e, r) {
          var n = r || {},
            o = n.width ? String(n.width) : t.defaultWidth;
          return (
            "formatting" === (n.context ? String(n.context) : "standalone") &&
            t.formattingValues
              ? t.formattingValues[o] ||
                t.formattingValues[t.defaultFormattingWidth]
              : t.values[o] || t.values[t.defaultWidth]
          )[t.argumentCallback ? t.argumentCallback(e) : e];
        };
      }
      var he = {
        ordinalNumber: function (t, e) {
          var r = Number(t),
            n = r % 100;
          if (n > 20 || n < 10)
            switch (n % 10) {
              case 1:
                return r + "st";
              case 2:
                return r + "nd";
              case 3:
                return r + "rd";
            }
          return r + "th";
        },
        era: pe({
          values: {
            narrow: ["B", "A"],
            abbreviated: ["BC", "AD"],
            wide: ["Before Christ", "Anno Domini"],
          },
          defaultWidth: "wide",
        }),
        quarter: pe({
          values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["Q1", "Q2", "Q3", "Q4"],
            wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
          },
          defaultWidth: "wide",
          argumentCallback: function (t) {
            return Number(t) - 1;
          },
        }),
        month: pe({
          values: {
            narrow: [
              "J",
              "F",
              "M",
              "A",
              "M",
              "J",
              "J",
              "A",
              "S",
              "O",
              "N",
              "D",
            ],
            abbreviated: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            wide: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
          },
          defaultWidth: "wide",
        }),
        day: pe({
          values: {
            narrow: ["S", "M", "T", "W", "T", "F", "S"],
            short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            wide: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
          },
          defaultWidth: "wide",
        }),
        dayPeriod: pe({
          values: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mi",
              noon: "n",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "midnight",
              noon: "noon",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "midnight",
              noon: "noon",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
          },
          defaultWidth: "wide",
          formattingValues: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mi",
              noon: "n",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "midnight",
              noon: "noon",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "midnight",
              noon: "noon",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
          },
          defaulFormattingWidth: "wide",
        }),
      };
      function fe(t) {
        return function (e, r) {
          var n = String(e),
            o = r || {},
            c = o.width,
            l =
              (c && t.matchPatterns[c]) || t.matchPatterns[t.defaultMatchWidth],
            d = n.match(l);
          if (!d) return null;
          var h,
            f = d[0],
            m =
              (c && t.parsePatterns[c]) || t.parsePatterns[t.defaultParseWidth];
          return (
            (h =
              "[object Array]" === Object.prototype.toString.call(m)
                ? m.findIndex(function (pattern) {
                    return pattern.test(n);
                  })
                : (function (object, t) {
                    for (var e in object)
                      if (object.hasOwnProperty(e) && t(object[e])) return e;
                  })(m, function (pattern) {
                    return pattern.test(n);
                  })),
            (h = t.valueCallback ? t.valueCallback(h) : h),
            {
              value: (h = o.valueCallback ? o.valueCallback(h) : h),
              rest: n.slice(f.length),
            }
          );
        };
      }
      var ge,
        me = {
          ordinalNumber:
            ((ge = {
              matchPattern: /^(\d+)(th|st|nd|rd)?/i,
              parsePattern: /\d+/i,
              valueCallback: function (t) {
                return parseInt(t, 10);
              },
            }),
            function (t, e) {
              var r = String(t),
                n = e || {},
                o = r.match(ge.matchPattern);
              if (!o) return null;
              var c = o[0],
                l = r.match(ge.parsePattern);
              if (!l) return null;
              var d = ge.valueCallback ? ge.valueCallback(l[0]) : l[0];
              return {
                value: (d = n.valueCallback ? n.valueCallback(d) : d),
                rest: r.slice(c.length),
              };
            }),
          era: fe({
            matchPatterns: {
              narrow: /^(b|a)/i,
              abbreviated:
                /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              wide: /^(before christ|before common era|anno domini|common era)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^b/i, /^(a|c)/i] },
            defaultParseWidth: "any",
          }),
          quarter: fe({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234](th|st|nd|rd)? quarter/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (t) {
              return t + 1;
            },
          }),
          month: fe({
            matchPatterns: {
              narrow: /^[jfmasond]/i,
              abbreviated:
                /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
              wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^j/i,
                /^f/i,
                /^m/i,
                /^a/i,
                /^m/i,
                /^j/i,
                /^j/i,
                /^a/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
              any: [
                /^ja/i,
                /^f/i,
                /^mar/i,
                /^ap/i,
                /^may/i,
                /^jun/i,
                /^jul/i,
                /^au/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: fe({
            matchPatterns: {
              narrow: /^[smtwf]/i,
              short: /^(su|mo|tu|we|th|fr|sa)/i,
              abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
              wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
              any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: fe({
            matchPatterns: {
              narrow:
                /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
              any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mi/i,
                noon: /^no/i,
                morning: /morning/i,
                afternoon: /afternoon/i,
                evening: /evening/i,
                night: /night/i,
              },
            },
            defaultParseWidth: "any",
          }),
        },
        ve = {
          formatDistance: function (t, e, r) {
            var n;
            return (
              (r = r || {}),
              (n =
                "string" == typeof ce[t]
                  ? ce[t]
                  : 1 === e
                  ? ce[t].one
                  : ce[t].other.replace("{{count}}", e)),
              r.addSuffix ? (r.comparison > 0 ? "in " + n : n + " ago") : n
            );
          },
          formatLong: ue,
          formatRelative: function (t, e, r, n) {
            return de[t];
          },
          localize: he,
          match: me,
          options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
        };
      function ye(t, e) {
        if (arguments.length < 1)
          throw new TypeError(
            "1 argument required, but only " + arguments.length + " present"
          );
        var r = Kt(t, e),
          n = r.getUTCDay(),
          o = (n < 1 ? 7 : 0) + n - 1;
        return r.setUTCDate(r.getUTCDate() - o), r.setUTCHours(0, 0, 0, 0), r;
      }
      function we(t, e) {
        if (arguments.length < 1)
          throw new TypeError(
            "1 argument required, but only " + arguments.length + " present"
          );
        var r = Kt(t, e),
          n = r.getUTCFullYear(),
          o = new Date(0);
        o.setUTCFullYear(n + 1, 0, 4), o.setUTCHours(0, 0, 0, 0);
        var c = ye(o, e),
          l = new Date(0);
        l.setUTCFullYear(n, 0, 4), l.setUTCHours(0, 0, 0, 0);
        var d = ye(l, e);
        return r.getTime() >= c.getTime()
          ? n + 1
          : r.getTime() >= d.getTime()
          ? n
          : n - 1;
      }
      var be = 6048e5;
      function xe(t, e) {
        if (arguments.length < 1)
          throw new TypeError(
            "1 argument required, but only " + arguments.length + " present"
          );
        var r = Kt(t, e),
          n =
            ye(r, e).getTime() -
            (function (t, e) {
              if (arguments.length < 1)
                throw new TypeError(
                  "1 argument required, but only " +
                    arguments.length +
                    " present"
                );
              var r = we(t, e),
                n = new Date(0);
              return (
                n.setUTCFullYear(r, 0, 4), n.setUTCHours(0, 0, 0, 0), ye(n, e)
              );
            })(r, e).getTime();
        return Math.round(n / be) + 1;
      }
      function _e(t, e) {
        if (arguments.length < 1)
          throw new TypeError(
            "1 argument required, but only " + arguments.length + " present"
          );
        var r = e || {},
          n = r.locale,
          o = n && n.options && n.options.weekStartsOn,
          c = null == o ? 0 : Ut(o),
          l = null == r.weekStartsOn ? c : Ut(r.weekStartsOn);
        if (!(l >= 0 && l <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively"
          );
        var d = Kt(t, r),
          h = d.getUTCDay(),
          f = (h < l ? 7 : 0) + h - l;
        return d.setUTCDate(d.getUTCDate() - f), d.setUTCHours(0, 0, 0, 0), d;
      }
      function ke(t, e) {
        if (arguments.length < 1)
          throw new TypeError(
            "1 argument required, but only " + arguments.length + " present"
          );
        var r = Kt(t, e),
          n = r.getUTCFullYear(),
          o = e || {},
          c = o.locale,
          l = c && c.options && c.options.firstWeekContainsDate,
          d = null == l ? 1 : Ut(l),
          h = null == o.firstWeekContainsDate ? d : Ut(o.firstWeekContainsDate);
        if (!(h >= 1 && h <= 7))
          throw new RangeError(
            "firstWeekContainsDate must be between 1 and 7 inclusively"
          );
        var f = new Date(0);
        f.setUTCFullYear(n + 1, 0, h), f.setUTCHours(0, 0, 0, 0);
        var m = _e(f, e),
          v = new Date(0);
        v.setUTCFullYear(n, 0, h), v.setUTCHours(0, 0, 0, 0);
        var y = _e(v, e);
        return r.getTime() >= m.getTime()
          ? n + 1
          : r.getTime() >= y.getTime()
          ? n
          : n - 1;
      }
      var Ee = 6048e5;
      function Ce(t, e) {
        if (arguments.length < 1)
          throw new TypeError(
            "1 argument required, but only " + arguments.length + " present"
          );
        var r = Kt(t, e),
          n =
            _e(r, e).getTime() -
            (function (t, e) {
              if (arguments.length < 1)
                throw new TypeError(
                  "1 argument required, but only " +
                    arguments.length +
                    " present"
                );
              var r = e || {},
                n = r.locale,
                o = n && n.options && n.options.firstWeekContainsDate,
                c = null == o ? 1 : Ut(o),
                l =
                  null == r.firstWeekContainsDate
                    ? c
                    : Ut(r.firstWeekContainsDate),
                d = ke(t, e),
                h = new Date(0);
              return (
                h.setUTCFullYear(d, 0, l), h.setUTCHours(0, 0, 0, 0), _e(h, e)
              );
            })(r, e).getTime();
        return Math.round(n / Ee) + 1;
      }
      var Te = "midnight",
        Se = "noon",
        Oe = "morning",
        Ae = "afternoon",
        je = "evening",
        De = "night",
        Ie = {
          G: function (t, e, r) {
            var n = t.getUTCFullYear() > 0 ? 1 : 0;
            switch (e) {
              case "G":
              case "GG":
              case "GGG":
                return r.era(n, { width: "abbreviated" });
              case "GGGGG":
                return r.era(n, { width: "narrow" });
              default:
                return r.era(n, { width: "wide" });
            }
          },
          y: function (t, e, r, n) {
            var o = t.getUTCFullYear(),
              c = o > 0 ? o : 1 - o;
            return "yy" === e
              ? Le(c % 100, 2)
              : "yo" === e
              ? r.ordinalNumber(c, { unit: "year" })
              : Le(c, e.length);
          },
          Y: function (t, e, r, n) {
            var o = ke(t, n),
              c = o > 0 ? o : 1 - o;
            return "YY" === e
              ? Le(c % 100, 2)
              : "Yo" === e
              ? r.ordinalNumber(c, { unit: "year" })
              : Le(c, e.length);
          },
          R: function (t, e, r, n) {
            return Le(we(t, n), e.length);
          },
          u: function (t, e, r, n) {
            return Le(t.getUTCFullYear(), e.length);
          },
          Q: function (t, e, r, n) {
            var o = Math.ceil((t.getUTCMonth() + 1) / 3);
            switch (e) {
              case "Q":
                return String(o);
              case "QQ":
                return Le(o, 2);
              case "Qo":
                return r.ordinalNumber(o, { unit: "quarter" });
              case "QQQ":
                return r.quarter(o, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "QQQQQ":
                return r.quarter(o, { width: "narrow", context: "formatting" });
              default:
                return r.quarter(o, { width: "wide", context: "formatting" });
            }
          },
          q: function (t, e, r, n) {
            var o = Math.ceil((t.getUTCMonth() + 1) / 3);
            switch (e) {
              case "q":
                return String(o);
              case "qq":
                return Le(o, 2);
              case "qo":
                return r.ordinalNumber(o, { unit: "quarter" });
              case "qqq":
                return r.quarter(o, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "qqqqq":
                return r.quarter(o, { width: "narrow", context: "standalone" });
              default:
                return r.quarter(o, { width: "wide", context: "standalone" });
            }
          },
          M: function (t, e, r, n) {
            var o = t.getUTCMonth();
            switch (e) {
              case "M":
                return String(o + 1);
              case "MM":
                return Le(o + 1, 2);
              case "Mo":
                return r.ordinalNumber(o + 1, { unit: "month" });
              case "MMM":
                return r.month(o, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "MMMMM":
                return r.month(o, { width: "narrow", context: "formatting" });
              default:
                return r.month(o, { width: "wide", context: "formatting" });
            }
          },
          L: function (t, e, r, n) {
            var o = t.getUTCMonth();
            switch (e) {
              case "L":
                return String(o + 1);
              case "LL":
                return Le(o + 1, 2);
              case "Lo":
                return r.ordinalNumber(o + 1, { unit: "month" });
              case "LLL":
                return r.month(o, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "LLLLL":
                return r.month(o, { width: "narrow", context: "standalone" });
              default:
                return r.month(o, { width: "wide", context: "standalone" });
            }
          },
          w: function (t, e, r, n) {
            var o = Ce(t, n);
            return "wo" === e
              ? r.ordinalNumber(o, { unit: "week" })
              : Le(o, e.length);
          },
          I: function (t, e, r, n) {
            var o = xe(t, n);
            return "Io" === e
              ? r.ordinalNumber(o, { unit: "week" })
              : Le(o, e.length);
          },
          d: function (t, e, r, n) {
            var o = t.getUTCDate();
            return "do" === e
              ? r.ordinalNumber(o, { unit: "date" })
              : Le(o, e.length);
          },
          D: function (t, e, r, n) {
            var o = (function (t, e) {
              if (arguments.length < 1)
                throw new TypeError(
                  "1 argument required, but only " +
                    arguments.length +
                    " present"
                );
              var r = Kt(t, e),
                n = r.getTime();
              r.setUTCMonth(0, 1), r.setUTCHours(0, 0, 0, 0);
              var o = n - r.getTime();
              return Math.floor(o / 864e5) + 1;
            })(t, n);
            return "Do" === e
              ? r.ordinalNumber(o, { unit: "dayOfYear" })
              : Le(o, e.length);
          },
          E: function (t, e, r, n) {
            var o = t.getUTCDay();
            switch (e) {
              case "E":
              case "EE":
              case "EEE":
                return r.day(o, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "EEEEE":
                return r.day(o, { width: "narrow", context: "formatting" });
              case "EEEEEE":
                return r.day(o, { width: "short", context: "formatting" });
              default:
                return r.day(o, { width: "wide", context: "formatting" });
            }
          },
          e: function (t, e, r, n) {
            var o = t.getUTCDay(),
              c = (o - n.weekStartsOn + 8) % 7 || 7;
            switch (e) {
              case "e":
                return String(c);
              case "ee":
                return Le(c, 2);
              case "eo":
                return r.ordinalNumber(c, { unit: "day" });
              case "eee":
                return r.day(o, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "eeeee":
                return r.day(o, { width: "narrow", context: "formatting" });
              case "eeeeee":
                return r.day(o, { width: "short", context: "formatting" });
              default:
                return r.day(o, { width: "wide", context: "formatting" });
            }
          },
          c: function (t, e, r, n) {
            var o = t.getUTCDay(),
              c = (o - n.weekStartsOn + 8) % 7 || 7;
            switch (e) {
              case "c":
                return String(c);
              case "cc":
                return Le(c, e.length);
              case "co":
                return r.ordinalNumber(c, { unit: "day" });
              case "ccc":
                return r.day(o, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "ccccc":
                return r.day(o, { width: "narrow", context: "standalone" });
              case "cccccc":
                return r.day(o, { width: "short", context: "standalone" });
              default:
                return r.day(o, { width: "wide", context: "standalone" });
            }
          },
          i: function (t, e, r, n) {
            var o = t.getUTCDay(),
              c = 0 === o ? 7 : o;
            switch (e) {
              case "i":
                return String(c);
              case "ii":
                return Le(c, e.length);
              case "io":
                return r.ordinalNumber(c, { unit: "day" });
              case "iii":
                return r.day(o, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "iiiii":
                return r.day(o, { width: "narrow", context: "formatting" });
              case "iiiiii":
                return r.day(o, { width: "short", context: "formatting" });
              default:
                return r.day(o, { width: "wide", context: "formatting" });
            }
          },
          a: function (t, e, r) {
            var n = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
            switch (e) {
              case "a":
              case "aa":
              case "aaa":
                return r.dayPeriod(n, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "aaaaa":
                return r.dayPeriod(n, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return r.dayPeriod(n, { width: "wide", context: "formatting" });
            }
          },
          b: function (t, e, r) {
            var n,
              o = t.getUTCHours();
            switch (
              ((n = 12 === o ? Se : 0 === o ? Te : o / 12 >= 1 ? "pm" : "am"),
              e)
            ) {
              case "b":
              case "bb":
              case "bbb":
                return r.dayPeriod(n, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "bbbbb":
                return r.dayPeriod(n, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return r.dayPeriod(n, { width: "wide", context: "formatting" });
            }
          },
          B: function (t, e, r) {
            var n,
              o = t.getUTCHours();
            switch (((n = o >= 17 ? je : o >= 12 ? Ae : o >= 4 ? Oe : De), e)) {
              case "B":
              case "BB":
              case "BBB":
                return r.dayPeriod(n, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "BBBBB":
                return r.dayPeriod(n, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return r.dayPeriod(n, { width: "wide", context: "formatting" });
            }
          },
          h: function (t, e, r, n) {
            var o = t.getUTCHours() % 12;
            return (
              0 === o && (o = 12),
              "ho" === e
                ? r.ordinalNumber(o, { unit: "hour" })
                : Le(o, e.length)
            );
          },
          H: function (t, e, r, n) {
            var o = t.getUTCHours();
            return "Ho" === e
              ? r.ordinalNumber(o, { unit: "hour" })
              : Le(o, e.length);
          },
          K: function (t, e, r, n) {
            var o = t.getUTCHours() % 12;
            return "Ko" === e
              ? r.ordinalNumber(o, { unit: "hour" })
              : Le(o, e.length);
          },
          k: function (t, e, r, n) {
            var o = t.getUTCHours();
            return (
              0 === o && (o = 24),
              "ko" === e
                ? r.ordinalNumber(o, { unit: "hour" })
                : Le(o, e.length)
            );
          },
          m: function (t, e, r, n) {
            var o = t.getUTCMinutes();
            return "mo" === e
              ? r.ordinalNumber(o, { unit: "minute" })
              : Le(o, e.length);
          },
          s: function (t, e, r, n) {
            var o = t.getUTCSeconds();
            return "so" === e
              ? r.ordinalNumber(o, { unit: "second" })
              : Le(o, e.length);
          },
          S: function (t, e, r, n) {
            var o = e.length,
              c = t.getUTCMilliseconds();
            return Le(Math.floor(c * Math.pow(10, o - 3)), o);
          },
          X: function (t, e, r, n) {
            var o = (n._originalDate || t).getTimezoneOffset();
            if (0 === o) return "Z";
            switch (e) {
              case "X":
                return Pe(o);
              case "XXXX":
              case "XX":
                return $e(o);
              default:
                return $e(o, ":");
            }
          },
          x: function (t, e, r, n) {
            var o = (n._originalDate || t).getTimezoneOffset();
            switch (e) {
              case "x":
                return Pe(o);
              case "xxxx":
              case "xx":
                return $e(o);
              default:
                return $e(o, ":");
            }
          },
          O: function (t, e, r, n) {
            var o = (n._originalDate || t).getTimezoneOffset();
            switch (e) {
              case "O":
              case "OO":
              case "OOO":
                return "GMT" + ze(o, ":");
              default:
                return "GMT" + $e(o, ":");
            }
          },
          z: function (t, e, r, n) {
            var o = (n._originalDate || t).getTimezoneOffset();
            switch (e) {
              case "z":
              case "zz":
              case "zzz":
                return "GMT" + ze(o, ":");
              default:
                return "GMT" + $e(o, ":");
            }
          },
          t: function (t, e, r, n) {
            var o = n._originalDate || t;
            return Le(Math.floor(o.getTime() / 1e3), e.length);
          },
          T: function (t, e, r, n) {
            return Le((n._originalDate || t).getTime(), e.length);
          },
        };
      function Le(t, e) {
        for (
          var r = t < 0 ? "-" : "", output = Math.abs(t).toString();
          output.length < e;

        )
          output = "0" + output;
        return r + output;
      }
      function $e(t, e) {
        var r = e || "",
          n = t > 0 ? "-" : "+",
          o = Math.abs(t);
        return n + Le(Math.floor(o / 60), 2) + r + Le(o % 60, 2);
      }
      function Pe(t, e) {
        return t % 60 == 0
          ? (t > 0 ? "-" : "+") + Le(Math.abs(t) / 60, 2)
          : $e(t, e);
      }
      function ze(t, e) {
        var r = t > 0 ? "-" : "+",
          n = Math.abs(t),
          o = Math.floor(n / 60),
          c = n % 60;
        if (0 === c) return r + String(o);
        var l = e || "";
        return r + String(o) + l + Le(c, 2);
      }
      function Me(pattern, t, e) {
        switch (pattern) {
          case "P":
            return t.date({ width: "short" });
          case "PP":
            return t.date({ width: "medium" });
          case "PPP":
            return t.date({ width: "long" });
          default:
            return t.date({ width: "full" });
        }
      }
      function Ne(pattern, t, e) {
        switch (pattern) {
          case "p":
            return t.time({ width: "short" });
          case "pp":
            return t.time({ width: "medium" });
          case "ppp":
            return t.time({ width: "long" });
          default:
            return t.time({ width: "full" });
        }
      }
      var qe = {
        p: Ne,
        P: function (pattern, t, e) {
          var r,
            n = pattern.match(/(P+)(p+)?/),
            o = n[1],
            c = n[2];
          if (!c) return Me(pattern, t);
          switch (o) {
            case "P":
              r = t.dateTime({ width: "short" });
              break;
            case "PP":
              r = t.dateTime({ width: "medium" });
              break;
            case "PPP":
              r = t.dateTime({ width: "long" });
              break;
            default:
              r = t.dateTime({ width: "full" });
          }
          return r.replace("{{date}}", Me(o, t)).replace("{{time}}", Ne(c, t));
        },
      };
      function He(t, e, r) {
        if (arguments.length < 2)
          throw new TypeError(
            "2 arguments required, but only " + arguments.length + " present"
          );
        return (function (t, e, r) {
          if (arguments.length < 2)
            throw new TypeError(
              "2 arguments required, but only " + arguments.length + " present"
            );
          var n = Kt(t, r).getTime(),
            o = Ut(e);
          return new Date(n + o);
        })(t, -Ut(e), r);
      }
      var Fe = ["D", "DD", "YY", "YYYY"];
      function Re(t) {
        return -1 !== Fe.indexOf(t);
      }
      function Be(t) {
        throw new RangeError(
          "`options.awareOfUnicodeTokens` must be set to `true` to use `" +
            t +
            "` token; see: https://git.io/fxCyr"
        );
      }
      var We = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        Ue = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        Ve = /^'(.*?)'?$/,
        Ye = /''/g;
      function Ze(t, e, r) {
        if (arguments.length < 2)
          throw new TypeError(
            "2 arguments required, but only " + arguments.length + " present"
          );
        var n = String(e),
          o = r || {},
          c = o.locale || ve,
          l = c.options && c.options.firstWeekContainsDate,
          d = null == l ? 1 : Ut(l),
          h = null == o.firstWeekContainsDate ? d : Ut(o.firstWeekContainsDate);
        if (!(h >= 1 && h <= 7))
          throw new RangeError(
            "firstWeekContainsDate must be between 1 and 7 inclusively"
          );
        var f = c.options && c.options.weekStartsOn,
          m = null == f ? 0 : Ut(f),
          v = null == o.weekStartsOn ? m : Ut(o.weekStartsOn);
        if (!(v >= 0 && v <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively"
          );
        if (!c.localize)
          throw new RangeError("locale must contain localize property");
        if (!c.formatLong)
          throw new RangeError("locale must contain formatLong property");
        var y = Kt(t, o);
        if (!se(y, o)) return "Invalid Date";
        var w = He(y, Yt(y), o),
          x = {
            firstWeekContainsDate: h,
            weekStartsOn: v,
            locale: c,
            _originalDate: y,
          };
        return n
          .match(Ue)
          .map(function (t) {
            var e = t[0];
            return "p" === e || "P" === e ? (0, qe[e])(t, c.formatLong, x) : t;
          })
          .join("")
          .match(We)
          .map(function (t) {
            if ("''" === t) return "'";
            var e = t[0];
            if ("'" === e) return t.match(Ve)[1].replace(Ye, "'");
            var r = Ie[e];
            return r
              ? (!o.awareOfUnicodeTokens && Re(t) && Be(t),
                r(w, t, c.localize, x))
              : t;
          })
          .join("");
      }
      function Xe(t, e, r) {
        if (arguments.length < 2)
          throw new TypeError(
            "2 arguments required, but only " + arguments.length + " present"
          );
        var n = Kt(t, r),
          o = Kt(e, r);
        return n.getTime() > o.getTime();
      }
      function Qe(t, e, r) {
        if (arguments.length < 2)
          throw new TypeError(
            "2 arguments required, but only " + arguments.length + " present"
          );
        var n = Kt(t, r),
          o = Kt(e, r);
        return n.getTime() < o.getTime();
      }
      function Ge(t, e, r) {
        if (arguments.length < 2)
          throw new TypeError(
            "2 arguments required, but only " + arguments.length + " present"
          );
        var n = Kt(t, r),
          o = Kt(e, r);
        return n.getTime() === o.getTime();
      }
      function Ke(t, e, r) {
        if (arguments.length < 2)
          throw new TypeError(
            "2 arguments required, but only " + arguments.length + " present"
          );
        var n = r || {},
          o = n.locale,
          c = o && o.options && o.options.weekStartsOn,
          l = null == c ? 0 : Ut(c),
          d = null == n.weekStartsOn ? l : Ut(n.weekStartsOn);
        if (!(d >= 0 && d <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively"
          );
        var h = Kt(t, r),
          f = Ut(e),
          m = (((f % 7) + 7) % 7 < d ? 7 : 0) + f - h.getUTCDay();
        return h.setUTCDate(h.getUTCDate() + m), h;
      }
      var Je = /^(1[0-2]|0?\d)/,
        er = /^(3[0-1]|[0-2]?\d)/,
        rr = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
        nr = /^(5[0-3]|[0-4]?\d)/,
        ir = /^(2[0-3]|[0-1]?\d)/,
        or = /^(2[0-4]|[0-1]?\d)/,
        ar = /^(1[0-1]|0?\d)/,
        sr = /^(1[0-2]|0?\d)/,
        cr = /^[0-5]?\d/,
        lr = /^[0-5]?\d/,
        ur = /^\d/,
        dr = /^\d{1,2}/,
        pr = /^\d{1,3}/,
        fr = /^\d{1,4}/,
        gr = /^-?\d+/,
        mr = /^-?\d/,
        vr = /^-?\d{1,2}/,
        yr = /^-?\d{1,3}/,
        wr = /^-?\d{1,4}/,
        xr = /^([+-])(\d{2})(\d{2})?|Z/,
        _r = /^([+-])(\d{2})(\d{2})|Z/,
        kr = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
        Er = /^([+-])(\d{2}):(\d{2})|Z/,
        Cr = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;
      function Tr(pattern, t, e) {
        var r = t.match(pattern);
        if (!r) return null;
        var n = parseInt(r[0], 10);
        return { value: e ? e(n) : n, rest: t.slice(r[0].length) };
      }
      function Sr(pattern, t) {
        var e = t.match(pattern);
        return e
          ? "Z" === e[0]
            ? { value: 0, rest: t.slice(1) }
            : {
                value:
                  ("+" === e[1] ? 1 : -1) *
                  (36e5 * (e[2] ? parseInt(e[2], 10) : 0) +
                    6e4 * (e[3] ? parseInt(e[3], 10) : 0) +
                    1e3 * (e[5] ? parseInt(e[5], 10) : 0)),
                rest: t.slice(e[0].length),
              }
          : null;
      }
      function Or(t, e) {
        return Tr(gr, t, e);
      }
      function Ar(t, e, r) {
        switch (t) {
          case 1:
            return Tr(ur, e, r);
          case 2:
            return Tr(dr, e, r);
          case 3:
            return Tr(pr, e, r);
          case 4:
            return Tr(fr, e, r);
          default:
            return Tr(new RegExp("^\\d{1," + t + "}"), e, r);
        }
      }
      function jr(t, e, r) {
        switch (t) {
          case 1:
            return Tr(mr, e, r);
          case 2:
            return Tr(vr, e, r);
          case 3:
            return Tr(yr, e, r);
          case 4:
            return Tr(wr, e, r);
          default:
            return Tr(new RegExp("^-?\\d{1," + t + "}"), e, r);
        }
      }
      function Dr(t) {
        switch (t) {
          case "morning":
            return 4;
          case "evening":
            return 17;
          case "pm":
          case "noon":
          case "afternoon":
            return 12;
          default:
            return 0;
        }
      }
      function Ir(t, e) {
        var r,
          n = e > 0,
          o = n ? e : 1 - e;
        if (o <= 50) r = t || 100;
        else {
          var c = o + 50;
          r = t + 100 * Math.floor(c / 100) - (t >= c % 100 ? 100 : 0);
        }
        return n ? r : 1 - r;
      }
      var Lr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        $r = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function Pr(t) {
        return t % 400 == 0 || (t % 4 == 0 && t % 100 != 0);
      }
      var zr = {
          G: {
            priority: 140,
            parse: function (t, e, r, n) {
              switch (e) {
                case "G":
                case "GG":
                case "GGG":
                  return (
                    r.era(t, { width: "abbreviated" }) ||
                    r.era(t, { width: "narrow" })
                  );
                case "GGGGG":
                  return r.era(t, { width: "narrow" });
                default:
                  return (
                    r.era(t, { width: "wide" }) ||
                    r.era(t, { width: "abbreviated" }) ||
                    r.era(t, { width: "narrow" })
                  );
              }
            },
            set: function (t, e, r) {
              return (
                t.setUTCFullYear(1 === e ? 10 : -9, 0, 1),
                t.setUTCHours(0, 0, 0, 0),
                t
              );
            },
          },
          y: {
            priority: 130,
            parse: function (t, e, r, n) {
              var o = function (t) {
                return { year: t, isTwoDigitYear: "yy" === e };
              };
              switch (e) {
                case "y":
                  return Ar(4, t, o);
                case "yo":
                  return r.ordinalNumber(t, { unit: "year", valueCallback: o });
                default:
                  return Ar(e.length, t, o);
              }
            },
            validate: function (t, e, r) {
              return e.isTwoDigitYear || e.year > 0;
            },
            set: function (t, e, r) {
              var n = ke(t, r);
              if (e.isTwoDigitYear) {
                var o = Ir(e.year, n);
                return t.setUTCFullYear(o, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
              }
              var c = n > 0 ? e.year : 1 - e.year;
              return t.setUTCFullYear(c, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
          Y: {
            priority: 130,
            parse: function (t, e, r, n) {
              var o = function (t) {
                return { year: t, isTwoDigitYear: "YY" === e };
              };
              switch (e) {
                case "Y":
                  return Ar(4, t, o);
                case "Yo":
                  return r.ordinalNumber(t, { unit: "year", valueCallback: o });
                default:
                  return Ar(e.length, t, o);
              }
            },
            validate: function (t, e, r) {
              return e.isTwoDigitYear || e.year > 0;
            },
            set: function (t, e, r) {
              var n = t.getUTCFullYear();
              if (e.isTwoDigitYear) {
                var o = Ir(e.year, n);
                return (
                  t.setUTCFullYear(o, 0, r.firstWeekContainsDate),
                  t.setUTCHours(0, 0, 0, 0),
                  _e(t, r)
                );
              }
              var c = n > 0 ? e.year : 1 - e.year;
              return (
                t.setUTCFullYear(c, 0, r.firstWeekContainsDate),
                t.setUTCHours(0, 0, 0, 0),
                _e(t, r)
              );
            },
          },
          R: {
            priority: 130,
            parse: function (t, e, r, n) {
              return jr("R" === e ? 4 : e.length, t);
            },
            set: function (t, e, r) {
              var n = new Date(0);
              return (
                n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0), ye(n)
              );
            },
          },
          u: {
            priority: 130,
            parse: function (t, e, r, n) {
              return jr("u" === e ? 4 : e.length, t);
            },
            set: function (t, e, r) {
              return t.setUTCFullYear(e, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
          Q: {
            priority: 120,
            parse: function (t, e, r, n) {
              switch (e) {
                case "Q":
                case "QQ":
                  return Ar(e.length, t);
                case "Qo":
                  return r.ordinalNumber(t, { unit: "quarter" });
                case "QQQ":
                  return (
                    r.quarter(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    r.quarter(t, { width: "narrow", context: "formatting" })
                  );
                case "QQQQQ":
                  return r.quarter(t, {
                    width: "narrow",
                    context: "formatting",
                  });
                default:
                  return (
                    r.quarter(t, { width: "wide", context: "formatting" }) ||
                    r.quarter(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    r.quarter(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
            validate: function (t, e, r) {
              return e >= 1 && e <= 4;
            },
            set: function (t, e, r) {
              return (
                t.setUTCMonth(3 * (e - 1), 1), t.setUTCHours(0, 0, 0, 0), t
              );
            },
          },
          q: {
            priority: 120,
            parse: function (t, e, r, n) {
              switch (e) {
                case "q":
                case "qq":
                  return Ar(e.length, t);
                case "qo":
                  return r.ordinalNumber(t, { unit: "quarter" });
                case "qqq":
                  return (
                    r.quarter(t, {
                      width: "abbreviated",
                      context: "standalone",
                    }) ||
                    r.quarter(t, { width: "narrow", context: "standalone" })
                  );
                case "qqqqq":
                  return r.quarter(t, {
                    width: "narrow",
                    context: "standalone",
                  });
                default:
                  return (
                    r.quarter(t, { width: "wide", context: "standalone" }) ||
                    r.quarter(t, {
                      width: "abbreviated",
                      context: "standalone",
                    }) ||
                    r.quarter(t, { width: "narrow", context: "standalone" })
                  );
              }
            },
            validate: function (t, e, r) {
              return e >= 1 && e <= 4;
            },
            set: function (t, e, r) {
              return (
                t.setUTCMonth(3 * (e - 1), 1), t.setUTCHours(0, 0, 0, 0), t
              );
            },
          },
          M: {
            priority: 110,
            parse: function (t, e, r, n) {
              var o = function (t) {
                return t - 1;
              };
              switch (e) {
                case "M":
                  return Tr(Je, t, o);
                case "MM":
                  return Ar(2, t, o);
                case "Mo":
                  return r.ordinalNumber(t, {
                    unit: "month",
                    valueCallback: o,
                  });
                case "MMM":
                  return (
                    r.month(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) || r.month(t, { width: "narrow", context: "formatting" })
                  );
                case "MMMMM":
                  return r.month(t, { width: "narrow", context: "formatting" });
                default:
                  return (
                    r.month(t, { width: "wide", context: "formatting" }) ||
                    r.month(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    r.month(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
            validate: function (t, e, r) {
              return e >= 0 && e <= 11;
            },
            set: function (t, e, r) {
              return t.setUTCMonth(e, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
          L: {
            priority: 110,
            parse: function (t, e, r, n) {
              var o = function (t) {
                return t - 1;
              };
              switch (e) {
                case "L":
                  return Tr(Je, t, o);
                case "LL":
                  return Ar(2, t, o);
                case "Lo":
                  return r.ordinalNumber(t, {
                    unit: "month",
                    valueCallback: o,
                  });
                case "LLL":
                  return (
                    r.month(t, {
                      width: "abbreviated",
                      context: "standalone",
                    }) || r.month(t, { width: "narrow", context: "standalone" })
                  );
                case "LLLLL":
                  return r.month(t, { width: "narrow", context: "standalone" });
                default:
                  return (
                    r.month(t, { width: "wide", context: "standalone" }) ||
                    r.month(t, {
                      width: "abbreviated",
                      context: "standalone",
                    }) ||
                    r.month(t, { width: "narrow", context: "standalone" })
                  );
              }
            },
            validate: function (t, e, r) {
              return e >= 0 && e <= 11;
            },
            set: function (t, e, r) {
              return t.setUTCMonth(e, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
          w: {
            priority: 100,
            parse: function (t, e, r, n) {
              switch (e) {
                case "w":
                  return Tr(nr, t);
                case "wo":
                  return r.ordinalNumber(t, { unit: "week" });
                default:
                  return Ar(e.length, t);
              }
            },
            validate: function (t, e, r) {
              return e >= 1 && e <= 53;
            },
            set: function (t, e, r) {
              return _e(
                (function (t, e, r) {
                  if (arguments.length < 2)
                    throw new TypeError(
                      "2 arguments required, but only " +
                        arguments.length +
                        " present"
                    );
                  var n = Kt(t, r),
                    o = Ut(e),
                    c = Ce(n, r) - o;
                  return n.setUTCDate(n.getUTCDate() - 7 * c), n;
                })(t, e, r),
                r
              );
            },
          },
          I: {
            priority: 100,
            parse: function (t, e, r, n) {
              switch (e) {
                case "I":
                  return Tr(nr, t);
                case "Io":
                  return r.ordinalNumber(t, { unit: "week" });
                default:
                  return Ar(e.length, t);
              }
            },
            validate: function (t, e, r) {
              return e >= 1 && e <= 53;
            },
            set: function (t, e, r) {
              return ye(
                (function (t, e, r) {
                  if (arguments.length < 2)
                    throw new TypeError(
                      "2 arguments required, but only " +
                        arguments.length +
                        " present"
                    );
                  var n = Kt(t, r),
                    o = Ut(e),
                    c = xe(n, r) - o;
                  return n.setUTCDate(n.getUTCDate() - 7 * c), n;
                })(t, e, r),
                r
              );
            },
          },
          d: {
            priority: 90,
            parse: function (t, e, r, n) {
              switch (e) {
                case "d":
                  return Tr(er, t);
                case "do":
                  return r.ordinalNumber(t, { unit: "date" });
                default:
                  return Ar(e.length, t);
              }
            },
            validate: function (t, e, r) {
              var n = Pr(t.getUTCFullYear()),
                o = t.getUTCMonth();
              return n ? e >= 1 && e <= $r[o] : e >= 1 && e <= Lr[o];
            },
            set: function (t, e, r) {
              return t.setUTCDate(e), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
          D: {
            priority: 90,
            parse: function (t, e, r, n) {
              switch (e) {
                case "D":
                case "DD":
                  return Tr(rr, t);
                case "Do":
                  return r.ordinalNumber(t, { unit: "date" });
                default:
                  return Ar(e.length, t);
              }
            },
            validate: function (t, e, r) {
              return Pr(t.getUTCFullYear())
                ? e >= 1 && e <= 366
                : e >= 1 && e <= 365;
            },
            set: function (t, e, r) {
              return t.setUTCMonth(0, e), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
          E: {
            priority: 90,
            parse: function (t, e, r, n) {
              switch (e) {
                case "E":
                case "EE":
                case "EEE":
                  return (
                    r.day(t, { width: "abbreviated", context: "formatting" }) ||
                    r.day(t, { width: "short", context: "formatting" }) ||
                    r.day(t, { width: "narrow", context: "formatting" })
                  );
                case "EEEEE":
                  return r.day(t, { width: "narrow", context: "formatting" });
                case "EEEEEE":
                  return (
                    r.day(t, { width: "short", context: "formatting" }) ||
                    r.day(t, { width: "narrow", context: "formatting" })
                  );
                default:
                  return (
                    r.day(t, { width: "wide", context: "formatting" }) ||
                    r.day(t, { width: "abbreviated", context: "formatting" }) ||
                    r.day(t, { width: "short", context: "formatting" }) ||
                    r.day(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
            validate: function (t, e, r) {
              return e >= 0 && e <= 6;
            },
            set: function (t, e, r) {
              return (t = Ke(t, e, r)).setUTCHours(0, 0, 0, 0), t;
            },
          },
          e: {
            priority: 90,
            parse: function (t, e, r, n) {
              var o = function (t) {
                var e = 7 * Math.floor((t - 1) / 7);
                return ((t + n.weekStartsOn + 6) % 7) + e;
              };
              switch (e) {
                case "e":
                case "ee":
                  return Ar(e.length, t, o);
                case "eo":
                  return r.ordinalNumber(t, { unit: "day", valueCallback: o });
                case "eee":
                  return (
                    r.day(t, { width: "abbreviated", context: "formatting" }) ||
                    r.day(t, { width: "short", context: "formatting" }) ||
                    r.day(t, { width: "narrow", context: "formatting" })
                  );
                case "eeeee":
                  return r.day(t, { width: "narrow", context: "formatting" });
                case "eeeeee":
                  return (
                    r.day(t, { width: "short", context: "formatting" }) ||
                    r.day(t, { width: "narrow", context: "formatting" })
                  );
                default:
                  return (
                    r.day(t, { width: "wide", context: "formatting" }) ||
                    r.day(t, { width: "abbreviated", context: "formatting" }) ||
                    r.day(t, { width: "short", context: "formatting" }) ||
                    r.day(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
            validate: function (t, e, r) {
              return e >= 0 && e <= 6;
            },
            set: function (t, e, r) {
              return (t = Ke(t, e, r)).setUTCHours(0, 0, 0, 0), t;
            },
          },
          c: {
            priority: 90,
            parse: function (t, e, r, n) {
              var o = function (t) {
                var e = 7 * Math.floor((t - 1) / 7);
                return ((t + n.weekStartsOn + 6) % 7) + e;
              };
              switch (e) {
                case "c":
                case "cc":
                  return Ar(e.length, t, o);
                case "co":
                  return r.ordinalNumber(t, { unit: "day", valueCallback: o });
                case "ccc":
                  return (
                    r.day(t, { width: "abbreviated", context: "standalone" }) ||
                    r.day(t, { width: "short", context: "standalone" }) ||
                    r.day(t, { width: "narrow", context: "standalone" })
                  );
                case "ccccc":
                  return r.day(t, { width: "narrow", context: "standalone" });
                case "cccccc":
                  return (
                    r.day(t, { width: "short", context: "standalone" }) ||
                    r.day(t, { width: "narrow", context: "standalone" })
                  );
                default:
                  return (
                    r.day(t, { width: "wide", context: "standalone" }) ||
                    r.day(t, { width: "abbreviated", context: "standalone" }) ||
                    r.day(t, { width: "short", context: "standalone" }) ||
                    r.day(t, { width: "narrow", context: "standalone" })
                  );
              }
            },
            validate: function (t, e, r) {
              return e >= 0 && e <= 6;
            },
            set: function (t, e, r) {
              return (t = Ke(t, e, r)).setUTCHours(0, 0, 0, 0), t;
            },
          },
          i: {
            priority: 90,
            parse: function (t, e, r, n) {
              var o = function (t) {
                return 0 === t ? 7 : t;
              };
              switch (e) {
                case "i":
                case "ii":
                  return Ar(e.length, t);
                case "io":
                  return r.ordinalNumber(t, { unit: "day" });
                case "iii":
                  return (
                    r.day(t, {
                      width: "abbreviated",
                      context: "formatting",
                      valueCallback: o,
                    }) ||
                    r.day(t, {
                      width: "short",
                      context: "formatting",
                      valueCallback: o,
                    }) ||
                    r.day(t, {
                      width: "narrow",
                      context: "formatting",
                      valueCallback: o,
                    })
                  );
                case "iiiii":
                  return r.day(t, {
                    width: "narrow",
                    context: "formatting",
                    valueCallback: o,
                  });
                case "iiiiii":
                  return (
                    r.day(t, {
                      width: "short",
                      context: "formatting",
                      valueCallback: o,
                    }) ||
                    r.day(t, {
                      width: "narrow",
                      context: "formatting",
                      valueCallback: o,
                    })
                  );
                default:
                  return (
                    r.day(t, {
                      width: "wide",
                      context: "formatting",
                      valueCallback: o,
                    }) ||
                    r.day(t, {
                      width: "abbreviated",
                      context: "formatting",
                      valueCallback: o,
                    }) ||
                    r.day(t, {
                      width: "short",
                      context: "formatting",
                      valueCallback: o,
                    }) ||
                    r.day(t, {
                      width: "narrow",
                      context: "formatting",
                      valueCallback: o,
                    })
                  );
              }
            },
            validate: function (t, e, r) {
              return e >= 1 && e <= 7;
            },
            set: function (t, e, r) {
              return (
                (t = (function (t, e, r) {
                  if (arguments.length < 2)
                    throw new TypeError(
                      "2 arguments required, but only " +
                        arguments.length +
                        " present"
                    );
                  var n = Ut(e);
                  n % 7 == 0 && (n -= 7);
                  var o = Kt(t, r),
                    c = (((n % 7) + 7) % 7 < 1 ? 7 : 0) + n - o.getUTCDay();
                  return o.setUTCDate(o.getUTCDate() + c), o;
                })(t, e, r)),
                t.setUTCHours(0, 0, 0, 0),
                t
              );
            },
          },
          a: {
            priority: 80,
            parse: function (t, e, r, n) {
              switch (e) {
                case "a":
                case "aa":
                case "aaa":
                  return (
                    r.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    r.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
                case "aaaaa":
                  return r.dayPeriod(t, {
                    width: "narrow",
                    context: "formatting",
                  });
                default:
                  return (
                    r.dayPeriod(t, { width: "wide", context: "formatting" }) ||
                    r.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    r.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
            set: function (t, e, r) {
              return t.setUTCHours(Dr(e), 0, 0, 0), t;
            },
          },
          b: {
            priority: 80,
            parse: function (t, e, r, n) {
              switch (e) {
                case "b":
                case "bb":
                case "bbb":
                  return (
                    r.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    r.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
                case "bbbbb":
                  return r.dayPeriod(t, {
                    width: "narrow",
                    context: "formatting",
                  });
                default:
                  return (
                    r.dayPeriod(t, { width: "wide", context: "formatting" }) ||
                    r.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    r.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
            set: function (t, e, r) {
              return t.setUTCHours(Dr(e), 0, 0, 0), t;
            },
          },
          B: {
            priority: 80,
            parse: function (t, e, r, n) {
              switch (e) {
                case "B":
                case "BB":
                case "BBB":
                  return (
                    r.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    r.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
                case "BBBBB":
                  return r.dayPeriod(t, {
                    width: "narrow",
                    context: "formatting",
                  });
                default:
                  return (
                    r.dayPeriod(t, { width: "wide", context: "formatting" }) ||
                    r.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    r.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
            set: function (t, e, r) {
              return t.setUTCHours(Dr(e), 0, 0, 0), t;
            },
          },
          h: {
            priority: 70,
            parse: function (t, e, r, n) {
              switch (e) {
                case "h":
                  return Tr(sr, t);
                case "ho":
                  return r.ordinalNumber(t, { unit: "hour" });
                default:
                  return Ar(e.length, t);
              }
            },
            validate: function (t, e, r) {
              return e >= 1 && e <= 12;
            },
            set: function (t, e, r) {
              var n = t.getUTCHours() >= 12;
              return (
                n && e < 12
                  ? t.setUTCHours(e + 12, 0, 0, 0)
                  : n || 12 !== e
                  ? t.setUTCHours(e, 0, 0, 0)
                  : t.setUTCHours(0, 0, 0, 0),
                t
              );
            },
          },
          H: {
            priority: 70,
            parse: function (t, e, r, n) {
              switch (e) {
                case "H":
                  return Tr(ir, t);
                case "Ho":
                  return r.ordinalNumber(t, { unit: "hour" });
                default:
                  return Ar(e.length, t);
              }
            },
            validate: function (t, e, r) {
              return e >= 0 && e <= 23;
            },
            set: function (t, e, r) {
              return t.setUTCHours(e, 0, 0, 0), t;
            },
          },
          K: {
            priority: 70,
            parse: function (t, e, r, n) {
              switch (e) {
                case "K":
                  return Tr(ar, t);
                case "Ko":
                  return r.ordinalNumber(t, { unit: "hour" });
                default:
                  return Ar(e.length, t);
              }
            },
            validate: function (t, e, r) {
              return e >= 0 && e <= 11;
            },
            set: function (t, e, r) {
              return (
                t.getUTCHours() >= 12 && e < 12
                  ? t.setUTCHours(e + 12, 0, 0, 0)
                  : t.setUTCHours(e, 0, 0, 0),
                t
              );
            },
          },
          k: {
            priority: 70,
            parse: function (t, e, r, n) {
              switch (e) {
                case "k":
                  return Tr(or, t);
                case "ko":
                  return r.ordinalNumber(t, { unit: "hour" });
                default:
                  return Ar(e.length, t);
              }
            },
            validate: function (t, e, r) {
              return e >= 1 && e <= 24;
            },
            set: function (t, e, r) {
              var n = e <= 24 ? e % 24 : e;
              return t.setUTCHours(n, 0, 0, 0), t;
            },
          },
          m: {
            priority: 60,
            parse: function (t, e, r, n) {
              switch (e) {
                case "m":
                  return Tr(cr, t);
                case "mo":
                  return r.ordinalNumber(t, { unit: "minute" });
                default:
                  return Ar(e.length, t);
              }
            },
            validate: function (t, e, r) {
              return e >= 0 && e <= 59;
            },
            set: function (t, e, r) {
              return t.setUTCMinutes(e, 0, 0), t;
            },
          },
          s: {
            priority: 50,
            parse: function (t, e, r, n) {
              switch (e) {
                case "s":
                  return Tr(lr, t);
                case "so":
                  return r.ordinalNumber(t, { unit: "second" });
                default:
                  return Ar(e.length, t);
              }
            },
            validate: function (t, e, r) {
              return e >= 0 && e <= 59;
            },
            set: function (t, e, r) {
              return t.setUTCSeconds(e, 0), t;
            },
          },
          S: {
            priority: 40,
            parse: function (t, e, r, n) {
              return Ar(e.length, t, function (t) {
                return Math.floor(t * Math.pow(10, 3 - e.length));
              });
            },
            set: function (t, e, r) {
              return t.setUTCMilliseconds(e), t;
            },
          },
          X: {
            priority: 20,
            parse: function (t, e, r, n) {
              switch (e) {
                case "X":
                  return Sr(xr, t);
                case "XX":
                  return Sr(_r, t);
                case "XXXX":
                  return Sr(kr, t);
                case "XXXXX":
                  return Sr(Cr, t);
                default:
                  return Sr(Er, t);
              }
            },
            set: function (t, e, r) {
              return new Date(t.getTime() - e);
            },
          },
          x: {
            priority: 20,
            parse: function (t, e, r, n) {
              switch (e) {
                case "x":
                  return Sr(xr, t);
                case "xx":
                  return Sr(_r, t);
                case "xxxx":
                  return Sr(kr, t);
                case "xxxxx":
                  return Sr(Cr, t);
                default:
                  return Sr(Er, t);
              }
            },
            set: function (t, e, r) {
              return new Date(t.getTime() - e);
            },
          },
          t: {
            priority: 10,
            parse: function (t, e, r, n) {
              return Or(t);
            },
            set: function (t, e, r) {
              return new Date(1e3 * e);
            },
          },
          T: {
            priority: 10,
            parse: function (t, e, r, n) {
              return Or(t);
            },
            set: function (t, e, r) {
              return new Date(e);
            },
          },
        },
        Mr = 20,
        Nr = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        qr = /^'(.*?)'?$/,
        Hr = /''/g,
        Fr = /\S/;
      function Rr(t) {
        var e = new Date(0);
        return (
          e.setFullYear(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()),
          e.setHours(
            t.getUTCHours(),
            t.getUTCMinutes(),
            t.getUTCSeconds(),
            t.getUTCMilliseconds()
          ),
          e
        );
      }
      function Br(t, e) {
        if ("string" != typeof t) return se(t) ? t : null;
        var r = (function (t, e, r, n) {
          if (arguments.length < 3)
            throw new TypeError(
              "3 arguments required, but only " + arguments.length + " present"
            );
          var o = String(t),
            c = String(e),
            l = n || {},
            d = l.locale || ve;
          if (!d.match)
            throw new RangeError("locale must contain match property");
          var h = d.options && d.options.firstWeekContainsDate,
            f = null == h ? 1 : Ut(h),
            m =
              null == l.firstWeekContainsDate ? f : Ut(l.firstWeekContainsDate);
          if (!(m >= 1 && m <= 7))
            throw new RangeError(
              "firstWeekContainsDate must be between 1 and 7 inclusively"
            );
          var v = d.options && d.options.weekStartsOn,
            y = null == v ? 0 : Ut(v),
            w = null == l.weekStartsOn ? y : Ut(l.weekStartsOn);
          if (!(w >= 0 && w <= 6))
            throw new RangeError(
              "weekStartsOn must be between 0 and 6 inclusively"
            );
          if ("" === c) return "" === o ? Kt(r, l) : new Date(NaN);
          var i,
            x = { firstWeekContainsDate: m, weekStartsOn: w, locale: d },
            _ = [{ priority: Mr, set: Rr, index: 0 }],
            k = c.match(Nr);
          for (i = 0; i < k.length; i++) {
            var E = k[i];
            !l.awareOfUnicodeTokens && Re(E) && Be(E);
            var C = E[0],
              T = zr[C];
            if (T) {
              var S = T.parse(o, E, d.match, x);
              if (!S) return new Date(NaN);
              _.push({
                priority: T.priority,
                set: T.set,
                validate: T.validate,
                value: S.value,
                index: _.length,
              }),
                (o = S.rest);
            } else {
              if (
                ("''" === E
                  ? (E = "'")
                  : "'" === C && (E = E.match(qr)[1].replace(Hr, "'")),
                0 !== o.indexOf(E))
              )
                return new Date(NaN);
              o = o.slice(E.length);
            }
          }
          if (o.length > 0 && Fr.test(o)) return new Date(NaN);
          var O = _.map(function (t) {
              return t.priority;
            })
              .sort(function (a, b) {
                return b - a;
              })
              .filter(function (t, e, r) {
                return r.indexOf(t) === e;
              })
              .map(function (t) {
                return _.filter(function (e) {
                  return e.priority === t;
                }).reverse();
              })
              .map(function (t) {
                return t[0];
              }),
            A = Kt(r, l);
          if (isNaN(A)) return new Date(NaN);
          var j = He(A, Yt(A));
          for (i = 0; i < O.length; i++) {
            var D = O[i];
            if (D.validate && !D.validate(j, D.value, x)) return new Date(NaN);
            j = D.set(j, D.value, x);
          }
          return j;
        })(t, e, new Date());
        return se(r) && Ze(r, e) === t ? r : null;
      }
      var Wr = {
          validate: function (t, e) {
            void 0 === e && (e = {});
            var r = e.targetValue,
              n = e.inclusion;
            void 0 === n && (n = !1);
            var o = e.format;
            return (
              void 0 === o && ((o = n), (n = !1)),
              (t = Br(t, o)),
              (r = Br(r, o)),
              !(!t || !r) && (Xe(t, r) || (n && Ge(t, r)))
            );
          },
          options: { hasTarget: !0, isDate: !0 },
          paramNames: ["targetValue", "inclusion", "format"],
        },
        Ur = {
          en: /^[A-Z]*$/i,
          cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
          da: /^[A-ZÆØÅ]*$/i,
          de: /^[A-ZÄÖÜß]*$/i,
          es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
          fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
          fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
          it: /^[A-Z\xC0-\xFF]*$/i,
          lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
          nl: /^[A-ZÉËÏÓÖÜ]*$/i,
          hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
          pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
          pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
          ru: /^[А-ЯЁ]*$/i,
          sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
          sr: /^[A-ZČĆŽŠĐ]*$/i,
          sv: /^[A-ZÅÄÖ]*$/i,
          tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
          uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
          ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
          az: /^[A-ZÇƏĞİıÖŞÜ]*$/i,
        },
        Vr = {
          en: /^[A-Z\s]*$/i,
          cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
          da: /^[A-ZÆØÅ\s]*$/i,
          de: /^[A-ZÄÖÜß\s]*$/i,
          es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
          fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی\s]*$/,
          fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
          it: /^[A-Z\xC0-\xFF\s]*$/i,
          lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
          nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
          hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
          pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
          pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
          ru: /^[А-ЯЁ\s]*$/i,
          sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
          sr: /^[A-ZČĆŽŠĐ\s]*$/i,
          sv: /^[A-ZÅÄÖ\s]*$/i,
          tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
          uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
          ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
          az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i,
        },
        Yr = {
          en: /^[0-9A-Z]*$/i,
          cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
          da: /^[0-9A-ZÆØÅ]$/i,
          de: /^[0-9A-ZÄÖÜß]*$/i,
          es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
          fa: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
          fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
          it: /^[0-9A-Z\xC0-\xFF]*$/i,
          lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
          hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
          nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
          pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
          pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
          ru: /^[0-9А-ЯЁ]*$/i,
          sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
          sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
          sv: /^[0-9A-ZÅÄÖ]*$/i,
          tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
          uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
          ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
          az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,
        },
        Zr = {
          en: /^[0-9A-Z_-]*$/i,
          cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
          da: /^[0-9A-ZÆØÅ_-]*$/i,
          de: /^[0-9A-ZÄÖÜß_-]*$/i,
          es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
          fa: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی_-]*$/,
          fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
          it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
          lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
          nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
          hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
          pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
          pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
          ru: /^[0-9А-ЯЁ_-]*$/i,
          sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
          sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
          sv: /^[0-9A-ZÅÄÖ_-]*$/i,
          tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
          uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
          ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
          az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,
        },
        Xr = function (t, e) {
          void 0 === e && (e = {});
          var r = e.locale;
          return Array.isArray(t)
            ? t.every(function (t) {
                return Xr(t, [r]);
              })
            : r
            ? (Ur[r] || Ur.en).test(t)
            : Object.keys(Ur).some(function (e) {
                return Ur[e].test(t);
              });
        },
        Qr = { validate: Xr, paramNames: ["locale"] },
        Gr = function (t, e) {
          void 0 === e && (e = {});
          var r = e.locale;
          return Array.isArray(t)
            ? t.every(function (t) {
                return Gr(t, [r]);
              })
            : r
            ? (Zr[r] || Zr.en).test(t)
            : Object.keys(Zr).some(function (e) {
                return Zr[e].test(t);
              });
        },
        Kr = { validate: Gr, paramNames: ["locale"] },
        Jr = function (t, e) {
          void 0 === e && (e = {});
          var r = e.locale;
          return Array.isArray(t)
            ? t.every(function (t) {
                return Jr(t, [r]);
              })
            : r
            ? (Yr[r] || Yr.en).test(t)
            : Object.keys(Yr).some(function (e) {
                return Yr[e].test(t);
              });
        },
        tn = { validate: Jr, paramNames: ["locale"] },
        en = function (t, e) {
          void 0 === e && (e = {});
          var r = e.locale;
          return Array.isArray(t)
            ? t.every(function (t) {
                return en(t, [r]);
              })
            : r
            ? (Vr[r] || Vr.en).test(t)
            : Object.keys(Vr).some(function (e) {
                return Vr[e].test(t);
              });
        },
        rn = { validate: en, paramNames: ["locale"] },
        nn = {
          validate: function (t, e) {
            void 0 === e && (e = {});
            var r = e.targetValue,
              n = e.inclusion;
            void 0 === n && (n = !1);
            var o = e.format;
            return (
              void 0 === o && ((o = n), (n = !1)),
              (t = Br(t, o)),
              (r = Br(r, o)),
              !(!t || !r) && (Qe(t, r) || (n && Ge(t, r)))
            );
          },
          options: { hasTarget: !0, isDate: !0 },
          paramNames: ["targetValue", "inclusion", "format"],
        },
        on = function (t, e) {
          void 0 === e && (e = {});
          var r = e.min,
            n = e.max;
          return Array.isArray(t)
            ? t.every(function (t) {
                return on(t, { min: r, max: n });
              })
            : Number(r) <= t && Number(n) >= t;
        },
        an = { validate: on, paramNames: ["min", "max"] },
        sn = {
          validate: function (t, e) {
            var r = e.targetValue;
            return String(t) === String(r);
          },
          options: { hasTarget: !0 },
          paramNames: ["targetValue"],
        };
      function cn(t) {
        return t &&
          t.__esModule &&
          Object.prototype.hasOwnProperty.call(t, "default")
          ? t.default
          : t;
      }
      function ln(t, e) {
        return t((e = { exports: {} }), e.exports), e.exports;
      }
      var un = ln(function (t, e) {
        function r(t) {
          return (
            (r =
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
                  }),
            r(t)
          );
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = function (input) {
            if (!("string" == typeof input || input instanceof String)) {
              var t;
              throw (
                ((t =
                  null === input
                    ? "null"
                    : "object" === (t = r(input)) &&
                      input.constructor &&
                      input.constructor.hasOwnProperty("name")
                    ? input.constructor.name
                    : "a ".concat(t)),
                new TypeError("Expected string but received ".concat(t, ".")))
              );
            }
          }),
          (t.exports = e.default),
          (t.exports.default = e.default);
      });
      cn(un);
      var dn = ln(function (t, e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function (t) {
              (0, r.default)(t);
              var e = t.replace(/[- ]+/g, "");
              if (!n.test(e)) return !1;
              for (var o, c, l, d = 0, i = e.length - 1; i >= 0; i--)
                (o = e.substring(i, i + 1)),
                  (c = parseInt(o, 10)),
                  (d += l && (c *= 2) >= 10 ? (c % 10) + 1 : c),
                  (l = !l);
              return !(d % 10 != 0 || !e);
            });
          var r = (function (t) {
            return t && t.__esModule ? t : { default: t };
          })(un);
          var n =
            /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
          (t.exports = e.default), (t.exports.default = e.default);
        }),
        pn = cn(dn),
        hn = {
          validate: function (t) {
            return pn(String(t));
          },
        },
        fn = {
          validate: function (t, e) {
            void 0 === e && (e = {});
            var r = e.min,
              n = e.max,
              o = e.inclusivity;
            void 0 === o && (o = "()");
            var c = e.format;
            void 0 === c && ((c = o), (o = "()"));
            var l = Br(String(r), c),
              d = Br(String(n), c),
              h = Br(String(t), c);
            return (
              !!(l && d && h) &&
              ("()" === o
                ? Xe(h, l) && Qe(h, d)
                : "(]" === o
                ? Xe(h, l) && (Ge(h, d) || Qe(h, d))
                : "[)" === o
                ? Qe(h, d) && (Ge(h, l) || Xe(h, l))
                : Ge(h, d) || Ge(h, l) || (Qe(h, d) && Xe(h, l)))
            );
          },
          options: { isDate: !0 },
          paramNames: ["min", "max", "inclusivity", "format"],
        },
        gn = {
          validate: function (t, e) {
            return !!Br(t, e.format);
          },
          options: { isDate: !0 },
          paramNames: ["format"],
        },
        mn = function (t, e) {
          void 0 === e && (e = {});
          var r = e.decimals;
          void 0 === r && (r = "*");
          var n = e.separator;
          if ((void 0 === n && (n = "."), d(t) || "" === t)) return !1;
          if (Array.isArray(t))
            return t.every(function (t) {
              return mn(t, { decimals: r, separator: n });
            });
          if (0 === Number(r)) return /^-?\d*$/.test(t);
          if (
            !new RegExp(
              "^[-+]?\\d*(\\" +
                n +
                "\\d" +
                ("*" === r ? "+" : "{1," + r + "}") +
                ")?([eE]{1}[-]?\\d+)?$"
            ).test(t)
          )
            return !1;
          var o = parseFloat(t);
          return o == o;
        },
        vn = { validate: mn, paramNames: ["decimals", "separator"] },
        yn = function (t, e) {
          var r = e[0];
          if (Array.isArray(t))
            return t.every(function (t) {
              return yn(t, [r]);
            });
          var n = String(t);
          return /^[0-9]*$/.test(n) && n.length === Number(r);
        },
        wn = { validate: yn },
        bn = /\.(jpg|svg|jpeg|png|bmp|gif)$/i,
        xn = {
          validate: function (t, e) {
            var r = e[0],
              n = e[1],
              o = O(t).filter(function (t) {
                return bn.test(t.name);
              });
            return (
              0 !== o.length &&
              Promise.all(
                o.map(function (image) {
                  return (function (t, e, r) {
                    var n = window.URL || window.webkitURL;
                    return new Promise(function (o) {
                      var image = new Image();
                      (image.onerror = function () {
                        return o({ valid: !1 });
                      }),
                        (image.onload = function () {
                          return o({
                            valid:
                              image.width === Number(e) &&
                              image.height === Number(r),
                          });
                        }),
                        (image.src = n.createObjectURL(t));
                    });
                  })(image, r, n);
                })
              )
            );
          },
        },
        _n = ln(function (t, e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e = arguments.length > 1 ? arguments[1] : void 0;
              for (var r in e) void 0 === t[r] && (t[r] = e[r]);
              return t;
            }),
            (t.exports = e.default),
            (t.exports.default = e.default);
        });
      cn(_n);
      var kn = ln(function (t, e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = function (t, e) {
            var o, c;
            (0, r.default)(t),
              "object" === n(e)
                ? ((o = e.min || 0), (c = e.max))
                : ((o = arguments[1]), (c = arguments[2]));
            var l = encodeURI(t).split(/%..|./).length - 1;
            return l >= o && (void 0 === c || l <= c);
          });
        var r = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(un);
        function n(t) {
          return (
            (n =
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
                  }),
            n(t)
          );
        }
        (t.exports = e.default), (t.exports.default = e.default);
      });
      cn(kn);
      var En = ln(function (t, e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function (t, e) {
              (0, r.default)(t),
                (e = (0, n.default)(e, c)),
                e.allow_trailing_dot &&
                  "." === t[t.length - 1] &&
                  (t = t.substring(0, t.length - 1));
              for (var o = t.split("."), i = 0; i < o.length; i++)
                if (o[i].length > 63) return !1;
              if (e.require_tld) {
                var l = o.pop();
                if (
                  !o.length ||
                  !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(l)
                )
                  return !1;
                if (
                  /[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(
                    l
                  )
                )
                  return !1;
              }
              for (var d, h = 0; h < o.length; h++) {
                if (
                  ((d = o[h]),
                  e.allow_underscores && (d = d.replace(/_/g, "")),
                  !/^[a-z\u00a1-\uffff0-9-]+$/i.test(d))
                )
                  return !1;
                if (/[\uff01-\uff5e]/.test(d)) return !1;
                if ("-" === d[0] || "-" === d[d.length - 1]) return !1;
              }
              return !0;
            });
          var r = o(un),
            n = o(_n);
          function o(t) {
            return t && t.__esModule ? t : { default: t };
          }
          var c = {
            require_tld: !0,
            allow_underscores: !1,
            allow_trailing_dot: !1,
          };
          (t.exports = e.default), (t.exports.default = e.default);
        }),
        Cn = cn(En),
        Tn = ln(function (t, e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function t(e) {
              var c =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "";
              if (((0, r.default)(e), !(c = String(c))))
                return t(e, 4) || t(e, 6);
              if ("4" === c)
                return (
                  !!n.test(e) &&
                  e.split(".").sort(function (a, b) {
                    return a - b;
                  })[3] <= 255
                );
              if ("6" === c) {
                var l = e.split(":"),
                  d = !1,
                  h = t(l[l.length - 1], 4),
                  f = h ? 7 : 8;
                if (l.length > f) return !1;
                if ("::" === e) return !0;
                "::" === e.substr(0, 2)
                  ? (l.shift(), l.shift(), (d = !0))
                  : "::" === e.substr(e.length - 2) &&
                    (l.pop(), l.pop(), (d = !0));
                for (var i = 0; i < l.length; ++i)
                  if ("" === l[i] && i > 0 && i < l.length - 1) {
                    if (d) return !1;
                    d = !0;
                  } else if (h && i === l.length - 1);
                  else if (!o.test(l[i])) return !1;
                return d ? l.length >= 1 : l.length === f;
              }
              return !1;
            });
          var r = (function (t) {
            return t && t.__esModule ? t : { default: t };
          })(un);
          var n = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,
            o = /^[0-9A-F]{1,4}$/i;
          (t.exports = e.default), (t.exports.default = e.default);
        }),
        Sn = cn(Tn),
        On = ln(function (t, e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function (t, e) {
              if (
                ((0, r.default)(t),
                (e = (0, n.default)(e, h)),
                e.require_display_name || e.allow_display_name)
              ) {
                var d = t.match(f);
                if (d) t = d[1];
                else if (e.require_display_name) return !1;
              }
              var _ = t.split("@"),
                k = _.pop(),
                E = _.join("@"),
                C = k.toLowerCase();
              if (
                e.domain_specific_validation &&
                ("gmail.com" === C || "googlemail.com" === C)
              ) {
                var T = (E = E.toLowerCase()).split("+")[0];
                if (!(0, o.default)(T.replace(".", ""), { min: 6, max: 30 }))
                  return !1;
                for (var S = T.split("."), i = 0; i < S.length; i++)
                  if (!v.test(S[i])) return !1;
              }
              if (
                !(0, o.default)(E, { max: 64 }) ||
                !(0, o.default)(k, { max: 254 })
              )
                return !1;
              if (!(0, c.default)(k, { require_tld: e.require_tld })) {
                if (!e.allow_ip_domain) return !1;
                if (!(0, l.default)(k)) {
                  if (!k.startsWith("[") || !k.endsWith("]")) return !1;
                  var O = k.substr(1, k.length - 2);
                  if (0 === O.length || !(0, l.default)(O)) return !1;
                }
              }
              if ('"' === E[0])
                return (
                  (E = E.slice(1, E.length - 1)),
                  e.allow_utf8_local_part ? x.test(E) : y.test(E)
                );
              for (
                var pattern = e.allow_utf8_local_part ? w : m,
                  A = E.split("."),
                  j = 0;
                j < A.length;
                j++
              )
                if (!pattern.test(A[j])) return !1;
              return !0;
            });
          var r = d(un),
            n = d(_n),
            o = d(kn),
            c = d(En),
            l = d(Tn);
          function d(t) {
            return t && t.__esModule ? t : { default: t };
          }
          var h = {
              allow_display_name: !1,
              require_display_name: !1,
              allow_utf8_local_part: !0,
              require_tld: !0,
            },
            f =
              /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,
            m = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,
            v = /^[a-z\d]+$/,
            y =
              /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,
            w =
              /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,
            x =
              /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
          (t.exports = e.default), (t.exports.default = e.default);
        }),
        An = cn(On);
      var jn = {
          validate: function (t, e) {
            void 0 === e && (e = {});
            var r = e.multiple;
            void 0 === r && (r = !1);
            var n = (function (t, e) {
                var r = {};
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) &&
                    -1 === e.indexOf(n) &&
                    (r[n] = t[n]);
                return r;
              })(e, ["multiple"]),
              o = n;
            r &&
              !Array.isArray(t) &&
              (t = String(t)
                .split(",")
                .map(function (t) {
                  return t.trim();
                }));
            var c = A({}, o);
            return Array.isArray(t)
              ? t.every(function (t) {
                  return An(String(t), c);
                })
              : An(String(t), c);
          },
        },
        Dn = function (t, e) {
          return Array.isArray(t)
            ? t.every(function (t) {
                return Dn(t, e);
              })
            : S(e).some(function (e) {
                return e == t;
              });
        },
        In = { validate: Dn },
        Ln = {
          validate: function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return !Dn.apply(void 0, t);
          },
        },
        $n = {
          validate: function (t, e) {
            var r = new RegExp(".(" + e.join("|") + ")$", "i");
            return O(t).every(function (t) {
              return r.test(t.name);
            });
          },
        },
        image = {
          validate: function (t) {
            return (Array.isArray(t) ? t : [t]).every(function (t) {
              return /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(t.name);
            });
          },
        },
        Pn = {
          validate: function (t) {
            return Array.isArray(t)
              ? t.every(function (t) {
                  return /^-?[0-9]+$/.test(String(t));
                })
              : /^-?[0-9]+$/.test(String(t));
          },
        },
        zn = {
          validate: function (t, e) {
            void 0 === e && (e = {});
            var r = e.version;
            return (
              void 0 === r && (r = 4),
              d(t) && (t = ""),
              Array.isArray(t)
                ? t.every(function (t) {
                    return Sn(t, r);
                  })
                : Sn(t, r)
            );
          },
          paramNames: ["version"],
        },
        Mn = {
          validate: function (t) {
            return (
              d(t) && (t = ""),
              Array.isArray(t)
                ? t.every(function (t) {
                    return Sn(t, "") || Cn(t);
                  })
                : Sn(t, "") || Cn(t)
            );
          },
        },
        Nn = {
          validate: function (t, e) {
            return void 0 === e && (e = []), t === e[0];
          },
        },
        qn = {
          validate: function (t, e) {
            return void 0 === e && (e = []), t !== e[0];
          },
        },
        Hn = {
          validate: function (t, e) {
            var r = e[0],
              n = e[1];
            return (
              void 0 === n && (n = void 0),
              !d(t) &&
                ((r = Number(r)),
                "number" == typeof t && (t = String(t)),
                t.length || (t = S(t)),
                (function (t, e, r) {
                  return void 0 === r
                    ? t.length === e
                    : ((r = Number(r)), t.length >= e && t.length <= r);
                })(t, r, n))
            );
          },
        },
        Fn = function (t, e) {
          var r = e[0];
          return d(t)
            ? r >= 0
            : Array.isArray(t)
            ? t.every(function (t) {
                return Fn(t, [r]);
              })
            : String(t).length <= r;
        },
        Rn = { validate: Fn },
        Bn = function (t, e) {
          var r = e[0];
          return (
            !d(t) &&
            "" !== t &&
            (Array.isArray(t)
              ? t.length > 0 &&
                t.every(function (t) {
                  return Bn(t, [r]);
                })
              : Number(t) <= r)
          );
        },
        Wn = { validate: Bn },
        Un = {
          validate: function (t, e) {
            var r = new RegExp(e.join("|").replace("*", ".+") + "$", "i");
            return O(t).every(function (t) {
              return r.test(t.type);
            });
          },
        },
        Vn = function (t, e) {
          var r = e[0];
          return (
            !d(t) &&
            (Array.isArray(t)
              ? t.every(function (t) {
                  return Vn(t, [r]);
                })
              : String(t).length >= r)
          );
        },
        Yn = { validate: Vn },
        Zn = function (t, e) {
          var r = e[0];
          return (
            !d(t) &&
            "" !== t &&
            (Array.isArray(t)
              ? t.length > 0 &&
                t.every(function (t) {
                  return Zn(t, [r]);
                })
              : Number(t) >= r)
          );
        },
        Xn = { validate: Zn },
        Qn = /^[٠١٢٣٤٥٦٧٨٩]+$/,
        Gn = /^[0-9]+$/,
        Kn = {
          validate: function (t) {
            var e = function (t) {
              var e = String(t);
              return Gn.test(e) || Qn.test(e);
            };
            return Array.isArray(t) ? t.every(e) : e(t);
          },
        },
        Jn = function (t, e) {
          var r = e.expression;
          return (
            "string" == typeof r && (r = new RegExp(r)),
            Array.isArray(t)
              ? t.every(function (t) {
                  return Jn(t, { expression: r });
                })
              : r.test(String(t))
          );
        },
        ti = { validate: Jn, paramNames: ["expression"] },
        ei = {
          validate: function (t, e) {
            void 0 === e && (e = []);
            var r = e[0];
            return (
              void 0 === r && (r = !1),
              !d(t) && !F(t) && (!1 !== t || !r) && !!String(t).trim().length
            );
          },
        },
        ri = {
          validate: function (t, e) {
            void 0 === e && (e = []);
            var r = e[0],
              n = e.slice(1).includes(String(r).trim());
            if (!n) return { valid: !0, data: { required: n } };
            var o = F(t) || [!1, null, void 0].includes(t);
            return {
              valid: !(o = o || !String(t).trim().length),
              data: { required: n },
            };
          },
          options: { hasTarget: !0, computesRequired: !0 },
        },
        ni = {
          validate: function (t, e) {
            var r = e[0];
            if (isNaN(r)) return !1;
            var n = 1024 * Number(r);
            return O(t).every(function (t) {
              return t.size <= n;
            });
          },
        },
        ii = ln(function (t, e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function (t, e) {
              if (
                ((0, r.default)(t), !t || t.length >= 2083 || /[\s<>]/.test(t))
              )
                return !1;
              if (0 === t.indexOf("mailto:")) return !1;
              var l, f, v, y, w, x, _, k;
              if (
                ((e = (0, c.default)(e, d)),
                (_ = t.split("#")),
                (t = _.shift()),
                (_ = t.split("?")),
                (t = _.shift()),
                (_ = t.split("://")),
                _.length > 1)
              ) {
                if (
                  ((l = _.shift().toLowerCase()),
                  e.require_valid_protocol && -1 === e.protocols.indexOf(l))
                )
                  return !1;
              } else {
                if (e.require_protocol) return !1;
                if ("//" === t.substr(0, 2)) {
                  if (!e.allow_protocol_relative_urls) return !1;
                  _[0] = t.substr(2);
                }
              }
              if (((t = _.join("://")), "" === t)) return !1;
              if (
                ((_ = t.split("/")),
                (t = _.shift()),
                "" === t && !e.require_host)
              )
                return !0;
              if (((_ = t.split("@")), _.length > 1)) {
                if (e.disallow_auth) return !1;
                if (
                  (f = _.shift()).indexOf(":") >= 0 &&
                  f.split(":").length > 2
                )
                  return !1;
              }
              (y = _.join("@")), (x = null), (k = null);
              var E = y.match(h);
              E
                ? ((v = ""), (k = E[1]), (x = E[2] || null))
                : ((v = (_ = y.split(":")).shift()),
                  _.length && (x = _.join(":")));
              if (
                null !== x &&
                ((w = parseInt(x, 10)),
                !/^[0-9]+$/.test(x) || w <= 0 || w > 65535)
              )
                return !1;
              if (
                !(
                  (0, o.default)(v) ||
                  (0, n.default)(v, e) ||
                  (k && (0, o.default)(k, 6))
                )
              )
                return !1;
              if (((v = v || k), e.host_whitelist && !m(v, e.host_whitelist)))
                return !1;
              if (e.host_blacklist && m(v, e.host_blacklist)) return !1;
              return !0;
            });
          var r = l(un),
            n = l(En),
            o = l(Tn),
            c = l(_n);
          function l(t) {
            return t && t.__esModule ? t : { default: t };
          }
          var d = {
              protocols: ["http", "https", "ftp"],
              require_tld: !0,
              require_protocol: !1,
              require_host: !0,
              require_valid_protocol: !0,
              allow_underscores: !1,
              allow_trailing_dot: !1,
              allow_protocol_relative_urls: !1,
            },
            h = /^\[([^\]]+)\](?::([0-9]+))?$/;
          function f(t) {
            return "[object RegExp]" === Object.prototype.toString.call(t);
          }
          function m(t, e) {
            for (var i = 0; i < e.length; i++) {
              var r = e[i];
              if (t === r || (f(r) && r.test(t))) return !0;
            }
            return !1;
          }
          (t.exports = e.default), (t.exports.default = e.default);
        }),
        oi = cn(ii),
        ai = {
          validate: function (t, e) {
            void 0 === e && (e = {}), d(t) && (t = "");
            var r = A({}, e);
            return Array.isArray(t)
              ? t.every(function (t) {
                  return oi(t, r);
                })
              : oi(t, r);
          },
        },
        si = Object.freeze({
          after: Wr,
          alpha_dash: Kr,
          alpha_num: tn,
          alpha_spaces: rn,
          alpha: Qr,
          before: nn,
          between: an,
          confirmed: sn,
          credit_card: hn,
          date_between: fn,
          date_format: gn,
          decimal: vn,
          digits: wn,
          dimensions: xn,
          email: jn,
          ext: $n,
          image: image,
          included: In,
          integer: Pn,
          length: Hn,
          ip: zn,
          ip_or_fqdn: Mn,
          is_not: qn,
          is: Nn,
          max: Rn,
          max_value: Wn,
          mimes: Un,
          min: Yn,
          min_value: Xn,
          excluded: Ln,
          numeric: Kn,
          regex: ti,
          required: ei,
          required_if: ri,
          size: ni,
          url: ai,
        }),
        ci = function (t, e) {
          var r = {
            pristine: function (t, e) {
              return t && e;
            },
            dirty: function (t, e) {
              return t || e;
            },
            touched: function (t, e) {
              return t || e;
            },
            untouched: function (t, e) {
              return t && e;
            },
            valid: function (t, e) {
              return t && e;
            },
            invalid: function (t, e) {
              return t || e;
            },
            pending: function (t, e) {
              return t || e;
            },
            required: function (t, e) {
              return t || e;
            },
            validated: function (t, e) {
              return t && e;
            },
          };
          return Object.keys(r).reduce(function (n, o) {
            return (n[o] = r[o](t[o], e[o])), n;
          }, {});
        },
        ui = function (t, e) {
          return (
            void 0 === e && (e = !0),
            Object.keys(t).reduce(function (r, n) {
              if (!r) return (r = A({}, t[n]));
              var o = 0 === n.indexOf("$");
              return e && o ? ci(ui(t[n]), r) : !e && o ? r : (r = ci(r, t[n]));
            }, null)
          );
        },
        di = null,
        pi = 0,
        hi = {
          $__veeInject: !1,
          inject: {
            $_veeObserver: {
              from: "$_veeObserver",
              default: function () {
                return (
                  this.$vnode.context.$_veeObserver ||
                    (this.$vnode.context.$_veeObserver = {
                      refs: {},
                      subscribe: function (t) {
                        this.refs[t.vid] = t;
                      },
                      unsubscribe: function (t) {
                        delete this.refs[t.vid];
                      },
                    }),
                  this.$vnode.context.$_veeObserver
                );
              },
            },
          },
          props: {
            vid: {
              type: [String, Number],
              default: function () {
                return "_vee_" + ++pi;
              },
            },
            name: { type: String, default: null },
            mode: {
              type: [String, Function],
              default: function () {
                return K().mode;
              },
            },
            events: {
              type: Array,
              validate: function () {
                return !0;
              },
              default: function () {
                var t = K().events;
                return "string" == typeof t ? t.split("|") : t;
              },
            },
            rules: { type: [Object, String], default: null },
            immediate: { type: Boolean, default: !1 },
            persist: { type: Boolean, default: !1 },
            bails: {
              type: Boolean,
              default: function () {
                return K().fastExit;
              },
            },
            debounce: {
              type: Number,
              default: function () {
                return K().delay || 0;
              },
            },
            tag: { type: String, default: "span" },
            slim: { type: Boolean, default: !1 },
          },
          watch: {
            rules: {
              deep: !0,
              handler: function (t, e) {
                this._needsValidation = !h(t, e);
              },
            },
          },
          data: function () {
            return {
              messages: [],
              value: void 0,
              initialized: !1,
              initialValue: void 0,
              flags: {
                untouched: !0,
                touched: !1,
                dirty: !1,
                pristine: !0,
                valid: null,
                invalid: null,
                validated: !1,
                pending: !1,
                required: !1,
                changed: !1,
              },
              failedRules: {},
              forceRequired: !1,
              isDeactivated: !1,
              id: null,
            };
          },
          computed: {
            isValid: function () {
              return this.flags.valid;
            },
            fieldDeps: function () {
              var t = this,
                e = w(this.rules);
              return Object.keys(e)
                .filter(ut.isTargetRule)
                .map(function (r) {
                  var n = e[r][0];
                  return wi(t, n), n;
                });
            },
            normalizedEvents: function () {
              var t = this,
                e = gi(this).on;
              return ft(e || this.events || []).map(function (e) {
                return "input" === e ? t._inputEventName : e;
              });
            },
            isRequired: function () {
              var t = w(this.rules),
                e = this.forceRequired,
                r = t.required || e;
              return (this.flags.required = r), r;
            },
            classes: function () {
              var t = this,
                e = K().classNames;
              return Object.keys(this.flags).reduce(function (r, n) {
                var o = (e && e[n]) || n;
                return d(t.flags[n]) || (o && (r[o] = t.flags[n])), r;
              }, {});
            },
          },
          render: function (t) {
            var e = this;
            this.registerField();
            var r = fi(this),
              slot = this.$scopedSlots.default;
            if (!E(slot)) return t(this.tag, this.$slots.default);
            var n = slot(r);
            return (
              et(n).forEach(function (input) {
                yi.call(e, input);
              }),
              this.slim ? st(t, n) : t(this.tag, n)
            );
          },
          beforeDestroy: function () {
            this.$_veeObserver.unsubscribe(this);
          },
          activated: function () {
            this.$_veeObserver.subscribe(this), (this.isDeactivated = !1);
          },
          deactivated: function () {
            this.$_veeObserver.unsubscribe(this), (this.isDeactivated = !0);
          },
          methods: {
            setFlags: function (t) {
              var e = this;
              Object.keys(t).forEach(function (r) {
                e.flags[r] = t[r];
              });
            },
            syncValue: function (t) {
              var e = (function (t) {
                if (ht(t))
                  return "file" === t.target.type
                    ? S(t.target.files)
                    : t.target.value;
                return t;
              })(t);
              (this.value = e), (this.flags.changed = this.initialValue !== e);
            },
            reset: function () {
              (this.messages = []),
                (this._pendingValidation = null),
                (this.initialValue = this.value);
              var t = {
                untouched: !0,
                touched: !1,
                dirty: !1,
                pristine: !0,
                valid: null,
                invalid: null,
                validated: !1,
                pending: !1,
                required: !1,
                changed: !1,
              };
              this.setFlags(t);
            },
            validate: function () {
              for (var t = this, e = [], r = arguments.length; r--; )
                e[r] = arguments[r];
              return (
                e.length > 0 && this.syncValue(e[0]),
                this.validateSilent().then(function (e) {
                  return t.applyResult(e), e;
                })
              );
            },
            validateSilent: function () {
              var t,
                e,
                r = this;
              return (
                this.setFlags({ pending: !0 }),
                di
                  .verify(this.value, this.rules, {
                    name: this.name,
                    values:
                      ((t = this),
                      (e = t.$_veeObserver.refs),
                      t.fieldDeps.reduce(function (t, r) {
                        return e[r] ? ((t[r] = e[r].value), t) : t;
                      }, {})),
                    bails: this.bails,
                  })
                  .then(function (t) {
                    return (
                      r.setFlags({ pending: !1 }),
                      r.isRequired ||
                        r.setFlags({ valid: t.valid, invalid: !t.valid }),
                      t
                    );
                  })
              );
            },
            applyResult: function (t) {
              var e = t.errors,
                r = t.failedRules;
              (this.messages = e),
                (this.failedRules = A({}, r)),
                this.setFlags({
                  valid: !e.length,
                  changed: this.value !== this.initialValue,
                  invalid: !!e.length,
                  validated: !0,
                });
            },
            registerField: function () {
              di || (di = Ct() || new At(null, { fastExit: K().fastExit })),
                (function (t) {
                  d(t.id) && t.id === t.vid && ((t.id = pi), pi++);
                  var e = t.id,
                    r = t.vid;
                  if (t.isDeactivated || (e === r && t.$_veeObserver.refs[e]))
                    return;
                  e !== r &&
                    t.$_veeObserver.refs[e] === t &&
                    t.$_veeObserver.unsubscribe({ vid: e });
                  t.$_veeObserver.subscribe(t), (t.id = r);
                })(this);
            },
          },
        };
      function fi(t) {
        return {
          errors: t.messages,
          flags: t.flags,
          classes: t.classes,
          valid: t.isValid,
          failedRules: t.failedRules,
          reset: function () {
            return t.reset();
          },
          validate: function () {
            for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
            return t.validate.apply(t, e);
          },
          aria: {
            "aria-invalid": t.flags.invalid ? "true" : "false",
            "aria-required": t.isRequired ? "true" : "false",
          },
        };
      }
      function gi(t) {
        return (E(t.mode) ? t.mode : Nt[t.mode])({
          errors: t.messages,
          value: t.value,
          flags: t.flags,
        });
      }
      function mi(t) {
        this.initialized || (this.initialValue = t.value);
        var e = (function (t, e) {
          return (
            !(t._ignoreImmediate || !t.immediate) ||
            t.value !== e.value ||
            !!t._needsValidation ||
            (!t.initialized && void 0 === e.value)
          );
        })(this, t);
        (this._needsValidation = !1),
          (this.value = t.value),
          (this._ignoreImmediate = !0),
          e &&
            this.validateSilent().then(
              this.immediate || this.flags.validated
                ? this.applyResult
                : function (t) {
                    return t;
                  }
            );
      }
      function vi(t) {
        var e = t.$veeHandler,
          r = gi(t);
        return (
          (e && t.$veeDebounce === t.debounce) ||
            ((e = v(function () {
              t.$nextTick(function () {
                var e = t.validateSilent();
                (t._pendingValidation = e),
                  e.then(function (r) {
                    e === t._pendingValidation &&
                      (t.applyResult(r), (t._pendingValidation = null));
                  });
              });
            }, r.debounce || t.debounce)),
            (t.$veeHandler = e),
            (t.$veeDebounce = t.debounce)),
          {
            onInput: function (e) {
              t.syncValue(e), t.setFlags({ dirty: !0, pristine: !1 });
            },
            onBlur: function () {
              t.setFlags({ touched: !0, untouched: !1 });
            },
            onValidate: e,
          }
        );
      }
      function yi(t) {
        var e = tt(t);
        (this._inputEventName = this._inputEventName || at(t, e)),
          mi.call(this, e);
        var r = vi(this),
          n = r.onInput,
          o = r.onBlur,
          c = r.onValidate;
        ot(t, this._inputEventName, n),
          ot(t, "blur", o),
          this.normalizedEvents.forEach(function (e) {
            ot(t, e, c);
          }),
          (this.initialized = !0);
      }
      function wi(t, e, r) {
        void 0 === r && (r = !0);
        var n = t.$_veeObserver.refs;
        if ((t._veeWatchers || (t._veeWatchers = {}), !n[e] && r))
          return t.$once("hook:mounted", function () {
            wi(t, e, !1);
          });
        !E(t._veeWatchers[e]) &&
          n[e] &&
          (t._veeWatchers[e] = n[e].$watch("value", function () {
            t.flags.validated && ((t._needsValidation = !0), t.validate());
          }));
      }
      var bi = {
        pristine: "every",
        dirty: "some",
        touched: "some",
        untouched: "every",
        valid: "every",
        invalid: "some",
        pending: "some",
        validated: "every",
      };
      var xi = 0,
        _i = {
          name: "ValidationObserver",
          provide: function () {
            return { $_veeObserver: this };
          },
          inject: {
            $_veeObserver: {
              from: "$_veeObserver",
              default: function () {
                return this.$vnode.context.$_veeObserver
                  ? this.$vnode.context.$_veeObserver
                  : null;
              },
            },
          },
          props: {
            tag: { type: String, default: "span" },
            slim: { type: Boolean, default: !1 },
          },
          data: function () {
            return {
              vid: "obs_" + xi++,
              refs: {},
              observers: [],
              persistedStore: {},
            };
          },
          computed: {
            ctx: function () {
              var t = this,
                e = {
                  errors: {},
                  validate: function (e) {
                    var r = t.validate(e);
                    return {
                      then: function (t) {
                        return r.then(function (e) {
                          return e && E(t)
                            ? Promise.resolve(t())
                            : Promise.resolve(e);
                        });
                      },
                    };
                  },
                  reset: function () {
                    return t.reset();
                  },
                };
              return N(this.refs)
                .concat(
                  Object.keys(this.persistedStore).map(function (e) {
                    return {
                      vid: e,
                      flags: t.persistedStore[e].flags,
                      messages: t.persistedStore[e].errors,
                    };
                  }),
                  this.observers
                )
                .reduce(function (t, e) {
                  return (
                    Object.keys(bi).forEach(function (r) {
                      var n,
                        o,
                        c = e.flags || e.ctx;
                      r in t
                        ? (t[r] =
                            ((n = t[r]),
                            (o = c[r]),
                            [n, o][bi[r]](function (t) {
                              return t;
                            })))
                        : (t[r] = c[r]);
                    }),
                    (t.errors[e.vid] =
                      e.messages ||
                      N(e.ctx.errors).reduce(function (t, e) {
                        return t.concat(e);
                      }, [])),
                    t
                  );
                }, e);
            },
          },
          created: function () {
            this.$_veeObserver &&
              this.$_veeObserver.subscribe(this, "observer");
          },
          activated: function () {
            this.$_veeObserver &&
              this.$_veeObserver.subscribe(this, "observer");
          },
          deactivated: function () {
            this.$_veeObserver &&
              this.$_veeObserver.unsubscribe(this, "observer");
          },
          beforeDestroy: function () {
            this.$_veeObserver &&
              this.$_veeObserver.unsubscribe(this, "observer");
          },
          render: function (t) {
            var e = this.$slots.default || this.$scopedSlots.default || [];
            return (
              E(e) && (e = e(this.ctx)),
              this.slim
                ? st(t, e)
                : t(this.tag, { on: this.$listeners, attrs: this.$attrs }, e)
            );
          },
          methods: {
            subscribe: function (t, e) {
              var r;
              void 0 === e && (e = "provider"),
                "observer" !== e
                  ? ((this.refs = Object.assign(
                      {},
                      this.refs,
                      (((r = {})[t.vid] = t), r)
                    )),
                    t.persist &&
                      this.persistedStore[t.vid] &&
                      this.restoreProviderState(t))
                  : this.observers.push(t);
            },
            unsubscribe: function (t, e) {
              var r = t.vid;
              void 0 === e && (e = "provider"),
                "provider" === e && this.removeProvider(r);
              var n = I(this.observers, function (t) {
                return t.vid === r;
              });
              -1 !== n && this.observers.splice(n, 1);
            },
            validate: function (t) {
              void 0 === t && (t = { silent: !1 });
              var e = t.silent;
              return Promise.all(
                N(this.refs)
                  .map(function (t) {
                    return t[e ? "validateSilent" : "validate"]().then(
                      function (t) {
                        return t.valid;
                      }
                    );
                  })
                  .concat(
                    this.observers.map(function (t) {
                      return t.validate({ silent: e });
                    })
                  )
              ).then(function (t) {
                return t.every(function (t) {
                  return t;
                });
              });
            },
            reset: function () {
              var t = this;
              return (
                Object.keys(this.persistedStore).forEach(function (e) {
                  t.$delete(t.persistedStore, e);
                }),
                N(this.refs)
                  .concat(this.observers)
                  .forEach(function (t) {
                    return t.reset();
                  })
              );
            },
            restoreProviderState: function (t) {
              var e = this.persistedStore[t.vid];
              t.setFlags(e.flags),
                t.applyResult(e),
                this.$delete(this.persistedStore, t.vid);
            },
            removeProvider: function (t) {
              var e,
                r = this.refs[t];
              r &&
                r.persist &&
                (this.persistedStore = A(
                  {},
                  this.persistedStore,
                  (((e = {})[t] = {
                    flags: r.flags,
                    errors: r.messages,
                    failedRules: r.failedRules,
                  }),
                  e)
                )),
                this.$delete(this.refs, t);
            },
          },
        };
      Object.keys(si).forEach(function (t) {
        At.extend(
          t,
          si[t].validate,
          A({}, si[t].options, { paramNames: si[t].paramNames })
        );
      }),
        At.localize({ en: Wt });
      (qt.version = "2.2.15"),
        (qt.mapFields = function (t) {
          if (!t)
            return function () {
              return ui(this.$validator.flags);
            };
          var e = (function (t) {
            return Array.isArray(t)
              ? t.reduce(function (t, e) {
                  return H(e, ".") ? (t[e.split(".")[1]] = e) : (t[e] = e), t;
                }, {})
              : t;
          })(t);
          return Object.keys(e).reduce(function (t, r) {
            var n = e[r];
            return (
              (t[r] = function () {
                if (this.$validator.flags[n]) return this.$validator.flags[n];
                if ("*" === e[r]) return ui(this.$validator.flags, !1);
                if (n.indexOf(".") <= 0) return {};
                var t = n.split("."),
                  o = t[0],
                  c = t.slice(1);
                return (
                  (o = this.$validator.flags["$" + o]),
                  "*" === (c = c.join(".")) && o ? ui(o) : o && o[c] ? o[c] : {}
                );
              }),
              t
            );
          }, {});
        }),
        (qt.ValidationProvider = hi),
        (qt.ValidationObserver = _i),
        (qt.withValidation = function (component, t) {
          void 0 === t && (t = null);
          var e = E(component) ? component.options : component;
          e.$__veeInject = !1;
          var r = {
            name: (e.name || "AnonymousHoc") + "WithValidation",
            props: A({}, hi.props),
            data: hi.data,
            computed: A({}, hi.computed),
            methods: A({}, hi.methods),
            $__veeInject: !1,
            beforeDestroy: hi.beforeDestroy,
            inject: hi.inject,
          };
          t ||
            (t = function (t) {
              return t;
            });
          var n = (e.model && e.model.event) || "input";
          return (
            (r.render = function (r) {
              var o;
              this.registerField();
              var c = fi(this),
                l = A({}, this.$listeners),
                d = tt(this.$vnode);
              (this._inputEventName =
                this._inputEventName || at(this.$vnode, d)),
                mi.call(this, d);
              var h = vi(this),
                f = h.onInput,
                m = h.onBlur,
                v = h.onValidate;
              it(l, n, f),
                it(l, "blur", m),
                this.normalizedEvents.forEach(function (t, e) {
                  it(l, t, v);
                });
              var y,
                w,
                x = (nt(this.$vnode) || { prop: "value" }).prop,
                _ = A({}, this.$attrs, (((o = {})[x] = d.value), o), t(c));
              return r(
                e,
                { attrs: this.$attrs, props: _, on: l },
                ((y = this.$slots),
                (w = this.$vnode.context),
                Object.keys(y).reduce(function (t, e) {
                  return (
                    y[e].forEach(function (t) {
                      t.context ||
                        ((y[e].context = w),
                        t.data || (t.data = {}),
                        (t.data.slot = e));
                    }),
                    t.concat(y[e])
                  );
                }, []))
              );
            }),
            r
          );
        }),
        (e.a = qt);
    },
    210: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.initFlowbite = void 0);
      var n = r(112),
        o = r(114),
        c = r(113),
        l = r(122),
        d = r(115),
        h = r(118),
        f = r(116),
        m = r(123),
        v = r(117),
        y = r(121),
        w = r(119),
        x = r(120);
      function _() {
        (0, n.initAccordions)(),
          (0, c.initCollapses)(),
          (0, o.initCarousels)(),
          (0, d.initDismisses)(),
          (0, f.initDropdowns)(),
          (0, v.initModals)(),
          (0, h.initDrawers)(),
          (0, w.initTabs)(),
          (0, x.initTooltips)(),
          (0, y.initPopovers)(),
          (0, l.initDials)(),
          (0, m.initInputCounters)();
      }
      (e.initFlowbite = _),
        "undefined" != typeof window && (window.initFlowbite = _);
    },
    220: function (t, e, r) {
      "use strict";
      function n(t, e) {
        return (
          (e = e || {}),
          new Promise(function (r, n) {
            var s = new XMLHttpRequest(),
              o = [],
              u = {},
              a = function t() {
                return {
                  ok: 2 == ((s.status / 100) | 0),
                  statusText: s.statusText,
                  status: s.status,
                  url: s.responseURL,
                  text: function () {
                    return Promise.resolve(s.responseText);
                  },
                  json: function () {
                    return Promise.resolve(s.responseText).then(JSON.parse);
                  },
                  blob: function () {
                    return Promise.resolve(new Blob([s.response]));
                  },
                  clone: t,
                  headers: {
                    keys: function () {
                      return o;
                    },
                    entries: function () {
                      return o.map(function (t) {
                        return [t, s.getResponseHeader(t)];
                      });
                    },
                    get: function (t) {
                      return s.getResponseHeader(t);
                    },
                    has: function (t) {
                      return null != s.getResponseHeader(t);
                    },
                  },
                };
              };
            for (var i in (s.open(e.method || "get", t, !0),
            (s.onload = function () {
              s
                .getAllResponseHeaders()
                .toLowerCase()
                .replace(/^(.+?):/gm, function (t, e) {
                  u[e] || o.push((u[e] = e));
                }),
                r(a());
            }),
            (s.onerror = n),
            (s.withCredentials = "include" == e.credentials),
            e.headers))
              s.setRequestHeader(i, e.headers[i]);
            s.send(e.body || null);
          })
        );
      }
      r.d(e, "a", function () {
        return n;
      });
    },
    222: function (t, e, r) {
      "use strict";
      var n = function (t) {
        return (
          (function (t) {
            return !!t && "object" == typeof t;
          })(t) &&
          !(function (t) {
            var e = Object.prototype.toString.call(t);
            return (
              "[object RegExp]" === e ||
              "[object Date]" === e ||
              (function (t) {
                return t.$$typeof === o;
              })(t)
            );
          })(t)
        );
      };
      var o =
        "function" == typeof Symbol && Symbol.for
          ? Symbol.for("react.element")
          : 60103;
      function c(t, e) {
        return !1 !== e.clone && e.isMergeableObject(t)
          ? m(((r = t), Array.isArray(r) ? [] : {}), t, e)
          : t;
        var r;
      }
      function l(t, source, e) {
        return t.concat(source).map(function (element) {
          return c(element, e);
        });
      }
      function d(t) {
        return Object.keys(t).concat(
          (function (t) {
            return Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(t).filter(function (symbol) {
                  return Object.propertyIsEnumerable.call(t, symbol);
                })
              : [];
          })(t)
        );
      }
      function h(object, t) {
        try {
          return t in object;
        } catch (t) {
          return !1;
        }
      }
      function f(t, source, e) {
        var r = {};
        return (
          e.isMergeableObject(t) &&
            d(t).forEach(function (n) {
              r[n] = c(t[n], e);
            }),
          d(source).forEach(function (n) {
            (function (t, e) {
              return (
                h(t, e) &&
                !(
                  Object.hasOwnProperty.call(t, e) &&
                  Object.propertyIsEnumerable.call(t, e)
                )
              );
            })(t, n) ||
              (h(t, n) && e.isMergeableObject(source[n])
                ? (r[n] = (function (t, e) {
                    if (!e.customMerge) return m;
                    var r = e.customMerge(t);
                    return "function" == typeof r ? r : m;
                  })(n, e)(t[n], source[n], e))
                : (r[n] = c(source[n], e)));
          }),
          r
        );
      }
      function m(t, source, e) {
        ((e = e || {}).arrayMerge = e.arrayMerge || l),
          (e.isMergeableObject = e.isMergeableObject || n),
          (e.cloneUnlessOtherwiseSpecified = c);
        var r = Array.isArray(source);
        return r === Array.isArray(t)
          ? r
            ? e.arrayMerge(t, source, e)
            : f(t, source, e)
          : c(source, e);
      }
      m.all = function (t, e) {
        if (!Array.isArray(t))
          throw new Error("first argument should be an array");
        return t.reduce(function (t, r) {
          return m(t, r, e);
        }, {});
      };
      var v = m;
      t.exports = v;
    },
    224: function (t, e, r) {
      "undefined" != typeof self && self,
        (t.exports = (function (t) {
          var e = {};
          function r(n) {
            if (e[n]) return e[n].exports;
            var i = (e[n] = { i: n, l: !1, exports: {} });
            return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
          }
          return (
            (r.m = t),
            (r.c = e),
            (r.d = function (t, e, n) {
              r.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: n });
            }),
            (r.r = function (t) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (r.t = function (t, e) {
              if ((1 & e && (t = r(t)), 8 & e)) return t;
              if (4 & e && "object" == typeof t && t && t.__esModule) return t;
              var n = Object.create(null);
              if (
                (r.r(n),
                Object.defineProperty(n, "default", {
                  enumerable: !0,
                  value: t,
                }),
                2 & e && "string" != typeof t)
              )
                for (var i in t)
                  r.d(
                    n,
                    i,
                    function (e) {
                      return t[e];
                    }.bind(null, i)
                  );
              return n;
            }),
            (r.n = function (t) {
              var e =
                t && t.__esModule
                  ? function () {
                      return t.default;
                    }
                  : function () {
                      return t;
                    };
              return r.d(e, "a", e), e;
            }),
            (r.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (r.p = ""),
            r((r.s = "fb15"))
          );
        })({
          "0ca3": function (t, e, r) {
            "use strict";
            var n = r("c6aa");
            r.n(n).a;
          },
          7937: function (t, e, r) {},
          "7fca": function (t, e, r) {
            "use strict";
            var n = r("c10a");
            r.n(n).a;
          },
          8875: function (t, e, r) {
            var n, i, o, c;
            "undefined" != typeof self && self,
              (c = function () {
                function t() {
                  if (document.currentScript) return document.currentScript;
                  try {
                    throw new Error();
                  } catch (l) {
                    var t,
                      e,
                      r,
                      i = /@([^@]*):(\d+):(\d+)\s*$/gi,
                      n =
                        /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(l.stack) ||
                        i.exec(l.stack),
                      o = (n && n[1]) || !1,
                      s = (n && n[2]) || !1,
                      a = document.location.href.replace(
                        document.location.hash,
                        ""
                      ),
                      c = document.getElementsByTagName("script");
                    o === a &&
                      ((t = document.documentElement.outerHTML),
                      (e = new RegExp(
                        "(?:[^\\n]+?\\n){0," +
                          (s - 2) +
                          "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*",
                        "i"
                      )),
                      (r = t.replace(e, "$1").trim()));
                    for (var u = 0; u < c.length; u++) {
                      if ("interactive" === c[u].readyState) return c[u];
                      if (c[u].src === o) return c[u];
                      if (
                        o === a &&
                        c[u].innerHTML &&
                        c[u].innerHTML.trim() === r
                      )
                        return c[u];
                    }
                    return null;
                  }
                }
                return t;
              }),
              (i = []),
              void 0 ===
                (o = "function" == typeof (n = c) ? n.apply(e, i) : n) ||
                (t.exports = o);
          },
          9334: function (t, e, r) {
            "use strict";
            var n = r("7937");
            r.n(n).a;
          },
          c10a: function (t, e, r) {},
          c6aa: function (t, e, r) {},
          fb15: function (t, e, r) {
            "use strict";
            if (
              (r.r(e),
              r.d(e, "DEFAULT_BACKGROUND_COLOR", function () {
                return O;
              }),
              r.d(e, "DEFAULT_BORDER_RADIUS", function () {
                return A;
              }),
              r.d(e, "DEFAULT_ROW_LENGTH", function () {
                return j;
              }),
              r.d(e, "DEFAULT_TRIGGER_CONTAINER_SPACE", function () {
                return D;
              }),
              r.d(e, "DEFAULT_SWATCH_SIZE", function () {
                return I;
              }),
              r.d(e, "DEFAULT_SHOW_BORDER", function () {
                return L;
              }),
              r.d(e, "extractPropertyFromPreset", function () {
                return $;
              }),
              "undefined" != typeof window)
            ) {
              var n = window.document.currentScript,
                i = r("8875");
              (n = i()),
                "currentScript" in document ||
                  Object.defineProperty(document, "currentScript", { get: i });
              var o = n && n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
              o && (r.p = o[1]);
            }
            var c = function () {
                var t = this,
                  e = t.$createElement,
                  r = t._self._c || e;
                return r(
                  "div",
                  {
                    staticClass: "vue-swatches",
                    attrs: { tabindex: "-1" },
                    on: {
                      blur: function (e) {
                        return t.onBlur(e.relatedTarget);
                      },
                    },
                  },
                  [
                    t.inline
                      ? t._e()
                      : r(
                          "div",
                          {
                            ref: "triggerWrapper",
                            staticClass: "vue-swatches__trigger__wrapper",
                            on: { click: t.togglePopover },
                          },
                          [
                            t._t("trigger", [
                              r(
                                "div",
                                {
                                  staticClass: "vue-swatches__trigger",
                                  class: {
                                    "vue-swatches--is-empty": !t.value,
                                    "vue-swatches--is-disabled": t.disabled,
                                  },
                                  style: t.triggerStyles,
                                },
                                [
                                  r(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: t.isNoColor,
                                          expression: "isNoColor",
                                        },
                                      ],
                                      staticClass:
                                        "vue-swatches__diagonal__wrapper vue-swatches--has-children-centered",
                                    },
                                    [
                                      r("div", {
                                        staticClass: "vue-swatches__diagonal",
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                          ],
                          2
                        ),
                    r(
                      "transition",
                      { attrs: { name: "vue-swatches-show-hide" } },
                      [
                        r(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: t.inline || t.isOpen,
                                expression: "inline || isOpen",
                              },
                            ],
                            ref: "containerWrapper",
                            staticClass: "vue-swatches__container",
                            class: { "vue-swatches--inline": t.inline },
                            style: t.containerStyles,
                          },
                          [
                            r(
                              "div",
                              {
                                staticClass: "vue-swatches__wrapper",
                                style: t.wrapperStyles,
                              },
                              [
                                t.isNested
                                  ? t._l(t.computedSwatches, function (e, n) {
                                      return r(
                                        "div",
                                        {
                                          key: n,
                                          staticClass: "vue-swatches__row",
                                        },
                                        t._l(e, function (i, o) {
                                          return r("v-swatch", {
                                            key: o,
                                            attrs: {
                                              "is-last":
                                                n ===
                                                  t.computedSwatches.length -
                                                    1 && o === e.length,
                                              "row-length-setted":
                                                null !== t.rowLength ||
                                                null !== t.presetRowLength,
                                              "border-radius":
                                                t.computedBorderRadius,
                                              disabled: t.getSwatchDisabled(i),
                                              inline: t.inline,
                                              selected: t.checkEquality(
                                                t.getSwatchColor(i),
                                                t.value
                                              ),
                                              "swatch-size":
                                                t.computedSwatchSize,
                                              "spacing-size":
                                                t.computedSpacingSize,
                                              "show-border":
                                                t.getSwatchShowBorder(i),
                                              "show-checkbox": t.showCheckbox,
                                              "show-labels": t.showLabels,
                                              "swatch-color":
                                                t.getSwatchColor(i),
                                              "swatch-label":
                                                t.getSwatchLabel(i),
                                              "swatch-alt": t.getSwatchAlt(i),
                                              "swatch-style": t.swatchStyle,
                                            },
                                            on: {
                                              blur: function (e) {
                                                return t.onBlur(e);
                                              },
                                              click: function (e) {
                                                return t.updateSwatch(i);
                                              },
                                            },
                                            nativeOn: {
                                              click: function (e) {
                                                return t.updateSwatch(i);
                                              },
                                            },
                                          });
                                        }),
                                        1
                                      );
                                    })
                                  : t._l(t.computedSwatches, function (e, n) {
                                      return r("v-swatch", {
                                        key: n,
                                        attrs: {
                                          "is-last":
                                            n === t.computedSwatches.length - 1,
                                          "row-length-setted":
                                            null !== t.rowLength ||
                                            null !== t.presetRowLength,
                                          "border-radius":
                                            t.computedBorderRadius,
                                          disabled: t.getSwatchDisabled(e),
                                          inline: t.inline,
                                          selected: t.checkEquality(
                                            t.getSwatchColor(e),
                                            t.value
                                          ),
                                          "swatch-size": t.computedSwatchSize,
                                          "spacing-size": t.computedSpacingSize,
                                          "show-border":
                                            t.getSwatchShowBorder(e),
                                          "show-checkbox": t.showCheckbox,
                                          "show-labels": t.showLabels,
                                          "swatch-color": t.getSwatchColor(e),
                                          "swatch-label": t.getSwatchLabel(e),
                                          "swatch-alt": t.getSwatchAlt(e),
                                          "swatch-style": t.swatchStyle,
                                        },
                                        on: {
                                          blur: function (e) {
                                            return t.onBlur(e);
                                          },
                                          click: function (r) {
                                            return t.updateSwatch(e);
                                          },
                                        },
                                        nativeOn: {
                                          click: function (r) {
                                            return t.updateSwatch(e);
                                          },
                                        },
                                      });
                                    }),
                              ],
                              2
                            ),
                            t.showFallback
                              ? r(
                                  "div",
                                  {
                                    staticClass:
                                      "vue-swatches__fallback__wrapper",
                                    style: t.computedFallbackWrapperStyles,
                                  },
                                  [
                                    r(
                                      "span",
                                      {
                                        staticClass:
                                          "vue-swatches__fallback__input--wrapper",
                                      },
                                      [
                                        r("input", {
                                          ref: "fallbackInput",
                                          staticClass:
                                            "vue-swatches__fallback__input",
                                          class: t.fallbackInputClass,
                                          attrs: { type: t.fallbackInputType },
                                          domProps: { value: t.internalValue },
                                          on: {
                                            input: function (e) {
                                              return t.updateSwatch(
                                                e.target.value,
                                                { fromFallbackInput: !0 }
                                              );
                                            },
                                          },
                                        }),
                                      ]
                                    ),
                                    t.showFallbackOk
                                      ? r(
                                          "button",
                                          {
                                            staticClass:
                                              "vue-swatches__fallback__button",
                                            class: t.fallbackOkClass,
                                            on: {
                                              click: function (e) {
                                                return (
                                                  e.preventDefault(),
                                                  t.onFallbackButtonClick(e)
                                                );
                                              },
                                            },
                                          },
                                          [
                                            t._v(
                                              " " + t._s(t.fallbackOkText) + " "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                  ]
                                )
                              : t._e(),
                          ]
                        ),
                      ]
                    ),
                  ],
                  1
                );
              },
              s = [],
              a = {
                colors: [
                  "#1FBC9C",
                  "#1CA085",
                  "#2ECC70",
                  "#27AF60",
                  "#3398DB",
                  "#2980B9",
                  "#A463BF",
                  "#8E43AD",
                  "#3D556E",
                  "#222F3D",
                  "#F2C511",
                  "#F39C19",
                  "#E84B3C",
                  "#C0382B",
                  "#DDE6E8",
                  "#BDC3C8",
                ],
                rowLength: 4,
              },
              l = {
                colors: [
                  "#CC0001",
                  "#E36101",
                  "#FFCC00",
                  "#009900",
                  "#0066CB",
                  "#000000",
                  "#FFFFFF",
                ],
                showBorder: !0,
              },
              u = {
                colors: [
                  [
                    "#000000",
                    "#434343",
                    "#666666",
                    "#999999",
                    "#b7b7b7",
                    "#cccccc",
                    "#d9d9d9",
                    "#efefef",
                    "#f3f3f3",
                    "#ffffff",
                  ],
                  [
                    "#980000",
                    "#ff0000",
                    "#ff9900",
                    "#ffff00",
                    "#00ff00",
                    "#00ffff",
                    "#4a86e8",
                    "#0000ff",
                    "#9900ff",
                    "#ff00ff",
                  ],
                  [
                    "#e6b8af",
                    "#f4cccc",
                    "#fce5cd",
                    "#fff2cc",
                    "#d9ead3",
                    "#d0e0e3",
                    "#c9daf8",
                    "#cfe2f3",
                    "#d9d2e9",
                    "#ead1dc",
                  ],
                  [
                    "#dd7e6b",
                    "#ea9999",
                    "#f9cb9c",
                    "#ffe599",
                    "#b6d7a8",
                    "#a2c4c9",
                    "#a4c2f4",
                    "#9fc5e8",
                    "#b4a7d6",
                    "#d5a6bd",
                  ],
                  [
                    "#cc4125",
                    "#e06666",
                    "#f6b26b",
                    "#ffd966",
                    "#93c47d",
                    "#76a5af",
                    "#6d9eeb",
                    "#6fa8dc",
                    "#8e7cc3",
                    "#c27ba0",
                  ],
                  [
                    "#a61c00",
                    "#cc0000",
                    "#e69138",
                    "#f1c232",
                    "#6aa84f",
                    "#45818e",
                    "#3c78d8",
                    "#3d85c6",
                    "#674ea7",
                    "#a64d79",
                  ],
                  [
                    "#85200c",
                    "#990000",
                    "#b45f06",
                    "#bf9000",
                    "#38761d",
                    "#134f5c",
                    "#1155cc",
                    "#0b5394",
                    "#351c75",
                    "#741b47",
                  ],
                  [
                    "#5b0f00",
                    "#660000",
                    "#783f04",
                    "#7f6000",
                    "#274e13",
                    "#0c343d",
                    "#1c4587",
                    "#073763",
                    "#20124d",
                    "#4c1130",
                  ],
                ],
                borderRadius: "0",
                rowLength: 10,
                swatchSize: 24,
                spacingSize: 0,
              },
              d = function () {
                var t = this,
                  e = this,
                  r = e.$createElement,
                  n = e._self._c || r;
                return n(
                  "div",
                  {
                    staticClass: "vue-swatches__swatch",
                    class: {
                      "vue-swatches__swatch--border": e.showBorder,
                      "vue-swatches__swatch--selected": e.selected,
                      "vue-swatches__swatch--is-disabled": e.disabled,
                    },
                    style: e.swatchStyles,
                    attrs: {
                      "aria-label": e.swatchAlt,
                      role: "button",
                      tabindex: "0",
                    },
                    on: {
                      keyup: function (t) {
                        return !t.type.indexOf("key") &&
                          e._k(t.keyCode, "enter", 13, t.key, "Enter")
                          ? null
                          : e.$emit("click", e.swatchColor);
                      },
                      blur: function (e) {
                        return t.$emit("blur", e.relatedTarget);
                      },
                    },
                  },
                  [
                    "" === e.swatchColor
                      ? n(
                          "div",
                          {
                            staticClass:
                              "vue-swatches__diagonal__wrapper vue-swatches--has-children-centered",
                          },
                          [n("div", { staticClass: "vue-swatches__diagonal" })]
                        )
                      : e._e(),
                    n("v-check", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: e.showCheckbox && e.selected,
                          expression: "showCheckbox && selected",
                        },
                      ],
                    }),
                    e.showLabels
                      ? n(
                          "div",
                          {
                            staticClass: "vue-swatches__swatch__label",
                            style: e.labelStyles,
                          },
                          [e._v(" " + e._s(e.swatchLabel) + " ")]
                        )
                      : e._e(),
                  ],
                  1
                );
              },
              p = [],
              h = function () {
                var t = this,
                  e = t.$createElement,
                  r = t._self._c || e;
                return r(
                  "div",
                  {
                    staticClass:
                      "vue-swatches__check__wrapper vue-swatches--has-children-centered",
                  },
                  [
                    r(
                      "div",
                      {
                        staticClass:
                          "vue-swatches__check__circle vue-swatches--has-children-centered",
                      },
                      [
                        r(
                          "svg",
                          {
                            staticClass: "check",
                            attrs: {
                              version: "1.1",
                              role: "presentation",
                              width: "12",
                              height: "12",
                              viewBox: "0 0 1792 1792",
                            },
                          },
                          [
                            r("path", {
                              staticClass: "vue-swatches__check__path",
                              attrs: {
                                d: "M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z",
                              },
                            }),
                          ]
                        ),
                      ]
                    ),
                  ]
                );
              },
              f = [],
              b = {
                name: "v-check",
                data: function () {
                  return {};
                },
              };
            function m(t, e, r, n, i, o, c, s) {
              var a,
                l = "function" == typeof t ? t.options : t;
              if (
                (e &&
                  ((l.render = e), (l.staticRenderFns = r), (l._compiled = !0)),
                n && (l.functional = !0),
                o && (l._scopeId = "data-v-" + o),
                c
                  ? ((a = function (t) {
                      (t =
                        t ||
                        (this.$vnode && this.$vnode.ssrContext) ||
                        (this.parent &&
                          this.parent.$vnode &&
                          this.parent.$vnode.ssrContext)) ||
                        "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                        (t = __VUE_SSR_CONTEXT__),
                        i && i.call(this, t),
                        t &&
                          t._registeredComponents &&
                          t._registeredComponents.add(c);
                    }),
                    (l._ssrRegister = a))
                  : i &&
                    (a = s
                      ? function () {
                          i.call(this, this.$root.$options.shadowRoot);
                        }
                      : i),
                a)
              )
                if (l.functional) {
                  l._injectStyles = a;
                  var u = l.render;
                  l.render = function (t, e) {
                    return a.call(e), u(t, e);
                  };
                } else {
                  var d = l.beforeCreate;
                  l.beforeCreate = d ? [].concat(d, a) : [a];
                }
              return { exports: t, options: l };
            }
            function v(t, e) {
              var r = Object.keys(t);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e &&
                  (n = n.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                  })),
                  r.push.apply(r, n);
              }
              return r;
            }
            function y(t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? v(Object(r), !0).forEach(function (e) {
                      w(t, e, r[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : v(Object(r)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(r, e)
                      );
                    });
              }
              return t;
            }
            function w(t, e, r) {
              return (
                e in t
                  ? Object.defineProperty(t, e, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (t[e] = r),
                t
              );
            }
            r("7fca");
            var x = {
                name: "v-swatch",
                components: {
                  VCheck: m(b, h, f, !1, null, null, null).exports,
                },
                props: {
                  borderRadius: { type: String },
                  isLast: { type: Boolean, default: !1 },
                  rowLengthSetted: { type: Boolean, default: !1 },
                  disabled: { type: Boolean },
                  inline: { type: Boolean },
                  selected: { type: Boolean, default: !1 },
                  showCheckbox: { type: Boolean },
                  showBorder: { type: Boolean },
                  showLabels: { type: Boolean },
                  spacingSize: { type: Number },
                  swatchColor: { type: String, default: "" },
                  swatchLabel: { type: String },
                  swatchAlt: { type: String },
                  swatchSize: { type: Number },
                  swatchStyle: { type: Object },
                },
                data: function () {
                  return {};
                },
                computed: {
                  computedLabelStyle: function () {
                    var t = 8 + 3 * Math.floor(this.spacingSize / 5);
                    return { bottom: "-".concat(t, "px") };
                  },
                  computedSwatchStyle: function () {
                    var t = {
                      width: "".concat(this.swatchSize, "px"),
                      height: "".concat(this.swatchSize, "px"),
                      borderRadius: this.borderRadius,
                      backgroundColor:
                        "" !== this.swatchColor ? this.swatchColor : "#FFFFFF",
                      cursor: this.cursorStyle,
                    };
                    return (
                      (this.inline && this.isLast) ||
                        (t.marginRight = "".concat(this.spacingSize, "px")),
                      this.inline && !this.rowLengthSetted
                        ? t
                        : y({}, t, {
                            marginBottom: "".concat(this.spacingSize, "px"),
                          })
                    );
                  },
                  cursorStyle: function () {
                    return this.disabled ? "not-allowed" : "pointer";
                  },
                  labelStyles: function () {
                    return [this.computedLabelStyle];
                  },
                  swatchStyles: function () {
                    return [this.computedSwatchStyle, this.swatchStyle];
                  },
                },
              },
              _ = x,
              k = (r("0ca3"), m(_, d, p, !1, null, null, null)).exports;
            function E(t) {
              return (
                (E =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
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
                      }),
                E(t)
              );
            }
            function C(t, e) {
              var r = Object.keys(t);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e &&
                  (n = n.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                  })),
                  r.push.apply(r, n);
              }
              return r;
            }
            function T(t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? C(Object(r), !0).forEach(function (e) {
                      S(t, e, r[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : C(Object(r)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(r, e)
                      );
                    });
              }
              return t;
            }
            function S(t, e, r) {
              return (
                e in t
                  ? Object.defineProperty(t, e, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (t[e] = r),
                t
              );
            }
            var O = "#ffffff",
              A = "10px",
              j = 4,
              D = 5,
              I = 42,
              L = !1,
              $ = function (t, e, r) {
                return "string" != typeof t
                  ? null
                  : "text-basic" === t
                  ? void 0 === l[e]
                    ? null
                    : l[e]
                  : "text-advanced" === t
                  ? void 0 === u[e]
                    ? null
                    : u[e]
                  : "basic" === t || r
                  ? void 0 === a[e]
                    ? null
                    : a[e]
                  : null;
              },
              P = {
                name: "v-swatches",
                components: { VSwatch: k },
                props: {
                  backgroundColor: { type: String, default: O },
                  closeOnSelect: { type: Boolean, default: !0 },
                  swatches: {
                    type: [Array, String],
                    default: function () {
                      return "basic";
                    },
                  },
                  disabled: { type: Boolean, default: !1 },
                  fallbackInputClass: {
                    type: [Array, Object, String],
                    default: null,
                  },
                  fallbackInputType: {
                    type: String,
                    default: function () {
                      return "text";
                    },
                    validator: function (t) {
                      return -1 !== ["text", "color"].indexOf(t);
                    },
                  },
                  fallbackOkClass: {
                    type: [Array, Object, String],
                    default: null,
                  },
                  fallbackOkText: { type: String, default: "Ok" },
                  inline: { type: Boolean, default: !1 },
                  shapes: { type: String, default: "squares" },
                  popoverX: { type: String, default: "right" },
                  popoverY: { type: String, default: "bottom" },
                  rowLength: { type: [Number, String], default: null },
                  showBorder: { type: Boolean, default: null },
                  showFallback: { type: Boolean, default: !1 },
                  showCheckbox: { type: Boolean, default: !0 },
                  showLabels: { type: Boolean, default: !1 },
                  spacingSize: { type: Number, default: null },
                  swatchSize: { type: [Number, String], default: null },
                  swatchStyle: {
                    type: [Object, Array],
                    default: function () {},
                  },
                  triggerStyle: {
                    type: [Object, Array],
                    default: function () {},
                  },
                  wrapperStyle: {
                    type: [Object, Array],
                    default: function () {},
                  },
                  value: { type: String, default: null },
                },
                data: function () {
                  return {
                    alwaysOnScreenStyle: {},
                    componentMounted: !1,
                    internalValue: this.value,
                    internalIsOpen: !1,
                  };
                },
                computed: {
                  isNested: function () {
                    return !!(
                      this.computedSwatches &&
                      this.computedSwatches.length &&
                      this.computedSwatches[0] instanceof Array
                    );
                  },
                  isOpen: function () {
                    return !this.inline && this.internalIsOpen;
                  },
                  isNoColor: function () {
                    return this.checkEquality("", this.value);
                  },
                  presetBorderRadius: function () {
                    return $(this.swatches, "borderRadius");
                  },
                  presetRowLength: function () {
                    return $(this.swatches, "rowLength");
                  },
                  presetShowBorder: function () {
                    return $(this.swatches, "showBorder");
                  },
                  presetSwatchSize: function () {
                    return $(this.swatches, "swatchSize");
                  },
                  presetSpacingSize: function () {
                    return $(this.swatches, "spacingSize");
                  },
                  computedSwatches: function () {
                    return this.swatches instanceof Array
                      ? this.swatches
                      : "string" == typeof this.swatches
                      ? $(this.swatches, "colors", !0)
                      : [];
                  },
                  computedBorderRadius: function () {
                    return null !== this.presetBorderRadius
                      ? this.presetBorderRadius
                      : this.borderRadius;
                  },
                  computedRowLength: function () {
                    return null !== this.rowLength
                      ? Number(this.rowLength)
                      : null !== this.presetRowLength
                      ? this.presetRowLength
                      : this.computedSwatches.length < j && !this.isNested
                      ? this.computedSwatches.length
                      : j;
                  },
                  computedSwatchSize: function () {
                    return null !== this.swatchSize
                      ? Number(this.swatchSize)
                      : null !== this.presetSwatchSize
                      ? this.presetSwatchSize
                      : I;
                  },
                  computedSpacingSize: function () {
                    return null !== this.spacingSize
                      ? this.spacingSize
                      : null !== this.presetSpacingSize
                      ? this.presetSpacingSize
                      : Math.round(0.25 * this.computedSwatchSize);
                  },
                  computedShowBorder: function () {
                    return null !== this.showBorder
                      ? this.showBorder
                      : null !== this.presetShowBorder
                      ? this.presetShowBorder
                      : L;
                  },
                  showFallbackOk: function () {
                    return !this.inline;
                  },
                  borderRadius: function () {
                    return "squares" === this.shapes
                      ? "".concat(
                          Math.round(0.25 * this.computedSwatchSize),
                          "px"
                        )
                      : "circles" === this.shapes
                      ? "50%"
                      : "";
                  },
                  wrapperWidth: function () {
                    return (
                      this.computedRowLength *
                      (this.computedSwatchSize + this.computedSpacingSize)
                    );
                  },
                  computedtriggerStyle: function () {
                    return {
                      width: "42px",
                      height: "42px",
                      backgroundColor: this.value ? this.value : "#ffffff",
                      borderRadius: "circles" === this.shapes ? "50%" : A,
                    };
                  },
                  triggerStyles: function () {
                    return [this.computedtriggerStyle, this.triggerStyle];
                  },
                  containerStyles: function () {
                    var t = [
                      { backgroundColor: this.backgroundColor },
                      this.alwaysOnScreenStyle,
                    ];
                    return this.inline
                      ? t
                      : [].concat(t, [{ padding: "5px", marginBottom: "5px" }]);
                  },
                  computedWrapperStyle: function () {
                    return this.inline
                      ? {}
                      : {
                          paddingTop: "".concat(this.computedSpacingSize, "px"),
                          paddingLeft: "".concat(
                            this.computedSpacingSize,
                            "px"
                          ),
                          width: "".concat(this.wrapperWidth, "px"),
                        };
                  },
                  wrapperStyles: function () {
                    return [this.computedWrapperStyle, this.wrapperStyle];
                  },
                  computedFallbackWrapperStyle: function () {
                    var t = {
                      marginLeft: "".concat(this.computedSpacingSize, "px"),
                      paddingBottom: "".concat(this.computedSpacingSize, "px"),
                    };
                    return this.inline
                      ? t
                      : T({}, t, {
                          width: "".concat(
                            this.wrapperWidth - this.computedSpacingSize,
                            "px"
                          ),
                        });
                  },
                  computedFallbackWrapperStyles: function () {
                    return [this.computedFallbackWrapperStyle];
                  },
                },
                watch: {
                  value: function (t) {
                    this.internalValue = t;
                  },
                },
                mounted: function () {
                  this.componentMounted = !0;
                },
                methods: {
                  checkEquality: function (t, e) {
                    return (
                      !((!t && "" !== t) || (!e && "" !== e)) &&
                      t.toUpperCase() === e.toUpperCase()
                    );
                  },
                  hidePopover: function () {
                    (this.internalIsOpen = !1),
                      this.$el.blur(),
                      this.$emit("close", this.internalValue);
                  },
                  getAlwaysOnScreenStyle: function () {
                    var t = {},
                      e = this.$refs.triggerWrapper,
                      r = this.$refs.containerWrapper;
                    if (
                      !this.componentMounted ||
                      this.inline ||
                      !e ||
                      !window ||
                      !document
                    )
                      return t;
                    var n = e.getBoundingClientRect(),
                      i = 5,
                      o =
                        (document.documentElement.clientWidth ||
                          window.innerWidth) - 5,
                      c = 5,
                      s =
                        (document.documentElement.clientHeight ||
                          window.innerHeight) - 5;
                    (r.style.visibility = "hidden"),
                      (r.style.display = "block");
                    var a = r.getBoundingClientRect();
                    return (
                      (r.style.display = "none"),
                      (r.style.visibility = "visible"),
                      "top" === this.popoverY
                        ? n.top - a.height < c
                          ? ((t.top = "".concat(n.height + D, "px")),
                            (t.bottom = "auto"))
                          : ((t.bottom = "".concat(n.height + D, "px")),
                            (t.top = "auto"))
                        : "bottom" === this.popoverY &&
                          (n.bottom + a.height > s
                            ? ((t.bottom = "".concat(n.height + D, "px")),
                              (t.top = "auto"))
                            : ((t.top = "".concat(n.height + D, "px")),
                              (t.bottom = "auto"))),
                      "left" === this.popoverX
                        ? n.right - a.width < i
                          ? ((t.left = 0), (t.right = "auto"))
                          : ((t.right = 0), (t.left = "auto"))
                        : "right" === this.popoverX &&
                          (n.left + a.width > o
                            ? ((t.right = 0), (t.left = "auto"))
                            : ((t.left = 0), (t.right = "auto"))),
                      t
                    );
                  },
                  getSwatchShowBorder: function (t) {
                    return "string" == typeof t
                      ? this.computedShowBorder
                      : "object" === E(t)
                      ? void 0 !== t.showBorder
                        ? t.showBorder
                        : this.computedShowBorder
                      : void 0;
                  },
                  getSwatchColor: function (t) {
                    return "string" == typeof t
                      ? t
                      : "object" === E(t)
                      ? t.color
                      : void 0;
                  },
                  getSwatchDisabled: function (t) {
                    return "string" == typeof t
                      ? this.disabled
                      : "object" === E(t)
                      ? void 0 !== t.disabled
                        ? t.disabled
                        : this.disabled
                      : void 0;
                  },
                  getSwatchLabel: function (t) {
                    return "string" == typeof t
                      ? t
                      : "object" === E(t)
                      ? t.label || t.color
                      : void 0;
                  },
                  getSwatchAlt: function (t) {
                    return "string" == typeof t
                      ? t
                      : "object" === E(t)
                      ? t.alt || this.getSwatchLabel(t)
                      : void 0;
                  },
                  onBlur: function (t) {
                    this.isOpen &&
                      ((null !== t && this.$el.contains(t)) ||
                        ((this.internalIsOpen = !1),
                        this.$emit("close", this.internalValue)));
                  },
                  onFallbackButtonClick: function () {
                    this.hidePopover();
                  },
                  showPopover: function () {
                    this.isOpen ||
                      this.inline ||
                      this.disabled ||
                      ((this.alwaysOnScreenStyle =
                        this.getAlwaysOnScreenStyle()),
                      (this.internalIsOpen = !0),
                      this.$el.focus(),
                      this.$emit("open"));
                  },
                  togglePopover: function () {
                    this.isOpen ? this.hidePopover() : this.showPopover();
                  },
                  updateSwatch: function (t) {
                    var e = (
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {}
                    ).fromFallbackInput;
                    if (!this.getSwatchDisabled(t)) {
                      var r = this.getSwatchColor(t);
                      (this.internalValue = r),
                        this.$emit("input", r),
                        !this.closeOnSelect ||
                          this.inline ||
                          e ||
                          this.hidePopover();
                    }
                  },
                },
              },
              z = P,
              M = (r("9334"), m(z, c, s, !1, null, null, null)).exports;
            e.default = M;
          },
        }).default);
    },
    225: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return h;
      });
      var n = r(14),
        o = r(129);
      r(92),
        r(15),
        r(33),
        r(348),
        r(349),
        r(350),
        r(351),
        r(29),
        r(40),
        r(47),
        r(27),
        r(28);
      function c(t, e) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : ".",
          n = arguments.length > 3 ? arguments[3] : void 0;
        if (!l(e)) return c(t, {}, r, n);
        var object = Object.assign({}, e);
        for (var d in t)
          if ("__proto__" !== d && "constructor" !== d) {
            var h = t[d];
            null != h &&
              ((n && n(object, d, h, r)) ||
                (Array.isArray(h) && Array.isArray(object[d])
                  ? (object[d] = [].concat(
                      Object(o.a)(h),
                      Object(o.a)(object[d])
                    ))
                  : l(h) && l(object[d])
                  ? (object[d] = c(
                      h,
                      object[d],
                      (r ? "".concat(r, ".") : "") + d.toString(),
                      n
                    ))
                  : (object[d] = h)));
          }
        return object;
      }
      function l(t) {
        if (null === t || "object" !== Object(n.a)(t)) return !1;
        var e = Object.getPrototypeOf(t);
        return !(
          (null !== e &&
            e !== Object.prototype &&
            null !== Object.getPrototypeOf(e)) ||
          Symbol.toStringTag in t ||
          Symbol.iterator in t
        );
      }
      function d(t) {
        return function () {
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
            r[n] = arguments[n];
          return r.reduce(function (p, e) {
            return c(p, e, "", t);
          }, {});
        };
      }
      var h = d();
      d(function (object, t, e) {
        if (void 0 !== object[t] && "function" == typeof e)
          return (object[t] = e(object[t])), !0;
      }),
        d(function (object, t, e) {
          if (Array.isArray(object[t]) && "function" == typeof e)
            return (object[t] = e(object[t])), !0;
        });
    },
    226: function (t, e, r) {
      var n;
      !(function (e, r) {
        "use strict";
        "object" == typeof t.exports
          ? (t.exports = e.document
              ? r(e, !0)
              : function (t) {
                  if (!t.document)
                    throw new Error("jQuery requires a window with a document");
                  return r(t);
                })
          : r(e);
      })("undefined" != typeof window ? window : this, function (r, o) {
        "use strict";
        var c = [],
          l = Object.getPrototypeOf,
          d = c.slice,
          h = c.flat
            ? function (t) {
                return c.flat.call(t);
              }
            : function (t) {
                return c.concat.apply([], t);
              },
          f = c.push,
          m = c.indexOf,
          v = {},
          y = v.toString,
          w = v.hasOwnProperty,
          x = w.toString,
          _ = x.call(Object),
          k = {},
          E = function (t) {
            return (
              "function" == typeof t &&
              "number" != typeof t.nodeType &&
              "function" != typeof t.item
            );
          },
          C = function (t) {
            return null != t && t === t.window;
          },
          T = r.document,
          S = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function O(code, t, e) {
          var i,
            r,
            script = (e = e || T).createElement("script");
          if (((script.text = code), t))
            for (i in S)
              (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                script.setAttribute(i, r);
          e.head.appendChild(script).parentNode.removeChild(script);
        }
        function A(t) {
          return null == t
            ? t + ""
            : "object" == typeof t || "function" == typeof t
            ? v[y.call(t)] || "object"
            : typeof t;
        }
        var j = "3.7.1",
          D = /HTML$/i,
          I = function (t, e) {
            return new I.fn.init(t, e);
          };
        function L(t) {
          var e = !!t && "length" in t && t.length,
            r = A(t);
          return (
            !E(t) &&
            !C(t) &&
            ("array" === r ||
              0 === e ||
              ("number" == typeof e && e > 0 && e - 1 in t))
          );
        }
        function $(t, e) {
          return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        }
        (I.fn = I.prototype =
          {
            jquery: j,
            constructor: I,
            length: 0,
            toArray: function () {
              return d.call(this);
            },
            get: function (t) {
              return null == t
                ? d.call(this)
                : t < 0
                ? this[t + this.length]
                : this[t];
            },
            pushStack: function (t) {
              var e = I.merge(this.constructor(), t);
              return (e.prevObject = this), e;
            },
            each: function (t) {
              return I.each(this, t);
            },
            map: function (t) {
              return this.pushStack(
                I.map(this, function (e, i) {
                  return t.call(e, i, e);
                })
              );
            },
            slice: function () {
              return this.pushStack(d.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            even: function () {
              return this.pushStack(
                I.grep(this, function (t, i) {
                  return (i + 1) % 2;
                })
              );
            },
            odd: function () {
              return this.pushStack(
                I.grep(this, function (t, i) {
                  return i % 2;
                })
              );
            },
            eq: function (i) {
              var t = this.length,
                e = +i + (i < 0 ? t : 0);
              return this.pushStack(e >= 0 && e < t ? [this[e]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor();
            },
            push: f,
            sort: c.sort,
            splice: c.splice,
          }),
          (I.extend = I.fn.extend =
            function () {
              var t,
                e,
                r,
                n,
                o,
                c,
                l = arguments[0] || {},
                i = 1,
                d = arguments.length,
                h = !1;
              for (
                "boolean" == typeof l &&
                  ((h = l), (l = arguments[i] || {}), i++),
                  "object" == typeof l || E(l) || (l = {}),
                  i === d && ((l = this), i--);
                i < d;
                i++
              )
                if (null != (t = arguments[i]))
                  for (e in t)
                    (n = t[e]),
                      "__proto__" !== e &&
                        l !== n &&
                        (h &&
                        n &&
                        (I.isPlainObject(n) || (o = Array.isArray(n)))
                          ? ((r = l[e]),
                            (c =
                              o && !Array.isArray(r)
                                ? []
                                : o || I.isPlainObject(r)
                                ? r
                                : {}),
                            (o = !1),
                            (l[e] = I.extend(h, c, n)))
                          : void 0 !== n && (l[e] = n));
              return l;
            }),
          I.extend({
            expando: "jQuery" + (j + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
              throw new Error(t);
            },
            noop: function () {},
            isPlainObject: function (t) {
              var e, r;
              return (
                !(!t || "[object Object]" !== y.call(t)) &&
                (!(e = l(t)) ||
                  ("function" ==
                    typeof (r = w.call(e, "constructor") && e.constructor) &&
                    x.call(r) === _))
              );
            },
            isEmptyObject: function (t) {
              var e;
              for (e in t) return !1;
              return !0;
            },
            globalEval: function (code, t, e) {
              O(code, { nonce: t && t.nonce }, e);
            },
            each: function (t, e) {
              var r,
                i = 0;
              if (L(t))
                for (r = t.length; i < r && !1 !== e.call(t[i], i, t[i]); i++);
              else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
              return t;
            },
            text: function (t) {
              var e,
                r = "",
                i = 0,
                n = t.nodeType;
              if (!n) for (; (e = t[i++]); ) r += I.text(e);
              return 1 === n || 11 === n
                ? t.textContent
                : 9 === n
                ? t.documentElement.textContent
                : 3 === n || 4 === n
                ? t.nodeValue
                : r;
            },
            makeArray: function (t, e) {
              var r = e || [];
              return (
                null != t &&
                  (L(Object(t))
                    ? I.merge(r, "string" == typeof t ? [t] : t)
                    : f.call(r, t)),
                r
              );
            },
            inArray: function (t, e, i) {
              return null == e ? -1 : m.call(e, t, i);
            },
            isXMLDoc: function (t) {
              var e = t && t.namespaceURI,
                r = t && (t.ownerDocument || t).documentElement;
              return !D.test(e || (r && r.nodeName) || "HTML");
            },
            merge: function (t, e) {
              for (var r = +e.length, n = 0, i = t.length; n < r; n++)
                t[i++] = e[n];
              return (t.length = i), t;
            },
            grep: function (t, e, r) {
              for (var n = [], i = 0, o = t.length, c = !r; i < o; i++)
                !e(t[i], i) !== c && n.push(t[i]);
              return n;
            },
            map: function (t, e, r) {
              var n,
                o,
                i = 0,
                c = [];
              if (L(t))
                for (n = t.length; i < n; i++)
                  null != (o = e(t[i], i, r)) && c.push(o);
              else for (i in t) null != (o = e(t[i], i, r)) && c.push(o);
              return h(c);
            },
            guid: 1,
            support: k,
          }),
          "function" == typeof Symbol &&
            (I.fn[Symbol.iterator] = c[Symbol.iterator]),
          I.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
              " "
            ),
            function (t, e) {
              v["[object " + e + "]"] = e.toLowerCase();
            }
          );
        var P = c.pop,
          z = c.sort,
          M = c.splice,
          N = "[\\x20\\t\\r\\n\\f]",
          H = new RegExp(
            "^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$",
            "g"
          );
        I.contains = function (a, b) {
          var t = b && b.parentNode;
          return (
            a === t ||
            !(
              !t ||
              1 !== t.nodeType ||
              !(a.contains
                ? a.contains(t)
                : a.compareDocumentPosition &&
                  16 & a.compareDocumentPosition(t))
            )
          );
        };
        var F = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        function R(t, e) {
          return e
            ? "\0" === t
              ? "�"
              : t.slice(0, -1) +
                "\\" +
                t.charCodeAt(t.length - 1).toString(16) +
                " "
            : "\\" + t;
        }
        I.escapeSelector = function (t) {
          return (t + "").replace(F, R);
        };
        var B = T,
          W = f;
        !(function () {
          var i,
            t,
            e,
            n,
            o,
            l,
            h,
            f,
            v,
            y,
            x = W,
            _ = I.expando,
            E = 0,
            C = 0,
            T = ct(),
            S = ct(),
            O = ct(),
            A = ct(),
            j = function (a, b) {
              return a === b && (o = !0), 0;
            },
            D =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L =
              "(?:\\\\[\\da-fA-F]{1,6}" +
              N +
              "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            F =
              "\\[" +
              N +
              "*(" +
              L +
              ")(?:" +
              N +
              "*([*^$|!~]?=)" +
              N +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              L +
              "))|)" +
              N +
              "*\\]",
            R =
              ":(" +
              L +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              F +
              ")*)|.*)\\)|)",
            U = new RegExp(N + "+", "g"),
            V = new RegExp("^" + N + "*," + N + "*"),
            Y = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
            Z = new RegExp(N + "|>"),
            X = new RegExp(R),
            Q = new RegExp("^" + L + "$"),
            G = {
              ID: new RegExp("^#(" + L + ")"),
              CLASS: new RegExp("^\\.(" + L + ")"),
              TAG: new RegExp("^(" + L + "|[*])"),
              ATTR: new RegExp("^" + F),
              PSEUDO: new RegExp("^" + R),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  N +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  N +
                  "*(?:([+-]|)" +
                  N +
                  "*(\\d+)|))" +
                  N +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + D + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  N +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  N +
                  "*((?:-\\d)?\\d*)" +
                  N +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            K = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            tt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            et = /[+~]/,
            nt = new RegExp(
              "\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            it = function (t, e) {
              var r = "0x" + t.slice(1) - 65536;
              return (
                e ||
                (r < 0
                  ? String.fromCharCode(r + 65536)
                  : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320))
              );
            },
            ot = function () {
              vt();
            },
            at = xt(
              function (t) {
                return !0 === t.disabled && $(t, "fieldset");
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            x.apply((c = d.call(B.childNodes)), B.childNodes),
              c[B.childNodes.length].nodeType;
          } catch (t) {
            x = {
              apply: function (t, e) {
                W.apply(t, d.call(e));
              },
              call: function (t) {
                W.apply(t, d.call(arguments, 1));
              },
            };
          }
          function st(t, e, r, n) {
            var o,
              i,
              c,
              d,
              h,
              m,
              y,
              w = e && e.ownerDocument,
              E = e ? e.nodeType : 9;
            if (
              ((r = r || []),
              "string" != typeof t || !t || (1 !== E && 9 !== E && 11 !== E))
            )
              return r;
            if (!n && (vt(e), (e = e || l), f)) {
              if (11 !== E && (h = tt.exec(t)))
                if ((o = h[1])) {
                  if (9 === E) {
                    if (!(c = e.getElementById(o))) return r;
                    if (c.id === o) return x.call(r, c), r;
                  } else if (
                    w &&
                    (c = w.getElementById(o)) &&
                    st.contains(e, c) &&
                    c.id === o
                  )
                    return x.call(r, c), r;
                } else {
                  if (h[2]) return x.apply(r, e.getElementsByTagName(t)), r;
                  if ((o = h[3]) && e.getElementsByClassName)
                    return x.apply(r, e.getElementsByClassName(o)), r;
                }
              if (!(A[t + " "] || (v && v.test(t)))) {
                if (((y = t), (w = e), 1 === E && (Z.test(t) || Y.test(t)))) {
                  for (
                    ((w = (et.test(t) && mt(e.parentNode)) || e) == e &&
                      k.scope) ||
                      ((d = e.getAttribute("id"))
                        ? (d = I.escapeSelector(d))
                        : e.setAttribute("id", (d = _))),
                      i = (m = wt(t)).length;
                    i--;

                  )
                    m[i] = (d ? "#" + d : ":scope") + " " + bt(m[i]);
                  y = m.join(",");
                }
                try {
                  return x.apply(r, w.querySelectorAll(y)), r;
                } catch (e) {
                  A(t, !0);
                } finally {
                  d === _ && e.removeAttribute("id");
                }
              }
            }
            return select(t.replace(H, "$1"), e, r, n);
          }
          function ct() {
            var e = [];
            return function r(n, o) {
              return (
                e.push(n + " ") > t.cacheLength && delete r[e.shift()],
                (r[n + " "] = o)
              );
            };
          }
          function lt(t) {
            return (t[_] = !0), t;
          }
          function ut(t) {
            var e = l.createElement("fieldset");
            try {
              return !!t(e);
            } catch (t) {
              return !1;
            } finally {
              e.parentNode && e.parentNode.removeChild(e), (e = null);
            }
          }
          function pt(t) {
            return function (e) {
              return $(e, "input") && e.type === t;
            };
          }
          function ht(t) {
            return function (e) {
              return ($(e, "input") || $(e, "button")) && e.type === t;
            };
          }
          function ft(t) {
            return function (e) {
              return "form" in e
                ? e.parentNode && !1 === e.disabled
                  ? "label" in e
                    ? "label" in e.parentNode
                      ? e.parentNode.disabled === t
                      : e.disabled === t
                    : e.isDisabled === t || (e.isDisabled !== !t && at(e) === t)
                  : e.disabled === t
                : "label" in e && e.disabled === t;
            };
          }
          function gt(t) {
            return lt(function (e) {
              return (
                (e = +e),
                lt(function (r, n) {
                  for (var o, c = t([], r.length, e), i = c.length; i--; )
                    r[(o = c[i])] && (r[o] = !(n[o] = r[o]));
                })
              );
            });
          }
          function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t;
          }
          function vt(e) {
            var r,
              c = e ? e.ownerDocument || e : B;
            return c != l && 9 === c.nodeType && c.documentElement
              ? ((h = (l = c).documentElement),
                (f = !I.isXMLDoc(l)),
                (y =
                  h.matches || h.webkitMatchesSelector || h.msMatchesSelector),
                h.msMatchesSelector &&
                  B != l &&
                  (r = l.defaultView) &&
                  r.top !== r &&
                  r.addEventListener("unload", ot),
                (k.getById = ut(function (t) {
                  return (
                    (h.appendChild(t).id = I.expando),
                    !l.getElementsByName ||
                      !l.getElementsByName(I.expando).length
                  );
                })),
                (k.disconnectedMatch = ut(function (t) {
                  return y.call(t, "*");
                })),
                (k.scope = ut(function () {
                  return l.querySelectorAll(":scope");
                })),
                (k.cssHas = ut(function () {
                  try {
                    return l.querySelector(":has(*,:jqfake)"), !1;
                  } catch (t) {
                    return !0;
                  }
                })),
                k.getById
                  ? ((t.filter.ID = function (t) {
                      var e = t.replace(nt, it);
                      return function (t) {
                        return t.getAttribute("id") === e;
                      };
                    }),
                    (t.find.ID = function (t, e) {
                      if (void 0 !== e.getElementById && f) {
                        var r = e.getElementById(t);
                        return r ? [r] : [];
                      }
                    }))
                  : ((t.filter.ID = function (t) {
                      var e = t.replace(nt, it);
                      return function (t) {
                        var r =
                          void 0 !== t.getAttributeNode &&
                          t.getAttributeNode("id");
                        return r && r.value === e;
                      };
                    }),
                    (t.find.ID = function (t, e) {
                      if (void 0 !== e.getElementById && f) {
                        var r,
                          i,
                          n,
                          o = e.getElementById(t);
                        if (o) {
                          if ((r = o.getAttributeNode("id")) && r.value === t)
                            return [o];
                          for (
                            n = e.getElementsByName(t), i = 0;
                            (o = n[i++]);

                          )
                            if ((r = o.getAttributeNode("id")) && r.value === t)
                              return [o];
                        }
                        return [];
                      }
                    })),
                (t.find.TAG = function (t, e) {
                  return void 0 !== e.getElementsByTagName
                    ? e.getElementsByTagName(t)
                    : e.querySelectorAll(t);
                }),
                (t.find.CLASS = function (t, e) {
                  if (void 0 !== e.getElementsByClassName && f)
                    return e.getElementsByClassName(t);
                }),
                (v = []),
                ut(function (t) {
                  var input;
                  (h.appendChild(t).innerHTML =
                    "<a id='" +
                    _ +
                    "' href='' disabled='disabled'></a><select id='" +
                    _ +
                    "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                    t.querySelectorAll("[selected]").length ||
                      v.push("\\[" + N + "*(?:value|" + D + ")"),
                    t.querySelectorAll("[id~=" + _ + "-]").length ||
                      v.push("~="),
                    t.querySelectorAll("a#" + _ + "+*").length ||
                      v.push(".#.+[+~]"),
                    t.querySelectorAll(":checked").length || v.push(":checked"),
                    (input = l.createElement("input")).setAttribute(
                      "type",
                      "hidden"
                    ),
                    t.appendChild(input).setAttribute("name", "D"),
                    (h.appendChild(t).disabled = !0),
                    2 !== t.querySelectorAll(":disabled").length &&
                      v.push(":enabled", ":disabled"),
                    (input = l.createElement("input")).setAttribute("name", ""),
                    t.appendChild(input),
                    t.querySelectorAll("[name='']").length ||
                      v.push(
                        "\\[" + N + "*name" + N + "*=" + N + "*(?:''|\"\")"
                      );
                }),
                k.cssHas || v.push(":has"),
                (v = v.length && new RegExp(v.join("|"))),
                (j = function (a, b) {
                  if (a === b) return (o = !0), 0;
                  var t =
                    !a.compareDocumentPosition - !b.compareDocumentPosition;
                  return (
                    t ||
                    (1 &
                      (t =
                        (a.ownerDocument || a) == (b.ownerDocument || b)
                          ? a.compareDocumentPosition(b)
                          : 1) ||
                    (!k.sortDetached && b.compareDocumentPosition(a) === t)
                      ? a === l || (a.ownerDocument == B && st.contains(B, a))
                        ? -1
                        : b === l || (b.ownerDocument == B && st.contains(B, b))
                        ? 1
                        : n
                        ? m.call(n, a) - m.call(n, b)
                        : 0
                      : 4 & t
                      ? -1
                      : 1)
                  );
                }),
                l)
              : l;
          }
          for (i in ((st.matches = function (t, e) {
            return st(t, null, null, e);
          }),
          (st.matchesSelector = function (t, e) {
            if ((vt(t), f && !A[e + " "] && (!v || !v.test(e))))
              try {
                var r = y.call(t, e);
                if (
                  r ||
                  k.disconnectedMatch ||
                  (t.document && 11 !== t.document.nodeType)
                )
                  return r;
              } catch (t) {
                A(e, !0);
              }
            return st(e, l, null, [t]).length > 0;
          }),
          (st.contains = function (t, e) {
            return (t.ownerDocument || t) != l && vt(t), I.contains(t, e);
          }),
          (st.attr = function (e, r) {
            (e.ownerDocument || e) != l && vt(e);
            var n = t.attrHandle[r.toLowerCase()],
              o =
                n && w.call(t.attrHandle, r.toLowerCase())
                  ? n(e, r, !f)
                  : void 0;
            return void 0 !== o ? o : e.getAttribute(r);
          }),
          (st.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t);
          }),
          (I.uniqueSort = function (t) {
            var e,
              r = [],
              c = 0,
              i = 0;
            if (
              ((o = !k.sortStable),
              (n = !k.sortStable && d.call(t, 0)),
              z.call(t, j),
              o)
            ) {
              for (; (e = t[i++]); ) e === t[i] && (c = r.push(i));
              for (; c--; ) M.call(t, r[c], 1);
            }
            return (n = null), t;
          }),
          (I.fn.uniqueSort = function () {
            return this.pushStack(I.uniqueSort(d.apply(this)));
          }),
          (t = I.expr =
            {
              cacheLength: 50,
              createPseudo: lt,
              match: G,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (t) {
                  return (
                    (t[1] = t[1].replace(nt, it)),
                    (t[3] = (t[3] || t[4] || t[5] || "").replace(nt, it)),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                  );
                },
                CHILD: function (t) {
                  return (
                    (t[1] = t[1].toLowerCase()),
                    "nth" === t[1].slice(0, 3)
                      ? (t[3] || st.error(t[0]),
                        (t[4] = +(t[4]
                          ? t[5] + (t[6] || 1)
                          : 2 * ("even" === t[3] || "odd" === t[3]))),
                        (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                      : t[3] && st.error(t[0]),
                    t
                  );
                },
                PSEUDO: function (t) {
                  var e,
                    r = !t[6] && t[2];
                  return G.CHILD.test(t[0])
                    ? null
                    : (t[3]
                        ? (t[2] = t[4] || t[5] || "")
                        : r &&
                          X.test(r) &&
                          (e = wt(r, !0)) &&
                          (e = r.indexOf(")", r.length - e) - r.length) &&
                          ((t[0] = t[0].slice(0, e)), (t[2] = r.slice(0, e))),
                      t.slice(0, 3));
                },
              },
              filter: {
                TAG: function (t) {
                  var e = t.replace(nt, it).toLowerCase();
                  return "*" === t
                    ? function () {
                        return !0;
                      }
                    : function (t) {
                        return $(t, e);
                      };
                },
                CLASS: function (t) {
                  var pattern = T[t + " "];
                  return (
                    pattern ||
                    ((pattern = new RegExp(
                      "(^|" + N + ")" + t + "(" + N + "|$)"
                    )) &&
                      T(t, function (t) {
                        return pattern.test(
                          ("string" == typeof t.className && t.className) ||
                            (void 0 !== t.getAttribute &&
                              t.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (t, e, r) {
                  return function (n) {
                    var o = st.attr(n, t);
                    return null == o
                      ? "!=" === e
                      : !e ||
                          ((o += ""),
                          "=" === e
                            ? o === r
                            : "!=" === e
                            ? o !== r
                            : "^=" === e
                            ? r && 0 === o.indexOf(r)
                            : "*=" === e
                            ? r && o.indexOf(r) > -1
                            : "$=" === e
                            ? r && o.slice(-r.length) === r
                            : "~=" === e
                            ? (" " + o.replace(U, " ") + " ").indexOf(r) > -1
                            : "|=" === e &&
                              (o === r ||
                                o.slice(0, r.length + 1) === r + "-"));
                  };
                },
                CHILD: function (t, e, r, n, o) {
                  var c = "nth" !== t.slice(0, 3),
                    l = "last" !== t.slice(-4),
                    d = "of-type" === e;
                  return 1 === n && 0 === o
                    ? function (t) {
                        return !!t.parentNode;
                      }
                    : function (e, r, h) {
                        var f,
                          m,
                          v,
                          y,
                          w,
                          x = c !== l ? "nextSibling" : "previousSibling",
                          k = e.parentNode,
                          C = d && e.nodeName.toLowerCase(),
                          T = !h && !d,
                          S = !1;
                        if (k) {
                          if (c) {
                            for (; x; ) {
                              for (v = e; (v = v[x]); )
                                if (d ? $(v, C) : 1 === v.nodeType) return !1;
                              w = x = "only" === t && !w && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((w = [l ? k.firstChild : k.lastChild]), l && T)
                          ) {
                            for (
                              S =
                                (y =
                                  (f =
                                    (m = k[_] || (k[_] = {}))[t] || [])[0] ===
                                    E && f[1]) && f[2],
                                v = y && k.childNodes[y];
                              (v =
                                (++y && v && v[x]) || (S = y = 0) || w.pop());

                            )
                              if (1 === v.nodeType && ++S && v === e) {
                                m[t] = [E, y, S];
                                break;
                              }
                          } else if (
                            (T &&
                              (S = y =
                                (f = (m = e[_] || (e[_] = {}))[t] || [])[0] ===
                                  E && f[1]),
                            !1 === S)
                          )
                            for (
                              ;
                              (v =
                                (++y && v && v[x]) || (S = y = 0) || w.pop()) &&
                              (!(d ? $(v, C) : 1 === v.nodeType) ||
                                !++S ||
                                (T && ((m = v[_] || (v[_] = {}))[t] = [E, S]),
                                v !== e));

                            );
                          return (S -= o) === n || (S % n == 0 && S / n >= 0);
                        }
                      };
                },
                PSEUDO: function (e, r) {
                  var n,
                    o =
                      t.pseudos[e] ||
                      t.setFilters[e.toLowerCase()] ||
                      st.error("unsupported pseudo: " + e);
                  return o[_]
                    ? o(r)
                    : o.length > 1
                    ? ((n = [e, e, "", r]),
                      t.setFilters.hasOwnProperty(e.toLowerCase())
                        ? lt(function (t, e) {
                            for (var n, c = o(t, r), i = c.length; i--; )
                              t[(n = m.call(t, c[i]))] = !(e[n] = c[i]);
                          })
                        : function (t) {
                            return o(t, 0, n);
                          })
                    : o;
                },
              },
              pseudos: {
                not: lt(function (t) {
                  var input = [],
                    e = [],
                    r = Tt(t.replace(H, "$1"));
                  return r[_]
                    ? lt(function (t, e, n, o) {
                        for (var c, l = r(t, null, o, []), i = t.length; i--; )
                          (c = l[i]) && (t[i] = !(e[i] = c));
                      })
                    : function (t, n, o) {
                        return (
                          (input[0] = t),
                          r(input, null, o, e),
                          (input[0] = null),
                          !e.pop()
                        );
                      };
                }),
                has: lt(function (t) {
                  return function (e) {
                    return st(t, e).length > 0;
                  };
                }),
                contains: lt(function (text) {
                  return (
                    (text = text.replace(nt, it)),
                    function (t) {
                      return (t.textContent || I.text(t)).indexOf(text) > -1;
                    }
                  );
                }),
                lang: lt(function (t) {
                  return (
                    Q.test(t || "") || st.error("unsupported lang: " + t),
                    (t = t.replace(nt, it).toLowerCase()),
                    function (e) {
                      var r;
                      do {
                        if (
                          (r = f
                            ? e.lang
                            : e.getAttribute("xml:lang") ||
                              e.getAttribute("lang"))
                        )
                          return (
                            (r = r.toLowerCase()) === t ||
                            0 === r.indexOf(t + "-")
                          );
                      } while ((e = e.parentNode) && 1 === e.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var e = r.location && r.location.hash;
                  return e && e.slice(1) === t.id;
                },
                root: function (t) {
                  return t === h;
                },
                focus: function (t) {
                  return (
                    t ===
                      (function () {
                        try {
                          return l.activeElement;
                        } catch (t) {}
                      })() &&
                    l.hasFocus() &&
                    !!(t.type || t.href || ~t.tabIndex)
                  );
                },
                enabled: ft(!1),
                disabled: ft(!0),
                checked: function (t) {
                  return (
                    ($(t, "input") && !!t.checked) ||
                    ($(t, "option") && !!t.selected)
                  );
                },
                selected: function (t) {
                  return (
                    t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                  );
                },
                empty: function (t) {
                  for (t = t.firstChild; t; t = t.nextSibling)
                    if (t.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !t.pseudos.empty(e);
                },
                header: function (t) {
                  return J.test(t.nodeName);
                },
                input: function (t) {
                  return K.test(t.nodeName);
                },
                button: function (t) {
                  return (
                    ($(t, "input") && "button" === t.type) || $(t, "button")
                  );
                },
                text: function (t) {
                  var e;
                  return (
                    $(t, "input") &&
                    "text" === t.type &&
                    (null == (e = t.getAttribute("type")) ||
                      "text" === e.toLowerCase())
                  );
                },
                first: gt(function () {
                  return [0];
                }),
                last: gt(function (t, e) {
                  return [e - 1];
                }),
                eq: gt(function (t, e, r) {
                  return [r < 0 ? r + e : r];
                }),
                even: gt(function (t, e) {
                  for (var i = 0; i < e; i += 2) t.push(i);
                  return t;
                }),
                odd: gt(function (t, e) {
                  for (var i = 1; i < e; i += 2) t.push(i);
                  return t;
                }),
                lt: gt(function (t, e, r) {
                  var i;
                  for (i = r < 0 ? r + e : r > e ? e : r; --i >= 0; ) t.push(i);
                  return t;
                }),
                gt: gt(function (t, e, r) {
                  for (var i = r < 0 ? r + e : r; ++i < e; ) t.push(i);
                  return t;
                }),
              },
            }),
          (t.pseudos.nth = t.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            t.pseudos[i] = pt(i);
          for (i in { submit: !0, reset: !0 }) t.pseudos[i] = ht(i);
          function yt() {}
          function wt(e, r) {
            var n,
              o,
              c,
              l,
              d,
              h,
              f,
              m = S[e + " "];
            if (m) return r ? 0 : m.slice(0);
            for (d = e, h = [], f = t.preFilter; d; ) {
              for (l in ((n && !(o = V.exec(d))) ||
                (o && (d = d.slice(o[0].length) || d), h.push((c = []))),
              (n = !1),
              (o = Y.exec(d)) &&
                ((n = o.shift()),
                c.push({ value: n, type: o[0].replace(H, " ") }),
                (d = d.slice(n.length))),
              t.filter))
                !(o = G[l].exec(d)) ||
                  (f[l] && !(o = f[l](o))) ||
                  ((n = o.shift()),
                  c.push({ value: n, type: l, matches: o }),
                  (d = d.slice(n.length)));
              if (!n) break;
            }
            return r ? d.length : d ? st.error(e) : S(e, h).slice(0);
          }
          function bt(t) {
            for (var i = 0, e = t.length, r = ""; i < e; i++) r += t[i].value;
            return r;
          }
          function xt(t, e, base) {
            var r = e.dir,
              n = e.next,
              o = n || r,
              c = base && "parentNode" === o,
              l = C++;
            return e.first
              ? function (e, n, o) {
                  for (; (e = e[r]); )
                    if (1 === e.nodeType || c) return t(e, n, o);
                  return !1;
                }
              : function (e, d, h) {
                  var f,
                    m,
                    v = [E, l];
                  if (h) {
                    for (; (e = e[r]); )
                      if ((1 === e.nodeType || c) && t(e, d, h)) return !0;
                  } else
                    for (; (e = e[r]); )
                      if (1 === e.nodeType || c)
                        if (((m = e[_] || (e[_] = {})), n && $(e, n)))
                          e = e[r] || e;
                        else {
                          if ((f = m[o]) && f[0] === E && f[1] === l)
                            return (v[2] = f[2]);
                          if (((m[o] = v), (v[2] = t(e, d, h)))) return !0;
                        }
                  return !1;
                };
          }
          function _t(t) {
            return t.length > 1
              ? function (e, r, n) {
                  for (var i = t.length; i--; ) if (!t[i](e, r, n)) return !1;
                  return !0;
                }
              : t[0];
          }
          function kt(t, map, filter, e, r) {
            for (
              var n, o = [], i = 0, c = t.length, l = null != map;
              i < c;
              i++
            )
              (n = t[i]) &&
                ((filter && !filter(n, e, r)) || (o.push(n), l && map.push(i)));
            return o;
          }
          function Et(t, e, r, n, o, c) {
            return (
              n && !n[_] && (n = Et(n)),
              o && !o[_] && (o = Et(o, c)),
              lt(function (c, l, d, h) {
                var f,
                  i,
                  v,
                  y,
                  w = [],
                  _ = [],
                  k = l.length,
                  E =
                    c ||
                    (function (t, e, r) {
                      for (var i = 0, n = e.length; i < n; i++) st(t, e[i], r);
                      return r;
                    })(e || "*", d.nodeType ? [d] : d, []),
                  C = !t || (!c && e) ? E : kt(E, w, t, d, h);
                if (
                  (r
                    ? r(C, (y = o || (c ? t : k || n) ? [] : l), d, h)
                    : (y = C),
                  n)
                )
                  for (f = kt(y, _), n(f, [], d, h), i = f.length; i--; )
                    (v = f[i]) && (y[_[i]] = !(C[_[i]] = v));
                if (c) {
                  if (o || t) {
                    if (o) {
                      for (f = [], i = y.length; i--; )
                        (v = y[i]) && f.push((C[i] = v));
                      o(null, (y = []), f, h);
                    }
                    for (i = y.length; i--; )
                      (v = y[i]) &&
                        (f = o ? m.call(c, v) : w[i]) > -1 &&
                        (c[f] = !(l[f] = v));
                  }
                } else (y = kt(y === l ? y.splice(k, y.length) : y)), o ? o(null, l, y, h) : x.apply(l, y);
              })
            );
          }
          function Ct(r) {
            for (
              var n,
                o,
                c,
                l = r.length,
                d = t.relative[r[0].type],
                h = d || t.relative[" "],
                i = d ? 1 : 0,
                f = xt(
                  function (t) {
                    return t === n;
                  },
                  h,
                  !0
                ),
                v = xt(
                  function (t) {
                    return m.call(n, t) > -1;
                  },
                  h,
                  !0
                ),
                y = [
                  function (t, r, o) {
                    var c =
                      (!d && (o || r != e)) ||
                      ((n = r).nodeType ? f(t, r, o) : v(t, r, o));
                    return (n = null), c;
                  },
                ];
              i < l;
              i++
            )
              if ((o = t.relative[r[i].type])) y = [xt(_t(y), o)];
              else {
                if ((o = t.filter[r[i].type].apply(null, r[i].matches))[_]) {
                  for (c = ++i; c < l && !t.relative[r[c].type]; c++);
                  return Et(
                    i > 1 && _t(y),
                    i > 1 &&
                      bt(
                        r
                          .slice(0, i - 1)
                          .concat({ value: " " === r[i - 2].type ? "*" : "" })
                      ).replace(H, "$1"),
                    o,
                    i < c && Ct(r.slice(i, c)),
                    c < l && Ct((r = r.slice(c))),
                    c < l && bt(r)
                  );
                }
                y.push(o);
              }
            return _t(y);
          }
          function Tt(r, n) {
            var i,
              o = [],
              c = [],
              d = O[r + " "];
            if (!d) {
              for (n || (n = wt(r)), i = n.length; i--; )
                (d = Ct(n[i]))[_] ? o.push(d) : c.push(d);
              (d = O(
                r,
                (function (r, n) {
                  var o = n.length > 0,
                    c = r.length > 0,
                    d = function (d, h, m, v, y) {
                      var w,
                        _,
                        k,
                        C = 0,
                        i = "0",
                        T = d && [],
                        S = [],
                        O = e,
                        A = d || (c && t.find.TAG("*", y)),
                        j = (E += null == O ? 1 : Math.random() || 0.1),
                        D = A.length;
                      for (
                        y && (e = h == l || h || y);
                        i !== D && null != (w = A[i]);
                        i++
                      ) {
                        if (c && w) {
                          for (
                            _ = 0,
                              h || w.ownerDocument == l || (vt(w), (m = !f));
                            (k = r[_++]);

                          )
                            if (k(w, h || l, m)) {
                              x.call(v, w);
                              break;
                            }
                          y && (E = j);
                        }
                        o && ((w = !k && w) && C--, d && T.push(w));
                      }
                      if (((C += i), o && i !== C)) {
                        for (_ = 0; (k = n[_++]); ) k(T, S, h, m);
                        if (d) {
                          if (C > 0)
                            for (; i--; ) T[i] || S[i] || (S[i] = P.call(v));
                          S = kt(S);
                        }
                        x.apply(v, S),
                          y &&
                            !d &&
                            S.length > 0 &&
                            C + n.length > 1 &&
                            I.uniqueSort(v);
                      }
                      return y && ((E = j), (e = O)), T;
                    };
                  return o ? lt(d) : d;
                })(c, o)
              )),
                (d.selector = r);
            }
            return d;
          }
          function select(e, r, n, o) {
            var i,
              c,
              l,
              d,
              h,
              m = "function" == typeof e && e,
              v = !o && wt((e = m.selector || e));
            if (((n = n || []), 1 === v.length)) {
              if (
                (c = v[0] = v[0].slice(0)).length > 2 &&
                "ID" === (l = c[0]).type &&
                9 === r.nodeType &&
                f &&
                t.relative[c[1].type]
              ) {
                if (
                  !(r = (t.find.ID(l.matches[0].replace(nt, it), r) || [])[0])
                )
                  return n;
                m && (r = r.parentNode), (e = e.slice(c.shift().value.length));
              }
              for (
                i = G.needsContext.test(e) ? 0 : c.length;
                i-- && ((l = c[i]), !t.relative[(d = l.type)]);

              )
                if (
                  (h = t.find[d]) &&
                  (o = h(
                    l.matches[0].replace(nt, it),
                    (et.test(c[0].type) && mt(r.parentNode)) || r
                  ))
                ) {
                  if ((c.splice(i, 1), !(e = o.length && bt(c))))
                    return x.apply(n, o), n;
                  break;
                }
            }
            return (
              (m || Tt(e, v))(
                o,
                r,
                !f,
                n,
                !r || (et.test(e) && mt(r.parentNode)) || r
              ),
              n
            );
          }
          (yt.prototype = t.filters = t.pseudos),
            (t.setFilters = new yt()),
            (k.sortStable = _.split("").sort(j).join("") === _),
            vt(),
            (k.sortDetached = ut(function (t) {
              return 1 & t.compareDocumentPosition(l.createElement("fieldset"));
            })),
            (I.find = st),
            (I.expr[":"] = I.expr.pseudos),
            (I.unique = I.uniqueSort),
            (st.compile = Tt),
            (st.select = select),
            (st.setDocument = vt),
            (st.tokenize = wt),
            (st.escape = I.escapeSelector),
            (st.getText = I.text),
            (st.isXML = I.isXMLDoc),
            (st.selectors = I.expr),
            (st.support = I.support),
            (st.uniqueSort = I.uniqueSort);
        })();
        var U = function (t, e, r) {
            for (var n = [], o = void 0 !== r; (t = t[e]) && 9 !== t.nodeType; )
              if (1 === t.nodeType) {
                if (o && I(t).is(r)) break;
                n.push(t);
              }
            return n;
          },
          V = function (t, e) {
            for (var r = []; t; t = t.nextSibling)
              1 === t.nodeType && t !== e && r.push(t);
            return r;
          },
          Y = I.expr.match.needsContext,
          Z = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function X(t, e, r) {
          return E(e)
            ? I.grep(t, function (t, i) {
                return !!e.call(t, i, t) !== r;
              })
            : e.nodeType
            ? I.grep(t, function (t) {
                return (t === e) !== r;
              })
            : "string" != typeof e
            ? I.grep(t, function (t) {
                return m.call(e, t) > -1 !== r;
              })
            : I.filter(e, t, r);
        }
        (I.filter = function (t, e, r) {
          var n = e[0];
          return (
            r && (t = ":not(" + t + ")"),
            1 === e.length && 1 === n.nodeType
              ? I.find.matchesSelector(n, t)
                ? [n]
                : []
              : I.find.matches(
                  t,
                  I.grep(e, function (t) {
                    return 1 === t.nodeType;
                  })
                )
          );
        }),
          I.fn.extend({
            find: function (t) {
              var i,
                e,
                r = this.length,
                n = this;
              if ("string" != typeof t)
                return this.pushStack(
                  I(t).filter(function () {
                    for (i = 0; i < r; i++)
                      if (I.contains(n[i], this)) return !0;
                  })
                );
              for (e = this.pushStack([]), i = 0; i < r; i++)
                I.find(t, n[i], e);
              return r > 1 ? I.uniqueSort(e) : e;
            },
            filter: function (t) {
              return this.pushStack(X(this, t || [], !1));
            },
            not: function (t) {
              return this.pushStack(X(this, t || [], !0));
            },
            is: function (t) {
              return !!X(
                this,
                "string" == typeof t && Y.test(t) ? I(t) : t || [],
                !1
              ).length;
            },
          });
        var Q,
          G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((I.fn.init = function (t, e, r) {
          var n, o;
          if (!t) return this;
          if (((r = r || Q), "string" == typeof t)) {
            if (
              !(n =
                "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
                  ? [null, t, null]
                  : G.exec(t)) ||
              (!n[1] && e)
            )
              return !e || e.jquery
                ? (e || r).find(t)
                : this.constructor(e).find(t);
            if (n[1]) {
              if (
                ((e = e instanceof I ? e[0] : e),
                I.merge(
                  this,
                  I.parseHTML(
                    n[1],
                    e && e.nodeType ? e.ownerDocument || e : T,
                    !0
                  )
                ),
                Z.test(n[1]) && I.isPlainObject(e))
              )
                for (n in e) E(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
              return this;
            }
            return (
              (o = T.getElementById(n[2])) &&
                ((this[0] = o), (this.length = 1)),
              this
            );
          }
          return t.nodeType
            ? ((this[0] = t), (this.length = 1), this)
            : E(t)
            ? void 0 !== r.ready
              ? r.ready(t)
              : t(I)
            : I.makeArray(t, this);
        }).prototype = I.fn),
          (Q = I(T));
        var K = /^(?:parents|prev(?:Until|All))/,
          J = { children: !0, contents: !0, next: !0, prev: !0 };
        function tt(t, e) {
          for (; (t = t[e]) && 1 !== t.nodeType; );
          return t;
        }
        I.fn.extend({
          has: function (t) {
            var e = I(t, this),
              r = e.length;
            return this.filter(function () {
              for (var i = 0; i < r; i++) if (I.contains(this, e[i])) return !0;
            });
          },
          closest: function (t, e) {
            var r,
              i = 0,
              n = this.length,
              o = [],
              c = "string" != typeof t && I(t);
            if (!Y.test(t))
              for (; i < n; i++)
                for (r = this[i]; r && r !== e; r = r.parentNode)
                  if (
                    r.nodeType < 11 &&
                    (c
                      ? c.index(r) > -1
                      : 1 === r.nodeType && I.find.matchesSelector(r, t))
                  ) {
                    o.push(r);
                    break;
                  }
            return this.pushStack(o.length > 1 ? I.uniqueSort(o) : o);
          },
          index: function (t) {
            return t
              ? "string" == typeof t
                ? m.call(I(t), this[0])
                : m.call(this, t.jquery ? t[0] : t)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
          },
          add: function (t, e) {
            return this.pushStack(I.uniqueSort(I.merge(this.get(), I(t, e))));
          },
          addBack: function (t) {
            return this.add(
              null == t ? this.prevObject : this.prevObject.filter(t)
            );
          },
        }),
          I.each(
            {
              parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null;
              },
              parents: function (t) {
                return U(t, "parentNode");
              },
              parentsUntil: function (t, e, r) {
                return U(t, "parentNode", r);
              },
              next: function (t) {
                return tt(t, "nextSibling");
              },
              prev: function (t) {
                return tt(t, "previousSibling");
              },
              nextAll: function (t) {
                return U(t, "nextSibling");
              },
              prevAll: function (t) {
                return U(t, "previousSibling");
              },
              nextUntil: function (t, e, r) {
                return U(t, "nextSibling", r);
              },
              prevUntil: function (t, e, r) {
                return U(t, "previousSibling", r);
              },
              siblings: function (t) {
                return V((t.parentNode || {}).firstChild, t);
              },
              children: function (t) {
                return V(t.firstChild);
              },
              contents: function (t) {
                return null != t.contentDocument && l(t.contentDocument)
                  ? t.contentDocument
                  : ($(t, "template") && (t = t.content || t),
                    I.merge([], t.childNodes));
              },
            },
            function (t, e) {
              I.fn[t] = function (r, n) {
                var o = I.map(this, e, r);
                return (
                  "Until" !== t.slice(-5) && (n = r),
                  n && "string" == typeof n && (o = I.filter(n, o)),
                  this.length > 1 &&
                    (J[t] || I.uniqueSort(o), K.test(t) && o.reverse()),
                  this.pushStack(o)
                );
              };
            }
          );
        var et = /[^\x20\t\r\n\f]+/g;
        function nt(t) {
          return t;
        }
        function it(t) {
          throw t;
        }
        function ot(t, e, r, n) {
          var o;
          try {
            t && E((o = t.promise))
              ? o.call(t).done(e).fail(r)
              : t && E((o = t.then))
              ? o.call(t, e, r)
              : e.apply(void 0, [t].slice(n));
          } catch (t) {
            r.apply(void 0, [t]);
          }
        }
        (I.Callbacks = function (t) {
          t =
            "string" == typeof t
              ? (function (t) {
                  var object = {};
                  return (
                    I.each(t.match(et) || [], function (t, e) {
                      object[e] = !0;
                    }),
                    object
                  );
                })(t)
              : I.extend({}, t);
          var e,
            r,
            n,
            o,
            c = [],
            l = [],
            d = -1,
            h = function () {
              for (o = o || t.once, n = e = !0; l.length; d = -1)
                for (r = l.shift(); ++d < c.length; )
                  !1 === c[d].apply(r[0], r[1]) &&
                    t.stopOnFalse &&
                    ((d = c.length), (r = !1));
              t.memory || (r = !1), (e = !1), o && (c = r ? [] : "");
            },
            f = {
              add: function () {
                return (
                  c &&
                    (r && !e && ((d = c.length - 1), l.push(r)),
                    (function e(r) {
                      I.each(r, function (r, n) {
                        E(n)
                          ? (t.unique && f.has(n)) || c.push(n)
                          : n && n.length && "string" !== A(n) && e(n);
                      });
                    })(arguments),
                    r && !e && h()),
                  this
                );
              },
              remove: function () {
                return (
                  I.each(arguments, function (t, e) {
                    for (var r; (r = I.inArray(e, c, r)) > -1; )
                      c.splice(r, 1), r <= d && d--;
                  }),
                  this
                );
              },
              has: function (t) {
                return t ? I.inArray(t, c) > -1 : c.length > 0;
              },
              empty: function () {
                return c && (c = []), this;
              },
              disable: function () {
                return (o = l = []), (c = r = ""), this;
              },
              disabled: function () {
                return !c;
              },
              lock: function () {
                return (o = l = []), r || e || (c = r = ""), this;
              },
              locked: function () {
                return !!o;
              },
              fireWith: function (t, r) {
                return (
                  o ||
                    ((r = [t, (r = r || []).slice ? r.slice() : r]),
                    l.push(r),
                    e || h()),
                  this
                );
              },
              fire: function () {
                return f.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!n;
              },
            };
          return f;
        }),
          I.extend({
            Deferred: function (t) {
              var e = [
                  [
                    "notify",
                    "progress",
                    I.Callbacks("memory"),
                    I.Callbacks("memory"),
                    2,
                  ],
                  [
                    "resolve",
                    "done",
                    I.Callbacks("once memory"),
                    I.Callbacks("once memory"),
                    0,
                    "resolved",
                  ],
                  [
                    "reject",
                    "fail",
                    I.Callbacks("once memory"),
                    I.Callbacks("once memory"),
                    1,
                    "rejected",
                  ],
                ],
                n = "pending",
                o = {
                  state: function () {
                    return n;
                  },
                  always: function () {
                    return c.done(arguments).fail(arguments), this;
                  },
                  catch: function (t) {
                    return o.then(null, t);
                  },
                  pipe: function () {
                    var t = arguments;
                    return I.Deferred(function (r) {
                      I.each(e, function (e, n) {
                        var o = E(t[n[4]]) && t[n[4]];
                        c[n[1]](function () {
                          var t = o && o.apply(this, arguments);
                          t && E(t.promise)
                            ? t
                                .promise()
                                .progress(r.notify)
                                .done(r.resolve)
                                .fail(r.reject)
                            : r[n[0] + "With"](this, o ? [t] : arguments);
                        });
                      }),
                        (t = null);
                    }).promise();
                  },
                  then: function (t, n, o) {
                    var c = 0;
                    function l(t, e, n, o) {
                      return function () {
                        var d = this,
                          h = arguments,
                          f = function () {
                            var r, f;
                            if (!(t < c)) {
                              if ((r = n.apply(d, h)) === e.promise())
                                throw new TypeError("Thenable self-resolution");
                              (f =
                                r &&
                                ("object" == typeof r ||
                                  "function" == typeof r) &&
                                r.then),
                                E(f)
                                  ? o
                                    ? f.call(r, l(c, e, nt, o), l(c, e, it, o))
                                    : (c++,
                                      f.call(
                                        r,
                                        l(c, e, nt, o),
                                        l(c, e, it, o),
                                        l(c, e, nt, e.notifyWith)
                                      ))
                                  : (n !== nt && ((d = void 0), (h = [r])),
                                    (o || e.resolveWith)(d, h));
                            }
                          },
                          m = o
                            ? f
                            : function () {
                                try {
                                  f();
                                } catch (r) {
                                  I.Deferred.exceptionHook &&
                                    I.Deferred.exceptionHook(r, m.error),
                                    t + 1 >= c &&
                                      (n !== it && ((d = void 0), (h = [r])),
                                      e.rejectWith(d, h));
                                }
                              };
                        t
                          ? m()
                          : (I.Deferred.getErrorHook
                              ? (m.error = I.Deferred.getErrorHook())
                              : I.Deferred.getStackHook &&
                                (m.error = I.Deferred.getStackHook()),
                            r.setTimeout(m));
                      };
                    }
                    return I.Deferred(function (r) {
                      e[0][3].add(l(0, r, E(o) ? o : nt, r.notifyWith)),
                        e[1][3].add(l(0, r, E(t) ? t : nt)),
                        e[2][3].add(l(0, r, E(n) ? n : it));
                    }).promise();
                  },
                  promise: function (t) {
                    return null != t ? I.extend(t, o) : o;
                  },
                },
                c = {};
              return (
                I.each(e, function (i, t) {
                  var r = t[2],
                    l = t[5];
                  (o[t[1]] = r.add),
                    l &&
                      r.add(
                        function () {
                          n = l;
                        },
                        e[3 - i][2].disable,
                        e[3 - i][3].disable,
                        e[0][2].lock,
                        e[0][3].lock
                      ),
                    r.add(t[3].fire),
                    (c[t[0]] = function () {
                      return (
                        c[t[0] + "With"](this === c ? void 0 : this, arguments),
                        this
                      );
                    }),
                    (c[t[0] + "With"] = r.fireWith);
                }),
                o.promise(c),
                t && t.call(c, c),
                c
              );
            },
            when: function (t) {
              var e = arguments.length,
                i = e,
                r = Array(i),
                n = d.call(arguments),
                o = I.Deferred(),
                c = function (i) {
                  return function (t) {
                    (r[i] = this),
                      (n[i] = arguments.length > 1 ? d.call(arguments) : t),
                      --e || o.resolveWith(r, n);
                  };
                };
              if (
                e <= 1 &&
                (ot(t, o.done(c(i)).resolve, o.reject, !e),
                "pending" === o.state() || E(n[i] && n[i].then))
              )
                return o.then();
              for (; i--; ) ot(n[i], c(i), o.reject);
              return o.promise();
            },
          });
        var at = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (I.Deferred.exceptionHook = function (t, e) {
          r.console &&
            r.console.warn &&
            t &&
            at.test(t.name) &&
            r.console.warn(
              "jQuery.Deferred exception: " + t.message,
              t.stack,
              e
            );
        }),
          (I.readyException = function (t) {
            r.setTimeout(function () {
              throw t;
            });
          });
        var st = I.Deferred();
        function ct() {
          T.removeEventListener("DOMContentLoaded", ct),
            r.removeEventListener("load", ct),
            I.ready();
        }
        (I.fn.ready = function (t) {
          return (
            st.then(t).catch(function (t) {
              I.readyException(t);
            }),
            this
          );
        }),
          I.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (t) {
              (!0 === t ? --I.readyWait : I.isReady) ||
                ((I.isReady = !0),
                (!0 !== t && --I.readyWait > 0) || st.resolveWith(T, [I]));
            },
          }),
          (I.ready.then = st.then),
          "complete" === T.readyState ||
          ("loading" !== T.readyState && !T.documentElement.doScroll)
            ? r.setTimeout(I.ready)
            : (T.addEventListener("DOMContentLoaded", ct),
              r.addEventListener("load", ct));
        var lt = function (t, e, r, n, o, c, l) {
            var i = 0,
              d = t.length,
              h = null == r;
            if ("object" === A(r))
              for (i in ((o = !0), r)) lt(t, e, i, r[i], !0, c, l);
            else if (
              void 0 !== n &&
              ((o = !0),
              E(n) || (l = !0),
              h &&
                (l
                  ? (e.call(t, n), (e = null))
                  : ((h = e),
                    (e = function (t, e, r) {
                      return h.call(I(t), r);
                    }))),
              e)
            )
              for (; i < d; i++)
                e(t[i], r, l ? n : n.call(t[i], i, e(t[i], r)));
            return o ? t : h ? e.call(t) : d ? e(t[0], r) : c;
          },
          ut = /^-ms-/,
          pt = /-([a-z])/g;
        function ht(t, e) {
          return e.toUpperCase();
        }
        function ft(t) {
          return t.replace(ut, "ms-").replace(pt, ht);
        }
        var gt = function (t) {
          return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
        };
        function mt() {
          this.expando = I.expando + mt.uid++;
        }
        (mt.uid = 1),
          (mt.prototype = {
            cache: function (t) {
              var e = t[this.expando];
              return (
                e ||
                  ((e = {}),
                  gt(t) &&
                    (t.nodeType
                      ? (t[this.expando] = e)
                      : Object.defineProperty(t, this.expando, {
                          value: e,
                          configurable: !0,
                        }))),
                e
              );
            },
            set: function (t, data, e) {
              var r,
                n = this.cache(t);
              if ("string" == typeof data) n[ft(data)] = e;
              else for (r in data) n[ft(r)] = data[r];
              return n;
            },
            get: function (t, e) {
              return void 0 === e
                ? this.cache(t)
                : t[this.expando] && t[this.expando][ft(e)];
            },
            access: function (t, e, r) {
              return void 0 === e || (e && "string" == typeof e && void 0 === r)
                ? this.get(t, e)
                : (this.set(t, e, r), void 0 !== r ? r : e);
            },
            remove: function (t, e) {
              var i,
                r = t[this.expando];
              if (void 0 !== r) {
                if (void 0 !== e) {
                  i = (e = Array.isArray(e)
                    ? e.map(ft)
                    : (e = ft(e)) in r
                    ? [e]
                    : e.match(et) || []).length;
                  for (; i--; ) delete r[e[i]];
                }
                (void 0 === e || I.isEmptyObject(r)) &&
                  (t.nodeType
                    ? (t[this.expando] = void 0)
                    : delete t[this.expando]);
              }
            },
            hasData: function (t) {
              var e = t[this.expando];
              return void 0 !== e && !I.isEmptyObject(e);
            },
          });
        var vt = new mt(),
          yt = new mt(),
          wt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          bt = /[A-Z]/g;
        function xt(t, e, data) {
          var r;
          if (void 0 === data && 1 === t.nodeType)
            if (
              ((r = "data-" + e.replace(bt, "-$&").toLowerCase()),
              "string" == typeof (data = t.getAttribute(r)))
            ) {
              try {
                data = (function (data) {
                  return (
                    "true" === data ||
                    ("false" !== data &&
                      ("null" === data
                        ? null
                        : data === +data + ""
                        ? +data
                        : wt.test(data)
                        ? JSON.parse(data)
                        : data))
                  );
                })(data);
              } catch (t) {}
              yt.set(t, e, data);
            } else data = void 0;
          return data;
        }
        I.extend({
          hasData: function (t) {
            return yt.hasData(t) || vt.hasData(t);
          },
          data: function (t, e, data) {
            return yt.access(t, e, data);
          },
          removeData: function (t, e) {
            yt.remove(t, e);
          },
          _data: function (t, e, data) {
            return vt.access(t, e, data);
          },
          _removeData: function (t, e) {
            vt.remove(t, e);
          },
        }),
          I.fn.extend({
            data: function (t, e) {
              var i,
                r,
                data,
                n = this[0],
                o = n && n.attributes;
              if (void 0 === t) {
                if (
                  this.length &&
                  ((data = yt.get(n)),
                  1 === n.nodeType && !vt.get(n, "hasDataAttrs"))
                ) {
                  for (i = o.length; i--; )
                    o[i] &&
                      0 === (r = o[i].name).indexOf("data-") &&
                      ((r = ft(r.slice(5))), xt(n, r, data[r]));
                  vt.set(n, "hasDataAttrs", !0);
                }
                return data;
              }
              return "object" == typeof t
                ? this.each(function () {
                    yt.set(this, t);
                  })
                : lt(
                    this,
                    function (e) {
                      var data;
                      if (n && void 0 === e)
                        return void 0 !== (data = yt.get(n, t)) ||
                          void 0 !== (data = xt(n, t))
                          ? data
                          : void 0;
                      this.each(function () {
                        yt.set(this, t, e);
                      });
                    },
                    null,
                    e,
                    arguments.length > 1,
                    null,
                    !0
                  );
            },
            removeData: function (t) {
              return this.each(function () {
                yt.remove(this, t);
              });
            },
          }),
          I.extend({
            queue: function (t, e, data) {
              var r;
              if (t)
                return (
                  (e = (e || "fx") + "queue"),
                  (r = vt.get(t, e)),
                  data &&
                    (!r || Array.isArray(data)
                      ? (r = vt.access(t, e, I.makeArray(data)))
                      : r.push(data)),
                  r || []
                );
            },
            dequeue: function (t, e) {
              e = e || "fx";
              var r = I.queue(t, e),
                n = r.length,
                o = r.shift(),
                c = I._queueHooks(t, e);
              "inprogress" === o && ((o = r.shift()), n--),
                o &&
                  ("fx" === e && r.unshift("inprogress"),
                  delete c.stop,
                  o.call(
                    t,
                    function () {
                      I.dequeue(t, e);
                    },
                    c
                  )),
                !n && c && c.empty.fire();
            },
            _queueHooks: function (t, e) {
              var r = e + "queueHooks";
              return (
                vt.get(t, r) ||
                vt.access(t, r, {
                  empty: I.Callbacks("once memory").add(function () {
                    vt.remove(t, [e + "queue", r]);
                  }),
                })
              );
            },
          }),
          I.fn.extend({
            queue: function (t, data) {
              var e = 2;
              return (
                "string" != typeof t && ((data = t), (t = "fx"), e--),
                arguments.length < e
                  ? I.queue(this[0], t)
                  : void 0 === data
                  ? this
                  : this.each(function () {
                      var e = I.queue(this, t, data);
                      I._queueHooks(this, t),
                        "fx" === t &&
                          "inprogress" !== e[0] &&
                          I.dequeue(this, t);
                    })
              );
            },
            dequeue: function (t) {
              return this.each(function () {
                I.dequeue(this, t);
              });
            },
            clearQueue: function (t) {
              return this.queue(t || "fx", []);
            },
            promise: function (t, e) {
              var r,
                n = 1,
                o = I.Deferred(),
                c = this,
                i = this.length,
                l = function () {
                  --n || o.resolveWith(c, [c]);
                };
              for (
                "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
                i--;

              )
                (r = vt.get(c[i], t + "queueHooks")) &&
                  r.empty &&
                  (n++, r.empty.add(l));
              return l(), o.promise(e);
            },
          });
        var _t = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          kt = new RegExp("^(?:([+-])=|)(" + _t + ")([a-z%]*)$", "i"),
          Et = ["Top", "Right", "Bottom", "Left"],
          Ct = T.documentElement,
          Tt = function (t) {
            return I.contains(t.ownerDocument, t);
          },
          St = { composed: !0 };
        Ct.getRootNode &&
          (Tt = function (t) {
            return (
              I.contains(t.ownerDocument, t) ||
              t.getRootNode(St) === t.ownerDocument
            );
          });
        var Ot = function (t, e) {
          return (
            "none" === (t = e || t).style.display ||
            ("" === t.style.display && Tt(t) && "none" === I.css(t, "display"))
          );
        };
        function At(t, e, r, n) {
          var o,
            c,
            l = 20,
            d = n
              ? function () {
                  return n.cur();
                }
              : function () {
                  return I.css(t, e, "");
                },
            h = d(),
            f = (r && r[3]) || (I.cssNumber[e] ? "" : "px"),
            m =
              t.nodeType &&
              (I.cssNumber[e] || ("px" !== f && +h)) &&
              kt.exec(I.css(t, e));
          if (m && m[3] !== f) {
            for (h /= 2, f = f || m[3], m = +h || 1; l--; )
              I.style(t, e, m + f),
                (1 - c) * (1 - (c = d() / h || 0.5)) <= 0 && (l = 0),
                (m /= c);
            (m *= 2), I.style(t, e, m + f), (r = r || []);
          }
          return (
            r &&
              ((m = +m || +h || 0),
              (o = r[1] ? m + (r[1] + 1) * r[2] : +r[2]),
              n && ((n.unit = f), (n.start = m), (n.end = o))),
            o
          );
        }
        var jt = {};
        function Dt(t) {
          var e,
            r = t.ownerDocument,
            n = t.nodeName,
            o = jt[n];
          return (
            o ||
            ((e = r.body.appendChild(r.createElement(n))),
            (o = I.css(e, "display")),
            e.parentNode.removeChild(e),
            "none" === o && (o = "block"),
            (jt[n] = o),
            o)
          );
        }
        function It(t, e) {
          for (var r, n, o = [], c = 0, l = t.length; c < l; c++)
            (n = t[c]).style &&
              ((r = n.style.display),
              e
                ? ("none" === r &&
                    ((o[c] = vt.get(n, "display") || null),
                    o[c] || (n.style.display = "")),
                  "" === n.style.display && Ot(n) && (o[c] = Dt(n)))
                : "none" !== r && ((o[c] = "none"), vt.set(n, "display", r)));
          for (c = 0; c < l; c++) null != o[c] && (t[c].style.display = o[c]);
          return t;
        }
        I.fn.extend({
          show: function () {
            return It(this, !0);
          },
          hide: function () {
            return It(this);
          },
          toggle: function (t) {
            return "boolean" == typeof t
              ? t
                ? this.show()
                : this.hide()
              : this.each(function () {
                  Ot(this) ? I(this).show() : I(this).hide();
                });
          },
        });
        var div,
          input,
          Lt = /^(?:checkbox|radio)$/i,
          $t = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          Pt = /^$|^module$|\/(?:java|ecma)script/i;
        (div = T.createDocumentFragment().appendChild(T.createElement("div"))),
          (input = T.createElement("input")).setAttribute("type", "radio"),
          input.setAttribute("checked", "checked"),
          input.setAttribute("name", "t"),
          div.appendChild(input),
          (k.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (div.innerHTML = "<textarea>x</textarea>"),
          (k.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue),
          (div.innerHTML = "<option></option>"),
          (k.option = !!div.lastChild);
        var zt = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
        function Mt(t, e) {
          var r;
          return (
            (r =
              void 0 !== t.getElementsByTagName
                ? t.getElementsByTagName(e || "*")
                : void 0 !== t.querySelectorAll
                ? t.querySelectorAll(e || "*")
                : []),
            void 0 === e || (e && $(t, e)) ? I.merge([t], r) : r
          );
        }
        function Nt(t, e) {
          for (var i = 0, r = t.length; i < r; i++)
            vt.set(t[i], "globalEval", !e || vt.get(e[i], "globalEval"));
        }
        (zt.tbody = zt.tfoot = zt.colgroup = zt.caption = zt.thead),
          (zt.th = zt.td),
          k.option ||
            (zt.optgroup = zt.option =
              [1, "<select multiple='multiple'>", "</select>"]);
        var qt = /<|&#?\w+;/;
        function Ht(t, e, r, n, o) {
          for (
            var c,
              l,
              d,
              h,
              f,
              m,
              v = e.createDocumentFragment(),
              y = [],
              i = 0,
              w = t.length;
            i < w;
            i++
          )
            if ((c = t[i]) || 0 === c)
              if ("object" === A(c)) I.merge(y, c.nodeType ? [c] : c);
              else if (qt.test(c)) {
                for (
                  l = l || v.appendChild(e.createElement("div")),
                    d = ($t.exec(c) || ["", ""])[1].toLowerCase(),
                    h = zt[d] || zt._default,
                    l.innerHTML = h[1] + I.htmlPrefilter(c) + h[2],
                    m = h[0];
                  m--;

                )
                  l = l.lastChild;
                I.merge(y, l.childNodes), ((l = v.firstChild).textContent = "");
              } else y.push(e.createTextNode(c));
          for (v.textContent = "", i = 0; (c = y[i++]); )
            if (n && I.inArray(c, n) > -1) o && o.push(c);
            else if (
              ((f = Tt(c)), (l = Mt(v.appendChild(c), "script")), f && Nt(l), r)
            )
              for (m = 0; (c = l[m++]); ) Pt.test(c.type || "") && r.push(c);
          return v;
        }
        var Ft = /^([^.]*)(?:\.(.+)|)/;
        function Rt() {
          return !0;
        }
        function Bt() {
          return !1;
        }
        function Wt(t, e, r, data, n, o) {
          var c, l;
          if ("object" == typeof e) {
            for (l in ("string" != typeof r &&
              ((data = data || r), (r = void 0)),
            e))
              Wt(t, l, r, data, e[l], o);
            return t;
          }
          if (
            (null == data && null == n
              ? ((n = r), (data = r = void 0))
              : null == n &&
                ("string" == typeof r
                  ? ((n = data), (data = void 0))
                  : ((n = data), (data = r), (r = void 0))),
            !1 === n)
          )
            n = Bt;
          else if (!n) return t;
          return (
            1 === o &&
              ((c = n),
              (n = function (t) {
                return I().off(t), c.apply(this, arguments);
              }),
              (n.guid = c.guid || (c.guid = I.guid++))),
            t.each(function () {
              I.event.add(this, e, n, data, r);
            })
          );
        }
        function Ut(t, e, r) {
          r
            ? (vt.set(t, e, !1),
              I.event.add(t, e, {
                namespace: !1,
                handler: function (t) {
                  var r,
                    n = vt.get(this, e);
                  if (1 & t.isTrigger && this[e]) {
                    if (n)
                      (I.event.special[e] || {}).delegateType &&
                        t.stopPropagation();
                    else if (
                      ((n = d.call(arguments)),
                      vt.set(this, e, n),
                      this[e](),
                      (r = vt.get(this, e)),
                      vt.set(this, e, !1),
                      n !== r)
                    )
                      return (
                        t.stopImmediatePropagation(), t.preventDefault(), r
                      );
                  } else
                    n &&
                      (vt.set(this, e, I.event.trigger(n[0], n.slice(1), this)),
                      t.stopPropagation(),
                      (t.isImmediatePropagationStopped = Rt));
                },
              }))
            : void 0 === vt.get(t, e) && I.event.add(t, e, Rt);
        }
        (I.event = {
          global: {},
          add: function (t, e, r, data, n) {
            var o,
              c,
              l,
              d,
              h,
              f,
              m,
              v,
              y,
              w,
              x,
              _ = vt.get(t);
            if (gt(t))
              for (
                r.handler && ((r = (o = r).handler), (n = o.selector)),
                  n && I.find.matchesSelector(Ct, n),
                  r.guid || (r.guid = I.guid++),
                  (d = _.events) || (d = _.events = Object.create(null)),
                  (c = _.handle) ||
                    (c = _.handle =
                      function (e) {
                        return void 0 !== I && I.event.triggered !== e.type
                          ? I.event.dispatch.apply(t, arguments)
                          : void 0;
                      }),
                  h = (e = (e || "").match(et) || [""]).length;
                h--;

              )
                (y = x = (l = Ft.exec(e[h]) || [])[1]),
                  (w = (l[2] || "").split(".").sort()),
                  y &&
                    ((m = I.event.special[y] || {}),
                    (y = (n ? m.delegateType : m.bindType) || y),
                    (m = I.event.special[y] || {}),
                    (f = I.extend(
                      {
                        type: y,
                        origType: x,
                        data: data,
                        handler: r,
                        guid: r.guid,
                        selector: n,
                        needsContext: n && I.expr.match.needsContext.test(n),
                        namespace: w.join("."),
                      },
                      o
                    )),
                    (v = d[y]) ||
                      (((v = d[y] = []).delegateCount = 0),
                      (m.setup && !1 !== m.setup.call(t, data, w, c)) ||
                        (t.addEventListener && t.addEventListener(y, c))),
                    m.add &&
                      (m.add.call(t, f),
                      f.handler.guid || (f.handler.guid = r.guid)),
                    n ? v.splice(v.delegateCount++, 0, f) : v.push(f),
                    (I.event.global[y] = !0));
          },
          remove: function (t, e, r, n, o) {
            var c,
              l,
              d,
              h,
              f,
              m,
              v,
              y,
              w,
              x,
              _,
              k = vt.hasData(t) && vt.get(t);
            if (k && (h = k.events)) {
              for (f = (e = (e || "").match(et) || [""]).length; f--; )
                if (
                  ((w = _ = (d = Ft.exec(e[f]) || [])[1]),
                  (x = (d[2] || "").split(".").sort()),
                  w)
                ) {
                  for (
                    v = I.event.special[w] || {},
                      y = h[(w = (n ? v.delegateType : v.bindType) || w)] || [],
                      d =
                        d[2] &&
                        new RegExp(
                          "(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)"
                        ),
                      l = c = y.length;
                    c--;

                  )
                    (m = y[c]),
                      (!o && _ !== m.origType) ||
                        (r && r.guid !== m.guid) ||
                        (d && !d.test(m.namespace)) ||
                        (n &&
                          n !== m.selector &&
                          ("**" !== n || !m.selector)) ||
                        (y.splice(c, 1),
                        m.selector && y.delegateCount--,
                        v.remove && v.remove.call(t, m));
                  l &&
                    !y.length &&
                    ((v.teardown && !1 !== v.teardown.call(t, x, k.handle)) ||
                      I.removeEvent(t, w, k.handle),
                    delete h[w]);
                } else for (w in h) I.event.remove(t, w + e[f], r, n, !0);
              I.isEmptyObject(h) && vt.remove(t, "handle events");
            }
          },
          dispatch: function (t) {
            var i,
              e,
              r,
              n,
              o,
              c,
              l = new Array(arguments.length),
              d = I.event.fix(t),
              h = (vt.get(this, "events") || Object.create(null))[d.type] || [],
              f = I.event.special[d.type] || {};
            for (l[0] = d, i = 1; i < arguments.length; i++)
              l[i] = arguments[i];
            if (
              ((d.delegateTarget = this),
              !f.preDispatch || !1 !== f.preDispatch.call(this, d))
            ) {
              for (
                c = I.event.handlers.call(this, d, h), i = 0;
                (n = c[i++]) && !d.isPropagationStopped();

              )
                for (
                  d.currentTarget = n.elem, e = 0;
                  (o = n.handlers[e++]) && !d.isImmediatePropagationStopped();

                )
                  (d.rnamespace &&
                    !1 !== o.namespace &&
                    !d.rnamespace.test(o.namespace)) ||
                    ((d.handleObj = o),
                    (d.data = o.data),
                    void 0 !==
                      (r = (
                        (I.event.special[o.origType] || {}).handle || o.handler
                      ).apply(n.elem, l)) &&
                      !1 === (d.result = r) &&
                      (d.preventDefault(), d.stopPropagation()));
              return f.postDispatch && f.postDispatch.call(this, d), d.result;
            }
          },
          handlers: function (t, e) {
            var i,
              r,
              n,
              o,
              c,
              l = [],
              d = e.delegateCount,
              h = t.target;
            if (d && h.nodeType && !("click" === t.type && t.button >= 1))
              for (; h !== this; h = h.parentNode || this)
                if (
                  1 === h.nodeType &&
                  ("click" !== t.type || !0 !== h.disabled)
                ) {
                  for (o = [], c = {}, i = 0; i < d; i++)
                    void 0 === c[(n = (r = e[i]).selector + " ")] &&
                      (c[n] = r.needsContext
                        ? I(n, this).index(h) > -1
                        : I.find(n, this, null, [h]).length),
                      c[n] && o.push(r);
                  o.length && l.push({ elem: h, handlers: o });
                }
            return (
              (h = this),
              d < e.length && l.push({ elem: h, handlers: e.slice(d) }),
              l
            );
          },
          addProp: function (t, e) {
            Object.defineProperty(I.Event.prototype, t, {
              enumerable: !0,
              configurable: !0,
              get: E(e)
                ? function () {
                    if (this.originalEvent) return e(this.originalEvent);
                  }
                : function () {
                    if (this.originalEvent) return this.originalEvent[t];
                  },
              set: function (e) {
                Object.defineProperty(this, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: e,
                });
              },
            });
          },
          fix: function (t) {
            return t[I.expando] ? t : new I.Event(t);
          },
          special: {
            load: { noBubble: !0 },
            click: {
              setup: function (data) {
                var t = this || data;
                return (
                  Lt.test(t.type) &&
                    t.click &&
                    $(t, "input") &&
                    Ut(t, "click", !0),
                  !1
                );
              },
              trigger: function (data) {
                var t = this || data;
                return (
                  Lt.test(t.type) && t.click && $(t, "input") && Ut(t, "click"),
                  !0
                );
              },
              _default: function (t) {
                var e = t.target;
                return (
                  (Lt.test(e.type) &&
                    e.click &&
                    $(e, "input") &&
                    vt.get(e, "click")) ||
                  $(e, "a")
                );
              },
            },
            beforeunload: {
              postDispatch: function (t) {
                void 0 !== t.result &&
                  t.originalEvent &&
                  (t.originalEvent.returnValue = t.result);
              },
            },
          },
        }),
          (I.removeEvent = function (t, e, r) {
            t.removeEventListener && t.removeEventListener(e, r);
          }),
          (I.Event = function (t, e) {
            if (!(this instanceof I.Event)) return new I.Event(t, e);
            t && t.type
              ? ((this.originalEvent = t),
                (this.type = t.type),
                (this.isDefaultPrevented =
                  t.defaultPrevented ||
                  (void 0 === t.defaultPrevented && !1 === t.returnValue)
                    ? Rt
                    : Bt),
                (this.target =
                  t.target && 3 === t.target.nodeType
                    ? t.target.parentNode
                    : t.target),
                (this.currentTarget = t.currentTarget),
                (this.relatedTarget = t.relatedTarget))
              : (this.type = t),
              e && I.extend(this, e),
              (this.timeStamp = (t && t.timeStamp) || Date.now()),
              (this[I.expando] = !0);
          }),
          (I.Event.prototype = {
            constructor: I.Event,
            isDefaultPrevented: Bt,
            isPropagationStopped: Bt,
            isImmediatePropagationStopped: Bt,
            isSimulated: !1,
            preventDefault: function () {
              var t = this.originalEvent;
              (this.isDefaultPrevented = Rt),
                t && !this.isSimulated && t.preventDefault();
            },
            stopPropagation: function () {
              var t = this.originalEvent;
              (this.isPropagationStopped = Rt),
                t && !this.isSimulated && t.stopPropagation();
            },
            stopImmediatePropagation: function () {
              var t = this.originalEvent;
              (this.isImmediatePropagationStopped = Rt),
                t && !this.isSimulated && t.stopImmediatePropagation(),
                this.stopPropagation();
            },
          }),
          I.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              code: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: !0,
            },
            I.event.addProp
          ),
          I.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
            function r(t) {
              if (T.documentMode) {
                var r = vt.get(this, "handle"),
                  n = I.event.fix(t);
                (n.type = "focusin" === t.type ? "focus" : "blur"),
                  (n.isSimulated = !0),
                  r(t),
                  n.target === n.currentTarget && r(n);
              } else I.event.simulate(e, t.target, I.event.fix(t));
            }
            (I.event.special[t] = {
              setup: function () {
                var n;
                if ((Ut(this, t, !0), !T.documentMode)) return !1;
                (n = vt.get(this, e)) || this.addEventListener(e, r),
                  vt.set(this, e, (n || 0) + 1);
              },
              trigger: function () {
                return Ut(this, t), !0;
              },
              teardown: function () {
                var t;
                if (!T.documentMode) return !1;
                (t = vt.get(this, e) - 1)
                  ? vt.set(this, e, t)
                  : (this.removeEventListener(e, r), vt.remove(this, e));
              },
              _default: function (e) {
                return vt.get(e.target, t);
              },
              delegateType: e,
            }),
              (I.event.special[e] = {
                setup: function () {
                  var n = this.ownerDocument || this.document || this,
                    o = T.documentMode ? this : n,
                    c = vt.get(o, e);
                  c ||
                    (T.documentMode
                      ? this.addEventListener(e, r)
                      : n.addEventListener(t, r, !0)),
                    vt.set(o, e, (c || 0) + 1);
                },
                teardown: function () {
                  var n = this.ownerDocument || this.document || this,
                    o = T.documentMode ? this : n,
                    c = vt.get(o, e) - 1;
                  c
                    ? vt.set(o, e, c)
                    : (T.documentMode
                        ? this.removeEventListener(e, r)
                        : n.removeEventListener(t, r, !0),
                      vt.remove(o, e));
                },
              });
          }),
          I.each(
            {
              mouseenter: "mouseover",
              mouseleave: "mouseout",
              pointerenter: "pointerover",
              pointerleave: "pointerout",
            },
            function (t, e) {
              I.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                  var r,
                    n = t.relatedTarget,
                    o = t.handleObj;
                  return (
                    (n && (n === this || I.contains(this, n))) ||
                      ((t.type = o.origType),
                      (r = o.handler.apply(this, arguments)),
                      (t.type = e)),
                    r
                  );
                },
              };
            }
          ),
          I.fn.extend({
            on: function (t, e, data, r) {
              return Wt(this, t, e, data, r);
            },
            one: function (t, e, data, r) {
              return Wt(this, t, e, data, r, 1);
            },
            off: function (t, e, r) {
              var n, o;
              if (t && t.preventDefault && t.handleObj)
                return (
                  (n = t.handleObj),
                  I(t.delegateTarget).off(
                    n.namespace ? n.origType + "." + n.namespace : n.origType,
                    n.selector,
                    n.handler
                  ),
                  this
                );
              if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this;
              }
              return (
                (!1 !== e && "function" != typeof e) || ((r = e), (e = void 0)),
                !1 === r && (r = Bt),
                this.each(function () {
                  I.event.remove(this, t, r, e);
                })
              );
            },
          });
        var Vt = /<script|<style|<link/i,
          Yt = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Zt = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function Xt(t, content) {
          return (
            ($(t, "table") &&
              $(11 !== content.nodeType ? content : content.firstChild, "tr") &&
              I(t).children("tbody")[0]) ||
            t
          );
        }
        function Qt(t) {
          return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
        }
        function Gt(t) {
          return (
            "true/" === (t.type || "").slice(0, 5)
              ? (t.type = t.type.slice(5))
              : t.removeAttribute("type"),
            t
          );
        }
        function Kt(t, e) {
          var i, r, n, o, c, l;
          if (1 === e.nodeType) {
            if (vt.hasData(t) && (l = vt.get(t).events))
              for (n in (vt.remove(e, "handle events"), l))
                for (i = 0, r = l[n].length; i < r; i++)
                  I.event.add(e, n, l[n][i]);
            yt.hasData(t) &&
              ((o = yt.access(t)), (c = I.extend({}, o)), yt.set(e, c));
          }
        }
        function Jt(t, e) {
          var r = e.nodeName.toLowerCase();
          "input" === r && Lt.test(t.type)
            ? (e.checked = t.checked)
            : ("input" !== r && "textarea" !== r) ||
              (e.defaultValue = t.defaultValue);
        }
        function te(t, e, r, n) {
          e = h(e);
          var o,
            c,
            l,
            d,
            f,
            m,
            i = 0,
            v = t.length,
            y = v - 1,
            w = e[0],
            x = E(w);
          if (
            x ||
            (v > 1 && "string" == typeof w && !k.checkClone && Yt.test(w))
          )
            return t.each(function (o) {
              var c = t.eq(o);
              x && (e[0] = w.call(this, o, c.html())), te(c, e, r, n);
            });
          if (
            v &&
            ((c = (o = Ht(e, t[0].ownerDocument, !1, t, n)).firstChild),
            1 === o.childNodes.length && (o = c),
            c || n)
          ) {
            for (d = (l = I.map(Mt(o, "script"), Qt)).length; i < v; i++)
              (f = o),
                i !== y &&
                  ((f = I.clone(f, !0, !0)), d && I.merge(l, Mt(f, "script"))),
                r.call(t[i], f, i);
            if (d)
              for (
                m = l[l.length - 1].ownerDocument, I.map(l, Gt), i = 0;
                i < d;
                i++
              )
                (f = l[i]),
                  Pt.test(f.type || "") &&
                    !vt.access(f, "globalEval") &&
                    I.contains(m, f) &&
                    (f.src && "module" !== (f.type || "").toLowerCase()
                      ? I._evalUrl &&
                        !f.noModule &&
                        I._evalUrl(
                          f.src,
                          { nonce: f.nonce || f.getAttribute("nonce") },
                          m
                        )
                      : O(f.textContent.replace(Zt, ""), f, m));
          }
          return t;
        }
        function ee(t, e, r) {
          for (
            var n, o = e ? I.filter(e, t) : t, i = 0;
            null != (n = o[i]);
            i++
          )
            r || 1 !== n.nodeType || I.cleanData(Mt(n)),
              n.parentNode &&
                (r && Tt(n) && Nt(Mt(n, "script")),
                n.parentNode.removeChild(n));
          return t;
        }
        I.extend({
          htmlPrefilter: function (html) {
            return html;
          },
          clone: function (t, e, r) {
            var i,
              n,
              o,
              c,
              l = t.cloneNode(!0),
              d = Tt(t);
            if (
              !(
                k.noCloneChecked ||
                (1 !== t.nodeType && 11 !== t.nodeType) ||
                I.isXMLDoc(t)
              )
            )
              for (c = Mt(l), i = 0, n = (o = Mt(t)).length; i < n; i++)
                Jt(o[i], c[i]);
            if (e)
              if (r)
                for (
                  o = o || Mt(t), c = c || Mt(l), i = 0, n = o.length;
                  i < n;
                  i++
                )
                  Kt(o[i], c[i]);
              else Kt(t, l);
            return (
              (c = Mt(l, "script")).length > 0 && Nt(c, !d && Mt(t, "script")),
              l
            );
          },
          cleanData: function (t) {
            for (
              var data, e, r, n = I.event.special, i = 0;
              void 0 !== (e = t[i]);
              i++
            )
              if (gt(e)) {
                if ((data = e[vt.expando])) {
                  if (data.events)
                    for (r in data.events)
                      n[r]
                        ? I.event.remove(e, r)
                        : I.removeEvent(e, r, data.handle);
                  e[vt.expando] = void 0;
                }
                e[yt.expando] && (e[yt.expando] = void 0);
              }
          },
        }),
          I.fn.extend({
            detach: function (t) {
              return ee(this, t, !0);
            },
            remove: function (t) {
              return ee(this, t);
            },
            text: function (t) {
              return lt(
                this,
                function (t) {
                  return void 0 === t
                    ? I.text(this)
                    : this.empty().each(function () {
                        (1 !== this.nodeType &&
                          11 !== this.nodeType &&
                          9 !== this.nodeType) ||
                          (this.textContent = t);
                      });
                },
                null,
                t,
                arguments.length
              );
            },
            append: function () {
              return te(this, arguments, function (t) {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  Xt(this, t).appendChild(t);
              });
            },
            prepend: function () {
              return te(this, arguments, function (t) {
                if (
                  1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
                ) {
                  var e = Xt(this, t);
                  e.insertBefore(t, e.firstChild);
                }
              });
            },
            before: function () {
              return te(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this);
              });
            },
            after: function () {
              return te(this, arguments, function (t) {
                this.parentNode &&
                  this.parentNode.insertBefore(t, this.nextSibling);
              });
            },
            empty: function () {
              for (var t, i = 0; null != (t = this[i]); i++)
                1 === t.nodeType &&
                  (I.cleanData(Mt(t, !1)), (t.textContent = ""));
              return this;
            },
            clone: function (t, e) {
              return (
                (t = null != t && t),
                (e = null == e ? t : e),
                this.map(function () {
                  return I.clone(this, t, e);
                })
              );
            },
            html: function (t) {
              return lt(
                this,
                function (t) {
                  var e = this[0] || {},
                    i = 0,
                    r = this.length;
                  if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                  if (
                    "string" == typeof t &&
                    !Vt.test(t) &&
                    !zt[($t.exec(t) || ["", ""])[1].toLowerCase()]
                  ) {
                    t = I.htmlPrefilter(t);
                    try {
                      for (; i < r; i++)
                        1 === (e = this[i] || {}).nodeType &&
                          (I.cleanData(Mt(e, !1)), (e.innerHTML = t));
                      e = 0;
                    } catch (t) {}
                  }
                  e && this.empty().append(t);
                },
                null,
                t,
                arguments.length
              );
            },
            replaceWith: function () {
              var t = [];
              return te(
                this,
                arguments,
                function (e) {
                  var r = this.parentNode;
                  I.inArray(this, t) < 0 &&
                    (I.cleanData(Mt(this)), r && r.replaceChild(e, this));
                },
                t
              );
            },
          }),
          I.each(
            {
              appendTo: "append",
              prependTo: "prepend",
              insertBefore: "before",
              insertAfter: "after",
              replaceAll: "replaceWith",
            },
            function (t, e) {
              I.fn[t] = function (t) {
                for (
                  var r, n = [], o = I(t), c = o.length - 1, i = 0;
                  i <= c;
                  i++
                )
                  (r = i === c ? this : this.clone(!0)),
                    I(o[i])[e](r),
                    f.apply(n, r.get());
                return this.pushStack(n);
              };
            }
          );
        var re = new RegExp("^(" + _t + ")(?!px)[a-z%]+$", "i"),
          ne = /^--/,
          ie = function (t) {
            var view = t.ownerDocument.defaultView;
            return (
              (view && view.opener) || (view = r), view.getComputedStyle(t)
            );
          },
          oe = function (t, e, r) {
            var n,
              o,
              c = {};
            for (o in e) (c[o] = t.style[o]), (t.style[o] = e[o]);
            for (o in ((n = r.call(t)), e)) t.style[o] = c[o];
            return n;
          },
          ae = new RegExp(Et.join("|"), "i");
        function se(t, e, r) {
          var n,
            o,
            c,
            l,
            d = ne.test(e),
            style = t.style;
          return (
            (r = r || ie(t)) &&
              ((l = r.getPropertyValue(e) || r[e]),
              d && l && (l = l.replace(H, "$1") || void 0),
              "" !== l || Tt(t) || (l = I.style(t, e)),
              !k.pixelBoxStyles() &&
                re.test(l) &&
                ae.test(e) &&
                ((n = style.width),
                (o = style.minWidth),
                (c = style.maxWidth),
                (style.minWidth = style.maxWidth = style.width = l),
                (l = r.width),
                (style.width = n),
                (style.minWidth = o),
                (style.maxWidth = c))),
            void 0 !== l ? l + "" : l
          );
        }
        function ce(t, e) {
          return {
            get: function () {
              if (!t()) return (this.get = e).apply(this, arguments);
              delete this.get;
            },
          };
        }
        !(function () {
          function t() {
            if (div) {
              (f.style.cssText =
                "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (div.style.cssText =
                  "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                Ct.appendChild(f).appendChild(div);
              var t = r.getComputedStyle(div);
              (n = "1%" !== t.top),
                (h = 12 === e(t.marginLeft)),
                (div.style.right = "60%"),
                (l = 36 === e(t.right)),
                (o = 36 === e(t.width)),
                (div.style.position = "absolute"),
                (c = 12 === e(div.offsetWidth / 3)),
                Ct.removeChild(f),
                (div = null);
            }
          }
          function e(t) {
            return Math.round(parseFloat(t));
          }
          var n,
            o,
            c,
            l,
            d,
            h,
            f = T.createElement("div"),
            div = T.createElement("div");
          div.style &&
            ((div.style.backgroundClip = "content-box"),
            (div.cloneNode(!0).style.backgroundClip = ""),
            (k.clearCloneStyle = "content-box" === div.style.backgroundClip),
            I.extend(k, {
              boxSizingReliable: function () {
                return t(), o;
              },
              pixelBoxStyles: function () {
                return t(), l;
              },
              pixelPosition: function () {
                return t(), n;
              },
              reliableMarginLeft: function () {
                return t(), h;
              },
              scrollboxSize: function () {
                return t(), c;
              },
              reliableTrDimensions: function () {
                var table, tr, t, e;
                return (
                  null == d &&
                    ((table = T.createElement("table")),
                    (tr = T.createElement("tr")),
                    (t = T.createElement("div")),
                    (table.style.cssText =
                      "position:absolute;left:-11111px;border-collapse:separate"),
                    (tr.style.cssText =
                      "box-sizing:content-box;border:1px solid"),
                    (tr.style.height = "1px"),
                    (t.style.height = "9px"),
                    (t.style.display = "block"),
                    Ct.appendChild(table).appendChild(tr).appendChild(t),
                    (e = r.getComputedStyle(tr)),
                    (d =
                      parseInt(e.height, 10) +
                        parseInt(e.borderTopWidth, 10) +
                        parseInt(e.borderBottomWidth, 10) ===
                      tr.offsetHeight),
                    Ct.removeChild(table)),
                  d
                );
              },
            }));
        })();
        var le = ["Webkit", "Moz", "ms"],
          ue = T.createElement("div").style,
          de = {};
        function pe(t) {
          var e = I.cssProps[t] || de[t];
          return (
            e ||
            (t in ue
              ? t
              : (de[t] =
                  (function (t) {
                    for (
                      var e = t[0].toUpperCase() + t.slice(1), i = le.length;
                      i--;

                    )
                      if ((t = le[i] + e) in ue) return t;
                  })(t) || t))
          );
        }
        var he = /^(none|table(?!-c[ea]).+)/,
          fe = { position: "absolute", visibility: "hidden", display: "block" },
          ge = { letterSpacing: "0", fontWeight: "400" };
        function me(t, e, r) {
          var n = kt.exec(e);
          return n ? Math.max(0, n[2] - (r || 0)) + (n[3] || "px") : e;
        }
        function ve(t, e, r, n, o, c) {
          var i = "width" === e ? 1 : 0,
            l = 0,
            d = 0,
            h = 0;
          if (r === (n ? "border" : "content")) return 0;
          for (; i < 4; i += 2)
            "margin" === r && (h += I.css(t, r + Et[i], !0, o)),
              n
                ? ("content" === r && (d -= I.css(t, "padding" + Et[i], !0, o)),
                  "margin" !== r &&
                    (d -= I.css(t, "border" + Et[i] + "Width", !0, o)))
                : ((d += I.css(t, "padding" + Et[i], !0, o)),
                  "padding" !== r
                    ? (d += I.css(t, "border" + Et[i] + "Width", !0, o))
                    : (l += I.css(t, "border" + Et[i] + "Width", !0, o)));
          return (
            !n &&
              c >= 0 &&
              (d +=
                Math.max(
                  0,
                  Math.ceil(
                    t["offset" + e[0].toUpperCase() + e.slice(1)] -
                      c -
                      d -
                      l -
                      0.5
                  )
                ) || 0),
            d + h
          );
        }
        function ye(t, e, r) {
          var n = ie(t),
            o =
              (!k.boxSizingReliable() || r) &&
              "border-box" === I.css(t, "boxSizing", !1, n),
            c = o,
            l = se(t, e, n),
            d = "offset" + e[0].toUpperCase() + e.slice(1);
          if (re.test(l)) {
            if (!r) return l;
            l = "auto";
          }
          return (
            ((!k.boxSizingReliable() && o) ||
              (!k.reliableTrDimensions() && $(t, "tr")) ||
              "auto" === l ||
              (!parseFloat(l) && "inline" === I.css(t, "display", !1, n))) &&
              t.getClientRects().length &&
              ((o = "border-box" === I.css(t, "boxSizing", !1, n)),
              (c = d in t) && (l = t[d])),
            (l = parseFloat(l) || 0) +
              ve(t, e, r || (o ? "border" : "content"), c, n, l) +
              "px"
          );
        }
        function we(t, e, r, n, o) {
          return new we.prototype.init(t, e, r, n, o);
        }
        I.extend({
          cssHooks: {
            opacity: {
              get: function (t, e) {
                if (e) {
                  var r = se(t, "opacity");
                  return "" === r ? "1" : r;
                }
              },
            },
          },
          cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
          },
          cssProps: {},
          style: function (t, e, r, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
              var o,
                c,
                l,
                d = ft(e),
                h = ne.test(e),
                style = t.style;
              if (
                (h || (e = pe(d)),
                (l = I.cssHooks[e] || I.cssHooks[d]),
                void 0 === r)
              )
                return l && "get" in l && void 0 !== (o = l.get(t, !1, n))
                  ? o
                  : style[e];
              "string" === (c = typeof r) &&
                (o = kt.exec(r)) &&
                o[1] &&
                ((r = At(t, e, o)), (c = "number")),
                null != r &&
                  r == r &&
                  ("number" !== c ||
                    h ||
                    (r += (o && o[3]) || (I.cssNumber[d] ? "" : "px")),
                  k.clearCloneStyle ||
                    "" !== r ||
                    0 !== e.indexOf("background") ||
                    (style[e] = "inherit"),
                  (l && "set" in l && void 0 === (r = l.set(t, r, n))) ||
                    (h ? style.setProperty(e, r) : (style[e] = r)));
            }
          },
          css: function (t, e, r, n) {
            var o,
              c,
              l,
              d = ft(e);
            return (
              ne.test(e) || (e = pe(d)),
              (l = I.cssHooks[e] || I.cssHooks[d]) &&
                "get" in l &&
                (o = l.get(t, !0, r)),
              void 0 === o && (o = se(t, e, n)),
              "normal" === o && e in ge && (o = ge[e]),
              "" === r || r
                ? ((c = parseFloat(o)), !0 === r || isFinite(c) ? c || 0 : o)
                : o
            );
          },
        }),
          I.each(["height", "width"], function (t, e) {
            I.cssHooks[e] = {
              get: function (t, r, n) {
                if (r)
                  return !he.test(I.css(t, "display")) ||
                    (t.getClientRects().length &&
                      t.getBoundingClientRect().width)
                    ? ye(t, e, n)
                    : oe(t, fe, function () {
                        return ye(t, e, n);
                      });
              },
              set: function (t, r, n) {
                var o,
                  c = ie(t),
                  l = !k.scrollboxSize() && "absolute" === c.position,
                  d = (l || n) && "border-box" === I.css(t, "boxSizing", !1, c),
                  h = n ? ve(t, e, n, d, c) : 0;
                return (
                  d &&
                    l &&
                    (h -= Math.ceil(
                      t["offset" + e[0].toUpperCase() + e.slice(1)] -
                        parseFloat(c[e]) -
                        ve(t, e, "border", !1, c) -
                        0.5
                    )),
                  h &&
                    (o = kt.exec(r)) &&
                    "px" !== (o[3] || "px") &&
                    ((t.style[e] = r), (r = I.css(t, e))),
                  me(0, r, h)
                );
              },
            };
          }),
          (I.cssHooks.marginLeft = ce(k.reliableMarginLeft, function (t, e) {
            if (e)
              return (
                (parseFloat(se(t, "marginLeft")) ||
                  t.getBoundingClientRect().left -
                    oe(t, { marginLeft: 0 }, function () {
                      return t.getBoundingClientRect().left;
                    })) + "px"
              );
          })),
          I.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
            (I.cssHooks[t + e] = {
              expand: function (r) {
                for (
                  var i = 0,
                    n = {},
                    o = "string" == typeof r ? r.split(" ") : [r];
                  i < 4;
                  i++
                )
                  n[t + Et[i] + e] = o[i] || o[i - 2] || o[0];
                return n;
              },
            }),
              "margin" !== t && (I.cssHooks[t + e].set = me);
          }),
          I.fn.extend({
            css: function (t, e) {
              return lt(
                this,
                function (t, e, r) {
                  var n,
                    o,
                    map = {},
                    i = 0;
                  if (Array.isArray(e)) {
                    for (n = ie(t), o = e.length; i < o; i++)
                      map[e[i]] = I.css(t, e[i], !1, n);
                    return map;
                  }
                  return void 0 !== r ? I.style(t, e, r) : I.css(t, e);
                },
                t,
                e,
                arguments.length > 1
              );
            },
          }),
          (I.Tween = we),
          (we.prototype = {
            constructor: we,
            init: function (t, e, r, n, o, c) {
              (this.elem = t),
                (this.prop = r),
                (this.easing = o || I.easing._default),
                (this.options = e),
                (this.start = this.now = this.cur()),
                (this.end = n),
                (this.unit = c || (I.cssNumber[r] ? "" : "px"));
            },
            cur: function () {
              var t = we.propHooks[this.prop];
              return t && t.get ? t.get(this) : we.propHooks._default.get(this);
            },
            run: function (t) {
              var e,
                r = we.propHooks[this.prop];
              return (
                this.options.duration
                  ? (this.pos = e =
                      I.easing[this.easing](
                        t,
                        this.options.duration * t,
                        0,
                        1,
                        this.options.duration
                      ))
                  : (this.pos = e = t),
                (this.now = (this.end - this.start) * e + this.start),
                this.options.step &&
                  this.options.step.call(this.elem, this.now, this),
                r && r.set ? r.set(this) : we.propHooks._default.set(this),
                this
              );
            },
          }),
          (we.prototype.init.prototype = we.prototype),
          (we.propHooks = {
            _default: {
              get: function (t) {
                var e;
                return 1 !== t.elem.nodeType ||
                  (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                  ? t.elem[t.prop]
                  : (e = I.css(t.elem, t.prop, "")) && "auto" !== e
                  ? e
                  : 0;
              },
              set: function (t) {
                I.fx.step[t.prop]
                  ? I.fx.step[t.prop](t)
                  : 1 !== t.elem.nodeType ||
                    (!I.cssHooks[t.prop] && null == t.elem.style[pe(t.prop)])
                  ? (t.elem[t.prop] = t.now)
                  : I.style(t.elem, t.prop, t.now + t.unit);
              },
            },
          }),
          (we.propHooks.scrollTop = we.propHooks.scrollLeft =
            {
              set: function (t) {
                t.elem.nodeType &&
                  t.elem.parentNode &&
                  (t.elem[t.prop] = t.now);
              },
            }),
          (I.easing = {
            linear: function (p) {
              return p;
            },
            swing: function (p) {
              return 0.5 - Math.cos(p * Math.PI) / 2;
            },
            _default: "swing",
          }),
          (I.fx = we.prototype.init),
          (I.fx.step = {});
        var be,
          xe,
          _e = /^(?:toggle|show|hide)$/,
          ke = /queueHooks$/;
        function Ee() {
          xe &&
            (!1 === T.hidden && r.requestAnimationFrame
              ? r.requestAnimationFrame(Ee)
              : r.setTimeout(Ee, I.fx.interval),
            I.fx.tick());
        }
        function Ce() {
          return (
            r.setTimeout(function () {
              be = void 0;
            }),
            (be = Date.now())
          );
        }
        function Te(t, e) {
          var r,
            i = 0,
            n = { height: t };
          for (e = e ? 1 : 0; i < 4; i += 2 - e)
            n["margin" + (r = Et[i])] = n["padding" + r] = t;
          return e && (n.opacity = n.width = t), n;
        }
        function Se(t, e, r) {
          for (
            var n,
              o = (Oe.tweeners[e] || []).concat(Oe.tweeners["*"]),
              c = 0,
              l = o.length;
            c < l;
            c++
          )
            if ((n = o[c].call(r, e, t))) return n;
        }
        function Oe(t, e, r) {
          var n,
            o,
            c = 0,
            l = Oe.prefilters.length,
            d = I.Deferred().always(function () {
              delete h.elem;
            }),
            h = function () {
              if (o) return !1;
              for (
                var e = be || Ce(),
                  r = Math.max(0, f.startTime + f.duration - e),
                  n = 1 - (r / f.duration || 0),
                  c = 0,
                  l = f.tweens.length;
                c < l;
                c++
              )
                f.tweens[c].run(n);
              return (
                d.notifyWith(t, [f, n, r]),
                n < 1 && l
                  ? r
                  : (l || d.notifyWith(t, [f, 1, 0]), d.resolveWith(t, [f]), !1)
              );
            },
            f = d.promise({
              elem: t,
              props: I.extend({}, e),
              opts: I.extend(
                !0,
                { specialEasing: {}, easing: I.easing._default },
                r
              ),
              originalProperties: e,
              originalOptions: r,
              startTime: be || Ce(),
              duration: r.duration,
              tweens: [],
              createTween: function (e, r) {
                var n = I.Tween(
                  t,
                  f.opts,
                  e,
                  r,
                  f.opts.specialEasing[e] || f.opts.easing
                );
                return f.tweens.push(n), n;
              },
              stop: function (e) {
                var r = 0,
                  n = e ? f.tweens.length : 0;
                if (o) return this;
                for (o = !0; r < n; r++) f.tweens[r].run(1);
                return (
                  e
                    ? (d.notifyWith(t, [f, 1, 0]), d.resolveWith(t, [f, e]))
                    : d.rejectWith(t, [f, e]),
                  this
                );
              },
            }),
            m = f.props;
          for (
            !(function (t, e) {
              var r, n, o, c, l;
              for (r in t)
                if (
                  ((o = e[(n = ft(r))]),
                  (c = t[r]),
                  Array.isArray(c) && ((o = c[1]), (c = t[r] = c[0])),
                  r !== n && ((t[n] = c), delete t[r]),
                  (l = I.cssHooks[n]) && ("expand" in l))
                )
                  for (r in ((c = l.expand(c)), delete t[n], c))
                    (r in t) || ((t[r] = c[r]), (e[r] = o));
                else e[n] = o;
            })(m, f.opts.specialEasing);
            c < l;
            c++
          )
            if ((n = Oe.prefilters[c].call(f, t, m, f.opts)))
              return (
                E(n.stop) &&
                  (I._queueHooks(f.elem, f.opts.queue).stop = n.stop.bind(n)),
                n
              );
          return (
            I.map(m, Se, f),
            E(f.opts.start) && f.opts.start.call(t, f),
            f
              .progress(f.opts.progress)
              .done(f.opts.done, f.opts.complete)
              .fail(f.opts.fail)
              .always(f.opts.always),
            I.fx.timer(I.extend(h, { elem: t, anim: f, queue: f.opts.queue })),
            f
          );
        }
        (I.Animation = I.extend(Oe, {
          tweeners: {
            "*": [
              function (t, e) {
                var r = this.createTween(t, e);
                return At(r.elem, t, kt.exec(e), r), r;
              },
            ],
          },
          tweener: function (t, e) {
            E(t) ? ((e = t), (t = ["*"])) : (t = t.match(et));
            for (var r, n = 0, o = t.length; n < o; n++)
              (r = t[n]),
                (Oe.tweeners[r] = Oe.tweeners[r] || []),
                Oe.tweeners[r].unshift(e);
          },
          prefilters: [
            function (t, e, r) {
              var n,
                o,
                c,
                l,
                d,
                h,
                f,
                m,
                v = "width" in e || "height" in e,
                y = this,
                w = {},
                style = t.style,
                x = t.nodeType && Ot(t),
                _ = vt.get(t, "fxshow");
              for (n in (r.queue ||
                (null == (l = I._queueHooks(t, "fx")).unqueued &&
                  ((l.unqueued = 0),
                  (d = l.empty.fire),
                  (l.empty.fire = function () {
                    l.unqueued || d();
                  })),
                l.unqueued++,
                y.always(function () {
                  y.always(function () {
                    l.unqueued--, I.queue(t, "fx").length || l.empty.fire();
                  });
                })),
              e))
                if (((o = e[n]), _e.test(o))) {
                  if (
                    (delete e[n],
                    (c = c || "toggle" === o),
                    o === (x ? "hide" : "show"))
                  ) {
                    if ("show" !== o || !_ || void 0 === _[n]) continue;
                    x = !0;
                  }
                  w[n] = (_ && _[n]) || I.style(t, n);
                }
              if ((h = !I.isEmptyObject(e)) || !I.isEmptyObject(w))
                for (n in (v &&
                  1 === t.nodeType &&
                  ((r.overflow = [
                    style.overflow,
                    style.overflowX,
                    style.overflowY,
                  ]),
                  null == (f = _ && _.display) && (f = vt.get(t, "display")),
                  "none" === (m = I.css(t, "display")) &&
                    (f
                      ? (m = f)
                      : (It([t], !0),
                        (f = t.style.display || f),
                        (m = I.css(t, "display")),
                        It([t]))),
                  ("inline" === m || ("inline-block" === m && null != f)) &&
                    "none" === I.css(t, "float") &&
                    (h ||
                      (y.done(function () {
                        style.display = f;
                      }),
                      null == f &&
                        ((m = style.display), (f = "none" === m ? "" : m))),
                    (style.display = "inline-block"))),
                r.overflow &&
                  ((style.overflow = "hidden"),
                  y.always(function () {
                    (style.overflow = r.overflow[0]),
                      (style.overflowX = r.overflow[1]),
                      (style.overflowY = r.overflow[2]);
                  })),
                (h = !1),
                w))
                  h ||
                    (_
                      ? "hidden" in _ && (x = _.hidden)
                      : (_ = vt.access(t, "fxshow", { display: f })),
                    c && (_.hidden = !x),
                    x && It([t], !0),
                    y.done(function () {
                      for (n in (x || It([t]), vt.remove(t, "fxshow"), w))
                        I.style(t, n, w[n]);
                    })),
                    (h = Se(x ? _[n] : 0, n, y)),
                    n in _ ||
                      ((_[n] = h.start),
                      x && ((h.end = h.start), (h.start = 0)));
            },
          ],
          prefilter: function (t, e) {
            e ? Oe.prefilters.unshift(t) : Oe.prefilters.push(t);
          },
        })),
          (I.speed = function (t, e, r) {
            var n =
              t && "object" == typeof t
                ? I.extend({}, t)
                : {
                    complete: r || (!r && e) || (E(t) && t),
                    duration: t,
                    easing: (r && e) || (e && !E(e) && e),
                  };
            return (
              I.fx.off
                ? (n.duration = 0)
                : "number" != typeof n.duration &&
                  (n.duration in I.fx.speeds
                    ? (n.duration = I.fx.speeds[n.duration])
                    : (n.duration = I.fx.speeds._default)),
              (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
              (n.old = n.complete),
              (n.complete = function () {
                E(n.old) && n.old.call(this),
                  n.queue && I.dequeue(this, n.queue);
              }),
              n
            );
          }),
          I.fn.extend({
            fadeTo: function (t, e, r, n) {
              return this.filter(Ot)
                .css("opacity", 0)
                .show()
                .end()
                .animate({ opacity: e }, t, r, n);
            },
            animate: function (t, e, r, n) {
              var o = I.isEmptyObject(t),
                c = I.speed(e, r, n),
                l = function () {
                  var e = Oe(this, I.extend({}, t), c);
                  (o || vt.get(this, "finish")) && e.stop(!0);
                };
              return (
                (l.finish = l),
                o || !1 === c.queue ? this.each(l) : this.queue(c.queue, l)
              );
            },
            stop: function (t, e, r) {
              var n = function (t) {
                var e = t.stop;
                delete t.stop, e(r);
              };
              return (
                "string" != typeof t && ((r = e), (e = t), (t = void 0)),
                e && this.queue(t || "fx", []),
                this.each(function () {
                  var e = !0,
                    o = null != t && t + "queueHooks",
                    c = I.timers,
                    data = vt.get(this);
                  if (o) data[o] && data[o].stop && n(data[o]);
                  else
                    for (o in data)
                      data[o] && data[o].stop && ke.test(o) && n(data[o]);
                  for (o = c.length; o--; )
                    c[o].elem !== this ||
                      (null != t && c[o].queue !== t) ||
                      (c[o].anim.stop(r), (e = !1), c.splice(o, 1));
                  (!e && r) || I.dequeue(this, t);
                })
              );
            },
            finish: function (t) {
              return (
                !1 !== t && (t = t || "fx"),
                this.each(function () {
                  var e,
                    data = vt.get(this),
                    r = data[t + "queue"],
                    n = data[t + "queueHooks"],
                    o = I.timers,
                    c = r ? r.length : 0;
                  for (
                    data.finish = !0,
                      I.queue(this, t, []),
                      n && n.stop && n.stop.call(this, !0),
                      e = o.length;
                    e--;

                  )
                    o[e].elem === this &&
                      o[e].queue === t &&
                      (o[e].anim.stop(!0), o.splice(e, 1));
                  for (e = 0; e < c; e++)
                    r[e] && r[e].finish && r[e].finish.call(this);
                  delete data.finish;
                })
              );
            },
          }),
          I.each(["toggle", "show", "hide"], function (t, e) {
            var r = I.fn[e];
            I.fn[e] = function (t, n, o) {
              return null == t || "boolean" == typeof t
                ? r.apply(this, arguments)
                : this.animate(Te(e, !0), t, n, o);
            };
          }),
          I.each(
            {
              slideDown: Te("show"),
              slideUp: Te("hide"),
              slideToggle: Te("toggle"),
              fadeIn: { opacity: "show" },
              fadeOut: { opacity: "hide" },
              fadeToggle: { opacity: "toggle" },
            },
            function (t, e) {
              I.fn[t] = function (t, r, n) {
                return this.animate(e, t, r, n);
              };
            }
          ),
          (I.timers = []),
          (I.fx.tick = function () {
            var t,
              i = 0,
              e = I.timers;
            for (be = Date.now(); i < e.length; i++)
              (t = e[i])() || e[i] !== t || e.splice(i--, 1);
            e.length || I.fx.stop(), (be = void 0);
          }),
          (I.fx.timer = function (t) {
            I.timers.push(t), I.fx.start();
          }),
          (I.fx.interval = 13),
          (I.fx.start = function () {
            xe || ((xe = !0), Ee());
          }),
          (I.fx.stop = function () {
            xe = null;
          }),
          (I.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (I.fn.delay = function (time, t) {
            return (
              (time = (I.fx && I.fx.speeds[time]) || time),
              (t = t || "fx"),
              this.queue(t, function (t, e) {
                var n = r.setTimeout(t, time);
                e.stop = function () {
                  r.clearTimeout(n);
                };
              })
            );
          }),
          (function () {
            var input = T.createElement("input"),
              t = T.createElement("select").appendChild(
                T.createElement("option")
              );
            (input.type = "checkbox"),
              (k.checkOn = "" !== input.value),
              (k.optSelected = t.selected),
              ((input = T.createElement("input")).value = "t"),
              (input.type = "radio"),
              (k.radioValue = "t" === input.value);
          })();
        var Ae,
          je = I.expr.attrHandle;
        I.fn.extend({
          attr: function (t, e) {
            return lt(this, I.attr, t, e, arguments.length > 1);
          },
          removeAttr: function (t) {
            return this.each(function () {
              I.removeAttr(this, t);
            });
          },
        }),
          I.extend({
            attr: function (t, e, r) {
              var n,
                o,
                c = t.nodeType;
              if (3 !== c && 8 !== c && 2 !== c)
                return void 0 === t.getAttribute
                  ? I.prop(t, e, r)
                  : ((1 === c && I.isXMLDoc(t)) ||
                      (o =
                        I.attrHooks[e.toLowerCase()] ||
                        (I.expr.match.bool.test(e) ? Ae : void 0)),
                    void 0 !== r
                      ? null === r
                        ? void I.removeAttr(t, e)
                        : o && "set" in o && void 0 !== (n = o.set(t, r, e))
                        ? n
                        : (t.setAttribute(e, r + ""), r)
                      : o && "get" in o && null !== (n = o.get(t, e))
                      ? n
                      : null == (n = I.find.attr(t, e))
                      ? void 0
                      : n);
            },
            attrHooks: {
              type: {
                set: function (t, e) {
                  if (!k.radioValue && "radio" === e && $(t, "input")) {
                    var r = t.value;
                    return t.setAttribute("type", e), r && (t.value = r), e;
                  }
                },
              },
            },
            removeAttr: function (t, e) {
              var r,
                i = 0,
                n = e && e.match(et);
              if (n && 1 === t.nodeType)
                for (; (r = n[i++]); ) t.removeAttribute(r);
            },
          }),
          (Ae = {
            set: function (t, e, r) {
              return !1 === e ? I.removeAttr(t, r) : t.setAttribute(r, r), r;
            },
          }),
          I.each(I.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var r = je[e] || I.find.attr;
            je[e] = function (t, e, n) {
              var o,
                c,
                l = e.toLowerCase();
              return (
                n ||
                  ((c = je[l]),
                  (je[l] = o),
                  (o = null != r(t, e, n) ? l : null),
                  (je[l] = c)),
                o
              );
            };
          });
        var De = /^(?:input|select|textarea|button)$/i,
          Ie = /^(?:a|area)$/i;
        function Le(t) {
          return (t.match(et) || []).join(" ");
        }
        function $e(t) {
          return (t.getAttribute && t.getAttribute("class")) || "";
        }
        function Pe(t) {
          return Array.isArray(t)
            ? t
            : ("string" == typeof t && t.match(et)) || [];
        }
        I.fn.extend({
          prop: function (t, e) {
            return lt(this, I.prop, t, e, arguments.length > 1);
          },
          removeProp: function (t) {
            return this.each(function () {
              delete this[I.propFix[t] || t];
            });
          },
        }),
          I.extend({
            prop: function (t, e, r) {
              var n,
                o,
                c = t.nodeType;
              if (3 !== c && 8 !== c && 2 !== c)
                return (
                  (1 === c && I.isXMLDoc(t)) ||
                    ((e = I.propFix[e] || e), (o = I.propHooks[e])),
                  void 0 !== r
                    ? o && "set" in o && void 0 !== (n = o.set(t, r, e))
                      ? n
                      : (t[e] = r)
                    : o && "get" in o && null !== (n = o.get(t, e))
                    ? n
                    : t[e]
                );
            },
            propHooks: {
              tabIndex: {
                get: function (t) {
                  var e = I.find.attr(t, "tabindex");
                  return e
                    ? parseInt(e, 10)
                    : De.test(t.nodeName) || (Ie.test(t.nodeName) && t.href)
                    ? 0
                    : -1;
                },
              },
            },
            propFix: { for: "htmlFor", class: "className" },
          }),
          k.optSelected ||
            (I.propHooks.selected = {
              get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null;
              },
              set: function (t) {
                var e = t.parentNode;
                e &&
                  (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
              },
            }),
          I.each(
            [
              "tabIndex",
              "readOnly",
              "maxLength",
              "cellSpacing",
              "cellPadding",
              "rowSpan",
              "colSpan",
              "useMap",
              "frameBorder",
              "contentEditable",
            ],
            function () {
              I.propFix[this.toLowerCase()] = this;
            }
          ),
          I.fn.extend({
            addClass: function (t) {
              var e, r, n, o, i, c;
              return E(t)
                ? this.each(function (e) {
                    I(this).addClass(t.call(this, e, $e(this)));
                  })
                : (e = Pe(t)).length
                ? this.each(function () {
                    if (
                      ((n = $e(this)),
                      (r = 1 === this.nodeType && " " + Le(n) + " "))
                    ) {
                      for (i = 0; i < e.length; i++)
                        (o = e[i]),
                          r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                      (c = Le(r)), n !== c && this.setAttribute("class", c);
                    }
                  })
                : this;
            },
            removeClass: function (t) {
              var e, r, n, o, i, c;
              return E(t)
                ? this.each(function (e) {
                    I(this).removeClass(t.call(this, e, $e(this)));
                  })
                : arguments.length
                ? (e = Pe(t)).length
                  ? this.each(function () {
                      if (
                        ((n = $e(this)),
                        (r = 1 === this.nodeType && " " + Le(n) + " "))
                      ) {
                        for (i = 0; i < e.length; i++)
                          for (o = e[i]; r.indexOf(" " + o + " ") > -1; )
                            r = r.replace(" " + o + " ", " ");
                        (c = Le(r)), n !== c && this.setAttribute("class", c);
                      }
                    })
                  : this
                : this.attr("class", "");
            },
            toggleClass: function (t, e) {
              var r,
                n,
                i,
                o,
                c = typeof t,
                l = "string" === c || Array.isArray(t);
              return E(t)
                ? this.each(function (i) {
                    I(this).toggleClass(t.call(this, i, $e(this), e), e);
                  })
                : "boolean" == typeof e && l
                ? e
                  ? this.addClass(t)
                  : this.removeClass(t)
                : ((r = Pe(t)),
                  this.each(function () {
                    if (l)
                      for (o = I(this), i = 0; i < r.length; i++)
                        (n = r[i]),
                          o.hasClass(n) ? o.removeClass(n) : o.addClass(n);
                    else
                      (void 0 !== t && "boolean" !== c) ||
                        ((n = $e(this)) && vt.set(this, "__className__", n),
                        this.setAttribute &&
                          this.setAttribute(
                            "class",
                            n || !1 === t
                              ? ""
                              : vt.get(this, "__className__") || ""
                          ));
                  }));
            },
            hasClass: function (t) {
              var e,
                r,
                i = 0;
              for (e = " " + t + " "; (r = this[i++]); )
                if (1 === r.nodeType && (" " + Le($e(r)) + " ").indexOf(e) > -1)
                  return !0;
              return !1;
            },
          });
        var ze = /\r/g;
        I.fn.extend({
          val: function (t) {
            var e,
              r,
              n,
              o = this[0];
            return arguments.length
              ? ((n = E(t)),
                this.each(function (i) {
                  var r;
                  1 === this.nodeType &&
                    (null == (r = n ? t.call(this, i, I(this).val()) : t)
                      ? (r = "")
                      : "number" == typeof r
                      ? (r += "")
                      : Array.isArray(r) &&
                        (r = I.map(r, function (t) {
                          return null == t ? "" : t + "";
                        })),
                    ((e =
                      I.valHooks[this.type] ||
                      I.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in e &&
                      void 0 !== e.set(this, r, "value")) ||
                      (this.value = r));
                }))
              : o
              ? (e =
                  I.valHooks[o.type] || I.valHooks[o.nodeName.toLowerCase()]) &&
                "get" in e &&
                void 0 !== (r = e.get(o, "value"))
                ? r
                : "string" == typeof (r = o.value)
                ? r.replace(ze, "")
                : null == r
                ? ""
                : r
              : void 0;
          },
        }),
          I.extend({
            valHooks: {
              option: {
                get: function (t) {
                  var e = I.find.attr(t, "value");
                  return null != e ? e : Le(I.text(t));
                },
              },
              select: {
                get: function (t) {
                  var e,
                    option,
                    i,
                    r = t.options,
                    n = t.selectedIndex,
                    o = "select-one" === t.type,
                    c = o ? null : [],
                    l = o ? n + 1 : r.length;
                  for (i = n < 0 ? l : o ? n : 0; i < l; i++)
                    if (
                      ((option = r[i]).selected || i === n) &&
                      !option.disabled &&
                      (!option.parentNode.disabled ||
                        !$(option.parentNode, "optgroup"))
                    ) {
                      if (((e = I(option).val()), o)) return e;
                      c.push(e);
                    }
                  return c;
                },
                set: function (t, e) {
                  for (
                    var r,
                      option,
                      n = t.options,
                      o = I.makeArray(e),
                      i = n.length;
                    i--;

                  )
                    ((option = n[i]).selected =
                      I.inArray(I.valHooks.option.get(option), o) > -1) &&
                      (r = !0);
                  return r || (t.selectedIndex = -1), o;
                },
              },
            },
          }),
          I.each(["radio", "checkbox"], function () {
            (I.valHooks[this] = {
              set: function (t, e) {
                if (Array.isArray(e))
                  return (t.checked = I.inArray(I(t).val(), e) > -1);
              },
            }),
              k.checkOn ||
                (I.valHooks[this].get = function (t) {
                  return null === t.getAttribute("value") ? "on" : t.value;
                });
          });
        var Me = r.location,
          Ne = { guid: Date.now() },
          qe = /\?/;
        I.parseXML = function (data) {
          var t, e;
          if (!data || "string" != typeof data) return null;
          try {
            t = new r.DOMParser().parseFromString(data, "text/xml");
          } catch (t) {}
          return (
            (e = t && t.getElementsByTagName("parsererror")[0]),
            (t && !e) ||
              I.error(
                "Invalid XML: " +
                  (e
                    ? I.map(e.childNodes, function (t) {
                        return t.textContent;
                      }).join("\n")
                    : data)
              ),
            t
          );
        };
        var He = /^(?:focusinfocus|focusoutblur)$/,
          Fe = function (t) {
            t.stopPropagation();
          };
        I.extend(I.event, {
          trigger: function (t, data, e, n) {
            var i,
              o,
              c,
              l,
              d,
              h,
              f,
              m,
              v = [e || T],
              y = w.call(t, "type") ? t.type : t,
              x = w.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
              ((o = m = c = e = e || T),
              3 !== e.nodeType &&
                8 !== e.nodeType &&
                !He.test(y + I.event.triggered) &&
                (y.indexOf(".") > -1 &&
                  ((x = y.split(".")), (y = x.shift()), x.sort()),
                (d = y.indexOf(":") < 0 && "on" + y),
                ((t = t[I.expando]
                  ? t
                  : new I.Event(y, "object" == typeof t && t)).isTrigger = n
                  ? 2
                  : 3),
                (t.namespace = x.join(".")),
                (t.rnamespace = t.namespace
                  ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)")
                  : null),
                (t.result = void 0),
                t.target || (t.target = e),
                (data = null == data ? [t] : I.makeArray(data, [t])),
                (f = I.event.special[y] || {}),
                n || !f.trigger || !1 !== f.trigger.apply(e, data)))
            ) {
              if (!n && !f.noBubble && !C(e)) {
                for (
                  l = f.delegateType || y, He.test(l + y) || (o = o.parentNode);
                  o;
                  o = o.parentNode
                )
                  v.push(o), (c = o);
                c === (e.ownerDocument || T) &&
                  v.push(c.defaultView || c.parentWindow || r);
              }
              for (i = 0; (o = v[i++]) && !t.isPropagationStopped(); )
                (m = o),
                  (t.type = i > 1 ? l : f.bindType || y),
                  (h =
                    (vt.get(o, "events") || Object.create(null))[t.type] &&
                    vt.get(o, "handle")) && h.apply(o, data),
                  (h = d && o[d]) &&
                    h.apply &&
                    gt(o) &&
                    ((t.result = h.apply(o, data)),
                    !1 === t.result && t.preventDefault());
              return (
                (t.type = y),
                n ||
                  t.isDefaultPrevented() ||
                  (f._default && !1 !== f._default.apply(v.pop(), data)) ||
                  !gt(e) ||
                  (d &&
                    E(e[y]) &&
                    !C(e) &&
                    ((c = e[d]) && (e[d] = null),
                    (I.event.triggered = y),
                    t.isPropagationStopped() && m.addEventListener(y, Fe),
                    e[y](),
                    t.isPropagationStopped() && m.removeEventListener(y, Fe),
                    (I.event.triggered = void 0),
                    c && (e[d] = c))),
                t.result
              );
            }
          },
          simulate: function (t, e, r) {
            var n = I.extend(new I.Event(), r, { type: t, isSimulated: !0 });
            I.event.trigger(n, null, e);
          },
        }),
          I.fn.extend({
            trigger: function (t, data) {
              return this.each(function () {
                I.event.trigger(t, data, this);
              });
            },
            triggerHandler: function (t, data) {
              var e = this[0];
              if (e) return I.event.trigger(t, data, e, !0);
            },
          });
        var Re = /\[\]$/,
          Be = /\r?\n/g,
          We = /^(?:submit|button|image|reset|file)$/i,
          Ue = /^(?:input|select|textarea|keygen)/i;
        function Ve(t, e, r, n) {
          var o;
          if (Array.isArray(e))
            I.each(e, function (i, e) {
              r || Re.test(t)
                ? n(t, e)
                : Ve(
                    t +
                      "[" +
                      ("object" == typeof e && null != e ? i : "") +
                      "]",
                    e,
                    r,
                    n
                  );
            });
          else if (r || "object" !== A(e)) n(t, e);
          else for (o in e) Ve(t + "[" + o + "]", e[o], r, n);
        }
        (I.param = function (a, t) {
          var e,
            s = [],
            r = function (t, e) {
              var r = E(e) ? e() : e;
              s[s.length] =
                encodeURIComponent(t) +
                "=" +
                encodeURIComponent(null == r ? "" : r);
            };
          if (null == a) return "";
          if (Array.isArray(a) || (a.jquery && !I.isPlainObject(a)))
            I.each(a, function () {
              r(this.name, this.value);
            });
          else for (e in a) Ve(e, a[e], t, r);
          return s.join("&");
        }),
          I.fn.extend({
            serialize: function () {
              return I.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var t = I.prop(this, "elements");
                return t ? I.makeArray(t) : this;
              })
                .filter(function () {
                  var t = this.type;
                  return (
                    this.name &&
                    !I(this).is(":disabled") &&
                    Ue.test(this.nodeName) &&
                    !We.test(t) &&
                    (this.checked || !Lt.test(t))
                  );
                })
                .map(function (t, e) {
                  var r = I(this).val();
                  return null == r
                    ? null
                    : Array.isArray(r)
                    ? I.map(r, function (t) {
                        return { name: e.name, value: t.replace(Be, "\r\n") };
                      })
                    : { name: e.name, value: r.replace(Be, "\r\n") };
                })
                .get();
            },
          });
        var Ye = /%20/g,
          Ze = /#.*$/,
          Xe = /([?&])_=[^&]*/,
          Qe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Ge = /^(?:GET|HEAD)$/,
          Ke = /^\/\//,
          Je = {},
          er = {},
          rr = "*/".concat("*"),
          nr = T.createElement("a");
        function ir(t) {
          return function (e, r) {
            "string" != typeof e && ((r = e), (e = "*"));
            var n,
              i = 0,
              o = e.toLowerCase().match(et) || [];
            if (E(r))
              for (; (n = o[i++]); )
                "+" === n[0]
                  ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(r))
                  : (t[n] = t[n] || []).push(r);
          };
        }
        function or(t, e, r, n) {
          var o = {},
            c = t === er;
          function l(d) {
            var h;
            return (
              (o[d] = !0),
              I.each(t[d] || [], function (t, d) {
                var f = d(e, r, n);
                return "string" != typeof f || c || o[f]
                  ? c
                    ? !(h = f)
                    : void 0
                  : (e.dataTypes.unshift(f), l(f), !1);
              }),
              h
            );
          }
          return l(e.dataTypes[0]) || (!o["*"] && l("*"));
        }
        function ar(t, e) {
          var r,
            n,
            o = I.ajaxSettings.flatOptions || {};
          for (r in e)
            void 0 !== e[r] && ((o[r] ? t : n || (n = {}))[r] = e[r]);
          return n && I.extend(!0, t, n), t;
        }
        (nr.href = Me.href),
          I.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: Me.href,
              type: "GET",
              isLocal:
                /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                  Me.protocol
                ),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": rr,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
              },
              converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": I.parseXML,
              },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (t, e) {
              return e ? ar(ar(t, I.ajaxSettings), e) : ar(I.ajaxSettings, t);
            },
            ajaxPrefilter: ir(Je),
            ajaxTransport: ir(er),
            ajax: function (t, e) {
              "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
              var n,
                o,
                c,
                l,
                d,
                h,
                f,
                m,
                i,
                v,
                s = I.ajaxSetup({}, e),
                y = s.context || s,
                w = s.context && (y.nodeType || y.jquery) ? I(y) : I.event,
                x = I.Deferred(),
                _ = I.Callbacks("once memory"),
                k = s.statusCode || {},
                E = {},
                C = {},
                S = "canceled",
                O = {
                  readyState: 0,
                  getResponseHeader: function (t) {
                    var e;
                    if (f) {
                      if (!l)
                        for (l = {}; (e = Qe.exec(c)); )
                          l[e[1].toLowerCase() + " "] = (
                            l[e[1].toLowerCase() + " "] || []
                          ).concat(e[2]);
                      e = l[t.toLowerCase() + " "];
                    }
                    return null == e ? null : e.join(", ");
                  },
                  getAllResponseHeaders: function () {
                    return f ? c : null;
                  },
                  setRequestHeader: function (t, e) {
                    return (
                      null == f &&
                        ((t = C[t.toLowerCase()] = C[t.toLowerCase()] || t),
                        (E[t] = e)),
                      this
                    );
                  },
                  overrideMimeType: function (t) {
                    return null == f && (s.mimeType = t), this;
                  },
                  statusCode: function (map) {
                    var code;
                    if (map)
                      if (f) O.always(map[O.status]);
                      else for (code in map) k[code] = [k[code], map[code]];
                    return this;
                  },
                  abort: function (t) {
                    var e = t || S;
                    return n && n.abort(e), A(0, e), this;
                  },
                };
              if (
                (x.promise(O),
                (s.url = ((t || s.url || Me.href) + "").replace(
                  Ke,
                  Me.protocol + "//"
                )),
                (s.type = e.method || e.type || s.method || s.type),
                (s.dataTypes = (s.dataType || "*").toLowerCase().match(et) || [
                  "",
                ]),
                null == s.crossDomain)
              ) {
                h = T.createElement("a");
                try {
                  (h.href = s.url),
                    (h.href = h.href),
                    (s.crossDomain =
                      nr.protocol + "//" + nr.host !=
                      h.protocol + "//" + h.host);
                } catch (t) {
                  s.crossDomain = !0;
                }
              }
              if (
                (s.data &&
                  s.processData &&
                  "string" != typeof s.data &&
                  (s.data = I.param(s.data, s.traditional)),
                or(Je, s, e, O),
                f)
              )
                return O;
              for (i in ((m = I.event && s.global) &&
                0 == I.active++ &&
                I.event.trigger("ajaxStart"),
              (s.type = s.type.toUpperCase()),
              (s.hasContent = !Ge.test(s.type)),
              (o = s.url.replace(Ze, "")),
              s.hasContent
                ? s.data &&
                  s.processData &&
                  0 ===
                    (s.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  (s.data = s.data.replace(Ye, "+"))
                : ((v = s.url.slice(o.length)),
                  s.data &&
                    (s.processData || "string" == typeof s.data) &&
                    ((o += (qe.test(o) ? "&" : "?") + s.data), delete s.data),
                  !1 === s.cache &&
                    ((o = o.replace(Xe, "$1")),
                    (v = (qe.test(o) ? "&" : "?") + "_=" + Ne.guid++ + v)),
                  (s.url = o + v)),
              s.ifModified &&
                (I.lastModified[o] &&
                  O.setRequestHeader("If-Modified-Since", I.lastModified[o]),
                I.etag[o] && O.setRequestHeader("If-None-Match", I.etag[o])),
              ((s.data && s.hasContent && !1 !== s.contentType) ||
                e.contentType) &&
                O.setRequestHeader("Content-Type", s.contentType),
              O.setRequestHeader(
                "Accept",
                s.dataTypes[0] && s.accepts[s.dataTypes[0]]
                  ? s.accepts[s.dataTypes[0]] +
                      ("*" !== s.dataTypes[0] ? ", " + rr + "; q=0.01" : "")
                  : s.accepts["*"]
              ),
              s.headers))
                O.setRequestHeader(i, s.headers[i]);
              if (s.beforeSend && (!1 === s.beforeSend.call(y, O, s) || f))
                return O.abort();
              if (
                ((S = "abort"),
                _.add(s.complete),
                O.done(s.success),
                O.fail(s.error),
                (n = or(er, s, e, O)))
              ) {
                if (((O.readyState = 1), m && w.trigger("ajaxSend", [O, s]), f))
                  return O;
                s.async &&
                  s.timeout > 0 &&
                  (d = r.setTimeout(function () {
                    O.abort("timeout");
                  }, s.timeout));
                try {
                  (f = !1), n.send(E, A);
                } catch (t) {
                  if (f) throw t;
                  A(-1, t);
                }
              } else A(-1, "No Transport");
              function A(t, e, l, h) {
                var v,
                  E,
                  C,
                  T,
                  S,
                  A = e;
                f ||
                  ((f = !0),
                  d && r.clearTimeout(d),
                  (n = void 0),
                  (c = h || ""),
                  (O.readyState = t > 0 ? 4 : 0),
                  (v = (t >= 200 && t < 300) || 304 === t),
                  l &&
                    (T = (function (s, t, e) {
                      for (
                        var r, n, o, c, l = s.contents, d = s.dataTypes;
                        "*" === d[0];

                      )
                        d.shift(),
                          void 0 === r &&
                            (r =
                              s.mimeType ||
                              t.getResponseHeader("Content-Type"));
                      if (r)
                        for (n in l)
                          if (l[n] && l[n].test(r)) {
                            d.unshift(n);
                            break;
                          }
                      if (d[0] in e) o = d[0];
                      else {
                        for (n in e) {
                          if (!d[0] || s.converters[n + " " + d[0]]) {
                            o = n;
                            break;
                          }
                          c || (c = n);
                        }
                        o = o || c;
                      }
                      if (o) return o !== d[0] && d.unshift(o), e[o];
                    })(s, O, l)),
                  !v &&
                    I.inArray("script", s.dataTypes) > -1 &&
                    I.inArray("json", s.dataTypes) < 0 &&
                    (s.converters["text script"] = function () {}),
                  (T = (function (s, t, e, r) {
                    var n,
                      o,
                      c,
                      l,
                      d,
                      h = {},
                      f = s.dataTypes.slice();
                    if (f[1])
                      for (c in s.converters)
                        h[c.toLowerCase()] = s.converters[c];
                    for (o = f.shift(); o; )
                      if (
                        (s.responseFields[o] && (e[s.responseFields[o]] = t),
                        !d &&
                          r &&
                          s.dataFilter &&
                          (t = s.dataFilter(t, s.dataType)),
                        (d = o),
                        (o = f.shift()))
                      )
                        if ("*" === o) o = d;
                        else if ("*" !== d && d !== o) {
                          if (!(c = h[d + " " + o] || h["* " + o]))
                            for (n in h)
                              if (
                                (l = n.split(" "))[1] === o &&
                                (c = h[d + " " + l[0]] || h["* " + l[0]])
                              ) {
                                !0 === c
                                  ? (c = h[n])
                                  : !0 !== h[n] &&
                                    ((o = l[0]), f.unshift(l[1]));
                                break;
                              }
                          if (!0 !== c)
                            if (c && s.throws) t = c(t);
                            else
                              try {
                                t = c(t);
                              } catch (t) {
                                return {
                                  state: "parsererror",
                                  error: c
                                    ? t
                                    : "No conversion from " + d + " to " + o,
                                };
                              }
                        }
                    return { state: "success", data: t };
                  })(s, T, O, v)),
                  v
                    ? (s.ifModified &&
                        ((S = O.getResponseHeader("Last-Modified")) &&
                          (I.lastModified[o] = S),
                        (S = O.getResponseHeader("etag")) && (I.etag[o] = S)),
                      204 === t || "HEAD" === s.type
                        ? (A = "nocontent")
                        : 304 === t
                        ? (A = "notmodified")
                        : ((A = T.state), (E = T.data), (v = !(C = T.error))))
                    : ((C = A), (!t && A) || ((A = "error"), t < 0 && (t = 0))),
                  (O.status = t),
                  (O.statusText = (e || A) + ""),
                  v ? x.resolveWith(y, [E, A, O]) : x.rejectWith(y, [O, A, C]),
                  O.statusCode(k),
                  (k = void 0),
                  m &&
                    w.trigger(v ? "ajaxSuccess" : "ajaxError", [
                      O,
                      s,
                      v ? E : C,
                    ]),
                  _.fireWith(y, [O, A]),
                  m &&
                    (w.trigger("ajaxComplete", [O, s]),
                    --I.active || I.event.trigger("ajaxStop")));
              }
              return O;
            },
            getJSON: function (t, data, e) {
              return I.get(t, data, e, "json");
            },
            getScript: function (t, e) {
              return I.get(t, void 0, e, "script");
            },
          }),
          I.each(["get", "post"], function (t, e) {
            I[e] = function (t, data, r, n) {
              return (
                E(data) && ((n = n || r), (r = data), (data = void 0)),
                I.ajax(
                  I.extend(
                    { url: t, type: e, dataType: n, data: data, success: r },
                    I.isPlainObject(t) && t
                  )
                )
              );
            };
          }),
          I.ajaxPrefilter(function (s) {
            var i;
            for (i in s.headers)
              "content-type" === i.toLowerCase() &&
                (s.contentType = s.headers[i] || "");
          }),
          (I._evalUrl = function (t, e, r) {
            return I.ajax({
              url: t,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              converters: { "text script": function () {} },
              dataFilter: function (t) {
                I.globalEval(t, e, r);
              },
            });
          }),
          I.fn.extend({
            wrapAll: function (html) {
              var t;
              return (
                this[0] &&
                  (E(html) && (html = html.call(this[0])),
                  (t = I(html, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                  t
                    .map(function () {
                      for (var t = this; t.firstElementChild; )
                        t = t.firstElementChild;
                      return t;
                    })
                    .append(this)),
                this
              );
            },
            wrapInner: function (html) {
              return E(html)
                ? this.each(function (i) {
                    I(this).wrapInner(html.call(this, i));
                  })
                : this.each(function () {
                    var t = I(this),
                      e = t.contents();
                    e.length ? e.wrapAll(html) : t.append(html);
                  });
            },
            wrap: function (html) {
              var t = E(html);
              return this.each(function (i) {
                I(this).wrapAll(t ? html.call(this, i) : html);
              });
            },
            unwrap: function (t) {
              return (
                this.parent(t)
                  .not("body")
                  .each(function () {
                    I(this).replaceWith(this.childNodes);
                  }),
                this
              );
            },
          }),
          (I.expr.pseudos.hidden = function (t) {
            return !I.expr.pseudos.visible(t);
          }),
          (I.expr.pseudos.visible = function (t) {
            return !!(
              t.offsetWidth ||
              t.offsetHeight ||
              t.getClientRects().length
            );
          }),
          (I.ajaxSettings.xhr = function () {
            try {
              return new r.XMLHttpRequest();
            } catch (t) {}
          });
        var sr = { 0: 200, 1223: 204 },
          cr = I.ajaxSettings.xhr();
        (k.cors = !!cr && "withCredentials" in cr),
          (k.ajax = cr = !!cr),
          I.ajaxTransport(function (t) {
            var e, n;
            if (k.cors || (cr && !t.crossDomain))
              return {
                send: function (o, c) {
                  var i,
                    l = t.xhr();
                  if (
                    (l.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                  )
                    for (i in t.xhrFields) l[i] = t.xhrFields[i];
                  for (i in (t.mimeType &&
                    l.overrideMimeType &&
                    l.overrideMimeType(t.mimeType),
                  t.crossDomain ||
                    o["X-Requested-With"] ||
                    (o["X-Requested-With"] = "XMLHttpRequest"),
                  o))
                    l.setRequestHeader(i, o[i]);
                  (e = function (t) {
                    return function () {
                      e &&
                        ((e =
                          n =
                          l.onload =
                          l.onerror =
                          l.onabort =
                          l.ontimeout =
                          l.onreadystatechange =
                            null),
                        "abort" === t
                          ? l.abort()
                          : "error" === t
                          ? "number" != typeof l.status
                            ? c(0, "error")
                            : c(l.status, l.statusText)
                          : c(
                              sr[l.status] || l.status,
                              l.statusText,
                              "text" !== (l.responseType || "text") ||
                                "string" != typeof l.responseText
                                ? { binary: l.response }
                                : { text: l.responseText },
                              l.getAllResponseHeaders()
                            ));
                    };
                  }),
                    (l.onload = e()),
                    (n = l.onerror = l.ontimeout = e("error")),
                    void 0 !== l.onabort
                      ? (l.onabort = n)
                      : (l.onreadystatechange = function () {
                          4 === l.readyState &&
                            r.setTimeout(function () {
                              e && n();
                            });
                        }),
                    (e = e("abort"));
                  try {
                    l.send((t.hasContent && t.data) || null);
                  } catch (t) {
                    if (e) throw t;
                  }
                },
                abort: function () {
                  e && e();
                },
              };
          }),
          I.ajaxPrefilter(function (s) {
            s.crossDomain && (s.contents.script = !1);
          }),
          I.ajaxSetup({
            accepts: {
              script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              "text script": function (text) {
                return I.globalEval(text), text;
              },
            },
          }),
          I.ajaxPrefilter("script", function (s) {
            void 0 === s.cache && (s.cache = !1),
              s.crossDomain && (s.type = "GET");
          }),
          I.ajaxTransport("script", function (s) {
            var script, t;
            if (s.crossDomain || s.scriptAttrs)
              return {
                send: function (e, r) {
                  (script = I("<script>")
                    .attr(s.scriptAttrs || {})
                    .prop({ charset: s.scriptCharset, src: s.url })
                    .on(
                      "load error",
                      (t = function (e) {
                        script.remove(),
                          (t = null),
                          e && r("error" === e.type ? 404 : 200, e.type);
                      })
                    )),
                    T.head.appendChild(script[0]);
                },
                abort: function () {
                  t && t();
                },
              };
          });
        var body,
          lr = [],
          ur = /(=)\?(?=&|$)|\?\?/;
        I.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var t = lr.pop() || I.expando + "_" + Ne.guid++;
            return (this[t] = !0), t;
          },
        }),
          I.ajaxPrefilter("json jsonp", function (s, t, e) {
            var n,
              o,
              c,
              l =
                !1 !== s.jsonp &&
                (ur.test(s.url)
                  ? "url"
                  : "string" == typeof s.data &&
                    0 ===
                      (s.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    ur.test(s.data) &&
                    "data");
            if (l || "jsonp" === s.dataTypes[0])
              return (
                (n = s.jsonpCallback =
                  E(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback),
                l
                  ? (s[l] = s[l].replace(ur, "$1" + n))
                  : !1 !== s.jsonp &&
                    (s.url += (qe.test(s.url) ? "&" : "?") + s.jsonp + "=" + n),
                (s.converters["script json"] = function () {
                  return c || I.error(n + " was not called"), c[0];
                }),
                (s.dataTypes[0] = "json"),
                (o = r[n]),
                (r[n] = function () {
                  c = arguments;
                }),
                e.always(function () {
                  void 0 === o ? I(r).removeProp(n) : (r[n] = o),
                    s[n] && ((s.jsonpCallback = t.jsonpCallback), lr.push(n)),
                    c && E(o) && o(c[0]),
                    (c = o = void 0);
                }),
                "script"
              );
          }),
          (k.createHTMLDocument =
            (((body = T.implementation.createHTMLDocument("").body).innerHTML =
              "<form></form><form></form>"),
            2 === body.childNodes.length)),
          (I.parseHTML = function (data, t, e) {
            return "string" != typeof data
              ? []
              : ("boolean" == typeof t && ((e = t), (t = !1)),
                t ||
                  (k.createHTMLDocument
                    ? (((base = (t =
                        T.implementation.createHTMLDocument("")).createElement(
                        "base"
                      )).href = T.location.href),
                      t.head.appendChild(base))
                    : (t = T)),
                (n = !e && []),
                (r = Z.exec(data))
                  ? [t.createElement(r[1])]
                  : ((r = Ht([data], t, n)),
                    n && n.length && I(n).remove(),
                    I.merge([], r.childNodes)));
            var base, r, n;
          }),
          (I.fn.load = function (t, e, r) {
            var n,
              o,
              c,
              l = this,
              d = t.indexOf(" ");
            return (
              d > -1 && ((n = Le(t.slice(d))), (t = t.slice(0, d))),
              E(e)
                ? ((r = e), (e = void 0))
                : e && "object" == typeof e && (o = "POST"),
              l.length > 0 &&
                I.ajax({ url: t, type: o || "GET", dataType: "html", data: e })
                  .done(function (t) {
                    (c = arguments),
                      l.html(n ? I("<div>").append(I.parseHTML(t)).find(n) : t);
                  })
                  .always(
                    r &&
                      function (t, e) {
                        l.each(function () {
                          r.apply(this, c || [t.responseText, e, t]);
                        });
                      }
                  ),
              this
            );
          }),
          (I.expr.pseudos.animated = function (t) {
            return I.grep(I.timers, function (e) {
              return t === e.elem;
            }).length;
          }),
          (I.offset = {
            setOffset: function (t, e, i) {
              var r,
                n,
                o,
                c,
                l,
                d,
                h = I.css(t, "position"),
                f = I(t),
                m = {};
              "static" === h && (t.style.position = "relative"),
                (l = f.offset()),
                (o = I.css(t, "top")),
                (d = I.css(t, "left")),
                ("absolute" === h || "fixed" === h) &&
                (o + d).indexOf("auto") > -1
                  ? ((c = (r = f.position()).top), (n = r.left))
                  : ((c = parseFloat(o) || 0), (n = parseFloat(d) || 0)),
                E(e) && (e = e.call(t, i, I.extend({}, l))),
                null != e.top && (m.top = e.top - l.top + c),
                null != e.left && (m.left = e.left - l.left + n),
                "using" in e ? e.using.call(t, m) : f.css(m);
            },
          }),
          I.fn.extend({
            offset: function (t) {
              if (arguments.length)
                return void 0 === t
                  ? this
                  : this.each(function (i) {
                      I.offset.setOffset(this, t, i);
                    });
              var rect,
                e,
                r = this[0];
              return r
                ? r.getClientRects().length
                  ? ((rect = r.getBoundingClientRect()),
                    (e = r.ownerDocument.defaultView),
                    {
                      top: rect.top + e.pageYOffset,
                      left: rect.left + e.pageXOffset,
                    })
                  : { top: 0, left: 0 }
                : void 0;
            },
            position: function () {
              if (this[0]) {
                var t,
                  e,
                  r,
                  n = this[0],
                  o = { top: 0, left: 0 };
                if ("fixed" === I.css(n, "position"))
                  e = n.getBoundingClientRect();
                else {
                  for (
                    e = this.offset(),
                      r = n.ownerDocument,
                      t = n.offsetParent || r.documentElement;
                    t &&
                    (t === r.body || t === r.documentElement) &&
                    "static" === I.css(t, "position");

                  )
                    t = t.parentNode;
                  t &&
                    t !== n &&
                    1 === t.nodeType &&
                    (((o = I(t).offset()).top += I.css(
                      t,
                      "borderTopWidth",
                      !0
                    )),
                    (o.left += I.css(t, "borderLeftWidth", !0)));
                }
                return {
                  top: e.top - o.top - I.css(n, "marginTop", !0),
                  left: e.left - o.left - I.css(n, "marginLeft", !0),
                };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (
                  var t = this.offsetParent;
                  t && "static" === I.css(t, "position");

                )
                  t = t.offsetParent;
                return t || Ct;
              });
            },
          }),
          I.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (t, e) {
              var r = "pageYOffset" === e;
              I.fn[t] = function (n) {
                return lt(
                  this,
                  function (t, n, o) {
                    var c;
                    if (
                      (C(t) ? (c = t) : 9 === t.nodeType && (c = t.defaultView),
                      void 0 === o)
                    )
                      return c ? c[e] : t[n];
                    c
                      ? c.scrollTo(r ? c.pageXOffset : o, r ? o : c.pageYOffset)
                      : (t[n] = o);
                  },
                  t,
                  n,
                  arguments.length
                );
              };
            }
          ),
          I.each(["top", "left"], function (t, e) {
            I.cssHooks[e] = ce(k.pixelPosition, function (t, r) {
              if (r)
                return (
                  (r = se(t, e)), re.test(r) ? I(t).position()[e] + "px" : r
                );
            });
          }),
          I.each({ Height: "height", Width: "width" }, function (t, e) {
            I.each(
              { padding: "inner" + t, content: e, "": "outer" + t },
              function (r, n) {
                I.fn[n] = function (o, c) {
                  var l = arguments.length && (r || "boolean" != typeof o),
                    d = r || (!0 === o || !0 === c ? "margin" : "border");
                  return lt(
                    this,
                    function (e, r, o) {
                      var c;
                      return C(e)
                        ? 0 === n.indexOf("outer")
                          ? e["inner" + t]
                          : e.document.documentElement["client" + t]
                        : 9 === e.nodeType
                        ? ((c = e.documentElement),
                          Math.max(
                            e.body["scroll" + t],
                            c["scroll" + t],
                            e.body["offset" + t],
                            c["offset" + t],
                            c["client" + t]
                          ))
                        : void 0 === o
                        ? I.css(e, r, d)
                        : I.style(e, r, o, d);
                    },
                    e,
                    l ? o : void 0,
                    l
                  );
                };
              }
            );
          }),
          I.each(
            [
              "ajaxStart",
              "ajaxStop",
              "ajaxComplete",
              "ajaxError",
              "ajaxSuccess",
              "ajaxSend",
            ],
            function (t, e) {
              I.fn[e] = function (t) {
                return this.on(e, t);
              };
            }
          ),
          I.fn.extend({
            bind: function (t, data, e) {
              return this.on(t, null, data, e);
            },
            unbind: function (t, e) {
              return this.off(t, null, e);
            },
            delegate: function (t, e, data, r) {
              return this.on(e, t, data, r);
            },
            undelegate: function (t, e, r) {
              return 1 === arguments.length
                ? this.off(t, "**")
                : this.off(e, t || "**", r);
            },
            hover: function (t, e) {
              return this.on("mouseenter", t).on("mouseleave", e || t);
            },
          }),
          I.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
              " "
            ),
            function (t, e) {
              I.fn[e] = function (data, t) {
                return arguments.length > 0
                  ? this.on(e, null, data, t)
                  : this.trigger(e);
              };
            }
          );
        var dr = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        (I.proxy = function (t, e) {
          var r, n, o;
          if (("string" == typeof e && ((r = t[e]), (e = t), (t = r)), E(t)))
            return (
              (n = d.call(arguments, 2)),
              (o = function () {
                return t.apply(e || this, n.concat(d.call(arguments)));
              }),
              (o.guid = t.guid = t.guid || I.guid++),
              o
            );
        }),
          (I.holdReady = function (t) {
            t ? I.readyWait++ : I.ready(!0);
          }),
          (I.isArray = Array.isArray),
          (I.parseJSON = JSON.parse),
          (I.nodeName = $),
          (I.isFunction = E),
          (I.isWindow = C),
          (I.camelCase = ft),
          (I.type = A),
          (I.now = Date.now),
          (I.isNumeric = function (t) {
            var e = I.type(t);
            return (
              ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            );
          }),
          (I.trim = function (text) {
            return null == text ? "" : (text + "").replace(dr, "$1");
          }),
          void 0 ===
            (n = function () {
              return I;
            }.apply(e, [])) || (t.exports = n);
        var pr = r.jQuery,
          fr = r.$;
        return (
          (I.noConflict = function (t) {
            return (
              r.$ === I && (r.$ = fr), t && r.jQuery === I && (r.jQuery = pr), I
            );
          }),
          void 0 === o && (r.jQuery = r.$ = I),
          I
        );
      });
    },
    246: function (t, e, r) {
      (function (t) {
        t.installComponents = function (component, t) {
          var r =
            "function" == typeof component.exports
              ? component.exports.extendOptions
              : component.options;
          for (var i in ("function" == typeof component.exports &&
            (r.components = component.exports.options.components),
          (r.components = r.components || {}),
          t))
            r.components[i] = r.components[i] || t[i];
          r.functional &&
            (function (component, t) {
              if (component.exports[e]) return;
              component.exports[e] = !0;
              var r = component.exports.render;
              component.exports.render = function (e, n) {
                return r(
                  e,
                  Object.assign({}, n, {
                    _c: function (e, a, b) {
                      return n._c(t[e] || e, a, b);
                    },
                  })
                );
              };
            })(component, r.components);
        };
        var e = "_functionalComponents";
      }).call(this, r(49));
    },
    26: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = new ((function () {
        function t() {
          this._instances = {
            Accordion: {},
            Carousel: {},
            Collapse: {},
            Dial: {},
            Dismiss: {},
            Drawer: {},
            Dropdown: {},
            Modal: {},
            Popover: {},
            Tabs: {},
            Tooltip: {},
            InputCounter: {},
          };
        }
        return (
          (t.prototype.addInstance = function (component, t, e, r) {
            if ((void 0 === r && (r = !1), !this._instances[component]))
              return (
                console.warn(
                  "Flowbite: Component ".concat(component, " does not exist.")
                ),
                !1
              );
            !this._instances[component][e] || r
              ? (r &&
                  this._instances[component][e] &&
                  this._instances[component][e].destroyAndRemoveInstance(),
                (this._instances[component][e || this._generateRandomId()] = t))
              : console.warn(
                  "Flowbite: Instance with ID ".concat(e, " already exists.")
                );
          }),
          (t.prototype.getAllInstances = function () {
            return this._instances;
          }),
          (t.prototype.getInstances = function (component) {
            return this._instances[component]
              ? this._instances[component]
              : (console.warn(
                  "Flowbite: Component ".concat(component, " does not exist.")
                ),
                !1);
          }),
          (t.prototype.getInstance = function (component, t) {
            if (this._componentAndInstanceCheck(component, t)) {
              if (this._instances[component][t])
                return this._instances[component][t];
              console.warn(
                "Flowbite: Instance with ID ".concat(t, " does not exist.")
              );
            }
          }),
          (t.prototype.destroyAndRemoveInstance = function (component, t) {
            this._componentAndInstanceCheck(component, t) &&
              (this.destroyInstanceObject(component, t),
              this.removeInstance(component, t));
          }),
          (t.prototype.removeInstance = function (component, t) {
            this._componentAndInstanceCheck(component, t) &&
              delete this._instances[component][t];
          }),
          (t.prototype.destroyInstanceObject = function (component, t) {
            this._componentAndInstanceCheck(component, t) &&
              this._instances[component][t].destroy();
          }),
          (t.prototype.instanceExists = function (component, t) {
            return (
              !!this._instances[component] && !!this._instances[component][t]
            );
          }),
          (t.prototype._generateRandomId = function () {
            return Math.random().toString(36).substr(2, 9);
          }),
          (t.prototype._componentAndInstanceCheck = function (component, t) {
            return this._instances[component]
              ? !!this._instances[component][t] ||
                  (console.warn(
                    "Flowbite: Instance with ID ".concat(t, " does not exist.")
                  ),
                  !1)
              : (console.warn(
                  "Flowbite: Component ".concat(component, " does not exist.")
                ),
                !1);
          }),
          t
        );
      })())();
      (e.default = n),
        "undefined" != typeof window && (window.FlowbiteInstances = n);
    },
    297: function (t, e, r) {
      var content = r(298);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(88).default)("6f4e3760", content, !0, { sourceMap: !1 });
    },
    298: function (t, e, r) {
      var n = r(87)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".vue-swatches__check__wrapper{height:100%;position:absolute;width:100%}.vue-swatches__check__circle{background-color:rgba(0,0,0,.15);border-radius:50%;height:21px;width:21px}.vue-swatches__check__path{fill:#fff}.vue-swatches__swatch{display:inline-block;font-size:0;position:relative}.vue-swatches__swatch:focus,.vue-swatches__swatch:hover{box-shadow:inset 0 0 2px rgba(0,0,0,.75);opacity:.9;outline:none}.vue-swatches__swatch.vue-swatches__swatch--border,.vue-swatches__swatch.vue-swatches__swatch--selected{box-shadow:inset 0 0 2px rgba(0,0,0,.75)}.vue-swatches__swatch__label{color:#666;font-size:10px;font-weight:700;left:0;position:absolute;right:0;text-align:center}.vue-swatches__swatch .vue-swatches__diagonal__wrapper{position:absolute}fieldset[disabled] .vue-swatches{pointer-events:none}.vue-swatches{display:inline-block;outline:none;position:relative}.vue-swatches__trigger__wrapper{cursor:pointer;display:inline-block}.vue-swatches__trigger.vue-swatches--is-empty{border:2px solid #ccc}.vue-swatches__trigger.vue-swatches--is-disabled{cursor:not-allowed}.vue-swatches__container{box-sizing:content-box}.vue-swatches__container.vue-swatches--inline{font-size:0}.vue-swatches__container:not(.vue-swatches--inline){border-radius:5px;box-shadow:0 2px 3px hsla(0,0%,4%,.2),0 0 0 1px hsla(0,0%,4%,.2);display:block;overflow:auto;position:absolute;z-index:50}.vue-swatches__wrapper{background-color:inherit;box-sizing:content-box}.vue-swatches__row{font-size:0}.vue-swatches__fallback__wrapper{display:table}.vue-swatches__fallback__input--wrapper{display:table-cell;font-size:14px;padding-right:10px;width:100%}.vue-swatches__fallback__input{background:#fff;border:1px solid #dcdcdc;border-radius:5px;color:#35495e;padding-bottom:6px;padding-top:6px;width:100%}.vue-swatches__fallback__button{background-color:#3571c8;border:0;border-radius:5px;color:#fff;cursor:pointer;display:table-cell;font-weight:700;padding:6px 15px}.vue-swatches-show-hide-enter-active,.vue-swatches-show-hide-leave-active{transition:all .3s ease}.vue-swatches-show-hide-enter,.vue-swatches-show-hide-leave-active{opacity:0}.vue-swatches--has-children-centered{align-items:center;display:flex;justify-content:center}.vue-swatches__diagonal__wrapper{height:100%;width:100%}.vue-swatches__diagonal{background:linear-gradient(to top right,transparent,transparent calc(50% - 2.4px),#de080a 50%,transparent calc(50% + 2.4px),transparent);height:75%;width:75%}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    299: function (t, e, r) {
      var content = r(300);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(88).default)("65b97e00", content, !0, { sourceMap: !1 });
    },
    300: function (t, e, r) {
      var n = r(87)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        "/*! tailwindcss v3.3.7 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-feature-settings:normal;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-feature-settings:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::-moz-placeholder, textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}[multiple],[type=date],[type=datetime-local],[type=email],[type=month],[type=number],[type=password],[type=search],[type=tel],[type=text],[type=time],[type=url],[type=week],input:where(:not([type])),select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-radius:0;border-width:1px;font-size:1rem;line-height:1.5rem;padding:.5rem .75rem;--tw-shadow:0 0 transparent}[multiple]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=email]:focus,[type=month]:focus,[type=number]:focus,[type=password]:focus,[type=search]:focus,[type=tel]:focus,[type=text]:focus,[type=time]:focus,[type=url]:focus,[type=week]:focus,input:where(:not([type])):focus,select:focus,textarea:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);border-color:#2563eb;box-shadow:/*!*/ /*!*/ 0 0 0 0 #fff,/*!*/ /*!*/ 0 0 0 1px #2563eb,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::-moz-placeholder, textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-meridiem-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-year-field{padding-bottom:0;padding-top:0}select{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E\");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}[multiple],[size]:where(select:not([size=\"1\"])){background-image:none;background-position:0 0;background-repeat:repeat;background-size:auto auto;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:inherit;print-color-adjust:inherit}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;background-origin:border-box;border-color:#6b7280;border-width:1px;color:#2563eb;display:inline-block;flex-shrink:0;height:1rem;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;width:1rem;--tw-shadow:0 0 transparent}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:/*!*/ /*!*/ 0 0 0 2px #fff,/*!*/ /*!*/ 0 0 0 4px #2563eb,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[type=checkbox]:checked,[type=radio]:checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}[type=checkbox]:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 16 16'%3E%3Cpath d='M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0'/%3E%3C/svg%3E\")}@media (forced-colors:active) {[type=checkbox]:checked{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=radio]:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 16 16'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E\")}@media (forced-colors:active) {[type=radio]:checked{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:checked:focus,[type=checkbox]:checked:hover,[type=radio]:checked:focus,[type=radio]:checked:hover{background-color:currentColor;border-color:transparent}[type=checkbox]:indeterminate{background-color:currentColor;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3E%3C/svg%3E\");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}@media (forced-colors:active) {[type=checkbox]:indeterminate{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:indeterminate:focus,[type=checkbox]:indeterminate:hover{background-color:currentColor;border-color:transparent}[type=file]{background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:initial;border-color:inherit;border-radius:0;border-width:0;font-size:inherit;line-height:inherit;padding:0}[type=file]:focus{outline:1px solid ButtonText;outline:1px auto -webkit-focus-ring-color}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width:576px){.container{max-width:576px}}@media (min-width:960px){.container{max-width:960px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}@media (min-width:1920px){.container{max-width:1920px}}@media (min-width:2560px){.container{max-width:2560px}}.sr-only{height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;clip:rect(0,0,0,0);border-width:0;white-space:nowrap}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.\\!sticky{position:sticky!important}.sticky{position:sticky}.inset-0{left:0;right:0}.inset-0,.inset-y-0{bottom:0;top:0}.bottom-0{bottom:0}.bottom-4{bottom:1rem}.end-2{right:.5rem}.end-2\\.5{right:.625rem}.left-0{left:0}.left-1\\/2{left:50%}.left-3{left:.75rem}.left-full{left:100%}.right-0{right:0}.right-20{right:5rem}.right-5{right:1.25rem}.right-8{right:2rem}.start-0{left:0}.top-0{top:0}.top-2{top:.5rem}.top-2\\.5{top:.625rem}.top-20{top:5rem}.top-3{top:.75rem}.top-6{top:1.5rem}.z-10{z-index:10}.z-20{z-index:20}.z-40{z-index:40}.z-50{z-index:50}.z-\\[100\\]{z-index:100}.order-1{order:1}.order-2{order:2}.order-3{order:3}.col-span-2{grid-column:span 2/span 2}.col-span-4{grid-column:span 4/span 4}.col-span-8{grid-column:span 8/span 8}.float-right{float:right}.float-left{float:left}.float-none{float:none}.-m-2{margin:-.5rem}.-m-2\\.5{margin:-.625rem}.m-0{margin:0}.m-1{margin:.25rem}.m-3{margin:.75rem}.m-auto{margin:auto}.\\!mx-2{margin-left:.5rem!important;margin-right:.5rem!important}.\\!my-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.-mx-2{margin-left:-.5rem;margin-right:-.5rem}.mx-1{margin-left:.25rem;margin-right:.25rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.mx-5{margin-left:1.25rem;margin-right:1.25rem}.mx-auto{margin-left:auto;margin-right:auto}.my-0{margin-bottom:0;margin-top:0}.my-1{margin-bottom:.25rem;margin-top:.25rem}.my-12{margin-bottom:3rem;margin-top:3rem}.my-2{margin-bottom:.5rem;margin-top:.5rem}.my-4{margin-bottom:1rem;margin-top:1rem}.my-5{margin-bottom:1.25rem;margin-top:1.25rem}.my-auto{margin-bottom:auto;margin-top:auto}.\\!mt-3{margin-top:.75rem!important}.\\!mt-5{margin-top:1.25rem!important}.mb-0{margin-bottom:0}.mb-1{margin-bottom:.25rem}.mb-10{margin-bottom:2.5rem}.mb-16{margin-bottom:4rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.me-0{margin-right:0}.me-1{margin-right:.25rem}.me-2{margin-right:.5rem}.me-2\\.5{margin-right:.625rem}.me-3{margin-right:.75rem}.ml-1{margin-left:.25rem}.ml-2{margin-left:.5rem}.ml-3{margin-left:.75rem}.ml-5{margin-left:1.25rem}.ml-\\[40\\%\\]{margin-left:40%}.ml-\\[50px\\]{margin-left:50px}.ml-auto{margin-left:auto}.mr-1{margin-right:.25rem}.mr-16{margin-right:4rem}.mr-3{margin-right:.75rem}.mr-4{margin-right:1rem}.mr-5{margin-right:1.25rem}.mr-\\[-100px\\]{margin-right:-100px}.mr-auto{margin-right:auto}.ms-2{margin-left:.5rem}.ms-3{margin-left:.75rem}.ms-auto{margin-left:auto}.mt-0{margin-top:0}.mt-1{margin-top:.25rem}.mt-10{margin-top:2.5rem}.mt-12{margin-top:3rem}.mt-2{margin-top:.5rem}.mt-24{margin-top:6rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.mt-6{margin-top:1.5rem}.mt-8{margin-top:2rem}.mt-\\[-40px\\]{margin-top:-40px}.mt-\\[250px\\]{margin-top:250px}.mt-\\[3px\\]{margin-top:3px}.mt-auto{margin-top:auto}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.\\!hidden{display:none!important}.hidden{display:none}.aspect-\\[9\\/16\\]{aspect-ratio:9/16}.aspect-square{aspect-ratio:1/1}.\\!h-\\[100vh\\]{height:100vh!important}.\\!h-\\[4\\.1rem\\]{height:4.1rem!important}.\\!h-\\[400px\\]{height:400px!important}.\\!h-auto{height:auto!important}.h-12{height:3rem}.h-16{height:4rem}.h-2{height:.5rem}.h-2\\.5{height:.625rem}.h-20{height:5rem}.h-3{height:.75rem}.h-3\\.5{height:.875rem}.h-32{height:8rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-5\\/6{height:83.333333%}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-80{height:20rem}.h-\\[0\\.5px\\]{height:.5px}.h-\\[100\\%\\]{height:100%}.h-\\[100px\\]{height:100px}.h-\\[100vh\\]{height:100vh}.h-\\[160px\\]{height:160px}.h-\\[1px\\]{height:1px}.h-\\[252px\\]{height:252px}.h-\\[276px\\]{height:276px}.h-\\[300px\\]{height:300px}.h-\\[30px\\]{height:30px}.h-\\[50px\\]{height:50px}.h-\\[600px\\]{height:600px}.h-\\[92vh\\]{height:92vh}.h-\\[calc\\(100\\%-0rem\\)\\]{height:100%}.h-auto{height:auto}.h-full{height:100%}.h-screen{height:100vh}.max-h-full{max-height:100%}.min-h-screen{min-height:100vh}.\\!w-\\[90\\%\\]{width:90%!important}.w-1\\/2{width:50%}.w-1\\/3{width:33.333333%}.w-11{width:2.75rem}.w-11\\/12{width:91.666667%}.w-12{width:3rem}.w-16{width:4rem}.w-2{width:.5rem}.w-2\\.5{width:.625rem}.w-3{width:.75rem}.w-3\\.5{width:.875rem}.w-32{width:8rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-5\\/12{width:41.666667%}.w-6{width:1.5rem}.w-7{width:1.75rem}.w-8{width:2rem}.w-80{width:20rem}.w-\\[150px\\]{width:150px}.w-\\[276px\\]{width:276px}.w-\\[30px\\]{width:30px}.w-\\[45\\%\\]{width:45%}.w-\\[50\\%\\]{width:50%}.w-\\[50px\\]{width:50px}.w-\\[50rem\\]{width:50rem}.w-\\[75\\%\\]{width:75%}.w-auto{width:auto}.w-full{width:100%}.max-w-2xl{max-width:42rem}.max-w-4xl{max-width:56rem}.max-w-5xl{max-width:64rem}.max-w-6xl{max-width:72rem}.max-w-7xl{max-width:80rem}.max-w-full{max-width:100%}.max-w-lg{max-width:32rem}.max-w-md{max-width:28rem}.max-w-sm{max-width:24rem}.max-w-xl{max-width:36rem}.max-w-xs{max-width:20rem}.flex-1{flex:1 1 0%}.flex-\\[30\\%\\]{flex:30%}.flex-\\[70\\%\\]{flex:70%}.flex-auto{flex:1 1 auto}.flex-none{flex:none}.flex-shrink-0,.shrink-0{flex-shrink:0}.grow{flex-grow:1}.basis-1\\/2{flex-basis:50%}.basis-auto{flex-basis:auto}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(-50%,var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-full{--tw-translate-x:-100%;transform:translate(-100%,var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(180deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180,.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes spin{to{transform:rotate(1turn)}}.animate-spin{animation:spin 1s linear infinite}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.flex-row{flex-direction:row}.\\!flex-col{flex-direction:column!important}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.content-start{align-content:flex-start}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.\\!justify-start{justify-content:flex-start!important}.justify-start{justify-content:flex-start}.\\!justify-end{justify-content:flex-end!important}.justify-end{justify-content:flex-end}.\\!justify-center{justify-content:center!important}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.gap-1{gap:.25rem}.gap-10{gap:2.5rem}.gap-2{gap:.5rem}.gap-20{gap:5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.gap-6{gap:1.5rem}.gap-8{gap:2rem}.gap-x-1{-moz-column-gap:.25rem;column-gap:.25rem}.gap-x-1\\.5{-moz-column-gap:.375rem;column-gap:.375rem}.gap-x-3{-moz-column-gap:.75rem;column-gap:.75rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-y-5{row-gap:1.25rem}.gap-y-6{row-gap:1.5rem}.gap-y-7{row-gap:1.75rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:.5rem;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:1rem;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(1rem*var(--tw-space-x-reverse))}.space-x-8>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:2rem;margin-left:calc(2rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(2rem*var(--tw-space-x-reverse))}.space-y-16>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(4rem*var(--tw-space-y-reverse));margin-top:4rem;margin-top:calc(4rem*(1 - var(--tw-space-y-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:.5rem;margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:1rem;margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(1.5rem*var(--tw-space-y-reverse));margin-top:1.5rem;margin-top:calc(1.5rem*(1 - var(--tw-space-y-reverse)))}.self-center{align-self:center}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-\\[100000px\\]{border-radius:100000px}.rounded-\\[7px\\]{border-radius:7px}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-sm{border-radius:.125rem}.rounded-xl{border-radius:.75rem}.rounded-e-full{border-bottom-right-radius:9999px;border-top-right-radius:9999px}.rounded-s-full{border-bottom-left-radius:9999px;border-top-left-radius:9999px}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.rounded-t-xl{border-top-left-radius:.75rem;border-top-right-radius:.75rem}.border{border-width:1px}.border-0{border-width:0}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-b-0{border-bottom-width:0}.border-b-2{border-bottom-width:2px}.border-r{border-right-width:1px}.border-t,.border-t-\\[1px\\]{border-top-width:1px}.border-dashed{border-style:dashed}.border-none{border-style:none}.border-\\[\\#5E6572\\]{--tw-border-opacity:1;border-color:#5e6572;border-color:rgba(94,101,114,var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity:1;border-color:#e5e7eb;border-color:rgba(229,231,235,var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity:1;border-color:#d1d5db;border-color:rgba(209,213,219,var(--tw-border-opacity))}.border-gray-400{--tw-border-opacity:1;border-color:#9ca3af;border-color:rgba(156,163,175,var(--tw-border-opacity))}.border-gray-900\\/25{border-color:rgba(17,24,39,.25)}.border-b-gray-500{--tw-border-opacity:1;border-bottom-color:#6b7280;border-bottom-color:rgba(107,114,128,var(--tw-border-opacity))}.\\!bg-red-700{--tw-bg-opacity:1!important;background-color:#b91c1c!important;background-color:rgba(185,28,28,var(--tw-bg-opacity))!important}.\\!bg-slate-400{--tw-bg-opacity:1!important;background-color:#94a3b8!important;background-color:rgba(148,163,184,var(--tw-bg-opacity))!important}.bg-\\[\\#0005\\]{background-color:rgba(0,0,0,.333)}.bg-\\[\\#0009\\]{background-color:rgba(0,0,0,.6)}.bg-\\[\\#00825e\\]{--tw-bg-opacity:1;background-color:#00825e;background-color:rgba(0,130,94,var(--tw-bg-opacity))}.bg-\\[\\#D04848\\]{--tw-bg-opacity:1;background-color:#d04848;background-color:rgba(208,72,72,var(--tw-bg-opacity))}.bg-\\[\\#FFF7EE\\]{--tw-bg-opacity:1;background-color:#fff7ee;background-color:rgba(255,247,238,var(--tw-bg-opacity))}.bg-\\[\\#FFF\\]{--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-\\[\\#c9c9c926\\]{background-color:hsla(0,0%,79%,.149)}.bg-\\[\\#e47a2e\\]{--tw-bg-opacity:1;background-color:#e47a2e;background-color:rgba(228,122,46,var(--tw-bg-opacity))}.bg-\\[\\#efefef\\]{--tw-bg-opacity:1;background-color:#efefef;background-color:rgba(239,239,239,var(--tw-bg-opacity))}.bg-\\[\\#f0f0f0\\]{--tw-bg-opacity:1;background-color:#f0f0f0;background-color:rgba(240,240,240,var(--tw-bg-opacity))}.bg-\\[\\#f5ab8e\\]{--tw-bg-opacity:1;background-color:#f5ab8e;background-color:rgba(245,171,142,var(--tw-bg-opacity))}.bg-\\[\\#ffffffa0\\]{background-color:hsla(0,0%,100%,.627)}.bg-black{--tw-bg-opacity:1;background-color:#000;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.bg-blue-500{--tw-bg-opacity:1;background-color:#3b82f6;background-color:rgba(59,130,246,var(--tw-bg-opacity))}.bg-blue-600{--tw-bg-opacity:1;background-color:#2563eb;background-color:rgba(37,99,235,var(--tw-bg-opacity))}.bg-blue-700{--tw-bg-opacity:1;background-color:#1d4ed8;background-color:rgba(29,78,216,var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:#f3f4f6;background-color:rgba(243,244,246,var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:#e5e7eb;background-color:rgba(229,231,235,var(--tw-bg-opacity))}.bg-gray-300{--tw-bg-opacity:1;background-color:#d1d5db;background-color:rgba(209,213,219,var(--tw-bg-opacity))}.bg-gray-50{--tw-bg-opacity:1;background-color:#f9fafb;background-color:rgba(249,250,251,var(--tw-bg-opacity))}.bg-gray-600{--tw-bg-opacity:1;background-color:#4b5563;background-color:rgba(75,85,99,var(--tw-bg-opacity))}.bg-gray-900{--tw-bg-opacity:1;background-color:#111827;background-color:rgba(17,24,39,var(--tw-bg-opacity))}.bg-gray-900\\/80{background-color:rgba(17,24,39,.8)}.bg-green-200{--tw-bg-opacity:1;background-color:#bbf7d0;background-color:rgba(187,247,208,var(--tw-bg-opacity))}.bg-green-500{--tw-bg-opacity:1;background-color:#22c55e;background-color:rgba(34,197,94,var(--tw-bg-opacity))}.bg-green-600{--tw-bg-opacity:1;background-color:#16a34a;background-color:rgba(22,163,74,var(--tw-bg-opacity))}.bg-green-700{--tw-bg-opacity:1;background-color:#15803d;background-color:rgba(21,128,61,var(--tw-bg-opacity))}.bg-red-100{--tw-bg-opacity:1;background-color:#fee2e2;background-color:rgba(254,226,226,var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity:1;background-color:#ef4444;background-color:rgba(239,68,68,var(--tw-bg-opacity))}.bg-red-700{--tw-bg-opacity:1;background-color:#b91c1c;background-color:rgba(185,28,28,var(--tw-bg-opacity))}.bg-rose-500{--tw-bg-opacity:1;background-color:#f43f5e;background-color:rgba(244,63,94,var(--tw-bg-opacity))}.bg-teal-500{--tw-bg-opacity:1;background-color:#14b8a6;background-color:rgba(20,184,166,var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-yellow-500{--tw-bg-opacity:1;background-color:#eab308;background-color:rgba(234,179,8,var(--tw-bg-opacity))}.bg-opacity-50{--tw-bg-opacity:0.5}.bg-opacity-70{--tw-bg-opacity:0.7}.bg-opacity-80{--tw-bg-opacity:0.8}.\\!bg-cover{background-size:cover!important}.object-cover{-o-object-fit:cover;object-fit:cover}.\\!p-2{padding:.5rem!important}.\\!p-8{padding:2rem!important}.p-0{padding:0}.p-1{padding:.25rem}.p-10{padding:2.5rem}.p-12{padding:3rem}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.\\!px-4{padding-left:1rem!important;padding-right:1rem!important}.px-0{padding-left:0;padding-right:0}.px-1{padding-left:.25rem;padding-right:.25rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.px-12{padding-left:3rem;padding-right:3rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-20{padding-left:5rem;padding-right:5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.py-0{padding-bottom:0;padding-top:0}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-1\\.5{padding-bottom:.375rem;padding-top:.375rem}.py-10{padding-bottom:2.5rem;padding-top:2.5rem}.py-12{padding-bottom:3rem;padding-top:3rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-2\\.5{padding-bottom:.625rem;padding-top:.625rem}.py-20{padding-bottom:5rem;padding-top:5rem}.py-24{padding-bottom:6rem;padding-top:6rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.py-4{padding-bottom:1rem;padding-top:1rem}.py-5{padding-bottom:1.25rem;padding-top:1.25rem}.py-6{padding-bottom:1.5rem;padding-top:1.5rem}.\\!pt-3{padding-top:.75rem!important}.\\!pt-\\[10px\\]{padding-top:10px!important}.pb-10{padding-bottom:2.5rem}.pb-14{padding-bottom:3.5rem}.pb-2{padding-bottom:.5rem}.pb-24{padding-bottom:6rem}.pb-3{padding-bottom:.75rem}.pb-4{padding-bottom:1rem}.pb-5{padding-bottom:1.25rem}.pb-8{padding-bottom:2rem}.pl-0{padding-left:0}.pl-1{padding-left:.25rem}.pl-10{padding-left:2.5rem}.pl-2{padding-left:.5rem}.pr-0{padding-right:0}.pr-3{padding-right:.75rem}.ps-10{padding-left:2.5rem}.ps-3{padding-left:.75rem}.ps-3\\.5{padding-left:.875rem}.pt-0{padding-top:0}.pt-10{padding-top:2.5rem}.pt-2{padding-top:.5rem}.pt-20{padding-top:5rem}.pt-24{padding-top:6rem}.pt-4{padding-top:1rem}.pt-5{padding-top:1.25rem}.pt-8{padding-top:2rem}.pt-\\[2px\\]{padding-top:2px}.text-left{text-align:left}.\\!text-center{text-align:center!important}.text-center{text-align:center}.text-end,.text-right{text-align:right}.\\!text-\\[0\\.6rem\\]{font-size:.6rem!important}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-5xl{font-size:3rem;line-height:1}.text-6xl{font-size:3.75rem;line-height:1}.text-7xl{font-size:4.5rem;line-height:1}.text-\\[1\\.5rem\\]{font-size:1.5rem}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[16px\\]{font-size:16px}.text-\\[18px\\]{font-size:18px}.text-\\[24px\\]{font-size:24px}.text-\\[32px\\]{font-size:32px}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-black{font-weight:900}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.font-extralight{font-weight:200}.font-light{font-weight:300}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.font-thin{font-weight:100}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.leading-5{line-height:1.25rem}.leading-6{line-height:1.5rem}.leading-7{line-height:1.75rem}.leading-8,.leading-\\[2rem\\]{line-height:2rem}.leading-\\[60px\\]{line-height:60px}.leading-normal{line-height:1.5}.tracking-\\[1px\\]{letter-spacing:1px}.tracking-tight{letter-spacing:-.025em}.tracking-wider{letter-spacing:.05em}.text-\\[\\#000000b5\\]{color:rgba(0,0,0,.71)}.text-\\[\\#000\\]{--tw-text-opacity:1;color:#000;color:rgba(0,0,0,var(--tw-text-opacity))}.text-\\[\\#00a3ae\\]{--tw-text-opacity:1;color:#00a3ae;color:rgba(0,163,174,var(--tw-text-opacity))}.text-\\[\\#030303\\]{--tw-text-opacity:1;color:#030303;color:rgba(3,3,3,var(--tw-text-opacity))}.text-\\[\\#324852\\]{--tw-text-opacity:1;color:#324852;color:rgba(50,72,82,var(--tw-text-opacity))}.text-\\[\\#4d2a2b\\]{--tw-text-opacity:1;color:#4d2a2b;color:rgba(77,42,43,var(--tw-text-opacity))}.text-\\[\\#5d5d5b\\]{--tw-text-opacity:1;color:#5d5d5b;color:rgba(93,93,91,var(--tw-text-opacity))}.text-\\[\\#74583E\\]{--tw-text-opacity:1;color:#74583e;color:rgba(116,88,62,var(--tw-text-opacity))}.text-\\[\\#99a1b9\\]{--tw-text-opacity:1;color:#99a1b9;color:rgba(153,161,185,var(--tw-text-opacity))}.text-\\[\\#cc63ff\\]{--tw-text-opacity:1;color:#cc63ff;color:rgba(204,99,255,var(--tw-text-opacity))}.text-\\[\\#fff\\]{--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.text-black{--tw-text-opacity:1;color:#000;color:rgba(0,0,0,var(--tw-text-opacity))}.text-blue-500{--tw-text-opacity:1;color:#3b82f6;color:rgba(59,130,246,var(--tw-text-opacity))}.text-blue-600{--tw-text-opacity:1;color:#2563eb;color:rgba(37,99,235,var(--tw-text-opacity))}.text-gray-100{--tw-text-opacity:1;color:#f3f4f6;color:rgba(243,244,246,var(--tw-text-opacity))}.text-gray-300{--tw-text-opacity:1;color:#d1d5db;color:rgba(209,213,219,var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:#9ca3af;color:rgba(156,163,175,var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:#6b7280;color:rgba(107,114,128,var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:#4b5563;color:rgba(75,85,99,var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:#374151;color:rgba(55,65,81,var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity:1;color:#1f2937;color:rgba(31,41,55,var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:#111827;color:rgba(17,24,39,var(--tw-text-opacity))}.text-green-500{--tw-text-opacity:1;color:#22c55e;color:rgba(34,197,94,var(--tw-text-opacity))}.text-orange-500{--tw-text-opacity:1;color:#f97316;color:rgba(249,115,22,var(--tw-text-opacity))}.text-red-500{--tw-text-opacity:1;color:#ef4444;color:rgba(239,68,68,var(--tw-text-opacity))}.text-red-600{--tw-text-opacity:1;color:#dc2626;color:rgba(220,38,38,var(--tw-text-opacity))}.text-red-700{--tw-text-opacity:1;color:#b91c1c;color:rgba(185,28,28,var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.text-zinc-700{--tw-text-opacity:1;color:#3f3f46;color:rgba(63,63,70,var(--tw-text-opacity))}.underline{text-decoration-line:underline}.\\!no-underline{text-decoration-line:none!important}.opacity-0{opacity:0}.opacity-50{opacity:.5}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,0 1px 2px 0 rgba(0,0,0,.05);box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.shadow-gray-900{--tw-shadow-color:#111827;--tw-shadow:var(--tw-shadow-colored)}.outline{outline-style:solid}.ring-0{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color),var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)}.ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color),var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)}.ring-inset{--tw-ring-inset:inset}.ring-gray-300{--tw-ring-opacity:1;--tw-ring-color:rgba(209,213,219,var(--tw-ring-opacity))}.blur{--tw-blur:blur(8px);filter:blur(8px) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.drop-shadow-2xl{--tw-drop-shadow:drop-shadow(0 25px 25px rgba(0,0,0,.15));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) drop-shadow(0 25px 25px rgba(0,0,0,.15));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.drop-shadow-lg{--tw-drop-shadow:drop-shadow(0 10px 8px rgba(0,0,0,.04)) drop-shadow(0 4px 3px rgba(0,0,0,.1));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) drop-shadow(0 10px 8px rgba(0,0,0,.04)) drop-shadow(0 4px 3px rgba(0,0,0,.1));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.drop-shadow-md{--tw-drop-shadow:drop-shadow(0 4px 3px rgba(0,0,0,.07)) drop-shadow(0 2px 2px rgba(0,0,0,.06));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) drop-shadow(0 4px 3px rgba(0,0,0,.07)) drop-shadow(0 2px 2px rgba(0,0,0,.06))}.drop-shadow-md,.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-opacity{transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-150,.transition-transform{transition-duration:.15s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.placeholder\\:text-gray-400::-moz-placeholder{--tw-text-opacity:1;color:#9ca3af;color:rgba(156,163,175,var(--tw-text-opacity))}.placeholder\\:text-gray-400::placeholder{--tw-text-opacity:1;color:#9ca3af;color:rgba(156,163,175,var(--tw-text-opacity))}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:start-\\[2px\\]:after{content:var(--tw-content);left:2px}.after\\:top-\\[2px\\]:after{content:var(--tw-content);top:2px}.after\\:h-5:after{content:var(--tw-content);height:1.25rem}.after\\:w-5:after{content:var(--tw-content);width:1.25rem}.after\\:rounded-full:after{border-radius:9999px;content:var(--tw-content)}.after\\:border:after{border-width:1px;content:var(--tw-content)}.after\\:border-gray-300:after{content:var(--tw-content);--tw-border-opacity:1;border-color:#d1d5db;border-color:rgba(209,213,219,var(--tw-border-opacity))}.after\\:bg-white:after{content:var(--tw-content);--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.after\\:transition-all:after{content:var(--tw-content);transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.after\\:content-\\[\\'\\'\\]:after{--tw-content:\"\";content:\"\";content:var(--tw-content)}.hover\\:bg-\\[\\#e47a2e\\]:hover{--tw-bg-opacity:1;background-color:#e47a2e;background-color:rgba(228,122,46,var(--tw-bg-opacity))}.hover\\:bg-\\[var\\(--color-4\\)\\]:hover{background-color:var(--color-4)}.hover\\:bg-blue-600:hover{--tw-bg-opacity:1;background-color:#2563eb;background-color:rgba(37,99,235,var(--tw-bg-opacity))}.hover\\:bg-blue-700:hover{--tw-bg-opacity:1;background-color:#1d4ed8;background-color:rgba(29,78,216,var(--tw-bg-opacity))}.hover\\:bg-blue-800:hover{--tw-bg-opacity:1;background-color:#1e40af;background-color:rgba(30,64,175,var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:#f3f4f6;background-color:rgba(243,244,246,var(--tw-bg-opacity))}.hover\\:bg-gray-200:hover{--tw-bg-opacity:1;background-color:#e5e7eb;background-color:rgba(229,231,235,var(--tw-bg-opacity))}.hover\\:bg-gray-400:hover{--tw-bg-opacity:1;background-color:#9ca3af;background-color:rgba(156,163,175,var(--tw-bg-opacity))}.hover\\:bg-gray-50:hover{--tw-bg-opacity:1;background-color:#f9fafb;background-color:rgba(249,250,251,var(--tw-bg-opacity))}.hover\\:bg-green-500:hover{--tw-bg-opacity:1;background-color:#22c55e;background-color:rgba(34,197,94,var(--tw-bg-opacity))}.hover\\:bg-green-600:hover{--tw-bg-opacity:1;background-color:#16a34a;background-color:rgba(22,163,74,var(--tw-bg-opacity))}.hover\\:bg-green-700:hover{--tw-bg-opacity:1;background-color:#15803d;background-color:rgba(21,128,61,var(--tw-bg-opacity))}.hover\\:bg-green-800:hover{--tw-bg-opacity:1;background-color:#166534;background-color:rgba(22,101,52,var(--tw-bg-opacity))}.hover\\:bg-red-800:hover{--tw-bg-opacity:1;background-color:#991b1b;background-color:rgba(153,27,27,var(--tw-bg-opacity))}.hover\\:bg-rose-600:hover{--tw-bg-opacity:1;background-color:#e11d48;background-color:rgba(225,29,72,var(--tw-bg-opacity))}.hover\\:bg-teal-600:hover{--tw-bg-opacity:1;background-color:#0d9488;background-color:rgba(13,148,136,var(--tw-bg-opacity))}.hover\\:text-\\[\\#5E6572\\]:hover{--tw-text-opacity:1;color:#5e6572;color:rgba(94,101,114,var(--tw-text-opacity))}.hover\\:text-black:hover{--tw-text-opacity:1;color:#000;color:rgba(0,0,0,var(--tw-text-opacity))}.hover\\:text-blue-700:hover{--tw-text-opacity:1;color:#1d4ed8;color:rgba(29,78,216,var(--tw-text-opacity))}.hover\\:text-gray-200:hover{--tw-text-opacity:1;color:#e5e7eb;color:rgba(229,231,235,var(--tw-text-opacity))}.hover\\:text-gray-800:hover{--tw-text-opacity:1;color:#1f2937;color:rgba(31,41,55,var(--tw-text-opacity))}.hover\\:text-gray-900:hover{--tw-text-opacity:1;color:#111827;color:rgba(17,24,39,var(--tw-text-opacity))}.hover\\:text-indigo-600:hover{--tw-text-opacity:1;color:#4f46e5;color:rgba(79,70,229,var(--tw-text-opacity))}.hover\\:text-yellow-600:hover{--tw-text-opacity:1;color:#ca8a04;color:rgba(202,138,4,var(--tw-text-opacity))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:no-underline:hover{text-decoration-line:none}.focus\\:z-10:focus{z-index:10}.focus\\:border-blue-500:focus{--tw-border-opacity:1;border-color:#3b82f6;border-color:rgba(59,130,246,var(--tw-border-opacity))}.focus\\:border-indigo-500:focus{--tw-border-opacity:1;border-color:#6366f1;border-color:rgba(99,102,241,var(--tw-border-opacity))}.focus\\:border-primary-600:focus{--tw-border-opacity:1;border-color:#0891b2;border-color:rgba(8,145,178,var(--tw-border-opacity))}.focus\\:bg-white:focus{--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-0:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color),var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color),var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)}.focus\\:ring-4:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color),var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)}.focus\\:ring-inset:focus{--tw-ring-inset:inset}.focus\\:ring-blue-300:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(147,197,253,var(--tw-ring-opacity))}.focus\\:ring-blue-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(59,130,246,var(--tw-ring-opacity))}.focus\\:ring-gray-200:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(229,231,235,var(--tw-ring-opacity))}.focus\\:ring-green-300:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(134,239,172,var(--tw-ring-opacity))}.focus\\:ring-indigo-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(99,102,241,var(--tw-ring-opacity))}.focus\\:ring-indigo-600:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(79,70,229,var(--tw-ring-opacity))}.focus\\:ring-primary-600:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(8,145,178,var(--tw-ring-opacity))}.focus\\:ring-red-300:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(252,165,165,var(--tw-ring-opacity))}.focus\\:ring-rose-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(244,63,94,var(--tw-ring-opacity))}.focus\\:ring-teal-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(20,184,166,var(--tw-ring-opacity))}.focus\\:ring-white:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(255,255,255,var(--tw-ring-opacity))}.focus\\:ring-opacity-50:focus{--tw-ring-opacity:0.5}.focus-visible\\:outline:focus-visible{outline-style:solid}.focus-visible\\:outline-2:focus-visible{outline-width:2px}.focus-visible\\:outline-offset-2:focus-visible{outline-offset:2px}.focus-visible\\:outline-indigo-600:focus-visible{outline-color:#4f46e5}.group:hover .group-hover\\:text-blue-600{--tw-text-opacity:1;color:#2563eb;color:rgba(37,99,235,var(--tw-text-opacity))}.group:hover .group-hover\\:opacity-100{opacity:1}.peer:checked~.peer-checked\\:bg-blue-600{--tw-bg-opacity:1;background-color:#2563eb;background-color:rgba(37,99,235,var(--tw-bg-opacity))}.peer:checked~.peer-checked\\:after\\:translate-x-full:after{content:var(--tw-content);--tw-translate-x:100%;transform:translate(100%,var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.peer:checked~.peer-checked\\:after\\:border-white:after{content:var(--tw-content);--tw-border-opacity:1;border-color:#fff;border-color:rgba(255,255,255,var(--tw-border-opacity))}.peer:focus~.peer-focus\\:outline-none{outline:2px solid transparent;outline-offset:2px}.peer:focus~.peer-focus\\:ring-4{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color),var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 transparent;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)}.peer:focus~.peer-focus\\:ring-blue-300{--tw-ring-opacity:1;--tw-ring-color:rgba(147,197,253,var(--tw-ring-opacity))}[dir=rtl] .rtl\\:rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(180deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}[dir=rtl] .rtl\\:space-x-reverse>:not([hidden])~:not([hidden]){--tw-space-x-reverse:1}[dir=rtl] .rtl\\:text-right{text-align:right}[dir=rtl] .peer:checked~.rtl\\:peer-checked\\:after\\:-translate-x-full:after{content:var(--tw-content);--tw-translate-x:-100%;transform:translate(-100%,var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.dark .dark\\:border-gray-500{--tw-border-opacity:1;border-color:#6b7280;border-color:rgba(107,114,128,var(--tw-border-opacity))}.dark .dark\\:border-gray-600{--tw-border-opacity:1;border-color:#4b5563;border-color:rgba(75,85,99,var(--tw-border-opacity))}.dark .dark\\:border-gray-700{--tw-border-opacity:1;border-color:#374151;border-color:rgba(55,65,81,var(--tw-border-opacity))}.dark .dark\\:bg-blue-600{--tw-bg-opacity:1;background-color:#2563eb;background-color:rgba(37,99,235,var(--tw-bg-opacity))}.dark .dark\\:bg-gray-600{--tw-bg-opacity:1;background-color:#4b5563;background-color:rgba(75,85,99,var(--tw-bg-opacity))}.dark .dark\\:bg-gray-700{--tw-bg-opacity:1;background-color:#374151;background-color:rgba(55,65,81,var(--tw-bg-opacity))}.dark .dark\\:bg-gray-800{--tw-bg-opacity:1;background-color:#1f2937;background-color:rgba(31,41,55,var(--tw-bg-opacity))}.dark .dark\\:bg-gray-900{--tw-bg-opacity:1;background-color:#111827;background-color:rgba(17,24,39,var(--tw-bg-opacity))}.dark .dark\\:bg-green-600{--tw-bg-opacity:1;background-color:#16a34a;background-color:rgba(22,163,74,var(--tw-bg-opacity))}.dark .dark\\:bg-red-600{--tw-bg-opacity:1;background-color:#dc2626;background-color:rgba(220,38,38,var(--tw-bg-opacity))}.dark .dark\\:text-black{--tw-text-opacity:1;color:#000;color:rgba(0,0,0,var(--tw-text-opacity))}.dark .dark\\:text-blue-500{--tw-text-opacity:1;color:#3b82f6;color:rgba(59,130,246,var(--tw-text-opacity))}.dark .dark\\:text-gray-300{--tw-text-opacity:1;color:#d1d5db;color:rgba(209,213,219,var(--tw-text-opacity))}.dark .dark\\:text-gray-400{--tw-text-opacity:1;color:#9ca3af;color:rgba(156,163,175,var(--tw-text-opacity))}.dark .dark\\:text-white{--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.dark .dark\\:placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity:1;color:#9ca3af;color:rgba(156,163,175,var(--tw-placeholder-opacity))}.dark .dark\\:placeholder-gray-400::placeholder{--tw-placeholder-opacity:1;color:#9ca3af;color:rgba(156,163,175,var(--tw-placeholder-opacity))}.dark .dark\\:ring-offset-gray-800{--tw-ring-offset-color:#1f2937}.dark .dark\\:hover\\:bg-blue-700:hover{--tw-bg-opacity:1;background-color:#1d4ed8;background-color:rgba(29,78,216,var(--tw-bg-opacity))}.dark .dark\\:hover\\:bg-gray-600:hover{--tw-bg-opacity:1;background-color:#4b5563;background-color:rgba(75,85,99,var(--tw-bg-opacity))}.dark .dark\\:hover\\:bg-gray-700:hover{--tw-bg-opacity:1;background-color:#374151;background-color:rgba(55,65,81,var(--tw-bg-opacity))}.dark .dark\\:hover\\:bg-gray-800:hover{--tw-bg-opacity:1;background-color:#1f2937;background-color:rgba(31,41,55,var(--tw-bg-opacity))}.dark .dark\\:hover\\:bg-green-700:hover{--tw-bg-opacity:1;background-color:#15803d;background-color:rgba(21,128,61,var(--tw-bg-opacity))}.dark .dark\\:hover\\:bg-red-700:hover{--tw-bg-opacity:1;background-color:#b91c1c;background-color:rgba(185,28,28,var(--tw-bg-opacity))}.dark .dark\\:hover\\:text-white:hover{--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.dark .dark\\:focus\\:border-blue-500:focus{--tw-border-opacity:1;border-color:#3b82f6;border-color:rgba(59,130,246,var(--tw-border-opacity))}.dark .dark\\:focus\\:border-primary-500:focus{--tw-border-opacity:1;border-color:#06b6d4;border-color:rgba(6,182,212,var(--tw-border-opacity))}.dark .dark\\:focus\\:ring-blue-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(59,130,246,var(--tw-ring-opacity))}.dark .dark\\:focus\\:ring-blue-600:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(37,99,235,var(--tw-ring-opacity))}.dark .dark\\:focus\\:ring-blue-800:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(30,64,175,var(--tw-ring-opacity))}.dark .dark\\:focus\\:ring-gray-700:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(55,65,81,var(--tw-ring-opacity))}.dark .dark\\:focus\\:ring-green-800:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(22,101,52,var(--tw-ring-opacity))}.dark .dark\\:focus\\:ring-primary-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(6,182,212,var(--tw-ring-opacity))}.dark .dark\\:focus\\:ring-red-800:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(153,27,27,var(--tw-ring-opacity))}.dark .group:hover .dark\\:group-hover\\:text-blue-500{--tw-text-opacity:1;color:#3b82f6;color:rgba(59,130,246,var(--tw-text-opacity))}.dark .peer:focus~.dark\\:peer-focus\\:ring-blue-800{--tw-ring-opacity:1;--tw-ring-color:rgba(30,64,175,var(--tw-ring-opacity))}@media (min-width:576px){.sm\\:\\!fixed{position:fixed!important}.sm\\:col-span-2{grid-column:span 2/span 2}.sm\\:col-span-3{grid-column:span 3/span 3}.sm\\:\\!mt-0{margin-top:0!important}.sm\\:mb-3{margin-bottom:.75rem}.sm\\:ml-6{margin-left:1.5rem}.sm\\:ml-auto{margin-left:auto}.sm\\:mt-0{margin-top:0}.sm\\:block{display:block}.sm\\:\\!flex{display:flex!important}.sm\\:grid{display:grid}.sm\\:\\!h-\\[800px\\]{height:800px!important}.sm\\:h-\\[100\\%\\]{height:100%}.sm\\:\\!w-\\[65\\%\\]{width:65%!important}.sm\\:max-w-xl{max-width:36rem}.sm\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:items-start{align-items:flex-start}.sm\\:items-center{align-items:center}.sm\\:gap-4{gap:1rem}.sm\\:gap-6{gap:1.5rem}.sm\\:gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.sm\\:gap-x-6{-moz-column-gap:1.5rem;column-gap:1.5rem}.sm\\:rounded-lg{border-radius:.5rem}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:px-8{padding-left:2rem;padding-right:2rem}.sm\\:py-10{padding-bottom:2.5rem;padding-top:2.5rem}.sm\\:py-12{padding-bottom:3rem;padding-top:3rem}.sm\\:py-2{padding-bottom:.5rem;padding-top:.5rem}.sm\\:py-8{padding-bottom:2rem;padding-top:2rem}.sm\\:pb-60{padding-bottom:15rem}.sm\\:pt-0{padding-top:0}.sm\\:pt-8{padding-top:2rem}.sm\\:text-center{text-align:center}.sm\\:text-lg{font-size:1.125rem;line-height:1.75rem}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}.sm\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:960px){.md\\:inset-0{bottom:0;left:0;right:0;top:0}.md\\:col-span-1{grid-column:span 1/span 1}.md\\:float-right{float:right}.md\\:float-left{float:left}.md\\:float-none{float:none}.md\\:\\!my-0{margin-bottom:0!important;margin-top:0!important}.md\\:\\!mt-1{margin-top:.25rem!important}.md\\:ml-4{margin-left:1rem}.md\\:mt-6{margin-top:1.5rem}.md\\:mt-\\[350px\\]{margin-top:350px}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:inline-flex{display:inline-flex}.md\\:\\!hidden{display:none!important}.md\\:hidden{display:none}.md\\:aspect-video{aspect-ratio:16/9}.md\\:\\!w-\\[40\\%\\]{width:40%!important}.md\\:\\!w-\\[45\\%\\]{width:45%!important}.md\\:\\!w-\\[50\\%\\]{width:50%!important}.md\\:w-2\\/12{width:16.666667%}.md\\:w-2\\/3{width:66.666667%}.md\\:w-3\\/12{width:25%}.md\\:w-4\\/12{width:33.333333%}.md\\:w-5\\/12{width:41.666667%}.md\\:w-\\[65\\%\\]{width:65%}.md\\:max-w-6xl{max-width:72rem}.md\\:basis-1{flex-basis:0.25rem}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:\\!flex-row{flex-direction:row!important}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:\\!justify-end{justify-content:flex-end!important}.md\\:\\!justify-center{justify-content:center!important}.md\\:justify-between{justify-content:space-between}.md\\:space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:.75rem;margin-left:calc(.75rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(.75rem*var(--tw-space-x-reverse))}.md\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:0;margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}.md\\:rounded-s-2xl{border-bottom-left-radius:1rem;border-top-left-radius:1rem}.md\\:p-4{padding:1rem}.md\\:p-5{padding:1.25rem}.md\\:p-6{padding:1.5rem}.md\\:\\!py-0{padding-top:0!important}.md\\:\\!pb-0,.md\\:\\!py-0{padding-bottom:0!important}.md\\:\\!pt-7{padding-top:1.75rem!important}.md\\:pr-5{padding-right:1.25rem}.md\\:text-left,.md\\:text-start{text-align:left}.md\\:text-3xl{font-size:1.875rem;line-height:2.25rem}.md\\:text-5xl{font-size:3rem;line-height:1}.md\\:text-8xl{font-size:6rem;line-height:1}.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:fixed{position:fixed}.lg\\:inset-y-0{bottom:0;top:0}.lg\\:z-50{z-index:50}.lg\\:col-span-2{grid-column:span 2/span 2}.lg\\:-mt-20{margin-top:-5rem}.lg\\:ml-0{margin-left:0}.lg\\:mt-0{margin-top:0}.lg\\:mt-20{margin-top:5rem}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:hidden{display:none}.lg\\:h-\\[200px\\]{height:200px}.lg\\:h-\\[585px\\]{height:585px}.lg\\:h-full{height:100%}.lg\\:w-1\\/2{width:50%}.lg\\:w-2\\/12{width:16.666667%}.lg\\:w-3\\/12{width:25%}.lg\\:w-4\\/12{width:33.333333%}.lg\\:w-72{width:18rem}.lg\\:w-8\\/12{width:66.666667%}.lg\\:w-\\[191px\\]{width:191px}.lg\\:w-\\[362px\\]{width:362px}.lg\\:w-\\[800px\\]{width:800px}.lg\\:w-\\[883px\\]{width:883px}.lg\\:max-w-6xl{max-width:72rem}.lg\\:flex-1{flex:1 1 0%}.lg\\:flex-none{flex:none}.lg\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.lg\\:flex-row{flex-direction:row}.lg\\:flex-col{flex-direction:column}.lg\\:items-end{align-items:flex-end}.lg\\:items-stretch{align-items:stretch}.lg\\:gap-20{gap:5rem}.lg\\:gap-8{gap:2rem}.lg\\:gap-x-12{-moz-column-gap:3rem;column-gap:3rem}.lg\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:0;margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}.lg\\:p-4{padding:1rem}.lg\\:px-0{padding-left:0;padding-right:0}.lg\\:px-10{padding-left:2.5rem;padding-right:2.5rem}.lg\\:px-2{padding-left:.5rem;padding-right:.5rem}.lg\\:px-20{padding-left:5rem;padding-right:5rem}.lg\\:px-5{padding-left:1.25rem;padding-right:1.25rem}.lg\\:px-8{padding-left:2rem;padding-right:2rem}.lg\\:py-10{padding-bottom:2.5rem;padding-top:2.5rem}.lg\\:py-14{padding-bottom:3.5rem;padding-top:3.5rem}.lg\\:py-16{padding-bottom:4rem;padding-top:4rem}.lg\\:py-24{padding-bottom:6rem;padding-top:6rem}.lg\\:py-4{padding-bottom:1rem;padding-top:1rem}.lg\\:py-8{padding-bottom:2rem;padding-top:2rem}.lg\\:pb-20{padding-bottom:5rem}.lg\\:pl-72{padding-left:18rem}.lg\\:pr-20{padding-right:5rem}.lg\\:pt-10{padding-top:2.5rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}.lg\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.lg\\:text-5xl{font-size:3rem;line-height:1}.lg\\:text-6xl{font-size:3.75rem;line-height:1}.lg\\:text-7xl{font-size:4.5rem;line-height:1}.lg\\:text-9xl{font-size:8rem;line-height:1}.lg\\:text-\\[32px\\]{font-size:32px}.lg\\:text-\\[96px\\]{font-size:96px}.lg\\:text-xl{font-size:1.25rem;line-height:1.75rem}.lg\\:leading-\\[80px\\]{line-height:80px}}@media (min-width:1280px){.xl\\:w-1\\/3{width:33.333333%}.xl\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.xl\\:gap-x-16{-moz-column-gap:4rem;column-gap:4rem}.xl\\:px-0{padding-left:0;padding-right:0}.xl\\:px-12{padding-left:3rem;padding-right:3rem}}@media (min-width:1536px){.\\32xl\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.\\32xl\\:space-x-0>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:0;margin-left:calc(0px*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(0px*var(--tw-space-x-reverse))}.\\32xl\\:px-32{padding-left:8rem;padding-right:8rem}.\\32xl\\:py-16{padding-bottom:4rem;padding-top:4rem}}@media (min-width:1920px){.\\33xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}@media (min-width:2560px){.\\34xl\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    301: function (t, e, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, r, n) {
                void 0 === n && (n = r);
                var desc = Object.getOwnPropertyDescriptor(e, r);
                (desc &&
                  !("get" in desc
                    ? !e.__esModule
                    : desc.writable || desc.configurable)) ||
                  (desc = {
                    enumerable: !0,
                    get: function () {
                      return e[r];
                    },
                  }),
                  Object.defineProperty(t, n, desc);
              }
            : function (t, e, r, n) {
                void 0 === n && (n = r), (t[n] = e[r]);
              }),
        o =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var p in t)
              "default" === p ||
                Object.prototype.hasOwnProperty.call(e, p) ||
                n(e, t, p);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.initFlowbite =
          e.initInputCounters =
          e.initTooltips =
          e.initTabs =
          e.initPopovers =
          e.initModals =
          e.initDropdowns =
          e.initDrawers =
          e.initDismisses =
          e.initDials =
          e.initCollapses =
          e.initCarousels =
          e.initAccordions =
          e.InputCounter =
          e.Tooltip =
          e.Tabs =
          e.Popover =
          e.Modal =
          e.Dropdown =
          e.Drawer =
          e.Dismiss =
          e.Dial =
          e.Collapse =
          e.Carousel =
          e.Accordion =
            void 0);
      var c = r(302),
        l = r(112),
        d = r(113),
        h = r(114),
        f = r(115),
        m = r(116),
        v = r(117),
        y = r(118),
        w = r(119),
        x = r(120),
        _ = r(121),
        k = r(122),
        E = r(123);
      r(210),
        new c.default("load", [
          l.initAccordions,
          d.initCollapses,
          h.initCarousels,
          f.initDismisses,
          m.initDropdowns,
          v.initModals,
          y.initDrawers,
          w.initTabs,
          x.initTooltips,
          _.initPopovers,
          k.initDials,
          E.initInputCounters,
        ]).init();
      var C = r(112);
      Object.defineProperty(e, "Accordion", {
        enumerable: !0,
        get: function () {
          return C.default;
        },
      });
      var T = r(114);
      Object.defineProperty(e, "Carousel", {
        enumerable: !0,
        get: function () {
          return T.default;
        },
      });
      var S = r(113);
      Object.defineProperty(e, "Collapse", {
        enumerable: !0,
        get: function () {
          return S.default;
        },
      });
      var O = r(122);
      Object.defineProperty(e, "Dial", {
        enumerable: !0,
        get: function () {
          return O.default;
        },
      });
      var A = r(115);
      Object.defineProperty(e, "Dismiss", {
        enumerable: !0,
        get: function () {
          return A.default;
        },
      });
      var j = r(118);
      Object.defineProperty(e, "Drawer", {
        enumerable: !0,
        get: function () {
          return j.default;
        },
      });
      var D = r(116);
      Object.defineProperty(e, "Dropdown", {
        enumerable: !0,
        get: function () {
          return D.default;
        },
      });
      var I = r(117);
      Object.defineProperty(e, "Modal", {
        enumerable: !0,
        get: function () {
          return I.default;
        },
      });
      var L = r(121);
      Object.defineProperty(e, "Popover", {
        enumerable: !0,
        get: function () {
          return L.default;
        },
      });
      var $ = r(119);
      Object.defineProperty(e, "Tabs", {
        enumerable: !0,
        get: function () {
          return $.default;
        },
      });
      var P = r(120);
      Object.defineProperty(e, "Tooltip", {
        enumerable: !0,
        get: function () {
          return P.default;
        },
      });
      var z = r(123);
      Object.defineProperty(e, "InputCounter", {
        enumerable: !0,
        get: function () {
          return z.default;
        },
      }),
        o(r(303), e),
        o(r(304), e),
        o(r(305), e),
        o(r(306), e),
        o(r(307), e),
        o(r(308), e),
        o(r(309), e),
        o(r(310), e),
        o(r(311), e),
        o(r(312), e),
        o(r(313), e),
        o(r(314), e),
        o(r(315), e),
        o(r(316), e),
        o(r(317), e),
        o(r(318), e),
        o(r(319), e),
        o(r(320), e),
        o(r(321), e),
        o(r(322), e),
        o(r(323), e),
        o(r(324), e),
        o(r(325), e),
        o(r(326), e),
        o(r(327), e);
      var M = r(112);
      Object.defineProperty(e, "initAccordions", {
        enumerable: !0,
        get: function () {
          return M.initAccordions;
        },
      });
      var N = r(114);
      Object.defineProperty(e, "initCarousels", {
        enumerable: !0,
        get: function () {
          return N.initCarousels;
        },
      });
      var H = r(113);
      Object.defineProperty(e, "initCollapses", {
        enumerable: !0,
        get: function () {
          return H.initCollapses;
        },
      });
      var F = r(122);
      Object.defineProperty(e, "initDials", {
        enumerable: !0,
        get: function () {
          return F.initDials;
        },
      });
      var R = r(115);
      Object.defineProperty(e, "initDismisses", {
        enumerable: !0,
        get: function () {
          return R.initDismisses;
        },
      });
      var B = r(118);
      Object.defineProperty(e, "initDrawers", {
        enumerable: !0,
        get: function () {
          return B.initDrawers;
        },
      });
      var W = r(116);
      Object.defineProperty(e, "initDropdowns", {
        enumerable: !0,
        get: function () {
          return W.initDropdowns;
        },
      });
      var U = r(117);
      Object.defineProperty(e, "initModals", {
        enumerable: !0,
        get: function () {
          return U.initModals;
        },
      });
      var V = r(121);
      Object.defineProperty(e, "initPopovers", {
        enumerable: !0,
        get: function () {
          return V.initPopovers;
        },
      });
      var Y = r(119);
      Object.defineProperty(e, "initTabs", {
        enumerable: !0,
        get: function () {
          return Y.initTabs;
        },
      });
      var Z = r(120);
      Object.defineProperty(e, "initTooltips", {
        enumerable: !0,
        get: function () {
          return Z.initTooltips;
        },
      });
      var X = r(123);
      Object.defineProperty(e, "initInputCounters", {
        enumerable: !0,
        get: function () {
          return X.initInputCounters;
        },
      });
      var Q = r(210);
      Object.defineProperty(e, "initFlowbite", {
        enumerable: !0,
        get: function () {
          return Q.initFlowbite;
        },
      });
    },
    302: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = (function () {
        function t(t, e) {
          void 0 === e && (e = []),
            (this._eventType = t),
            (this._eventFunctions = e);
        }
        return (
          (t.prototype.init = function () {
            var t = this;
            this._eventFunctions.forEach(function (e) {
              "undefined" != typeof window &&
                window.addEventListener(t._eventType, e);
            });
          }),
          t
        );
      })();
      e.default = n;
    },
    303: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    304: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    305: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    306: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    307: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    308: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    309: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    310: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    311: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    312: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    313: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    314: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    315: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    316: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    317: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    318: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    319: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    320: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    321: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    322: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    323: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    324: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    325: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    326: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    327: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    352: function (t, e) {
      !(function (t, e, r, n) {
        function o(element, e) {
          (this.settings = null),
            (this.options = t.extend({}, o.Defaults, e)),
            (this.$element = t(element)),
            (this._handlers = {}),
            (this._plugins = {}),
            (this._supress = {}),
            (this._current = null),
            (this._speed = null),
            (this._coordinates = []),
            (this._breakpoint = null),
            (this._width = null),
            (this._items = []),
            (this._clones = []),
            (this._mergers = []),
            (this._widths = []),
            (this._invalidated = {}),
            (this._pipe = []),
            (this._drag = {
              time: null,
              target: null,
              pointer: null,
              stage: { start: null, current: null },
              direction: null,
            }),
            (this._states = {
              current: {},
              tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"],
              },
            }),
            t.each(
              ["onResize", "onThrottledResize"],
              t.proxy(function (i, e) {
                this._handlers[e] = t.proxy(this[e], this);
              }, this)
            ),
            t.each(
              o.Plugins,
              t.proxy(function (t, e) {
                this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(
                  this
                );
              }, this)
            ),
            t.each(
              o.Workers,
              t.proxy(function (e, r) {
                this._pipe.push({
                  filter: r.filter,
                  run: t.proxy(r.run, this),
                });
              }, this)
            ),
            this.setup(),
            this.initialize();
        }
        (o.Defaults = {
          items: 3,
          loop: !1,
          center: !1,
          rewind: !1,
          checkVisibility: !0,
          mouseDrag: !0,
          touchDrag: !0,
          pullDrag: !0,
          freeDrag: !1,
          margin: 0,
          stagePadding: 0,
          merge: !1,
          mergeFit: !0,
          autoWidth: !1,
          startPosition: 0,
          rtl: !1,
          smartSpeed: 250,
          fluidSpeed: !1,
          dragEndSpeed: !1,
          responsive: {},
          responsiveRefreshRate: 200,
          responsiveBaseElement: e,
          fallbackEasing: "swing",
          slideTransition: "",
          info: !1,
          nestedItemSelector: !1,
          itemElement: "div",
          stageElement: "div",
          refreshClass: "owl-refresh",
          loadedClass: "owl-loaded",
          loadingClass: "owl-loading",
          rtlClass: "owl-rtl",
          responsiveClass: "owl-responsive",
          dragClass: "owl-drag",
          itemClass: "owl-item",
          stageClass: "owl-stage",
          stageOuterClass: "owl-stage-outer",
          grabClass: "owl-grab",
        }),
          (o.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
          (o.Type = { Event: "event", State: "state" }),
          (o.Plugins = {}),
          (o.Workers = [
            {
              filter: ["width", "settings"],
              run: function () {
                this._width = this.$element.width();
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function (t) {
                t.current =
                  this._items && this._items[this.relative(this._current)];
              },
            },
            {
              filter: ["items", "settings"],
              run: function () {
                this.$stage.children(".cloned").remove();
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function (t) {
                var e = this.settings.margin || "",
                  r = !this.settings.autoWidth,
                  n = this.settings.rtl,
                  o = {
                    width: "auto",
                    "margin-left": n ? e : "",
                    "margin-right": n ? "" : e,
                  };
                !r && this.$stage.children().css(o), (t.css = o);
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function (t) {
                var e =
                    (this.width() / this.settings.items).toFixed(3) -
                    this.settings.margin,
                  r = null,
                  n = this._items.length,
                  o = !this.settings.autoWidth,
                  c = [];
                for (t.items = { merge: !1, width: e }; n--; )
                  (r = this._mergers[n]),
                    (r =
                      (this.settings.mergeFit &&
                        Math.min(r, this.settings.items)) ||
                      r),
                    (t.items.merge = r > 1 || t.items.merge),
                    (c[n] = o ? e * r : this._items[n].width());
                this._widths = c;
              },
            },
            {
              filter: ["items", "settings"],
              run: function () {
                var e = [],
                  r = this._items,
                  n = this.settings,
                  view = Math.max(2 * n.items, 4),
                  o = 2 * Math.ceil(r.length / 2),
                  c =
                    n.loop && r.length
                      ? n.rewind
                        ? view
                        : Math.max(view, o)
                      : 0,
                  l = "",
                  d = "";
                for (c /= 2; c > 0; )
                  e.push(this.normalize(e.length / 2, !0)),
                    (l += r[e[e.length - 1]][0].outerHTML),
                    e.push(
                      this.normalize(r.length - 1 - (e.length - 1) / 2, !0)
                    ),
                    (d = r[e[e.length - 1]][0].outerHTML + d),
                    (c -= 1);
                (this._clones = e),
                  t(l).addClass("cloned").appendTo(this.$stage),
                  t(d).addClass("cloned").prependTo(this.$stage);
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function () {
                for (
                  var t = this.settings.rtl ? 1 : -1,
                    e = this._clones.length + this._items.length,
                    r = -1,
                    n = 0,
                    o = 0,
                    c = [];
                  ++r < e;

                )
                  (n = c[r - 1] || 0),
                    (o = this._widths[this.relative(r)] + this.settings.margin),
                    c.push(n + o * t);
                this._coordinates = c;
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function () {
                var t = this.settings.stagePadding,
                  e = this._coordinates,
                  r = {
                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                    "padding-left": t || "",
                    "padding-right": t || "",
                  };
                this.$stage.css(r);
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function (t) {
                var e = this._coordinates.length,
                  r = !this.settings.autoWidth,
                  n = this.$stage.children();
                if (r && t.items.merge)
                  for (; e--; )
                    (t.css.width = this._widths[this.relative(e)]),
                      n.eq(e).css(t.css);
                else r && ((t.css.width = t.items.width), n.css(t.css));
              },
            },
            {
              filter: ["items"],
              run: function () {
                this._coordinates.length < 1 && this.$stage.removeAttr("style");
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function (t) {
                (t.current = t.current
                  ? this.$stage.children().index(t.current)
                  : 0),
                  (t.current = Math.max(
                    this.minimum(),
                    Math.min(this.maximum(), t.current)
                  )),
                  this.reset(t.current);
              },
            },
            {
              filter: ["position"],
              run: function () {
                this.animate(this.coordinates(this._current));
              },
            },
            {
              filter: ["width", "position", "items", "settings"],
              run: function () {
                var t,
                  e,
                  i,
                  r,
                  n = this.settings.rtl ? 1 : -1,
                  o = 2 * this.settings.stagePadding,
                  c = this.coordinates(this.current()) + o,
                  l = c + this.width() * n,
                  d = [];
                for (i = 0, r = this._coordinates.length; i < r; i++)
                  (t = this._coordinates[i - 1] || 0),
                    (e = Math.abs(this._coordinates[i]) + o * n),
                    ((this.op(t, "<=", c) && this.op(t, ">", l)) ||
                      (this.op(e, "<", c) && this.op(e, ">", l))) &&
                      d.push(i);
                this.$stage.children(".active").removeClass("active"),
                  this.$stage
                    .children(":eq(" + d.join("), :eq(") + ")")
                    .addClass("active"),
                  this.$stage.children(".center").removeClass("center"),
                  this.settings.center &&
                    this.$stage
                      .children()
                      .eq(this.current())
                      .addClass("center");
              },
            },
          ]),
          (o.prototype.initializeStage = function () {
            (this.$stage = this.$element.find("." + this.settings.stageClass)),
              this.$stage.length ||
                (this.$element.addClass(this.options.loadingClass),
                (this.$stage = t("<" + this.settings.stageElement + ">", {
                  class: this.settings.stageClass,
                }).wrap(t("<div/>", { class: this.settings.stageOuterClass }))),
                this.$element.append(this.$stage.parent()));
          }),
          (o.prototype.initializeItems = function () {
            var e = this.$element.find(".owl-item");
            if (e.length)
              return (
                (this._items = e.get().map(function (e) {
                  return t(e);
                })),
                (this._mergers = this._items.map(function () {
                  return 1;
                })),
                void this.refresh()
              );
            this.replace(this.$element.children().not(this.$stage.parent())),
              this.isVisible() ? this.refresh() : this.invalidate("width"),
              this.$element
                .removeClass(this.options.loadingClass)
                .addClass(this.options.loadedClass);
          }),
          (o.prototype.initialize = function () {
            var t, e, r;
            (this.enter("initializing"),
            this.trigger("initialize"),
            this.$element.toggleClass(
              this.settings.rtlClass,
              this.settings.rtl
            ),
            this.settings.autoWidth && !this.is("pre-loading")) &&
              ((t = this.$element.find("img")),
              (e = this.settings.nestedItemSelector
                ? "." + this.settings.nestedItemSelector
                : n),
              (r = this.$element.children(e).width()),
              t.length && r <= 0 && this.preloadAutoWidthImages(t));
            this.initializeStage(),
              this.initializeItems(),
              this.registerEventHandlers(),
              this.leave("initializing"),
              this.trigger("initialized");
          }),
          (o.prototype.isVisible = function () {
            return (
              !this.settings.checkVisibility || this.$element.is(":visible")
            );
          }),
          (o.prototype.setup = function () {
            var e = this.viewport(),
              r = this.options.responsive,
              n = -1,
              o = null;
            r
              ? (t.each(r, function (t) {
                  t <= e && t > n && (n = Number(t));
                }),
                "function" ==
                  typeof (o = t.extend({}, this.options, r[n])).stagePadding &&
                  (o.stagePadding = o.stagePadding()),
                delete o.responsive,
                o.responsiveClass &&
                  this.$element.attr(
                    "class",
                    this.$element
                      .attr("class")
                      .replace(
                        new RegExp(
                          "(" + this.options.responsiveClass + "-)\\S+\\s",
                          "g"
                        ),
                        "$1" + n
                      )
                  ))
              : (o = t.extend({}, this.options)),
              this.trigger("change", {
                property: { name: "settings", value: o },
              }),
              (this._breakpoint = n),
              (this.settings = o),
              this.invalidate("settings"),
              this.trigger("changed", {
                property: { name: "settings", value: this.settings },
              });
          }),
          (o.prototype.optionsLogic = function () {
            this.settings.autoWidth &&
              ((this.settings.stagePadding = !1), (this.settings.merge = !1));
          }),
          (o.prototype.prepare = function (e) {
            var r = this.trigger("prepare", { content: e });
            return (
              r.data ||
                (r.data = t("<" + this.settings.itemElement + "/>")
                  .addClass(this.options.itemClass)
                  .append(e)),
              this.trigger("prepared", { content: r.data }),
              r.data
            );
          }),
          (o.prototype.update = function () {
            for (
              var i = 0,
                e = this._pipe.length,
                filter = t.proxy(function (p) {
                  return this[p];
                }, this._invalidated),
                r = {};
              i < e;

            )
              (this._invalidated.all ||
                t.grep(this._pipe[i].filter, filter).length > 0) &&
                this._pipe[i].run(r),
                i++;
            (this._invalidated = {}), !this.is("valid") && this.enter("valid");
          }),
          (o.prototype.width = function (t) {
            switch ((t = t || o.Width.Default)) {
              case o.Width.Inner:
              case o.Width.Outer:
                return this._width;
              default:
                return (
                  this._width -
                  2 * this.settings.stagePadding +
                  this.settings.margin
                );
            }
          }),
          (o.prototype.refresh = function () {
            this.enter("refreshing"),
              this.trigger("refresh"),
              this.setup(),
              this.optionsLogic(),
              this.$element.addClass(this.options.refreshClass),
              this.update(),
              this.$element.removeClass(this.options.refreshClass),
              this.leave("refreshing"),
              this.trigger("refreshed");
          }),
          (o.prototype.onThrottledResize = function () {
            e.clearTimeout(this.resizeTimer),
              (this.resizeTimer = e.setTimeout(
                this._handlers.onResize,
                this.settings.responsiveRefreshRate
              ));
          }),
          (o.prototype.onResize = function () {
            return (
              !!this._items.length &&
              this._width !== this.$element.width() &&
              !!this.isVisible() &&
              (this.enter("resizing"),
              this.trigger("resize").isDefaultPrevented()
                ? (this.leave("resizing"), !1)
                : (this.invalidate("width"),
                  this.refresh(),
                  this.leave("resizing"),
                  void this.trigger("resized")))
            );
          }),
          (o.prototype.registerEventHandlers = function () {
            t.support.transition &&
              this.$stage.on(
                t.support.transition.end + ".owl.core",
                t.proxy(this.onTransitionEnd, this)
              ),
              !1 !== this.settings.responsive &&
                this.on(e, "resize", this._handlers.onThrottledResize),
              this.settings.mouseDrag &&
                (this.$element.addClass(this.options.dragClass),
                this.$stage.on(
                  "mousedown.owl.core",
                  t.proxy(this.onDragStart, this)
                ),
                this.$stage.on(
                  "dragstart.owl.core selectstart.owl.core",
                  function () {
                    return !1;
                  }
                )),
              this.settings.touchDrag &&
                (this.$stage.on(
                  "touchstart.owl.core",
                  t.proxy(this.onDragStart, this)
                ),
                this.$stage.on(
                  "touchcancel.owl.core",
                  t.proxy(this.onDragEnd, this)
                ));
          }),
          (o.prototype.onDragStart = function (e) {
            var n = null;
            3 !== e.which &&
              (t.support.transform
                ? (n = {
                    x: (n = this.$stage
                      .css("transform")
                      .replace(/.*\(|\)| /g, "")
                      .split(","))[16 === n.length ? 12 : 4],
                    y: n[16 === n.length ? 13 : 5],
                  })
                : ((n = this.$stage.position()),
                  (n = {
                    x: this.settings.rtl
                      ? n.left +
                        this.$stage.width() -
                        this.width() +
                        this.settings.margin
                      : n.left,
                    y: n.top,
                  })),
              this.is("animating") &&
                (t.support.transform ? this.animate(n.x) : this.$stage.stop(),
                this.invalidate("position")),
              this.$element.toggleClass(
                this.options.grabClass,
                "mousedown" === e.type
              ),
              this.speed(0),
              (this._drag.time = new Date().getTime()),
              (this._drag.target = t(e.target)),
              (this._drag.stage.start = n),
              (this._drag.stage.current = n),
              (this._drag.pointer = this.pointer(e)),
              t(r).on(
                "mouseup.owl.core touchend.owl.core",
                t.proxy(this.onDragEnd, this)
              ),
              t(r).one(
                "mousemove.owl.core touchmove.owl.core",
                t.proxy(function (e) {
                  var n = this.difference(this._drag.pointer, this.pointer(e));
                  t(r).on(
                    "mousemove.owl.core touchmove.owl.core",
                    t.proxy(this.onDragMove, this)
                  ),
                    (Math.abs(n.x) < Math.abs(n.y) && this.is("valid")) ||
                      (e.preventDefault(),
                      this.enter("dragging"),
                      this.trigger("drag"));
                }, this)
              ));
          }),
          (o.prototype.onDragMove = function (t) {
            var e = null,
              r = null,
              n = null,
              o = this.difference(this._drag.pointer, this.pointer(t)),
              c = this.difference(this._drag.stage.start, o);
            this.is("dragging") &&
              (t.preventDefault(),
              this.settings.loop
                ? ((e = this.coordinates(this.minimum())),
                  (r = this.coordinates(this.maximum() + 1) - e),
                  (c.x = ((((c.x - e) % r) + r) % r) + e))
                : ((e = this.settings.rtl
                    ? this.coordinates(this.maximum())
                    : this.coordinates(this.minimum())),
                  (r = this.settings.rtl
                    ? this.coordinates(this.minimum())
                    : this.coordinates(this.maximum())),
                  (n = this.settings.pullDrag ? (-1 * o.x) / 5 : 0),
                  (c.x = Math.max(Math.min(c.x, e + n), r + n))),
              (this._drag.stage.current = c),
              this.animate(c.x));
          }),
          (o.prototype.onDragEnd = function (e) {
            var n = this.difference(this._drag.pointer, this.pointer(e)),
              o = this._drag.stage.current,
              c = (n.x > 0) ^ this.settings.rtl ? "left" : "right";
            t(r).off(".owl.core"),
              this.$element.removeClass(this.options.grabClass),
              ((0 !== n.x && this.is("dragging")) || !this.is("valid")) &&
                (this.speed(
                  this.settings.dragEndSpeed || this.settings.smartSpeed
                ),
                this.current(
                  this.closest(o.x, 0 !== n.x ? c : this._drag.direction)
                ),
                this.invalidate("position"),
                this.update(),
                (this._drag.direction = c),
                (Math.abs(n.x) > 3 ||
                  new Date().getTime() - this._drag.time > 300) &&
                  this._drag.target.one("click.owl.core", function () {
                    return !1;
                  })),
              this.is("dragging") &&
                (this.leave("dragging"), this.trigger("dragged"));
          }),
          (o.prototype.closest = function (e, r) {
            var o = -1,
              c = this.width(),
              l = this.coordinates();
            return (
              this.settings.freeDrag ||
                t.each(
                  l,
                  t.proxy(function (t, d) {
                    return (
                      "left" === r && e > d - 30 && e < d + 30
                        ? (o = t)
                        : "right" === r && e > d - c - 30 && e < d - c + 30
                        ? (o = t + 1)
                        : this.op(e, "<", d) &&
                          this.op(e, ">", l[t + 1] !== n ? l[t + 1] : d - c) &&
                          (o = "left" === r ? t + 1 : t),
                      -1 === o
                    );
                  }, this)
                ),
              this.settings.loop ||
                (this.op(e, ">", l[this.minimum()])
                  ? (o = e = this.minimum())
                  : this.op(e, "<", l[this.maximum()]) &&
                    (o = e = this.maximum())),
              o
            );
          }),
          (o.prototype.animate = function (e) {
            var animate = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(),
              animate && (this.enter("animating"), this.trigger("translate")),
              t.support.transform3d && t.support.transition
                ? this.$stage.css({
                    transform: "translate3d(" + e + "px,0px,0px)",
                    transition:
                      this.speed() / 1e3 +
                      "s" +
                      (this.settings.slideTransition
                        ? " " + this.settings.slideTransition
                        : ""),
                  })
                : animate
                ? this.$stage.animate(
                    { left: e + "px" },
                    this.speed(),
                    this.settings.fallbackEasing,
                    t.proxy(this.onTransitionEnd, this)
                  )
                : this.$stage.css({ left: e + "px" });
          }),
          (o.prototype.is = function (t) {
            return this._states.current[t] && this._states.current[t] > 0;
          }),
          (o.prototype.current = function (t) {
            if (t === n) return this._current;
            if (0 === this._items.length) return n;
            if (((t = this.normalize(t)), this._current !== t)) {
              var e = this.trigger("change", {
                property: { name: "position", value: t },
              });
              e.data !== n && (t = this.normalize(e.data)),
                (this._current = t),
                this.invalidate("position"),
                this.trigger("changed", {
                  property: { name: "position", value: this._current },
                });
            }
            return this._current;
          }),
          (o.prototype.invalidate = function (e) {
            return (
              "string" === t.type(e) &&
                ((this._invalidated[e] = !0),
                this.is("valid") && this.leave("valid")),
              t.map(this._invalidated, function (t, i) {
                return i;
              })
            );
          }),
          (o.prototype.reset = function (t) {
            (t = this.normalize(t)) !== n &&
              ((this._speed = 0),
              (this._current = t),
              this.suppress(["translate", "translated"]),
              this.animate(this.coordinates(t)),
              this.release(["translate", "translated"]));
          }),
          (o.prototype.normalize = function (t, e) {
            var r = this._items.length,
              o = e ? 0 : this._clones.length;
            return (
              !this.isNumeric(t) || r < 1
                ? (t = n)
                : (t < 0 || t >= r + o) &&
                  (t = ((((t - o / 2) % r) + r) % r) + o / 2),
              t
            );
          }),
          (o.prototype.relative = function (t) {
            return (t -= this._clones.length / 2), this.normalize(t, !0);
          }),
          (o.prototype.maximum = function (t) {
            var e,
              r,
              n,
              o = this.settings,
              c = this._coordinates.length;
            if (o.loop) c = this._clones.length / 2 + this._items.length - 1;
            else if (o.autoWidth || o.merge) {
              if ((e = this._items.length))
                for (
                  r = this._items[--e].width(), n = this.$element.width();
                  e-- &&
                  !((r += this._items[e].width() + this.settings.margin) > n);

                );
              c = e + 1;
            } else
              c = o.center
                ? this._items.length - 1
                : this._items.length - o.items;
            return t && (c -= this._clones.length / 2), Math.max(c, 0);
          }),
          (o.prototype.minimum = function (t) {
            return t ? 0 : this._clones.length / 2;
          }),
          (o.prototype.items = function (t) {
            return t === n
              ? this._items.slice()
              : ((t = this.normalize(t, !0)), this._items[t]);
          }),
          (o.prototype.mergers = function (t) {
            return t === n
              ? this._mergers.slice()
              : ((t = this.normalize(t, !0)), this._mergers[t]);
          }),
          (o.prototype.clones = function (e) {
            var r = this._clones.length / 2,
              o = r + this._items.length,
              map = function (t) {
                return t % 2 == 0 ? o + t / 2 : r - (t + 1) / 2;
              };
            return e === n
              ? t.map(this._clones, function (t, i) {
                  return map(i);
                })
              : t.map(this._clones, function (t, i) {
                  return t === e ? map(i) : null;
                });
          }),
          (o.prototype.speed = function (t) {
            return t !== n && (this._speed = t), this._speed;
          }),
          (o.prototype.coordinates = function (e) {
            var r,
              o = 1,
              c = e - 1;
            return e === n
              ? t.map(
                  this._coordinates,
                  t.proxy(function (t, e) {
                    return this.coordinates(e);
                  }, this)
                )
              : (this.settings.center
                  ? (this.settings.rtl && ((o = -1), (c = e + 1)),
                    (r = this._coordinates[e]),
                    (r +=
                      ((this.width() - r + (this._coordinates[c] || 0)) / 2) *
                      o))
                  : (r = this._coordinates[c] || 0),
                (r = Math.ceil(r)));
          }),
          (o.prototype.duration = function (t, e, r) {
            return 0 === r
              ? 0
              : Math.min(Math.max(Math.abs(e - t), 1), 6) *
                  Math.abs(r || this.settings.smartSpeed);
          }),
          (o.prototype.to = function (t, e) {
            var r = this.current(),
              n = null,
              o = t - this.relative(r),
              c = (o > 0) - (o < 0),
              l = this._items.length,
              d = this.minimum(),
              h = this.maximum();
            this.settings.loop
              ? (!this.settings.rewind &&
                  Math.abs(o) > l / 2 &&
                  (o += -1 * c * l),
                (n = (((((t = r + o) - d) % l) + l) % l) + d) !== t &&
                  n - o <= h &&
                  n - o > 0 &&
                  ((r = n - o), (t = n), this.reset(r)))
              : (t = this.settings.rewind
                  ? ((t % (h += 1)) + h) % h
                  : Math.max(d, Math.min(h, t))),
              this.speed(this.duration(r, t, e)),
              this.current(t),
              this.isVisible() && this.update();
          }),
          (o.prototype.next = function (t) {
            (t = t || !1), this.to(this.relative(this.current()) + 1, t);
          }),
          (o.prototype.prev = function (t) {
            (t = t || !1), this.to(this.relative(this.current()) - 1, t);
          }),
          (o.prototype.onTransitionEnd = function (t) {
            if (
              t !== n &&
              (t.stopPropagation(),
              (t.target || t.srcElement || t.originalTarget) !==
                this.$stage.get(0))
            )
              return !1;
            this.leave("animating"), this.trigger("translated");
          }),
          (o.prototype.viewport = function () {
            var n;
            return (
              this.options.responsiveBaseElement !== e
                ? (n = t(this.options.responsiveBaseElement).width())
                : e.innerWidth
                ? (n = e.innerWidth)
                : r.documentElement && r.documentElement.clientWidth
                ? (n = r.documentElement.clientWidth)
                : console.warn("Can not detect viewport width."),
              n
            );
          }),
          (o.prototype.replace = function (content) {
            this.$stage.empty(),
              (this._items = []),
              content &&
                (content = content instanceof jQuery ? content : t(content)),
              this.settings.nestedItemSelector &&
                (content = content.find(
                  "." + this.settings.nestedItemSelector
                )),
              content
                .filter(function () {
                  return 1 === this.nodeType;
                })
                .each(
                  t.proxy(function (t, e) {
                    (e = this.prepare(e)),
                      this.$stage.append(e),
                      this._items.push(e),
                      this._mergers.push(
                        1 *
                          e
                            .find("[data-merge]")
                            .addBack("[data-merge]")
                            .attr("data-merge") || 1
                      );
                  }, this)
                ),
              this.reset(
                this.isNumeric(this.settings.startPosition)
                  ? this.settings.startPosition
                  : 0
              ),
              this.invalidate("items");
          }),
          (o.prototype.add = function (content, e) {
            var r = this.relative(this._current);
            (e = e === n ? this._items.length : this.normalize(e, !0)),
              (content = content instanceof jQuery ? content : t(content)),
              this.trigger("add", { content: content, position: e }),
              (content = this.prepare(content)),
              0 === this._items.length || e === this._items.length
                ? (0 === this._items.length && this.$stage.append(content),
                  0 !== this._items.length && this._items[e - 1].after(content),
                  this._items.push(content),
                  this._mergers.push(
                    1 *
                      content
                        .find("[data-merge]")
                        .addBack("[data-merge]")
                        .attr("data-merge") || 1
                  ))
                : (this._items[e].before(content),
                  this._items.splice(e, 0, content),
                  this._mergers.splice(
                    e,
                    0,
                    1 *
                      content
                        .find("[data-merge]")
                        .addBack("[data-merge]")
                        .attr("data-merge") || 1
                  )),
              this._items[r] && this.reset(this._items[r].index()),
              this.invalidate("items"),
              this.trigger("added", { content: content, position: e });
          }),
          (o.prototype.remove = function (t) {
            (t = this.normalize(t, !0)) !== n &&
              (this.trigger("remove", { content: this._items[t], position: t }),
              this._items[t].remove(),
              this._items.splice(t, 1),
              this._mergers.splice(t, 1),
              this.invalidate("items"),
              this.trigger("removed", { content: null, position: t }));
          }),
          (o.prototype.preloadAutoWidthImages = function (e) {
            e.each(
              t.proxy(function (i, element) {
                this.enter("pre-loading"),
                  (element = t(element)),
                  t(new Image())
                    .one(
                      "load",
                      t.proxy(function (t) {
                        element.attr("src", t.target.src),
                          element.css("opacity", 1),
                          this.leave("pre-loading"),
                          !this.is("pre-loading") &&
                            !this.is("initializing") &&
                            this.refresh();
                      }, this)
                    )
                    .attr(
                      "src",
                      element.attr("src") ||
                        element.attr("data-src") ||
                        element.attr("data-src-retina")
                    );
              }, this)
            );
          }),
          (o.prototype.destroy = function () {
            for (var i in (this.$element.off(".owl.core"),
            this.$stage.off(".owl.core"),
            t(r).off(".owl.core"),
            !1 !== this.settings.responsive &&
              (e.clearTimeout(this.resizeTimer),
              this.off(e, "resize", this._handlers.onThrottledResize)),
            this._plugins))
              this._plugins[i].destroy();
            this.$stage.children(".cloned").remove(),
              this.$stage.unwrap(),
              this.$stage.children().contents().unwrap(),
              this.$stage.children().unwrap(),
              this.$stage.remove(),
              this.$element
                .removeClass(this.options.refreshClass)
                .removeClass(this.options.loadingClass)
                .removeClass(this.options.loadedClass)
                .removeClass(this.options.rtlClass)
                .removeClass(this.options.dragClass)
                .removeClass(this.options.grabClass)
                .attr(
                  "class",
                  this.$element
                    .attr("class")
                    .replace(
                      new RegExp(
                        this.options.responsiveClass + "-\\S+\\s",
                        "g"
                      ),
                      ""
                    )
                )
                .removeData("owl.carousel");
          }),
          (o.prototype.op = function (a, t, b) {
            var e = this.settings.rtl;
            switch (t) {
              case "<":
                return e ? a > b : a < b;
              case ">":
                return e ? a < b : a > b;
              case ">=":
                return e ? a <= b : a >= b;
              case "<=":
                return e ? a >= b : a <= b;
            }
          }),
          (o.prototype.on = function (element, t, e, r) {
            element.addEventListener
              ? element.addEventListener(t, e, r)
              : element.attachEvent && element.attachEvent("on" + t, e);
          }),
          (o.prototype.off = function (element, t, e, r) {
            element.removeEventListener
              ? element.removeEventListener(t, e, r)
              : element.detachEvent && element.detachEvent("on" + t, e);
          }),
          (o.prototype.trigger = function (e, data, r, n, c) {
            var l = {
                item: { count: this._items.length, index: this.current() },
              },
              d = t.camelCase(
                t
                  .grep(["on", e, r], function (t) {
                    return t;
                  })
                  .join("-")
                  .toLowerCase()
              ),
              h = t.Event(
                [e, "owl", r || "carousel"].join(".").toLowerCase(),
                t.extend({ relatedTarget: this }, l, data)
              );
            return (
              this._supress[e] ||
                (t.each(this._plugins, function (t, e) {
                  e.onTrigger && e.onTrigger(h);
                }),
                this.register({ type: o.Type.Event, name: e }),
                this.$element.trigger(h),
                this.settings &&
                  "function" == typeof this.settings[d] &&
                  this.settings[d].call(this, h)),
              h
            );
          }),
          (o.prototype.enter = function (e) {
            t.each(
              [e].concat(this._states.tags[e] || []),
              t.proxy(function (i, t) {
                this._states.current[t] === n && (this._states.current[t] = 0),
                  this._states.current[t]++;
              }, this)
            );
          }),
          (o.prototype.leave = function (e) {
            t.each(
              [e].concat(this._states.tags[e] || []),
              t.proxy(function (i, t) {
                this._states.current[t]--;
              }, this)
            );
          }),
          (o.prototype.register = function (object) {
            if (object.type === o.Type.Event) {
              if (
                (t.event.special[object.name] ||
                  (t.event.special[object.name] = {}),
                !t.event.special[object.name].owl)
              ) {
                var e = t.event.special[object.name]._default;
                (t.event.special[object.name]._default = function (t) {
                  return !e ||
                    !e.apply ||
                    (t.namespace && -1 !== t.namespace.indexOf("owl"))
                    ? t.namespace && t.namespace.indexOf("owl") > -1
                    : e.apply(this, arguments);
                }),
                  (t.event.special[object.name].owl = !0);
              }
            } else
              object.type === o.Type.State &&
                (this._states.tags[object.name]
                  ? (this._states.tags[object.name] = this._states.tags[
                      object.name
                    ].concat(object.tags))
                  : (this._states.tags[object.name] = object.tags),
                (this._states.tags[object.name] = t.grep(
                  this._states.tags[object.name],
                  t.proxy(function (e, i) {
                    return t.inArray(e, this._states.tags[object.name]) === i;
                  }, this)
                )));
          }),
          (o.prototype.suppress = function (e) {
            t.each(
              e,
              t.proxy(function (t, e) {
                this._supress[e] = !0;
              }, this)
            );
          }),
          (o.prototype.release = function (e) {
            t.each(
              e,
              t.proxy(function (t, e) {
                delete this._supress[e];
              }, this)
            );
          }),
          (o.prototype.pointer = function (t) {
            var r = { x: null, y: null };
            return (
              (t =
                (t = t.originalEvent || t || e.event).touches &&
                t.touches.length
                  ? t.touches[0]
                  : t.changedTouches && t.changedTouches.length
                  ? t.changedTouches[0]
                  : t).pageX
                ? ((r.x = t.pageX), (r.y = t.pageY))
                : ((r.x = t.clientX), (r.y = t.clientY)),
              r
            );
          }),
          (o.prototype.isNumeric = function (t) {
            return !isNaN(parseFloat(t));
          }),
          (o.prototype.difference = function (t, e) {
            return { x: t.x - e.x, y: t.y - e.y };
          }),
          (t.fn.owlCarousel = function (option) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
              var r = t(this),
                data = r.data("owl.carousel");
              data ||
                ((data = new o(this, "object" == typeof option && option)),
                r.data("owl.carousel", data),
                t.each(
                  [
                    "next",
                    "prev",
                    "to",
                    "destroy",
                    "refresh",
                    "replace",
                    "add",
                    "remove",
                  ],
                  function (i, e) {
                    data.register({ type: o.Type.Event, name: e }),
                      data.$element.on(
                        e + ".owl.carousel.core",
                        t.proxy(function (t) {
                          t.namespace &&
                            t.relatedTarget !== this &&
                            (this.suppress([e]),
                            data[e].apply(this, [].slice.call(arguments, 1)),
                            this.release([e]));
                        }, data)
                      );
                  }
                )),
                "string" == typeof option &&
                  "_" !== option.charAt(0) &&
                  data[option].apply(data, e);
            });
          }),
          (t.fn.owlCarousel.Constructor = o);
      })(window.Zepto || window.jQuery, window, document),
        (function (t, e, r, n) {
          var o = function (e) {
            (this._core = e),
              (this._interval = null),
              (this._visible = null),
              (this._handlers = {
                "initialized.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.autoRefresh &&
                    this.watch();
                }, this),
              }),
              (this._core.options = t.extend(
                {},
                o.Defaults,
                this._core.options
              )),
              this._core.$element.on(this._handlers);
          };
          (o.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
            (o.prototype.watch = function () {
              this._interval ||
                ((this._visible = this._core.isVisible()),
                (this._interval = e.setInterval(
                  t.proxy(this.refresh, this),
                  this._core.settings.autoRefreshInterval
                )));
            }),
            (o.prototype.refresh = function () {
              this._core.isVisible() !== this._visible &&
                ((this._visible = !this._visible),
                this._core.$element.toggleClass("owl-hidden", !this._visible),
                this._visible &&
                  this._core.invalidate("width") &&
                  this._core.refresh());
            }),
            (o.prototype.destroy = function () {
              var t, r;
              for (t in (e.clearInterval(this._interval), this._handlers))
                this._core.$element.off(t, this._handlers[t]);
              for (r in Object.getOwnPropertyNames(this))
                "function" != typeof this[r] && (this[r] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, e, r, n) {
          var o = function (e) {
            (this._core = e),
              (this._loaded = []),
              (this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
                  t.proxy(function (e) {
                    if (
                      e.namespace &&
                      this._core.settings &&
                      this._core.settings.lazyLoad &&
                      ((e.property && "position" == e.property.name) ||
                        "initialized" == e.type)
                    ) {
                      var r = this._core.settings,
                        n = (r.center && Math.ceil(r.items / 2)) || r.items,
                        i = (r.center && -1 * n) || 0,
                        o =
                          (e.property && undefined !== e.property.value
                            ? e.property.value
                            : this._core.current()) + i,
                        c = this._core.clones().length,
                        l = t.proxy(function (i, t) {
                          this.load(t);
                        }, this);
                      for (
                        r.lazyLoadEager > 0 &&
                        ((n += r.lazyLoadEager),
                        r.loop && ((o -= r.lazyLoadEager), n++));
                        i++ < n;

                      )
                        this.load(c / 2 + this._core.relative(o)),
                          c &&
                            t.each(
                              this._core.clones(this._core.relative(o)),
                              l
                            ),
                          o++;
                    }
                  }, this),
              }),
              (this._core.options = t.extend(
                {},
                o.Defaults,
                this._core.options
              )),
              this._core.$element.on(this._handlers);
          };
          (o.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
            (o.prototype.load = function (r) {
              var n = this._core.$stage.children().eq(r),
                o = n && n.find(".owl-lazy");
              !o ||
                t.inArray(n.get(0), this._loaded) > -1 ||
                (o.each(
                  t.proxy(function (r, element) {
                    var image,
                      n = t(element),
                      o =
                        (e.devicePixelRatio > 1 && n.attr("data-src-retina")) ||
                        n.attr("data-src") ||
                        n.attr("data-srcset");
                    this._core.trigger("load", { element: n, url: o }, "lazy"),
                      n.is("img")
                        ? n
                            .one(
                              "load.owl.lazy",
                              t.proxy(function () {
                                n.css("opacity", 1),
                                  this._core.trigger(
                                    "loaded",
                                    { element: n, url: o },
                                    "lazy"
                                  );
                              }, this)
                            )
                            .attr("src", o)
                        : n.is("source")
                        ? n
                            .one(
                              "load.owl.lazy",
                              t.proxy(function () {
                                this._core.trigger(
                                  "loaded",
                                  { element: n, url: o },
                                  "lazy"
                                );
                              }, this)
                            )
                            .attr("srcset", o)
                        : (((image = new Image()).onload = t.proxy(function () {
                            n.css({
                              "background-image": 'url("' + o + '")',
                              opacity: "1",
                            }),
                              this._core.trigger(
                                "loaded",
                                { element: n, url: o },
                                "lazy"
                              );
                          }, this)),
                          (image.src = o));
                  }, this)
                ),
                this._loaded.push(n.get(0)));
            }),
            (o.prototype.destroy = function () {
              var t, e;
              for (t in this.handlers)
                this._core.$element.off(t, this.handlers[t]);
              for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Lazy = o);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, e, r, n) {
          var o = function (r) {
            (this._core = r),
              (this._previousHeight = null),
              (this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": t.proxy(
                  function (t) {
                    t.namespace &&
                      this._core.settings.autoHeight &&
                      this.update();
                  },
                  this
                ),
                "changed.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.autoHeight &&
                    "position" === t.property.name &&
                    this.update();
                }, this),
                "loaded.owl.lazy": t.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.autoHeight &&
                    t.element
                      .closest("." + this._core.settings.itemClass)
                      .index() === this._core.current() &&
                    this.update();
                }, this),
              }),
              (this._core.options = t.extend(
                {},
                o.Defaults,
                this._core.options
              )),
              this._core.$element.on(this._handlers),
              (this._intervalId = null);
            var n = this;
            t(e).on("load", function () {
              n._core.settings.autoHeight && n.update();
            }),
              t(e).resize(function () {
                n._core.settings.autoHeight &&
                  (null != n._intervalId && clearTimeout(n._intervalId),
                  (n._intervalId = setTimeout(function () {
                    n.update();
                  }, 250)));
              });
          };
          (o.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
            (o.prototype.update = function () {
              var e = this._core._current,
                r = e + this._core.settings.items,
                n = this._core.settings.lazyLoad,
                o = this._core.$stage.children().toArray().slice(e, r),
                c = [],
                l = 0;
              t.each(o, function (e, r) {
                c.push(t(r).height());
              }),
                (l = Math.max.apply(null, c)) <= 1 &&
                  n &&
                  this._previousHeight &&
                  (l = this._previousHeight),
                (this._previousHeight = l),
                this._core.$stage
                  .parent()
                  .height(l)
                  .addClass(this._core.settings.autoHeightClass);
            }),
            (o.prototype.destroy = function () {
              var t, e;
              for (t in this._handlers)
                this._core.$element.off(t, this._handlers[t]);
              for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, e, r, n) {
          var o = function (e) {
            (this._core = e),
              (this._videos = {}),
              (this._playing = null),
              (this._handlers = {
                "initialized.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._core.register({
                      type: "state",
                      name: "playing",
                      tags: ["interacting"],
                    });
                }, this),
                "resize.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.video &&
                    this.isInFullScreen() &&
                    t.preventDefault();
                }, this),
                "refreshed.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._core.is("resizing") &&
                    this._core.$stage.find(".cloned .owl-video-frame").remove();
                }, this),
                "changed.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    "position" === t.property.name &&
                    this._playing &&
                    this.stop();
                }, this),
                "prepared.owl.carousel": t.proxy(function (e) {
                  if (e.namespace) {
                    var r = t(e.content).find(".owl-video");
                    r.length &&
                      (r.css("display", "none"), this.fetch(r, t(e.content)));
                  }
                }, this),
              }),
              (this._core.options = t.extend(
                {},
                o.Defaults,
                this._core.options
              )),
              this._core.$element.on(this._handlers),
              this._core.$element.on(
                "click.owl.video",
                ".owl-video-play-icon",
                t.proxy(function (t) {
                  this.play(t);
                }, this)
              );
          };
          (o.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
            (o.prototype.fetch = function (t, e) {
              var r = t.attr("data-vimeo-id")
                  ? "vimeo"
                  : t.attr("data-vzaar-id")
                  ? "vzaar"
                  : "youtube",
                n =
                  t.attr("data-vimeo-id") ||
                  t.attr("data-youtube-id") ||
                  t.attr("data-vzaar-id"),
                o = t.attr("data-width") || this._core.settings.videoWidth,
                c = t.attr("data-height") || this._core.settings.videoHeight,
                l = t.attr("href");
              if (!l) throw new Error("Missing video URL.");
              if (
                (n = l.match(
                  /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                ))[3].indexOf("youtu") > -1
              )
                r = "youtube";
              else if (n[3].indexOf("vimeo") > -1) r = "vimeo";
              else {
                if (!(n[3].indexOf("vzaar") > -1))
                  throw new Error("Video URL not supported.");
                r = "vzaar";
              }
              (n = n[6]),
                (this._videos[l] = { type: r, id: n, width: o, height: c }),
                e.attr("data-video", l),
                this.thumbnail(t, this._videos[l]);
            }),
            (o.prototype.thumbnail = function (e, video) {
              var r,
                path,
                n =
                  video.width && video.height
                    ? "width:" +
                      video.width +
                      "px;height:" +
                      video.height +
                      "px;"
                    : "",
                o = e.find("img"),
                c = "src",
                l = "",
                d = this._core.settings,
                h = function (path) {
                  '<div class="owl-video-play-icon"></div>',
                    (r = d.lazyLoad
                      ? t("<div/>", {
                          class: "owl-video-tn " + l,
                          srcType: path,
                        })
                      : t("<div/>", {
                          class: "owl-video-tn",
                          style: "opacity:1;background-image:url(" + path + ")",
                        })),
                    e.after(r),
                    e.after('<div class="owl-video-play-icon"></div>');
                };
              if (
                (e.wrap(t("<div/>", { class: "owl-video-wrapper", style: n })),
                this._core.settings.lazyLoad &&
                  ((c = "data-src"), (l = "owl-lazy")),
                o.length)
              )
                return h(o.attr(c)), o.remove(), !1;
              "youtube" === video.type
                ? ((path =
                    "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg"),
                  h(path))
                : "vimeo" === video.type
                ? t.ajax({
                    type: "GET",
                    url: "//vimeo.com/api/v2/video/" + video.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function (data) {
                      (path = data[0].thumbnail_large), h(path);
                    },
                  })
                : "vzaar" === video.type &&
                  t.ajax({
                    type: "GET",
                    url: "//vzaar.com/api/videos/" + video.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function (data) {
                      (path = data.framegrab_url), h(path);
                    },
                  });
            }),
            (o.prototype.stop = function () {
              this._core.trigger("stop", null, "video"),
                this._playing.find(".owl-video-frame").remove(),
                this._playing.removeClass("owl-video-playing"),
                (this._playing = null),
                this._core.leave("playing"),
                this._core.trigger("stopped", null, "video");
            }),
            (o.prototype.play = function (e) {
              var html,
                r = t(e.target).closest("." + this._core.settings.itemClass),
                video = this._videos[r.attr("data-video")],
                n = video.width || "100%",
                o = video.height || this._core.$stage.height();
              this._playing ||
                (this._core.enter("playing"),
                this._core.trigger("play", null, "video"),
                (r = this._core.items(this._core.relative(r.index()))),
                this._core.reset(r.index()),
                (html = t(
                  '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
                )).attr("height", o),
                html.attr("width", n),
                "youtube" === video.type
                  ? html.attr(
                      "src",
                      "//www.youtube.com/embed/" +
                        video.id +
                        "?autoplay=1&rel=0&v=" +
                        video.id
                    )
                  : "vimeo" === video.type
                  ? html.attr(
                      "src",
                      "//player.vimeo.com/video/" + video.id + "?autoplay=1"
                    )
                  : "vzaar" === video.type &&
                    html.attr(
                      "src",
                      "//view.vzaar.com/" + video.id + "/player?autoplay=true"
                    ),
                t(html)
                  .wrap('<div class="owl-video-frame" />')
                  .insertAfter(r.find(".owl-video")),
                (this._playing = r.addClass("owl-video-playing")));
            }),
            (o.prototype.isInFullScreen = function () {
              var element =
                r.fullscreenElement ||
                r.mozFullScreenElement ||
                r.webkitFullscreenElement;
              return element && t(element).parent().hasClass("owl-video-frame");
            }),
            (o.prototype.destroy = function () {
              var t, e;
              for (t in (this._core.$element.off("click.owl.video"),
              this._handlers))
                this._core.$element.off(t, this._handlers[t]);
              for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Video = o);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, e, r, n) {
          var o = function (e) {
            (this.core = e),
              (this.core.options = t.extend({}, o.Defaults, this.core.options)),
              (this.swapping = !0),
              (this.previous = n),
              (this.next = n),
              (this.handlers = {
                "change.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    "position" == t.property.name &&
                    ((this.previous = this.core.current()),
                    (this.next = t.property.value));
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
                  t.proxy(function (t) {
                    t.namespace && (this.swapping = "translated" == t.type);
                  }, this),
                "translate.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this.swapping &&
                    (this.core.options.animateOut ||
                      this.core.options.animateIn) &&
                    this.swap();
                }, this),
              }),
              this.core.$element.on(this.handlers);
          };
          (o.Defaults = { animateOut: !1, animateIn: !1 }),
            (o.prototype.swap = function () {
              if (
                1 === this.core.settings.items &&
                t.support.animation &&
                t.support.transition
              ) {
                this.core.speed(0);
                var e,
                  r = t.proxy(this.clear, this),
                  n = this.core.$stage.children().eq(this.previous),
                  o = this.core.$stage.children().eq(this.next),
                  c = this.core.settings.animateIn,
                  l = this.core.settings.animateOut;
                this.core.current() !== this.previous &&
                  (l &&
                    ((e =
                      this.core.coordinates(this.previous) -
                      this.core.coordinates(this.next)),
                    n
                      .one(t.support.animation.end, r)
                      .css({ left: e + "px" })
                      .addClass("animated owl-animated-out")
                      .addClass(l)),
                  c &&
                    o
                      .one(t.support.animation.end, r)
                      .addClass("animated owl-animated-in")
                      .addClass(c));
              }
            }),
            (o.prototype.clear = function (e) {
              t(e.target)
                .css({ left: "" })
                .removeClass("animated owl-animated-out owl-animated-in")
                .removeClass(this.core.settings.animateIn)
                .removeClass(this.core.settings.animateOut),
                this.core.onTransitionEnd();
            }),
            (o.prototype.destroy = function () {
              var t, e;
              for (t in this.handlers)
                this.core.$element.off(t, this.handlers[t]);
              for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Animate = o);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, e, r, n) {
          var o = function (e) {
            (this._core = e),
              (this._call = null),
              (this._time = 0),
              (this._timeout = 0),
              (this._paused = !0),
              (this._handlers = {
                "changed.owl.carousel": t.proxy(function (t) {
                  t.namespace && "settings" === t.property.name
                    ? this._core.settings.autoplay
                      ? this.play()
                      : this.stop()
                    : t.namespace &&
                      "position" === t.property.name &&
                      this._paused &&
                      (this._time = 0);
                }, this),
                "initialized.owl.carousel": t.proxy(function (t) {
                  t.namespace && this._core.settings.autoplay && this.play();
                }, this),
                "play.owl.autoplay": t.proxy(function (t, e, s) {
                  t.namespace && this.play(e, s);
                }, this),
                "stop.owl.autoplay": t.proxy(function (t) {
                  t.namespace && this.stop();
                }, this),
                "mouseover.owl.autoplay": t.proxy(function () {
                  this._core.settings.autoplayHoverPause &&
                    this._core.is("rotating") &&
                    this.pause();
                }, this),
                "mouseleave.owl.autoplay": t.proxy(function () {
                  this._core.settings.autoplayHoverPause &&
                    this._core.is("rotating") &&
                    this.play();
                }, this),
                "touchstart.owl.core": t.proxy(function () {
                  this._core.settings.autoplayHoverPause &&
                    this._core.is("rotating") &&
                    this.pause();
                }, this),
                "touchend.owl.core": t.proxy(function () {
                  this._core.settings.autoplayHoverPause && this.play();
                }, this),
              }),
              this._core.$element.on(this._handlers),
              (this._core.options = t.extend(
                {},
                o.Defaults,
                this._core.options
              ));
          };
          (o.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1,
          }),
            (o.prototype._next = function (n) {
              (this._call = e.setTimeout(
                t.proxy(this._next, this, n),
                this._timeout * (Math.round(this.read() / this._timeout) + 1) -
                  this.read()
              )),
                this._core.is("interacting") ||
                  r.hidden ||
                  this._core.next(n || this._core.settings.autoplaySpeed);
            }),
            (o.prototype.read = function () {
              return new Date().getTime() - this._time;
            }),
            (o.prototype.play = function (r, n) {
              var o;
              this._core.is("rotating") || this._core.enter("rotating"),
                (r = r || this._core.settings.autoplayTimeout),
                (o = Math.min(this._time % (this._timeout || r), r)),
                this._paused
                  ? ((this._time = this.read()), (this._paused = !1))
                  : e.clearTimeout(this._call),
                (this._time += (this.read() % r) - o),
                (this._timeout = r),
                (this._call = e.setTimeout(
                  t.proxy(this._next, this, n),
                  r - o
                ));
            }),
            (o.prototype.stop = function () {
              this._core.is("rotating") &&
                ((this._time = 0),
                (this._paused = !0),
                e.clearTimeout(this._call),
                this._core.leave("rotating"));
            }),
            (o.prototype.pause = function () {
              this._core.is("rotating") &&
                !this._paused &&
                ((this._time = this.read()),
                (this._paused = !0),
                e.clearTimeout(this._call));
            }),
            (o.prototype.destroy = function () {
              var t, e;
              for (t in (this.stop(), this._handlers))
                this._core.$element.off(t, this._handlers[t]);
              for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.autoplay = o);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, e, r, n) {
          "use strict";
          var o = function (e) {
            (this._core = e),
              (this._initialized = !1),
              (this._pages = []),
              (this._controls = {}),
              (this._templates = []),
              (this.$element = this._core.$element),
              (this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to,
              }),
              (this._handlers = {
                "prepared.owl.carousel": t.proxy(function (e) {
                  e.namespace &&
                    this._core.settings.dotsData &&
                    this._templates.push(
                      '<div class="' +
                        this._core.settings.dotClass +
                        '">' +
                        t(e.content)
                          .find("[data-dot]")
                          .addBack("[data-dot]")
                          .attr("data-dot") +
                        "</div>"
                    );
                }, this),
                "added.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.dotsData &&
                    this._templates.splice(
                      t.position,
                      0,
                      this._templates.pop()
                    );
                }, this),
                "remove.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.dotsData &&
                    this._templates.splice(t.position, 1);
                }, this),
                "changed.owl.carousel": t.proxy(function (t) {
                  t.namespace && "position" == t.property.name && this.draw();
                }, this),
                "initialized.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    !this._initialized &&
                    (this._core.trigger("initialize", null, "navigation"),
                    this.initialize(),
                    this.update(),
                    this.draw(),
                    (this._initialized = !0),
                    this._core.trigger("initialized", null, "navigation"));
                }, this),
                "refreshed.owl.carousel": t.proxy(function (t) {
                  t.namespace &&
                    this._initialized &&
                    (this._core.trigger("refresh", null, "navigation"),
                    this.update(),
                    this.draw(),
                    this._core.trigger("refreshed", null, "navigation"));
                }, this),
              }),
              (this._core.options = t.extend(
                {},
                o.Defaults,
                this._core.options
              )),
              this.$element.on(this._handlers);
          };
          (o.Defaults = {
            nav: !1,
            navText: [
              '<span aria-label="Previous">&#x2039;</span>',
              '<span aria-label="Next">&#x203a;</span>',
            ],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
          }),
            (o.prototype.initialize = function () {
              var e,
                r = this._core.settings;
              for (e in ((this._controls.$relative = (
                r.navContainer
                  ? t(r.navContainer)
                  : t("<div>")
                      .addClass(r.navContainerClass)
                      .appendTo(this.$element)
              ).addClass("disabled")),
              (this._controls.$previous = t("<" + r.navElement + ">")
                .addClass(r.navClass[0])
                .html(r.navText[0])
                .prependTo(this._controls.$relative)
                .on(
                  "click",
                  t.proxy(function (t) {
                    this.prev(r.navSpeed);
                  }, this)
                )),
              (this._controls.$next = t("<" + r.navElement + ">")
                .addClass(r.navClass[1])
                .html(r.navText[1])
                .appendTo(this._controls.$relative)
                .on(
                  "click",
                  t.proxy(function (t) {
                    this.next(r.navSpeed);
                  }, this)
                )),
              r.dotsData ||
                (this._templates = [
                  t('<button role="button">')
                    .addClass(r.dotClass)
                    .append(t("<span>"))
                    .prop("outerHTML"),
                ]),
              (this._controls.$absolute = (
                r.dotsContainer
                  ? t(r.dotsContainer)
                  : t("<div>").addClass(r.dotsClass).appendTo(this.$element)
              ).addClass("disabled")),
              this._controls.$absolute.on(
                "click",
                "button",
                t.proxy(function (e) {
                  var n = t(e.target).parent().is(this._controls.$absolute)
                    ? t(e.target).index()
                    : t(e.target).parent().index();
                  e.preventDefault(), this.to(n, r.dotsSpeed);
                }, this)
              ),
              this._overrides))
                this._core[e] = t.proxy(this[e], this);
            }),
            (o.prototype.destroy = function () {
              var t, e, r, n, o;
              for (t in ((o = this._core.settings), this._handlers))
                this.$element.off(t, this._handlers[t]);
              for (e in this._controls)
                "$relative" === e && o.navContainer
                  ? this._controls[e].html("")
                  : this._controls[e].remove();
              for (n in this.overides) this._core[n] = this._overrides[n];
              for (r in Object.getOwnPropertyNames(this))
                "function" != typeof this[r] && (this[r] = null);
            }),
            (o.prototype.update = function () {
              var i,
                t,
                e = this._core.clones().length / 2,
                r = e + this._core.items().length,
                n = this._core.maximum(!0),
                o = this._core.settings,
                c =
                  o.center || o.autoWidth || o.dotsData
                    ? 1
                    : o.dotsEach || o.items;
              if (
                ("page" !== o.slideBy &&
                  (o.slideBy = Math.min(o.slideBy, o.items)),
                o.dots || "page" == o.slideBy)
              )
                for (this._pages = [], i = e, t = 0, 0; i < r; i++) {
                  if (t >= c || 0 === t) {
                    if (
                      (this._pages.push({
                        start: Math.min(n, i - e),
                        end: i - e + c - 1,
                      }),
                      Math.min(n, i - e) === n)
                    )
                      break;
                    t = 0;
                  }
                  t += this._core.mergers(this._core.relative(i));
                }
            }),
            (o.prototype.draw = function () {
              var e,
                r = this._core.settings,
                n = this._core.items().length <= r.items,
                o = this._core.relative(this._core.current()),
                c = r.loop || r.rewind;
              this._controls.$relative.toggleClass("disabled", !r.nav || n),
                r.nav &&
                  (this._controls.$previous.toggleClass(
                    "disabled",
                    !c && o <= this._core.minimum(!0)
                  ),
                  this._controls.$next.toggleClass(
                    "disabled",
                    !c && o >= this._core.maximum(!0)
                  )),
                this._controls.$absolute.toggleClass("disabled", !r.dots || n),
                r.dots &&
                  ((e =
                    this._pages.length -
                    this._controls.$absolute.children().length),
                  r.dotsData && 0 !== e
                    ? this._controls.$absolute.html(this._templates.join(""))
                    : e > 0
                    ? this._controls.$absolute.append(
                        new Array(e + 1).join(this._templates[0])
                      )
                    : e < 0 &&
                      this._controls.$absolute.children().slice(e).remove(),
                  this._controls.$absolute
                    .find(".active")
                    .removeClass("active"),
                  this._controls.$absolute
                    .children()
                    .eq(t.inArray(this.current(), this._pages))
                    .addClass("active"));
            }),
            (o.prototype.onTrigger = function (e) {
              var r = this._core.settings;
              e.page = {
                index: t.inArray(this.current(), this._pages),
                count: this._pages.length,
                size:
                  r &&
                  (r.center || r.autoWidth || r.dotsData
                    ? 1
                    : r.dotsEach || r.items),
              };
            }),
            (o.prototype.current = function () {
              var e = this._core.relative(this._core.current());
              return t
                .grep(
                  this._pages,
                  t.proxy(function (t, r) {
                    return t.start <= e && t.end >= e;
                  }, this)
                )
                .pop();
            }),
            (o.prototype.getPosition = function (e) {
              var r,
                n,
                o = this._core.settings;
              return (
                "page" == o.slideBy
                  ? ((r = t.inArray(this.current(), this._pages)),
                    (n = this._pages.length),
                    e ? ++r : --r,
                    (r = this._pages[((r % n) + n) % n].start))
                  : ((r = this._core.relative(this._core.current())),
                    (n = this._core.items().length),
                    e ? (r += o.slideBy) : (r -= o.slideBy)),
                r
              );
            }),
            (o.prototype.next = function (e) {
              t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
            }),
            (o.prototype.prev = function (e) {
              t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
            }),
            (o.prototype.to = function (e, r, n) {
              var o;
              !n && this._pages.length
                ? ((o = this._pages.length),
                  t.proxy(this._overrides.to, this._core)(
                    this._pages[((e % o) + o) % o].start,
                    r
                  ))
                : t.proxy(this._overrides.to, this._core)(e, r);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Navigation = o);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, e, r, n) {
          "use strict";
          var o = function (r) {
            (this._core = r),
              (this._hashes = {}),
              (this.$element = this._core.$element),
              (this._handlers = {
                "initialized.owl.carousel": t.proxy(function (r) {
                  r.namespace &&
                    "URLHash" === this._core.settings.startPosition &&
                    t(e).trigger("hashchange.owl.navigation");
                }, this),
                "prepared.owl.carousel": t.proxy(function (e) {
                  if (e.namespace) {
                    var r = t(e.content)
                      .find("[data-hash]")
                      .addBack("[data-hash]")
                      .attr("data-hash");
                    if (!r) return;
                    this._hashes[r] = e.content;
                  }
                }, this),
                "changed.owl.carousel": t.proxy(function (r) {
                  if (r.namespace && "position" === r.property.name) {
                    var n = this._core.items(
                        this._core.relative(this._core.current())
                      ),
                      o = t
                        .map(this._hashes, function (t, e) {
                          return t === n ? e : null;
                        })
                        .join();
                    if (!o || e.location.hash.slice(1) === o) return;
                    e.location.hash = o;
                  }
                }, this),
              }),
              (this._core.options = t.extend(
                {},
                o.Defaults,
                this._core.options
              )),
              this.$element.on(this._handlers),
              t(e).on(
                "hashchange.owl.navigation",
                t.proxy(function (t) {
                  var r = e.location.hash.substring(1),
                    n = this._core.$stage.children(),
                    o = this._hashes[r] && n.index(this._hashes[r]);
                  undefined !== o &&
                    o !== this._core.current() &&
                    this._core.to(this._core.relative(o), !1, !0);
                }, this)
              );
          };
          (o.Defaults = { URLhashListener: !1 }),
            (o.prototype.destroy = function () {
              var r, n;
              for (r in (t(e).off("hashchange.owl.navigation"), this._handlers))
                this._core.$element.off(r, this._handlers[r]);
              for (n in Object.getOwnPropertyNames(this))
                "function" != typeof this[n] && (this[n] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Hash = o);
        })(window.Zepto || window.jQuery, window, document),
        (function (t, e, r, n) {
          var style = t("<support>").get(0).style,
            o = "Webkit Moz O ms".split(" "),
            c = {
              transition: {
                end: {
                  WebkitTransition: "webkitTransitionEnd",
                  MozTransition: "transitionend",
                  OTransition: "oTransitionEnd",
                  transition: "transitionend",
                },
              },
              animation: {
                end: {
                  WebkitAnimation: "webkitAnimationEnd",
                  MozAnimation: "animationend",
                  OAnimation: "oAnimationEnd",
                  animation: "animationend",
                },
              },
            },
            l = function () {
              return !!f("transform");
            },
            d = function () {
              return !!f("perspective");
            },
            h = function () {
              return !!f("animation");
            };
          function f(e, r) {
            var c = !1,
              l = e.charAt(0).toUpperCase() + e.slice(1);
            return (
              t.each(
                (e + " " + o.join(l + " ") + l).split(" "),
                function (i, t) {
                  if (style[t] !== n) return (c = !r || t), !1;
                }
              ),
              c
            );
          }
          function m(t) {
            return f(t, !0);
          }
          (function () {
            return !!f("transition");
          })() &&
            ((t.support.transition = new String(m("transition"))),
            (t.support.transition.end =
              c.transition.end[t.support.transition])),
            h() &&
              ((t.support.animation = new String(m("animation"))),
              (t.support.animation.end = c.animation.end[t.support.animation])),
            l() &&
              ((t.support.transform = new String(m("transform"))),
              (t.support.transform3d = d()));
        })(window.Zepto || window.jQuery, window, document);
    },
    69: function (t, e, r) {
      "use strict";
      var n = {
        name: "NoSsr",
        functional: !0,
        props: {
          placeholder: String,
          placeholderTag: { type: String, default: "div" },
        },
        render: function (t, e) {
          var r = e.parent,
            n = e.slots,
            o = e.props,
            c = n(),
            l = c.default;
          void 0 === l && (l = []);
          var d = c.placeholder;
          return r._isMounted
            ? l
            : (r.$once("hook:mounted", function () {
                r.$forceUpdate();
              }),
              o.placeholderTag && (o.placeholder || d)
                ? t(
                    o.placeholderTag,
                    { class: ["no-ssr-placeholder"] },
                    o.placeholder || d
                  )
                : l.length > 0
                ? l.map(function () {
                    return t(!1);
                  })
                : t(!1));
        },
      };
      t.exports = n;
    },
    87: function (t, e, r) {
      "use strict";
      t.exports = function (t) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var content = t(e);
              return e[2]
                ? "@media ".concat(e[2], " {").concat(content, "}")
                : content;
            }).join("");
          }),
          (e.i = function (t, r, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            var o = {};
            if (n)
              for (var i = 0; i < this.length; i++) {
                var c = this[i][0];
                null != c && (o[c] = !0);
              }
            for (var l = 0; l < t.length; l++) {
              var d = [].concat(t[l]);
              (n && o[d[0]]) ||
                (r &&
                  (d[2]
                    ? (d[2] = "".concat(r, " and ").concat(d[2]))
                    : (d[2] = r)),
                e.push(d));
            }
          }),
          e
        );
      };
    },
    88: function (t, e, r) {
      "use strict";
      function n(t, e) {
        for (var r = [], n = {}, i = 0; i < e.length; i++) {
          var o = e[i],
            c = o[0],
            l = { id: t + ":" + i, css: o[1], media: o[2], sourceMap: o[3] };
          n[c] ? n[c].parts.push(l) : r.push((n[c] = { id: c, parts: [l] }));
        }
        return r;
      }
      r.r(e),
        r.d(e, "default", function () {
          return w;
        });
      var o = "undefined" != typeof document;
      if ("undefined" != typeof DEBUG && DEBUG && !o)
        throw new Error(
          "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
        );
      var c = {},
        head = o && (document.head || document.getElementsByTagName("head")[0]),
        l = null,
        d = 0,
        h = !1,
        f = function () {},
        m = null,
        v = "data-vue-ssr-id",
        y =
          "undefined" != typeof navigator &&
          /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function w(t, e, r, o) {
        (h = r), (m = o || {});
        var l = n(t, e);
        return (
          x(l),
          function (e) {
            for (var r = [], i = 0; i < l.length; i++) {
              var o = l[i];
              (d = c[o.id]).refs--, r.push(d);
            }
            e ? x((l = n(t, e))) : (l = []);
            for (i = 0; i < r.length; i++) {
              var d;
              if (0 === (d = r[i]).refs) {
                for (var h = 0; h < d.parts.length; h++) d.parts[h]();
                delete c[d.id];
              }
            }
          }
        );
      }
      function x(t) {
        for (var i = 0; i < t.length; i++) {
          var e = t[i],
            r = c[e.id];
          if (r) {
            r.refs++;
            for (var n = 0; n < r.parts.length; n++) r.parts[n](e.parts[n]);
            for (; n < e.parts.length; n++) r.parts.push(k(e.parts[n]));
            r.parts.length > e.parts.length &&
              (r.parts.length = e.parts.length);
          } else {
            var o = [];
            for (n = 0; n < e.parts.length; n++) o.push(k(e.parts[n]));
            c[e.id] = { id: e.id, refs: 1, parts: o };
          }
        }
      }
      function _() {
        var t = document.createElement("style");
        return (t.type = "text/css"), head.appendChild(t), t;
      }
      function k(t) {
        var e,
          r,
          n = document.querySelector("style[" + v + '~="' + t.id + '"]');
        if (n) {
          if (h) return f;
          n.parentNode.removeChild(n);
        }
        if (y) {
          var o = d++;
          (n = l || (l = _())),
            (e = T.bind(null, n, o, !1)),
            (r = T.bind(null, n, o, !0));
        } else
          (n = _()),
            (e = S.bind(null, n)),
            (r = function () {
              n.parentNode.removeChild(n);
            });
        return (
          e(t),
          function (n) {
            if (n) {
              if (
                n.css === t.css &&
                n.media === t.media &&
                n.sourceMap === t.sourceMap
              )
                return;
              e((t = n));
            } else r();
          }
        );
      }
      var E,
        C =
          ((E = []),
          function (t, e) {
            return (E[t] = e), E.filter(Boolean).join("\n");
          });
      function T(t, e, r, n) {
        var o = r ? "" : n.css;
        if (t.styleSheet) t.styleSheet.cssText = C(e, o);
        else {
          var c = document.createTextNode(o),
            l = t.childNodes;
          l[e] && t.removeChild(l[e]),
            l.length ? t.insertBefore(c, l[e]) : t.appendChild(c);
        }
      }
      function S(t, e) {
        var r = e.css,
          n = e.media,
          o = e.sourceMap;
        if (
          (n && t.setAttribute("media", n),
          m.ssrId && t.setAttribute(v, e.id),
          o &&
            ((r += "\n/*# sourceURL=" + o.sources[0] + " */"),
            (r +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
              " */")),
          t.styleSheet)
        )
          t.styleSheet.cssText = r;
        else {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(r));
        }
      }
    },
  },
]);
