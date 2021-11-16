// Modalityandnegationexperiments//
// Do show progress bar (fine! I give in)

var showProgressBar = true;

// Main shuffleSequence definition
var shuffleSequence = seq(
    'consent',
    'setcounter',
    'intro',
    'shared-intro',
    sepWith("sep", rshuffle(startsWith('MODALITYNEGATION'),startsWith('filler'))),
    'debrief'
     );

var sendingResultsMessage = "Please wait. Your answers are being sent to the server."; 
var completionMessage = "Thanks for taking part in the experiment!";
var completionErrorMessage = "There was an error in sending your answer to the server."; 

// Controller settings.
// Parameter settings taken from Staub 2009

var defaults = [
    "Separator", {
        transfer: 1000,                                      // How long between sentences? (ms)
        normalMessage: " "  // What is message presented between stims? Can be blank.
    },
    "Question", {
        hasCorrect: false
    },
    
        "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],            /// What are options on Likert scale? Define both # of options and their labels.
        presentAsScale: true,                               /// Should it be presented as a scale? 'true' or 'false'
        instructions: "Use number keys or click boxes to answer.",    /// Brief instructions present on each trial
        leftComment: "(Fully unacceptable)", rightComment: "(Fully acceptable)"        /// Labels on end-points of scale
    },
    "Message", {
        hideProgressBar: true
    }
];

// Items array.
var items = [

["consent", "Form", {consentRequired: true, html: {include: "consent.html"}}],
  ["sep", "Separator", { }],
    ["setcounter", "__SetCounter__", { }],
["intro", "Form", {consentRequired: true, html: {include: "intro.html"}}],
["debrief", "Form", {consentRequired: true, html: {include: "debrief.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro1.html"}}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Let's practice a bit before we start."]
                         ]}],
['shared-intro', "Question", {q:"In ‘Linda doesn't have to shout. Everyone can hear her.’</i> the sentence ‘Linda doesn't have to shout’ means",as: [['s', 'Linda is obliged not to shout.'], ['k','Linda is not obliged to shout.']]},
                   "AcceptabilityJudgment", {s: "How acceptable do you think ‘Linda doesn't have to shout’ is in the context ‘Linda doesn't have to shout. Everyone can hear her.’?"}],                                                                                            

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "How did you find it? You simply have to choose the interpretation that seems more suitable, and, afterwards, you have to say how acceptable you find the sentence’."],           
                           ["p", "Let's practice more."],
                           ]}],
                   
['shared-intro', "Question", {q:"In ‘Do not tell lies! Your friend will be upset with you.’, the sentence ‘Do not tell lies!’ means",as: [['s', 'You are obliged not to tell lies.'], ['k','You are not obliged to tell lies.']]},
                  "AcceptabilityJudgment", {s: "How acceptable do you think ‘Dont tell lies!’ is in the context ‘Don't tell lies! Your friend will be upset with you.’?"}],  
['shared-intro', "Question", {q:"In ‘You do not have to fret. You will lose the case.’, the sentence ‘You do not have to fret.’ means",as: [['s', 'You are obliged not to fret.'], ['k', 'You are not obliged to fret.']]},
                  "AcceptabilityJudgment", {s: "How acceptable do you think ‘You do not have to fret.’ is in the context ‘You do not have to fret. You will lose the case.’?"}],   
['shared-intro', "Question", {q:"In ‘Do not be tall! There are enough tall people in the room.’ the sentence ‘Do not be tall!’ means ",as: [['s', 'You are obliged not to be tall.'], ['k', 'You are not obliged to be tall.']]},
                 "AcceptabilityJudgment", {s: "How acceptable do you think ‘Don't be tall!’ is in the context ‘Don't be tall! There are enough tall people in the room.’?"}], 


['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Great, you are done practicing! Press any key when you are ready to begin."]
                        ]}],
  
// Shared experimental items + fillers
  

[["MODALITYNEGATION-notnecessary",1], "Question", {q:"In ‘You must not worry. The woman will give you the money.’, ‘You must not worry.’ means",as: [['s','You are obliged not to worry.'],['k','You are not obliged to worry.']]},
                                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘You must not worry’ is in the context ‘You must not worry. The woman will give you the money’?"}],
[["MODALITYNEGATION-necessarynot",1],  "Question", {q:"In ‘You must not worry. You will get sick otherwise’, ‘You must not worry.’ means",as: [['s','You are obliged not to worry.'],['k','You are not obliged to worry.']]},
                                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘You must not worry.’ is in the context ‘You must not worry. You will get sick otherwise.’?"}],
[["MODALITYNEGATION-notnecessary",2],  "Question",{q:"In ‘He must not panic. The teacher will give the class an easy test.’, ‘He must not panic’ means",as: [['s','He is obliged not to panic.'],['k','He is not obliged to panic.']]}, 
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘He must not panic.’ is in the context ‘He must not panic. The teacher will give the class an easy test.’?"}],
[["MODALITYNEGATION-notnecessary",2], "Question", {q:"In ‘He must not panic. The bears will attack him otherwise.’, ‘He must not panic’ means",as: [['s','He is obliged not to panic.'],['k','He is not obliged to panic.']]}, 
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘He must not panic’ is in the context ‘He must not panic. The bears will attack him otherwise.’?"}],
[["MODALITYNEGATION-notnecessary",3], "Question", {q:"In ‘She must not be sad. Her mom will find the doll.’, ‘She must not be sad.’ means",as: [['s','She is obliged not to be sad.'],['k','She is not obliged to be sad.']]}, 
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘She must not be sad.’ is in the context ‘She must not be sad. Her mom will find the doll.’?"}],
[["MODALITYNEGATION-necessarynot",3],  "Question", {q:"In ‘She must not be sad. She will ruin the party otherwise.’, ‘She must not be sad.’ means", as: [['s','She is obliged not to be sad.'],['k','She is not obliged to be sad.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘She must not be sad.’ is in the context ‘She must not be sad. She will ruin the party otherwise.’?"}],
[["MODALITYNEGATION-notnecessary",4],  "Question", {q:"In ‘You must not be angry. The man will reward you for your efforts.’, ‘You must not be angry.’ means",as: [['s','You are obliged not to be angry.'],['k','You are not obliged to be angry.']]}, 
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘You must not be angry.’ is in the context ‘You must not be angry. The man will reward you for your efforts.’?"}],
[["MODALITYNEGATION-necessarynot",4], "Question", {q:"In ‘You must not be angry. Your mother will punish you otherwise.’,‘You must not be angry.’means",as: [['s','You are obliged not to be angry'],['k','You are not obliged to be angry']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘You must not be angry.’ is in the context ‘You must not be angry. Your mother will punish you otherwise.’?"}],
[["MODALITYNEGATION-notnecessary",5], "Question", {q:"In ‘Tom must not eat the bread. It won't go stale by tomorrow.’, ‘Tom must not eat the bread.’ means",as: [['s','Tom is obliged not to eat the bread.'],['k','Tom is not obliged to eat the bread.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘Tom must not eat the bread.’ is in the context ‘Tom must not eat the bread. It won't go stale by tomorrow.’?"}],
[["MODALITYNEGATION-necessarynot",5], "Question", {q:"In ‘Tom must not eat the bread. They have visitors coming over.’, ‘Tom must not eat the bread.’ means",as: [['s','Tom is obliged not to eat the bread.'],['k','Tom is not obliged to eat the bread.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘Tom must not eat the bread.’ is in the context ‘Tom must not eat the bread. They have visitors coming over.’?"}],
[["MODALITYNEGATION-notnecessary",6], "Question", {q:"In ‘You must not do office work at home. You managed to get it done already.’, ‘You must not do office work at home.’ means",as: [['s','You are obliged not to do office work at home.'],['k','You are not obliged to do office work at home.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘You must not do office work at home.’ is in the context ‘You must not do office work at home. You managed to get it done already.’?"}],
[["MODALITYNEGATION-necessarynot",6], "Question", {q:"In ‘You must not do  office work at home. Your wife and kids will be upset.’ ,‘You must not do office work at home.’ means",as: [['s','You are obliged not to do office work at home.'],['k','You are not obliged to do office work at home.']]},
                                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘You must not do office work at home.’ is in the context ‘You must not do  office work at home. Your wife and kids will be upset.’?"}],
[["MODALITYNEGATION-notnecessary",7], "Question", {q:"In ‘Linda must not speak German. All the German people in the office speak English.’, ‘Linda must not speak German.’ means",as: [['s','You are obliged not to speak German.'],['k','You are not obliged to speak German.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘Linda must not speak German.’is in the context ‘Linda must not speak German. All the German people in the office speak English.’?"}],
[["MODALITYNEGATION-necessarynot",7], "Question", {q:"In ‘Linda must not speak German. Our guests only speak English.’, ‘Linda must not speak German.’ means",as: [['s','You are obliged not to speak German.'],['k','You are not obliged to speak German.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘Linda must not speak German.’ is in the context ‘Linda must not speak German. Our guests only speak English.’?"}],
[["MODALITYNEGATION-notnecessary",8], "Question", {q:"In ‘You must not drink alcohol. You are already in good spirits.’,‘You must not drink alcohol.’ means",as: [['s','You are obliged not to drink alcohol.'],['k','You are not obliged to drink alcohol.']]},
                                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘You must not drink alcohol’ is in the context ‘You must not drink alcohol. You are already in good spirits.’?"}],
[["MODALITYNEGATION-necessarynot",8], "Question", {q:"In‘You must not drink alcohol. It will make you feel sick.’,‘You must not drink alcohol.’ means",as: [['s','You are obliged not to drink alcohol.'],['k','You are not obliged to drink alcohol.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘You must not drink alcohol.’ is in the context ‘You must not drink alcohol. It will make you feel sick.’?"}],


//// Fillers
[["filler-should",9],"Question", {q:"In ‘Mary should not be upset. Her father will give her a new car.’, ‘Mary should not be upset.’ means",as: [['s','Mary is obliged not to be upset.'],['k','Mary is not obliged to be upset.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think ‘Mary should not be upset.’ is in the context ‘Mary should not be upset. Her father will give her a new car.’?"}],          
[["filler-should",10], "Question", {q:"In ‘You should not be annoyed. Your wife will cook dinner for you.’, ‘You should not be annoyed.’ means",as: [['s','You are obliged not to be annoyed.'],['k','You are not obliged to be annoyed.']]},
                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘You should not be annoyed.’ is in the context ‘You should not be annoyed.Your wife will cook dinner for you.’?"}],
[["filler-should",11],  "Question", {q:"In ‘Tim should not cook rice. His girlfriend does not like it.’, ‘Tim should not cook rice.’ means",as: [['s','Tim is obliged not to cook rice.'],['k','Tim is not obliged to cook rice.']]},
                        "AcceptabilityJudgment", {s: "How acceptable do you think ‘Tim should not cook rice.’ is in the context ‘Tim should not cook rice. His girlfriend does not like it.’?"}],
[["filler-should",12],  "Question", {q:"In  ‘You should not write the first draft yourself. Linda is the first author.’, 'You should not write the first draft yourself.' means",as: [['s','You are obliged not to write the first draft yourself.'],['k','You are not obliged to write the first draft yourself.']]},
                        "AcceptabilityJudgment", {s: "How acceptable do you think ‘You should not write the first draft yourself.’ is in the context ‘You should not write the first draft yourself. Linda is the first author.’?"}],
[["filler-need",13], "Question", {q:"In ‘Tom need not be offended. The woman didn't want to insult him at all.’, 'Tom need not be offended.' means",as: [['s','Tom is obliged not to be offended.'],['k','Tom is not obliged to be offended.']]},
                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘Tom need not be offended.’ is in the context ‘Tom need not be offended. The woman didn't want to insult him at all.’?"}],
[["filler-need",14], "Question", {q:"In  ‘You need not be outraged. The professor is simply joking a bit.’, ‘You need not be outraged. ’ means",as: [['s','You are obliged not to be outraged.'],['k','You are not obliged to be outraged.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think ‘Tom need not be offended.’ is in the context ‘Tom need not be offended. The woman didn't want to insult him at all.’?"}],
[["filler-need",15], "Question", {q:"In ‘Sophie need not tidy the room today. It still looks quite great.’, ‘Sophie need not tidy the room today.’ means",as: [['s','Sophie is obliged not to tidy the room.'],['k','Sophie is not obliged to tidy the room.']]},
                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘Sophie need not tidy the room today.’ is in the context ‘Sophie need not tidy the room today. It still looks quite great.’?"}],
[["filler-need",16], "Question", {q:"In ‘You need not draw all the materials yourself. You can hire a designer.’, ‘You need not draw all the materials yourself.’ means",as: [['s','You are obliged not to draw all the materials yourself.'],['k','You are not obliged to draw all the materials yourself.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think ‘Tom need not be offended.’ is in the context ‘Tom need not be offended. The woman didn't want to insult him at all.’?"}],

[["filler-should",17],"Question", {q:"In ‘Tom should not be happy. The school will give him a lot of money.’, ‘Tom should not be happy.’ means",as: [['s','Tom is obliged not to be happy.'],['k','Mary is not obliged to be happy.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think ‘Tom should not be happy.’ is in the context ‘Tom should not be happy. The school will give him a lot of money.’?"}],          
[["filler-should",18], "Question", {q:"In ‘You should not be amazed. Your wife won the biggest film prize ever.’, ‘You should not be amazed.’ means",as: [['s','You are obliged not to be amazed.'],['k','You are not obliged to be amazed.']]},
                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘You should not be amazed.’ is in the context ‘You should not be amazed. Your wife won the biggest film prize ever.’?"}],
[["filler-should",19],  "Question", {q:"In ‘Linda should not help Mary. Mary is feeling very lost.’, ‘Linda should not help Mary.’ means",as: [['s','Linda is obliged not to help Mary.'],['k','Tim is not obliged to cook rice.']]},
                        "AcceptabilityJudgment", {s: "How acceptable do you think ‘Linda should not help Mary.’ is in the context ‘Linda should not help Mary. Mary is feeling very lost.’?"}],
[["filler-should",20],  "Question", {q:"In  ‘You should not talk kindly to yourself. You will end up with depression.’, ‘You should not talk kindly to yourself.’ means",as: [['s','You are obliged not to talk kindly to yourself.'],['k','You are not obliged to talk kindly to yourself.']]},
                        "AcceptabilityJudgment", {s: "How acceptable do you think ‘You should not talk kindly to yourself.’ is in the context ‘You  should not talk kindly to yourself. You will end up with depression.’?"}],
[["filler-need", 21], "Question", {q:"In ‘Bill need not be excited. The woman invited him to his favorite film.’, ‘Bill need not be excited.’ means",as: [['s','Bob is obliged not to be excited .'],['k','Bob is not obliged to be excited.']]},
                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘Bill need not be excited.’ is in the context ‘Bill need not be excited. The woman invited him to his favorite film.’?"}],
[["filler-need",22], "Question", {q:"In  ‘You need not be pleased. Your husband gave you a wonderful gift.’, ‘You need not be pleased. ’ means",as: [['s','You are obliged not to be pleased.'],['k','You are not obliged to be pleased.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think ‘You need not be pleased.’ is in the context ‘You need not be pleased. Your husband gave you a wonderful gift.’?"}],
[["filler-need",23], "Question", {q:"In ‘Sarah need not take care of the sick. They are in great suffering.’, ‘Sarah need not take care of the sick.’ means",as: [['s','Sarah is obliged not to take care of the sick.'],['k','Sarah is not obliged to take care of the sick.']]},
                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘Sophie need not take care of the sick.’ is in the context ‘Sarah need not take care of the sick. They are in great suffering.’?"}],
[["filler-need",24], "Question", {q:"In ‘You need not sweep the floor. It is very dirty.’, ‘You need not  sweep the kitchen.’ means",as: [['s','You are obliged not to sweep the floor.'],['k','You are not obliged to sweep the floor.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think ‘You need not sweep the floor. It is very dirty.’ is in the context ‘You need not sweep the floor. It is very dirty.’?"}]

];



  
