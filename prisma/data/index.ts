import { QuestionType } from "@prisma/client";
export const languages = ["Hindi", "French", "German"];

export const hindiChapters = [
  {
    name: "Form basic sentences, talk about food",
    quiz: [
      {
        name: "Quiz 1",
        questions: [
          {
            text: "Table",
            type: QuestionType.MULTIPLE_CHOICE,
            answer: [0],
            difficulty: 1,
            options: ["मेज़", "लड़का", "औरत"],
          },
          {
            text: "the road",
            type: QuestionType.MULTIPLE_CHOICE,
            answer: [0],
            difficulty: 1,
            options: ["सड़क", "दो", "मोर"],
          },

          {
            text: "हम आज सड़क पर खड़े हैं ।",
            type: QuestionType.REORDER_WORDS,
            answer: ["We are standing on the road today"],
            difficulty: 2,
            options: ["We", "are", "standing", "on", "the", "road", "today"],
          },
          {
            text: "पीटर पानी पर चल रहा है।",
            type: QuestionType.REORDER_WORDS,
            answer: ["Peter is walking on water"],
            difficulty: 2,
            options: ["Peter", "is", "walking", "on", "water"],
          },
        ],
      },
      {
        name: "Quiz 2",
        questions: [
          {
            text: "today",
            type: QuestionType.MULTIPLE_CHOICE,
            answer: [1],
            difficulty: 1,
            options: ["तीन", "आज", "घोड़ा"],
          },
          {
            text: "river",
            type: QuestionType.MULTIPLE_CHOICE,
            answer: [1],
            difficulty: 1,
            options: ["बिल्ली", "नदी", "कुर्सी"],
          },
        ],
      },
      {
        name: "Quiz 3",
        questions: [
          {
            text: "हम आज सड़क पर खड़े हैं ।",
            type: QuestionType.REORDER_WORDS,
            answer: ["We are standing on the road today"],
            difficulty: 2,
            options: ["We", "are", "standing", "on", "the", "road", "today"],
          },
          {
            text: "हाथी मेज़ पर खड़ा है।",
            type: QuestionType.REORDER_WORDS,
            answer: ["The elephant is standing on the table"],
            difficulty: 2,
            options: [
              "The",
              "elephant",
              "is",
              "standing",
              "on",
              "the",
              "table",
            ],
          },
        ],
      },
      {
        name: "Quiz 4",
        questions: [
          {
            text: "हम आज सड़क पर खड़े हैं ।",
            type: QuestionType.REORDER_WORDS,
            answer: ["We are standing on the road today"],
            difficulty: 2,
            options: ["We", "are", "standing", "on", "the", "road", "today"],
          },
          {
            text: "पीटर पानी पर चल रहा है।",
            type: QuestionType.REORDER_WORDS,
            answer: ["Peter is walking on water"],
            difficulty: 2,
            options: ["Peter", "is", "walking", "on", "water"],
          },
        ],
      },
    ],
  },
  {
    name: "Learn about basic sentences",
    quiz: [
      {
        name: "Quiz 1",
        questions: [
          {
            text: "Table",
            type: QuestionType.MULTIPLE_CHOICE,
            answer: [0],
            difficulty: 1,
            options: ["मेज़", "लड़का", "औरत"],
          },
          {
            text: "the road",
            type: QuestionType.MULTIPLE_CHOICE,
            answer: [0],
            difficulty: 1,
            options: ["सड़क", "दो", "मोर"],
          },
          {
            text: "today",
            type: QuestionType.MULTIPLE_CHOICE,
            answer: [1],
            difficulty: 1,
            options: ["तीन", "आज", "घोड़ा"],
          },
          {
            text: "river",
            type: QuestionType.MULTIPLE_CHOICE,
            answer: [1],
            difficulty: 1,
            options: ["बिल्ली", "नदी", "कुर्सी"],
          },
          {
            text: "हम आज सड़क पर खड़े हैं ।",
            type: QuestionType.REORDER_WORDS,
            answer: ["We are standing on the road today"],
            difficulty: 2,
            options: ["We", "are", "standing", "on", "the", "road", "today"],
          },
          {
            text: "पीटर पानी पर चल रहा है।",
            type: QuestionType.REORDER_WORDS,
            answer: ["Peter is walking on water"],
            difficulty: 2,
            options: ["Peter", "is", "walking", "on", "water"],
          },
          {
            text: "हम आज सड़क पर खड़े हैं ।",
            type: QuestionType.REORDER_WORDS,
            answer: ["We are standing on the road today"],
            difficulty: 2,
            options: ["We", "are", "standing", "on", "the", "road", "today"],
          },
          {
            text: "हाथी मेज़ पर खड़ा है।",
            type: QuestionType.REORDER_WORDS,
            answer: ["The elephant is standing on the table"],
            difficulty: 2,
            options: [
              "The",
              "elephant",
              "is",
              "standing",
              "on",
              "the",
              "table",
            ],
          },
        ],
      },
      {
        name: "Quiz 2",
        questions: [
          {
            text: "Table",
            type: QuestionType.MULTIPLE_CHOICE,
            answer: [0],
            difficulty: 1,
            options: ["मेज़", "लड़का", "औरत"],
          },
          {
            text: "the road",
            type: QuestionType.MULTIPLE_CHOICE,
            answer: [0],
            difficulty: 1,
            options: ["सड़क", "दो", "मोर"],
          },
          {
            text: "today",
            type: QuestionType.MULTIPLE_CHOICE,
            answer: [1],
            difficulty: 1,
            options: ["तीन", "आज", "घोड़ा"],
          },
          {
            text: "river",
            type: QuestionType.MULTIPLE_CHOICE,
            answer: [1],
            difficulty: 1,
            options: ["बिल्ली", "नदी", "कुर्सी"],
          },
          {
            text: "हम आज सड़क पर खड़े हैं ।",
            type: QuestionType.REORDER_WORDS,
            answer: ["We are standing on the road today"],
            difficulty: 2,
            options: ["We", "are", "standing", "on", "the", "road", "today"],
          },
          {
            text: "पीटर पानी पर चल रहा है।",
            type: QuestionType.REORDER_WORDS,
            answer: ["Peter is walking on water"],
            difficulty: 2,
            options: ["Peter", "is", "walking", "on", "water"],
          },
          {
            text: "हम आज सड़क पर खड़े हैं ।",
            type: QuestionType.REORDER_WORDS,
            answer: ["We are standing on the road today"],
            difficulty: 2,
            options: ["We", "are", "standing", "on", "the", "road", "today"],
          },
          {
            text: "हाथी मेज़ पर खड़ा है।",
            type: QuestionType.REORDER_WORDS,
            answer: ["The elephant is standing on the table"],
            difficulty: 2,
            options: [
              "The",
              "elephant",
              "is",
              "standing",
              "on",
              "the",
              "table",
            ],
          },
        ],
      },
    ],
  },
];

export const frenchChapters = [
  {
    name: "Form basic sentences",
    quiz: [
      {
        name: "Quiz 2",
        questions: [
          {
            text: "the horse",
            type: QuestionType.MULTIPLE_CHOICE,
            answer: [1],
            difficulty: 1,
            options: ["le chien", "le cheval", "le garçon"],
          },
          {
            text: "le garçon",
            type: QuestionType.REORDER_WORDS,
            answer: ["a boy"],
            difficulty: 1,
            options: ["a", "boy"],
          },
        ],
      },
    ],
  },
];
