"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Survey = void 0;

var _question = require("./question/question.js");

var _surveyTemplate = require("../templates/survey-template.js");

var _vuedraggable = require("./vuedraggable.js");

var Survey = {
  template: _surveyTemplate.SurveyTemplate,
  props: [],
  data: function data() {
    return {};
  },
  computed: {
    questions: {
      set: function set(questions) {
        this.$store.commit('saveQuestions', {
          questions: questions
        });
      },
      get: function get() {
        return this.$store.state.survey.questions;
      }
    }
  },
  methods: {
    deleteQuestion: function deleteQuestion(order) {
      this.$store.commit('deleteQuestion', order);
    },
    addQuestion: function addQuestion() {
      this.$store.commit('addQuestion');
    }
  },
  components: {
    'question': _question.Question,
    'draggable': _vuedraggable.draggable
  }
};
exports.Survey = Survey;