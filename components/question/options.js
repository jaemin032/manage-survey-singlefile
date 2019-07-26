"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Options = void 0;

var _optionsTemplate = require("../../templates/question/options-template.js");

var _vuedraggable = require("../vuedraggable.js");

var test = "wftwftyuwfntyuwfnt";
var test2 = "wfutywnftuynwftuywft ".concat(test, " Hahah ");
var Options = {
  template: _optionsTemplate.OptionsTemplate,
  props: ['questionOrder', 'options'],
  data: function data() {
    return {};
  },
  computed: {
    cOptions: {
      // computed options
      set: function set(cOptions) {
        $emit('update:options', this.cOptions);
      },
      get: function get() {
        return this.$store.state.survey.questions[this.questionOrder - 1].options;
      }
    }
  },
  methods: {
    addOption: function addOption() {
      this.$store.commit('addOption', this.questionOrder);
    },
    deleteOption: function deleteOption(optionOrder) {
      this.$store.commit('deleteOption', {
        questionOrder: this.questionOrder,
        optionOrder: optionOrder
      });
    }
  },
  components: {
    'draggable': _vuedraggable.draggable
  }
};
exports.Options = Options;