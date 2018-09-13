var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this.state = {
      quotes: ["Life isn’t about getting and having, it’s about giving and being.", "Whatever the mind of man can conceive and believe, it can achieve.", "You miss 100% of the shots you don’t take.", "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", "The most difficult thing is the decision to act, the rest is merely tenacity.", "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover."],
      names: ["Napoleon Hill", "Kevin Kruse", "Albert Einstein", "Robert Frost", "Michael Jordan", "Alice Walker"],
      bgColor: "grey",
      qIndex: 1,
      nIndex: 1,
      tweetLink: "https://twitter.com/intent/tweet?text=Whatever%20the%20mind%20of%20man%20can%20conceive%20and%20believe,%20it%20can%20achieve." };

    _this.changeState = function (e) {
      var letters = '0123456789ABCDEF';
      var color = '#';
      var indexQ = Math.floor(_this.state.quotes.length * Math.random());
      var indexN = Math.floor(_this.state.names.length * Math.random());
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      var link = "https://twitter.com/intent/tweet?text=";
      var quote = _this.state.quotes[indexQ];
      var splitt = quote.split(" ");
      quote = splitt.join("%20");
      final = link + quote;
      _this.setState({
        bgColor: color,
        qIndex: indexQ,
        nIndex: indexN,
        tweetLink: final });

      e.preventDefault();
    };return _this;
  }_createClass(App, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { className: "container-fluid p-5", style: { minHeight: "100%", height: "100%", backgroundColor: this.state.bgColor } },
          React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
              React.createElement("div", { className: "col-md-6 mx-auto" },
                React.createElement("h1", { className: "display-4 text-center mb-5 text-white" }, "Quote Generator"),


                React.createElement("div", { id: "quote-box", className: "card rounded bg-light mt-5 p-5" },
                  React.createElement("p", { id: "text", className: "lead card-body" },
                    this.state.quotes[this.state.qIndex]),

                  React.createElement("div", { className: "card-footer bg-light" },
                    React.createElement("div", { className: "row" },
                      React.createElement("div", { className: "col-md-6" },
                        React.createElement("a", { href: "#" }, React.createElement("i", { className: "fa fa-instagram text-right mr-2 text-dark" })),
                        React.createElement("a", { href: "#" }, React.createElement("i", { className: "fa fa-facebook text-right mr-2 text-dark" })),
                        React.createElement("a", { id: "tweet-quote", href: this.state.tweetLink, target: "_blank" }, React.createElement("i", { className: "fa fa-twitter text-right text-dark" }))),

                      React.createElement("div", { className: "col-md-6" },
                        React.createElement("p", { id: "author", className: "text-muted text-right" }, "  ", this.state.names[this.state.nIndex], " "))),


                    React.createElement("button", { id: "new-quote", className: "btn btn-block text-white", style: { backgroundColor: this.state.bgColor }, onClick: this.changeState }, "Another One"))))))));







    } }]);return App;}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));