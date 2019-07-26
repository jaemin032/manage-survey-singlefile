"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Question = void 0;

var _options = require("./options.js");

var Question = {
  template: "\n    <div class=\"question\">\n        <div class=\"handle\">-----------------handle-----------------</div>\n        <div>\n            <input type=\"text\" placeholder=\"\uC9C8\uBB38\" :value=\"question\" @input=\"$emit('update:question', $event.target.value)\">\n            <select :value=\"type\" @input=\"$emit('update:type', $event.target.value)\">\n                <option value=\"multiple-choice\">\uAC1D\uAD00\uC2DD \uC9C8\uBB38</option>\n                <option value=\"checkbox\">\uCCB4\uD06C\uBC15\uC2A4</option>\n                <option value=\"short-essay\">\uB2E8\uB2F5\uD615</option>\n                <option value=\"long-essay\">\uC7A5\uBB38\uD615</option>\n            </select>\n        </div>\n        <div>\n            <options v-if=\"['multiple-choice', 'checkbox'].includes(this.type)\" \n                :questionOrder=\"order\"\n                :options.sync=\"dOptions\"></options>\n            <input v-if=\"this.type=='short-essay'\" type=\"text\" placeholder=\"\uB2E8\uB2F5\uD615\" disabled>\n            <input v-if=\"this.type=='long-essay'\" type=\"text\" placeholder=\"\uC7A5\uBB38\uD615\" disabled>\n        </div>\n        <div>\n            <button @click=\"copyQuestion\">\uBCF5\uC0AC</button>\n            <button @click=\"$emit('delete-question', order)\">\uC0AD\uC81C</button>{{order}}\n            <span>\n                <span>\uD544\uC218</span>\n                <label class=\"switch\">\n                    <input type=\"checkbox\" :checked=\"required\" @input=\"$emit('update:required', $event.target.checked)\">\n                    <span class=\"slider round\"></span>\n                </label>\n            </span>\n        </div>\n    </div>",
  props: ['order', 'question', 'required', 'type', 'options'],
  data: function data() {
    return {
      dOptions: this.options
    };
  },
  methods: {
    deleteQuestion: function deleteQuestion() {
      this.$store.commit('deleteQuestion', this.order);
    },
    copyQuestion: function copyQuestion() {
      this.$store.commit('copyQuestion', this.order);
    }
  },
  components: {
    options: _options.Options
  }
};
exports.Question = Question;