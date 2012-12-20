/// <reference path="jquery-1.8.d.ts" />
/// <reference path="knockout-2.2.d.ts" />

class Question {
    id: number;
    text: string;
    answers: KnockoutObservableArray; //PossibleAnswer[]
}

class PossibleAnswer {
    id: number;
    text: string;
    images: KnockoutObservableArray; //string[]
}

class Img {
    url: string;
    type: string;
}

class Plane {
    type: string;
    desc: string;
}

class Answer {
    answerid: number;
    questionid: number;
}

var questions = [{
    id: 0,
    text: "size",
    answers: [{
        id: 0,
        text: "medium",
        planes: [{
            name: 737,
            image: "737_1"
        }, {
            name: 757,
            image: "757_1"
        }, {
            name: 767,
            image: "767_1"
        }, {
            name: 320,
            image: "320_1"
        }]
    }, {
        id: 1,
        text: "large",
        planes: [{
            name: 747,
            image: "747_1"
        }, {
            name: 777,
            image: "777_engine_size"
        }, {
            name: 330,
            image: "330_1"
        }, {
            name: 340,
            image: "340_1"
        }, {
            name: 380,
            image: "380_1"
        }]
    }]
}, {
    id: 1,
    text: "engine count",
    answers: [{
        id: 2,
        text: "2",
        planes: [{
            name: 737,
            image: "737_1"
        }, {
            name: 757,
            image: "757_1"
        }, {
            name: 767,
            image: "767_1"
        }, {
            name: 777,
            image: "777_1"
        }, {
            name: 320,
            image: "320_1"
        }, {
            name: 330,
            image: "330_1"
        }]
    }, {
        id: 3,
        text: "4",
        planes: [{
            name: 747,
            image: "747_1"
        }, {
            name: 340,
            image: "340_1"
        }, {
            name: 380,
            image: "380_1"
        }]
    }]
}, {
    id: 2,
    text: "engines position",
    answers: [{
        id: 4,
        text: "under wing",
        planes: [{
            name: 737,
            image: "737_1"
        }, {
            name: 747,
            image: "747_1"
        }, {
            name: 757,
            image: "757_1"
        }, {
            name: 767,
            image: "767_1"
        }, {
            name: 777,
            image: "777_1"
        }, {
            name: 320,
            image: "320_1"
        }, {
            name: 330,
            image: "330_1"
        }, {
            name: 340,
            image: "340_1"
        }, {
            name: 380,
            image: "380_1"
        }]
    }]
}, {
    id: 3,
    text: "vertical stab root",
    answers: [{
        id: 5,
        text: "segmented",
        planes: [{
            name: 737,
            image: "737_1"
        }]
    }, {
        id: 6,
        text: "smooth",
        planes: [{
            name: 747,
            image: "747_1"
        }, {
            name: 757,
            image: "757_1"
        }, {
            name: 767,
            image: "767_1"
        }, {
            name: 777,
            image: "777_1"
        }, {
            name: 320,
            image: "320_1"
        }, {
            name: 330,
            image: "330_1"
        }, {
            name: 340,
            image: "340_1"
        }, {
            name: 380,
            image: "380_1"
        }]
    }]
}, {
    id: 4,
    text: "nose direction",
    answers: [{
        id: 7,
        text: "middle",
        planes: [{
            name: 737,
            image: "737_1"
        }, {
            name: 747,
            image: "747_1"
        }, {
            name: 767,
            image: "767_1"
        }, {
            name: 777,
            image: "777_1"
        }, {
            name: 320,
            image: "320_1"
        }, {
            name: 330,
            image: "330_1"
        }, {
            name: 340,
            image: "340_1"
        }]
    }, {
        id: 8,
        text: "down",
        planes: [{
            name: 757,
            image: "757_1"
        }, {
            name: 380,
            image: "380_1"
        }]
    }]
}, {
    id: 5,
    text: "tail cone",
    answers: [{
        id: 9,
        text: "V-shaped",
        planes: [{
            name: 737,
            image: "737_2"
        }]
    }, {
        id: 10,
        text: "round",
        planes: [{
            name: 747,
            image: "747_2"
        }, {
            name: 757,
            image: "757_2"
        }, {
            name: 767,
            image: "767_2"
        }, {
            name: 320,
            image: "320_2"
        }, {
            name: 330,
            image: "330_2"
        }, {
            name: 340,
            image: "340_2"
        }]
    }, {
        id: 11,
        text: "I-shaped",
        planes: [{
            name: 777,
            image: "777_2"
        }, {
            name: 380,
            image: "380_2"
        }]
    }]
}, {
    id: 6,
    text: "tail direction",
    answers: [{
        id: 12,
        text: "up",
        planes: [{
            name: 737,
            image: "737_2"
        }, {
            name: 747,
            image: "747_2"
        }, {
            name: 320,
            image: "320_2"
        }, {
            name: 330,
            image: "330_2"
        }, {
            name: 340,
            image: "340_2"
        }]
    }, {
        id: 13,
        text: "middle",
        planes: [{
            name: 757,
            image: "757_2"
        }, {
            name: 767,
            image: "767_2"
        }, {
            name: 777,
            image: "777_2"
        }, {
            name: 380,
            image: "380_2"
        }]
    }]
}, {
    id: 7,
    text: "flattened/round engines",
    answers: [{
        id: 14,
        text: "flattened",
        planes: [{
            name: 737,
            image: "737_flattened"
        }]
    }, {
        id: 15,
        text: "round",
        planes: [{
            name: 747,
            image: "747_1"
        }, {
            name: 757,
            image: "757_1"
        }, {
            name: 767,
            image: "767_1"
        }, {
            name: 777,
            image: "777_engine_size"
        }, {
            name: 320,
            image: "320_1"
        }, {
            name: 330,
            image: "330_1"
        }, {
            name: 340,
            image: "340_1"
        }, {
            name: 380,
            image: "380_1"
        }]
    }]
}, {
    id: 8,
    text: "bump",
    answers: [{
        id: 16,
        text: "no",
        planes: [{
            name: 737,
            image: "737_1"
        }, {
            name: 757,
            image: "757_1"
        }, {
            name: 767,
            image: "767_1"
        }, {
            name: 777,
            image: "777_1"
        }, {
            name: 320,
            image: "320_1"
        }, {
            name: 330,
            image: "330_1"
        }, {
            name: 340,
            image: "340_1"
        }, {
            name: 380,
            image: "380_1"
        }]
    }, {
        id: 17,
        text: "yes",
        planes: [{
            name: 747,
            image: "747_1"
        }]
    }]
}];

class Answered {
    answerid: number;
    questionid: number;
    text: string;
}
/*
class ViewModel {
    public question: KnockoutObservableAny;
    public answers: KnockoutObservableArray;
    public myanswers: KnockoutObservableArray;
}
*/
class ViewModel {
    currentquestion : number;
    question: KnockoutObservableString;
    answers : KnockoutObservableArray;
    myanswers : KnockoutObservableArray;
    
    constructor() {
        this.currentquestion = 0;
        this.question = ko.observable(questions[0].text);
        this.answers = ko.observableArray(questions[0].answers);
        this.myanswers = ko.observableArray([]);
    }

    nextQuestion() {
            this.currentquestion++;
            this.question(questions[this.currentquestion].text);
            this.answers(questions[this.currentquestion].answers);
    }

    setAnswer(m, a) {
            this.myanswers.push({ answerid: a.answerid, questionid: a.questionid, text:a.text });
            this.nextQuestion();
    }
}

function myViewModel() {
    var self = this;
    this.model = new ViewModel();
/*    this.question = this.model.question;
    this.answers = this.model.answers;
    this.myanswers = this.model.myanswers;*/
    this.setAnswer = function (a) {
        self.model.setAnswer(self.model, a);
    }
}

function shiftImages() {
    $('.answers').each(function () {
        $(".answer__images").each(function () {
            var $this = $(this);
            var images = $this.find(".answer__imagecontainer");
            var current = parseInt($(images[0]).css('top'));
            var height = parseInt($(".answer__imagecontainer").css('height'));
            images.css('top', (-((-current + height) % (images.length * height))) + "px");
        });
    });
    setTimeout(shiftImages, 2000);
}

function refreshAnswers() {
    setTimeout(shiftImages, 2000);
}

window.onload = () => {
    ko.applyBindings(myViewModel()); 
    refreshAnswers();
};