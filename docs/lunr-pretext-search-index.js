var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  I encourage you to use this class as an opportunity to treat computers as scientific tools. All computers are slightly different, so dont be afraid to look at the preferences of the program to add line numbers to code, enable syntax highlighting (so commands shine in bright colors), or to make fonts larger in your text editor , Stare at error messages and try to pick out key words, keep a close eye on the differences between { , [ , and ( and their partners, and the direction you make your slashes.  This version of the notes is written with PreTeXt, a latex -compatible, but accessibility-friendly, web-based platform.   Commonly encountered files.    .tex  main latex file    .pdf  desired output    .toc  contents information    .log  console report (errors, warnings)    .idx  related to index    .toc  contents information    .aux  used for contents     "
},
{
  "id": "file-table",
  "level": "2",
  "url": "preface.html#file-table",
  "type": "Table",
  "number": "0.0.1",
  "title": "Commonly encountered files.",
  "body": " Commonly encountered files.    .tex  main latex file    .pdf  desired output    .toc  contents information    .log  console report (errors, warnings)    .idx  related to index    .toc  contents information    .aux  used for contents    "
},
{
  "id": "preface-themes",
  "level": "1",
  "url": "preface-themes.html",
  "type": "Preface",
  "number": "",
  "title": "Themes",
  "body": " Themes  The themes of the course are typesetting, numerical calculations, and symbolic calculation. Towards the end of the semester, a goal of more open-ended problem solving should emerge. The hope is to use our tools to solve some of your more open-ended problems and learn how to diagnose and correct problems in coding.  "
},
{
  "id": "preface-workload",
  "level": "1",
  "url": "preface-workload.html",
  "type": "Preface",
  "number": "",
  "title": "Work",
  "body": " Work  Copies of your homework assignments will be collected here on separate pages. They will be listed in the order assigned, first latex , then R , then sage .  "
},
{
  "id": "latex-intro",
  "level": "1",
  "url": "latex-intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction to <span class=\"latex-logo\">L<span class=\"A\">a<\/span>T<span class=\"E\">e<\/span>X<\/span>",
  "body": " Introduction to latex   Preview  Our plan is to introduce the main objectives of the class (i.e., syllabus and goals). We will test latex by opening a blank document and building up features based on classroom requests.    Review  We did some of our work using accounts on .  With software (in this case Overleaf) in hand, we opened a mostly blank document, set up the main structure of the document, and practiced typing text and compiling. In the main structure we set the document class, began the document, and added content to the preamble to generate title page information.  The following links will help you install the appropriate software for your computer. The interface TeXworks Software interface, TeXWorks on Windows OS (link)  OS , Windows computers additionally Windows users will need to install an engine either TeXLive (link - look for install-tl-windows.exe)  Software engine , TexLive or MikTeX Software engine , MiKTeX (link - look for basic-miktex-##.##-x64.exe) . You will want to plug your computer in, turn off any antivirus software (these are safe programs), and give yourself plenty of time for the downloads. Things are a bit easier on Mac OS, we use TeXshop Software interface , TeXshop that comes from the MacTeX Software engine , MacTeX installer on Mac OS (link)  OS , Mac .  There are plenty of other options, take some time to explore and find a configuration you enjoy using.  .    Student perspective  Anybody have any interesting observations to share? Going forward you will have an opportunity to share what you have taken away from a class day of your choosing.  You might highlight something interesting, surprising, confusing, annoying, or otherwise important.   "
},
{
  "id": "latex-math",
  "level": "1",
  "url": "latex-math.html",
  "type": "Section",
  "number": "1.2",
  "title": "Simple mathematical results",
  "body": " Simple mathematical results   Simple mathematical results  Our plan is to type a few sample mathematical statements.    Review  We did some of our work using accounts on .  There are plenty of other options, take some time to explore and find a configuration you enjoy using.  .    Student perspective  Anybody have any interesting observations to share? Going forward you will have an opportunity to share what you have taken away from a class day of your choosing.  You might highlight something interesting, surprising, confusing, annoying, or otherwise important.   "
},
{
  "id": "latex-math-more",
  "level": "1",
  "url": "latex-math-more.html",
  "type": "Section",
  "number": "1.3",
  "title": "More involved mathematical results",
  "body": " More involved mathematical results   More involved mathematical results  Our plan is to type a few more involved mathematical results, like aligned calculations.    Review  We did some of our work using accounts on .  .    Student perspective  Anybody have any interesting observations to share? Going forward you will have an opportunity to share what you have taken away from a class day of your choosing.  You might highlight something interesting, surprising, confusing, annoying, or otherwise important.   "
},
{
  "id": "latex-misc-format",
  "level": "1",
  "url": "latex-misc-format.html",
  "type": "Section",
  "number": "1.4",
  "title": "Miscellaneous formatting commands",
  "body": " Miscellaneous formatting commands   More involved mathematical results  Our plan is to introduce a collection of miscellaneous text and math formatting commands.    Review    Student perspective  Be sure to check your screen settings when typing. Should night mode be activated to any extent, it can wash out colors and lower readability. If your IDE does not readily support a desired color scheme, there will be another that does. One list of IDE’s can be found at .  No more mouse movement and clicks after compiling: to skip using the mouse after compiling, switch focus back to your editor window by using the cycling shortcut appropriate to your OS.  ALT+TAB for Windows  Command+TAB for Mac  CTRL + ALT + LEFT ARROW or CTRL + ALT + RIGHT ARROW for Linux   >  "
},
{
  "id": "latex-lists",
  "level": "1",
  "url": "latex-lists.html",
  "type": "Section",
  "number": "1.5",
  "title": "Lists",
  "body": " Lists   Preview  Our plan is to introduce commands to organize ideas as lists.    Review    Student perspective  I don't recall how to get the commented parts to function, but their original purpose was so that I could have more than one of these lists and so that latex could tell them apart. I found the setup for this within a Stack Exchange post a couple years back while working on a document for my independent study. Stack Exchange is a very helpful website for when you have a question for how to do something specific. It's heavily used by programmers, and they have plenty of posts for stuff like latex as well. I found it interesting that \\phantom{} worked to leave an item's line empty even though it had nothing within its argument. I also found it interesting that \\:{o} didn't work to add the two dots above the o; I also tried using \\..{o} , but that did not work either. I am happy to learn the description environment for case-based lists like in proofs. With the notes about powers of powers, I believe the higher exponential operation has precedence over the lower operation. In other words and from my understanding, without parentheses, t^{2^{2}} is the proper way to represent it, but if you needed to represent it the other way, it should be represented as (t^{2})^{2} . To tell the difference between L's and Pipe's in the tabular environment's argument, it may help to group them, maybe each column is separated by a space since those don't appear to affect the end result. In other words, a single vertical bar (one L) would mean left-aligned with no bar to the right and two vertical bars (an L and a Pipe) would mean left-aligned with a bar to the right. For example, if we want three left aligned columns with a bar between the first two, we could set the tabular environment's argument to {l| l l} .   "
},
{
  "id": "latex-floats",
  "level": "1",
  "url": "latex-floats.html",
  "type": "Section",
  "number": "1.6",
  "title": "Tables and Figures",
  "body": " Tables and Figures   Preview  Our plan is to introduce commands to organize ideas as tables and include figures.    Review    Student perspective    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
