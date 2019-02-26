System.register("FlyStrategy/IFlyStrategy", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("QuackStrategy/IQuackStrategy", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("Duck", [], function (exports_3, context_3) {
    "use strict";
    var Duck;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            Duck = (function () {
                function Duck(fs, qs) {
                    this.fs = fs;
                    this.qs = qs;
                }
                Duck.prototype.fly = function () {
                    this.fs.fly();
                };
                Duck.prototype.quack = function () {
                    this.qs.quack();
                };
                return Duck;
            }());
            exports_3("Duck", Duck);
        }
    };
});
System.register("FlyStrategy/JetFlyStrategy", [], function (exports_4, context_4) {
    "use strict";
    var JetFlyStrategy;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
            JetFlyStrategy = (function () {
                function JetFlyStrategy() {
                }
                JetFlyStrategy.prototype.fly = function () {
                    console.log("Jet Flying");
                };
                return JetFlyStrategy;
            }());
            exports_4("JetFlyStrategy", JetFlyStrategy);
        }
    };
});
System.register("QuackStrategy/SimpleQuackStrategy", [], function (exports_5, context_5) {
    "use strict";
    var SimpleQuackStrategy;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [],
        execute: function () {
            SimpleQuackStrategy = (function () {
                function SimpleQuackStrategy() {
                }
                SimpleQuackStrategy.prototype.quack = function () {
                    console.log("Quack quack");
                };
                return SimpleQuackStrategy;
            }());
            exports_5("SimpleQuackStrategy", SimpleQuackStrategy);
        }
    };
});
System.register("Main", ["Duck", "FlyStrategy/JetFlyStrategy", "QuackStrategy/SimpleQuackStrategy"], function (exports_6, context_6) {
    "use strict";
    var Duck_1, JetFlyStrategy_1, SimpleQuackStrategy_1, Main;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (Duck_1_1) {
                Duck_1 = Duck_1_1;
            },
            function (JetFlyStrategy_1_1) {
                JetFlyStrategy_1 = JetFlyStrategy_1_1;
            },
            function (SimpleQuackStrategy_1_1) {
                SimpleQuackStrategy_1 = SimpleQuackStrategy_1_1;
            }
        ],
        execute: function () {
            Main = (function () {
                function Main() {
                }
                Main.prototype.main = function () {
                    var cloudDuck = new Duck_1.Duck(new JetFlyStrategy_1.JetFlyStrategy(), new SimpleQuackStrategy_1.SimpleQuackStrategy());
                    cloudDuck.fly();
                    cloudDuck.quack();
                };
                return Main;
            }());
        }
    };
});
System.register("FlyStrategy/NoFlyStrategy", [], function (exports_7, context_7) {
    "use strict";
    var NoFlyStrategy;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [],
        execute: function () {
            NoFlyStrategy = (function () {
                function NoFlyStrategy() {
                }
                NoFlyStrategy.prototype.fly = function () {
                    console.log("Not flying today");
                };
                return NoFlyStrategy;
            }());
            exports_7("NoFlyStrategy", NoFlyStrategy);
        }
    };
});
System.register("QuackStrategy/NoQuackStrategy", [], function (exports_8, context_8) {
    "use strict";
    var NoQuackStrategy;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [],
        execute: function () {
            NoQuackStrategy = (function () {
                function NoQuackStrategy() {
                }
                NoQuackStrategy.prototype.quack = function () {
                    console.log("I can't quack");
                };
                return NoQuackStrategy;
            }());
            exports_8("NoQuackStrategy", NoQuackStrategy);
        }
    };
});
//# sourceMappingURL=index.js.map