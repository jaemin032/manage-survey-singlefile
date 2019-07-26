"use strict";

var _vue = _interopRequireDefault(require("./vue.js"));

var _survey = require("./components/survey.js");

var _question = require("./components/question/question.js");

var _mainTemplate = require("./templates/main-template.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Vue.use(VueRouter)
_vue.default.use(Vuex);

function setOrder(arr) {
  arr.forEach(function (value, index) {
    arr[index].order = index + 1;
  });
  return arr;
}

function getSurvey() { // fetch
}

new _vue.default({
  el: '#app',
  // This should be the same as your <div id=""> from earlier.
  store: new Vuex.Store({
    state: {
      survey: {
        title: '이번주 식단 설문조사',
        description: '이번주 시간별로 메뉴를 알아봅시다',
        questions: [{
          title: '이번주 점심메뉴',
          type: 'multiple-choice',
          order: 1,
          required: true,
          options: [{
            title: '짜장면',
            'order': 1
          }]
        }, {
          title: '이번주 저녁메뉴',
          type: 'short-essay',
          order: 2,
          required: true,
          options: []
        }]
      }
    },
    mutations: {
      getSurvey: function getSurvey(state, payload) {
        fetch("http://localhost:8080/manager/questions?survey-id=1").then(function (res) {
          return res.json();
        }).then(function (res) {
          console.log(res);
          state.survey.questions = res;
        });
      },
      saveQuestions: function saveQuestions(state, payload) {
        state.survey.questions = setOrder(payload.questions);
      },
      deleteQuestion: function deleteQuestion(state, questionOrder) {
        state.survey.questions.splice(questionOrder - 1, 1); // 순서 저장

        state.survey.questions = setOrder(state.survey.questions);
      },
      copyQuestion: function copyQuestion(state, questionOrder) {
        var cloneQuestion = JSON.parse(JSON.stringify(state.survey.questions[questionOrder - 1]));
        state.survey.questions.splice(questionOrder - 1, 0, cloneQuestion);
        state.survey.questions = setOrder(state.survey.questions);
      },
      addQuestion: function addQuestion(state) {
        var question = {
          title: '',
          type: 'multiple-choice',
          order: state.survey.questions.length + 1,
          required: false,
          options: []
        };
        state.survey.questions.push(question);
      },
      deleteOption: function deleteOption(state, payload) {
        var options = state.survey.questions[payload.questionOrder - 1].options;
        options.splice(payload.optionOrder - 1, 1);
        options = setOrder(options);
      },
      addOption: function addOption(state, questionOrder) {
        var options = state.survey.questions[questionOrder - 1].options;
        options.push({
          title: '',
          order: options.length + 1
        });
      },
      addLike: function addLike(state, payload) {
        // use parent Id
        var matchId = function matchId(comment) {
          return comment.id === payload.targetId;
        };

        state.comments.find(matchId).likes += payload.changeValue;
      },
      addDislike: function addDislike(state, payload) {
        var matchId = function matchId(comment) {
          return comment.id === payload.targetId;
        };

        state.comments.find(matchId).dislikes += payload.changeValue;
      }
    }
  }),
  created: function created() {
    this.$store.commit('getSurvey');
  },
  components: {
    'question': _question.Question,
    'survey': _survey.Survey
  },

  /*router,*/
  template: _mainTemplate.MainTemplate
});