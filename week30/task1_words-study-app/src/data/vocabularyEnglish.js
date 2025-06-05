// import { useLocalObservable, useObserver } from "mobx-react";
// import { useEffect } from "react";

// const englishWordList = () => {
//   const englishWordsStore = useLocalObservable(() => ({
//     vocabularyEnglish: [],
//   }));
// };

// let fetchVocabularyEnglish = async () => {
//   try {
//     const responseVocabularyEnglish = await fetch("https://itgirlschool.justmakeit.ru/api/words");
//     if (!responseVocabularyEnglish.ok) {
//       throw new Error(`Произошла ошибка подключения к серверу: ${responseVocabularyEnglish.status}`);
//     }
//     const dataVocabulary = await responseVocabularyEnglish.json();
//     this.vocabularyEnglish = dataVocabulary;
//     return dataVocabulary;
//   } catch (error) {
//     this.vocabularyEnglish = [
//       {
//         id: "33152",
//         english: "Thunderstorm",
//         transcription: "[ ˈθʌndərstɔːrm ]",
//         russian: "Гроза",
//         tags: "Weather",
//         tags_json: '["Weather"]',
//       },
//       {
//         id: "33153",
//         english: "curious",
//         transcription: "[ ˈkjʊrɪəs ]",
//         russian: "любопытный",
//         tags: "emotions",
//         tags_json: '["emotions"]',
//       },
//       {
//         id: "33157",
//         english: "Sister",
//         transcription: "|ˈsɪstər|",
//         russian: "Сестра",
//         tags: "Family",
//         tags_json: '["Family"]',
//       },
//       {
//         id: "33158",
//         english: "Brother",
//         transcription: "|ˈbrʌðər",
//         russian: "Брат",
//         tags: "Family",
//         tags_json: '["Family"]',
//       },
//       {
//         id: "33183",
//         english: "rainbow",
//         transcription: "[ˈreɪnbəʊ]",
//         russian: "радуга",
//         tags: "weather",
//         tags_json: '["weather"]',
//       },
//       {
//         id: "33198",
//         english: "Mother",
//         transcription: "[mʌðə]",
//         russian: "Мама",
//         tags: "Family",
//         tags_json: '["Family"]',
//       },
//       {
//         id: "33200",
//         english: "Aunt",
//         transcription: "[ænt]",
//         russian: "Тётя",
//         tags: "Family",
//         tags_json: '["Family"]',
//       },
//       {
//         id: "33208",
//         english: "peace",
//         transcription: "/piːs/",
//         russian: "мир",
//         tags: "",
//         tags_json: '[""]',
//       },
//       {
//         id: "33209",
//         english: "overwhelming",
//         transcription: "/əʊvərˈwelmɪŋ/",
//         russian: "ошеломляющий",
//         tags: "",
//         tags_json: '[""]',
//       },
//       {
//         id: "33211",
//         english: "forecast",
//         transcription: "/ˈfɔːrkæst/",
//         russian: "прогноз",
//         tags: "",
//         tags_json: '[""]',
//       },
//       {
//         id: "33229",
//         english: "mosquito",
//         transcription: "/məˈskiː.təʊ/",
//         russian: "комар",
//         tags: "",
//         tags_json: '[""]',
//       },
//       {
//         id: "33250",
//         english: "tornado",
//         transcription: "/tɔːˈneɪ.dəʊ/",
//         russian: "торнадо",
//         tags: "weather",
//         tags_json: '["weather"]',
//       },
//       {
//         id: "33317",
//         english: "scrooge",
//         transcription: "/skruːdʒ/",
//         russian: "скряга",
//         tags: "",
//         tags_json: '[""]',
//       },
//       {
//         id: "33367",
//         english: "cat",
//         transcription: "[cæt]",
//         russian: "кот",
//         tags: "",
//         tags_json: '[""]',
//       },
//       {
//         id: "33390",
//         english: "hang out",
//         transcription: "|ˈhæŋ ˈaʊt|",
//         russian: "тусоваться",
//         tags: "",
//         tags_json: '[""]',
//       },
//     ];
//   }

//   useEffect(() => {
//     storeAnnotation.fetchVocabularyEnglish();
//   }, [store]);

//   return useObserver(() => (
//     <div>
//       {store /
//         vocabularyEnglish.map((word) => (
//           <div key={word.id}>
//             {word.english} - {word.russian}
//           </div>
//         ))}
//     </div>
//   ));
// };

// export default fetchVocabularyEnglish;
