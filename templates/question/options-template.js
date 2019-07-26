"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionsTemplate = void 0;
var OptionsTemplate = "\n<div>\n    <draggable v-model=\"options\" group=\"people\" :options=\"{handle:'.handle'}\">\n        <div v-for=\"option in cOptions\" @change=\"$emit('update:options', this.cOptions)\">\n            <span class=\"handle\">---handle---</span>\n            <input type=\"text\" v-model=\"option.title\" placeholder=\"\uC120\uD0DD\uC9C0\">\n            <button @click=\"deleteOption(option.order)\">\uC0AD\uC81C</button>\n        </div>\n    </draggable>\n    <button @click=\"addOption()\">\uC635\uC158 \uCD94\uAC00</button>\n    \n</div>\n";
exports.OptionsTemplate = OptionsTemplate;