"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SurveyTemplate = void 0;
var SurveyTemplate = "\n<div>\n    <div class=\"title\">\n        <input type=\"text\" placeholder=\"\uC124\uBB38\uC9C0 \uC81C\uBAA9\" :value=\"this.$store.state.survey.title\">\n    </div>\n    <div class=\"description\">\n        <input type=\"text\" placeholder=\"\uC124\uBB38\uC9C0 \uC124\uBA85\" :value=\"this.$store.state.survey.description\">\n    </div>\n    <div class=\"questions\">\n    {{ questions }}\n    <draggable v-model=\"questions\" group=\"people\" :options=\"{handle:'.handle'}\">\n        <!--draggable-->\n        <question v-for=\"question in questions\"\n                  :key=\"question.order\"\n                  :order=\"question.order\"\n                  :question.sync=\"question.question\"\n                  :type.sync=\"question.type\"\n                  :required.sync=\"question.required\"\n                  :options.sync=\"question.options\"\n                  @delete-question=\"deleteQuestion\"></question>\n    </draggable>\n    <div class=\"functions\">\n        <button @click=\"addQuestion\">\uC9C8\uBB38 \uCD94\uAC00</button>\n    </div>\n    \n        \n    </div>\n</div>\n";
exports.SurveyTemplate = SurveyTemplate;