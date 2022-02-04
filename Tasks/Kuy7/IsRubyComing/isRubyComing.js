function isRubyComing(list) {
   return list.filter(el => el.language === 'Ruby').length > 0;
}

module.exports = isRubyComing;