// Publish project specific data
(function() {
rh = window.rh;
model = rh.model;

rh.consts('DEFAULT_TOPIC', encodeURI("#WN/WN.htm".substring(1)));
rh.consts('HOME_FILEPATH', encodeURI("index.htm"));
rh.consts('START_FILEPATH', encodeURI('index.htm'));
rh.consts('HELP_ID', 'FA90E5CD-A36A-4BCA-9D35-5098B95935C1' || 'preview');
rh.consts('LNG_STOP_WORDS', ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "after", "all", "along", "already", "also", "am", "among", "an", "and", "another", "any", "are", "at", "be", "because", "been", "between", "but", "by", "can", "do", "does", "doesn", "done", "each", "either", "for", "from", "get", "has", "have", "here", "how", "i", "if", "in", "into", "is", "isn", "it", "like", "may", "maybe", "more", "must", "need", "non", "not", "of", "ok", "okay", "on", "or", "other", "rather", "re", "s", "same", "see", "so", "some", "such", "t", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "those", "to", "too", "unless", "use", "used", "using", "ve", "want", "was", "way", "were", "what", "when", "when", "whenever", "where", "whether", "which", "will", "with", "within", "without", "yet", "you", "your"]);
rh.consts('LNG_SUBSTR_SEARCH', 0);

model.publish(rh.consts('KEY_DIR'), "ltr");
model.publish(rh.consts('KEY_LNG_NAME'), "ru_RU");
model.publish(rh.consts('KEY_LNG'), {"Reset":"Сброс","SearchResultsPerScreen":"Результаты поиска на страницу","SyncToc":"SyncToc","HomeButton":"Главная","WebSearchButton":"WebSearch","Welcome_header":"Добро пожаловать в центр справки","ApplyTip":"Применить","HighlightSearchResults":"Highlight search results","GlossaryFilterTerms":"Найти термин","WebSearch":"WebSearch","Show":"Показать","Welcome_text":"Как мы можем вам помочь?","EnableAndSearch":"Include all words in search","ShowAll":"Показать все","Next":">>","Print":"Печать","NoScriptErrorMsg":"Для просмотра страницы включите поддержку JavaScript в браузере.","PreviousLabel":"Назад","Hide":"Скрыть","Search":"Поиск","Contents":"Содержание","ShowHide":"Показать/Скрыть","Canceled":"Отменено","favoritesLabel":"Избранное","EndOfResults":"Конец списка результатов.","Loading":"Загрузка...","SidebarToggleTip":"Развернуть/Свернуть","ContentFilterChanged":"Фильтр содержимого изменен, повторите поиск","Logo":"Логотип","Logo/Author":"Предоставляется","JS_alert_LoadXmlFailed":"Ошибка: не удалось загрузить файл xml.","favoritesNameLabel":"Имя","Copyright":"© Copyright 2017. Все права защищены.","SearchTitle":"Поиск","Searching":"Поиск…","Disabled Next":">>","nofavoritesFound":"You have not marked any topic as favorite.","unsetAsFavorite":"Удалить папку из Избранного","Cancel":"Отмена","JS_alert_InitDatabaseFailed":"Ошибка: не удалось инициализировать базу данных.","ResultsFoundText":"Найдено: %1 рез. для %2","UnknownError":"Неизвестная ошибка","Seperate":"|","Index":"Указатель","setAsFavorite":"Назначить избранным","setAsFavorites":"Добавить в Избранное","TopicsNotFound":"Разделов не найдено.","SearchPageTitle":"Результаты поиска","Glossary":"Глоссарий","SearchButtonTitle":"Поиск","Filter":"Фильтр","HideAll":"Скрыть все","TableOfContents":"Содержание","NextLabel":"Далее","Disabled Prev":"<<","Back":"Назад","SearchOptions":"Параметры поиска","OpenLinkInNewTab":"Открыть в новой вкладке","Prev":"<<","ShowTopicInContext":"Нажмите для отображения страницы целиком","FavoriteBoxTitle":"Избранное","ToTopTip":"Наверх","NavTip":"Close","IeCompatibilityErrorMsg":"Невозможно открыть эту страницу в Internet Explorer 8 и предыдущих версиях.","IndexFilterKewords":"Найти ключевое слово","JS_alert_InvalidExpression_1":"Было набрано неверное выражение."});

model.publish(rh.consts('KEY_HEADER_DEFAULT_TITLE_COLOR'), "#ffffff");
model.publish(rh.consts('KEY_HEADER_DEFAULT_BACKGROUND_COLOR'), "#025172");
model.publish(rh.consts('KEY_LAYOUT_DEFAULT_FONT_FAMILY'), "\"Trebuchet MS\", Arial, sans-serif");

model.publish(rh.consts('KEY_HEADER_TITLE'), "Что нового в Платформе nanoCAD 22.0");
model.publish(rh.consts('KEY_HEADER_TITLE_COLOR'), "#dddddd");
model.publish(rh.consts('KEY_HEADER_BACKGROUND_COLOR'), "#232323");
model.publish(rh.consts('KEY_HEADER_LOGO_PATH'), "template/NC_GREY/logo.png");
model.publish(rh.consts('KEY_LAYOUT_FONT_FAMILY'), "\"Trebuchet MS\", Arial, sans-serif");
model.publish(rh.consts('KEY_HEADER_HTML'), "<div class='topic-header' onClick='rh._.goToFullLayout()'>\
  <div class='logo'>\
    <img src='#{logo}' />\
  </div>\
  <div class='nav'>\
    <div class='title' title='#{title}'>\
      <span>#{title}</span>\
    </div>\
    <div class='gotohome' title='#{tooltip}'>\
      <span>#{label}</span>\
    </div></div>\
  </div>\
<div class='topic-header-shadow'></div>\
");
model.publish(rh.consts('KEY_HEADER_CSS'), ".topic-header { background-color: #{background-color}; color: #{color}; width: calc(100%); height: 3em; position: fixed; left: 0; top: 0; font-family: #{font-family}; display: table; box-sizing: border-box; }\
.topic-header-shadow { height: 3em; width: 100%; }\
.logo { cursor: pointer; padding: 0.2em; text-align: center; display: table-cell; vertical-align: middle; }\
.logo img { width: 1.875em; display: block; }\
.nav { width: 100%; display: table-cell; }\
.title { width: 40%; height: 100%; float: left; line-height: 3em; cursor: pointer; }\
.gotohome { width: 60%; float: left; text-align: right; height: 100%; line-height: 3em; cursor: pointer; }\
.title span, .gotohome span { padding: 0em 1em; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; display: block; }");

})();