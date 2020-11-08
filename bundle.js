"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// ES6
// Classes
var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList = /*#__PURE__*/function (_List) {
  _inherits(TodoList, _List);

  var _super = _createSuper(TodoList);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _super.call(this);
    _this.usuario = 'Leonardo';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    } // normalmente métodos static, sua classe não tem constructor, pois ele não ve o escopo dela somente para apresentar alguma informação

  }], [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return TodoList;
}(List);

var MinhaLista = new TodoList();

document.querySelector('#novoTodo').onclick = function () {
  MinhaLista.add('Novo todo');
};

MinhaLista.mostraUsuario();
console.log(TodoList.soma(6, 7)); // Const e Let

var a = 1; // Não pode ter seu valor redefinido
// a = 3; // não irá funcionar
// Mas ela pode ser alterada por mutação dentro da constante

var usuario = {
  nome: 'Leonardo'
};
usuario.nome = 'Cleiton'; // Let é a variável de escopo, não-global a todo arquivo

function teste(x) {
  var y = 2;

  if (x > 5) {
    console.log(x, y);
  }
}

teste(10); // OPERAÇÕES EM ARRAY

var arr = [1, 3, 4, 5, 8, 9]; //map -> percorrer o vetor e retornar uma informação

var mapArray = arr.map(function (item, index) {
  return item + index;
});
console.log(mapArray); //reduce -> consumir o vetor e transformar em uma única variável, geralmente um número

var reduceArray = arr.reduce(function (total, next) {
  return total + next;
});
console.log(reduceArray); //filter -> filtra e retorna apenas os itens que atendem a condição, retornando true ou false

var filterArray = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filterArray); //find -> procura uma informação dentro do array ou se a gente consegue encontrar uma informação dentro do array]

var findArray = arr.find(function (item) {
  return item === 4;
});
console.log(findArray); // ARROW FUNCTIONS

var arrayAf = [1, 3, 4, 5, 6];
var mapArrayAf = arrayAf.map(function (item) {
  return item * 2;
});
console.log(mapArrayAf);

var TesteAf = function TesteAf() {
  return {
    nome: 'Diego'
  };
};

console.log(TesteAf());
