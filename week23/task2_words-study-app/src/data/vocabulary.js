export let fetchVocabulary = async () => {
  try {
    const responseVocabulary = await fetch("https://itgirlschool.justmakeit.ru/api/words");
    if (!responseVocabulary.ok) {
      throw new Error(`Произошла ошибка подключения к серверу: ${responseVocabulary.status}`);
    }
    const dataVocabulary = await responseVocabulary.json();
    return dataVocabulary;
  } catch (error) {
    alert("Произошла ошибка подключения к серверу " + error.message);
    return [];
  }
};
