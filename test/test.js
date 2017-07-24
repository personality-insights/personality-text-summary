/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const assert = require('chai').assert;

const TextSummary = require('../src/index');

// Note: the v2 and v3 profiles have the same values for each respective language; the only difference is
//       the structure of the profile tree and some of the keys
// V2 test profiles
const v2EnProfile = require('./sample_profiles/v2/en');
const v2EsProfile = require('./sample_profiles/v2/es');
const v2JaProfile = require('./sample_profiles/v2/ja');
const v2KoProfile = require('./sample_profiles/v2/ko');

// V3 test profiles
const v3EnProfile = require('./sample_profiles/v3/en');
const v3EsProfile = require('./sample_profiles/v3/es');
const v3JaProfile = require('./sample_profiles/v3/ja');
const v3KoProfile = require('./sample_profiles/v3/ko');

describe('Text Summary Tests', () => {

  it('Default (V2, English) profile summary', () => {
    const textSummary = new TextSummary();
    const summary = textSummary.getSummary(v2EnProfile);
    assert.equal(summary, 'You are shrewd, somewhat critical and particular.\nYou are self-controlled: you have control over your desires, which are not particularly intense. You are mild-tempered: it takes a lot to get you angry. And you are assertive: you tend to speak up and take charge of situations, and you are comfortable leading groups.\nYour choices are driven by a desire for organization.\nYou are relatively unconcerned with both taking pleasure in life and achieving success. You prefer activities with a purpose greater than just personal enjoyment. And you make decisions with little regard for how they show off your talents.');
  });

  it('V2 English profile summary', () => {
    const textSummary = new TextSummary({ locale : 'en', 'version' : 'v2' });
    const summary = textSummary.getSummary(v2EnProfile);
    assert.equal(summary, 'You are shrewd, somewhat critical and particular.\nYou are self-controlled: you have control over your desires, which are not particularly intense. You are mild-tempered: it takes a lot to get you angry. And you are assertive: you tend to speak up and take charge of situations, and you are comfortable leading groups.\nYour choices are driven by a desire for organization.\nYou are relatively unconcerned with both taking pleasure in life and achieving success. You prefer activities with a purpose greater than just personal enjoyment. And you make decisions with little regard for how they show off your talents.');
  });

  it('V2 Spanish profile summary', () => {
    const textSummary = new TextSummary({ locale : 'es', 'version' : 'v2' });
    const summary = textSummary.getSummary(v2EsProfile);
    assert.equal(summary, 'Usted es perspicaz, algo crítico y detallista.\nUsted es sereno: controla sus deseos, los cuales no son particularmente intensos. Usted es apacible: es difícil hacerle enojar. Y usted es asertivo: tiende a expresarse y a hacerse cargo de las situaciones, y se encuentra cómodo liderando grupos.\nSus elecciones están determinadas por un deseo de organización.\nUsted es relativamente indiferente con disfrutar de la vida y alcanzar el éxito. Prefiere actividades con un propósito más grande que el sólo deleite personal. Y toma decisiones sin considerar cómo muestran sus talentos.');
  });

  it('V2 Japanese profile summary', () => {
    const textSummary = new TextSummary({ locale : 'ja', 'version' : 'v2' });
    const summary = textSummary.getSummary(v2JaProfile);
    assert.equal(summary, '鋭敏なタイプであり、多少批判的なタイプであり、また独特なタイプです.\n自制心があるタイプです: 自分の欲望をコントロールできますし、強烈な欲望を持ちません. 温和なタイプです: 滅多に怒りません. また、自己主張が強いタイプです: 遠慮なく発言し、その場をリードする傾向があります。また、集団を統率できます.\n組織への帰属を意識して意思決定するタイプです.\n生活を楽しむことと成功することの両方にあまりこだわりません. 単なる個人の楽しみよりも大きな目標を伴う行動を優先します. また自分の才能を誇示することにあまり拘らず意思決定します.');
  });

  it('V2 Korean profile summary', () => {
    const textSummary = new TextSummary({ locale : 'ko', 'version' : 'v2' });
    const summary = textSummary.getSummary(v2KoProfile);
    assert.equal(summary, '귀하는 상황판단이 빠른, 다소 비판적인 그리고  까다로운 입니다(합니다).\n귀하는 self-세심히 통제된 입니다(합니다): 귀하는 특히 강렬하지 않은 당신의 열망을 통제 할 수 있습니다. 귀하는 온순한 기질인 입니다(합니다): 귀하는 화가 나는데 많은 시간이 필요합니다. 또한 귀하는 적극적인 입니다(합니다): 귀하는 상황을 대변하고 책임지는 경향이 있으며, 그룹을 이끄는게 편안합니다.\n귀하의 선택들은 조직에 대한 열망에 의해 좌우됩니다.\n귀하는 인생의 즐거움을 즐기는 것 와(과) 성공 달성 을(를) 비교적 신경쓰지않는 편입니다. 귀하는 단지 개인적인 즐거움보다 더 큰 목적을 가진 활동을 선호합니다. 그리고 귀하는 자신의 재능을 과시하는 방법을 거의 고려하지 않고 결정합니다 입니다(합니다).');
  });

  it('V3 English profile summary', () => {
    const textSummary = new TextSummary({ locale : 'en', 'version' : 'v3' });
    const summary = textSummary.getSummary(v3EnProfile);
    assert.equal(summary, 'You are shrewd, somewhat critical and particular.\nYou are self-controlled: you have control over your desires, which are not particularly intense. You are mild-tempered: it takes a lot to get you angry. And you are assertive: you tend to speak up and take charge of situations, and you are comfortable leading groups.\nYour choices are driven by a desire for organization.\nYou are relatively unconcerned with both taking pleasure in life and achieving success. You prefer activities with a purpose greater than just personal enjoyment. And you make decisions with little regard for how they show off your talents.');
  });

  it('V3 Spanish profile summary', () => {
    const textSummary = new TextSummary({ locale : 'es', 'version' : 'v3' });
    const summary = textSummary.getSummary(v3EsProfile);
    assert.equal(summary, 'Usted es perspicaz, algo crítico y detallista.\nUsted es sereno: controla sus deseos, los cuales no son particularmente intensos. Usted es apacible: es difícil hacerle enojar. Y usted es asertivo: tiende a expresarse y a hacerse cargo de las situaciones, y se encuentra cómodo liderando grupos.\nSus elecciones están determinadas por un deseo de organización.\nUsted es relativamente indiferente con disfrutar de la vida y alcanzar el éxito. Prefiere actividades con un propósito más grande que el sólo deleite personal. Y toma decisiones sin considerar cómo muestran sus talentos.');
  });

  it('V3 Japanese profile summary', () => {
    const textSummary = new TextSummary({ locale : 'ja', 'version' : 'v3' });
    const summary = textSummary.getSummary(v3JaProfile);
    assert.equal(summary, '鋭敏なタイプであり、多少批判的なタイプであり、また独特なタイプです.\n自制心があるタイプです: 自分の欲望をコントロールできますし、強烈な欲望を持ちません. 温和なタイプです: 滅多に怒りません. また、自己主張が強いタイプです: 遠慮なく発言し、その場をリードする傾向があります。また、集団を統率できます.\n組織への帰属を意識して意思決定するタイプです.\n生活を楽しむことと成功することの両方にあまりこだわりません. 単なる個人の楽しみよりも大きな目標を伴う行動を優先します. また自分の才能を誇示することにあまり拘らず意思決定します.');
  });

  it('V3 Korean profile summary', () => {
    const textSummary = new TextSummary({ locale : 'ko', 'version' : 'v3' });
    const summary = textSummary.getSummary(v3KoProfile);
    assert.equal(summary, '귀하는 상황판단이 빠릅니다, 다소 비판적입니다 그리고  까다롭습니다.\n귀하는 self-세심히 통제된 입니다(합니다): 귀하는 특히 강렬하지 않은 당신의 열망을 통제 할 수 있습니다. 귀하는 온순한 기질입니다: 귀하는 화가 나는데 많은 시간이 필요합니다. 또한 귀하는 적극적입니다: 귀하는 상황을 대변하고 책임지는 경향이 있으며, 그룹을 이끄는게 편안합니다.\n귀하의 선택들은 조직에 대한 열망에 의해 좌우됩니다.\n귀하는 인생의 즐거움을 즐기는 것, 성공 달성에 대해 비교적 신경쓰지않는 편입니다. 귀하는 단지 개인적인 즐거움보다 더 큰 목적을 가진 활동을 선호합니다. 그리고 귀하는 자신의 재능을 과시하는 방법을 거의 고려하지 않고 결정합니다.');
  });

});
