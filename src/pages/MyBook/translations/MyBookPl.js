import React from "react";
import "../../../App.scss";
import "../MyBook.scss";
//Components
import Hero from "../../../components/Hero/Hero";
import Footer from "../../../components/Footer/Footer";
//Resources
import heroBook from "../../../images/bookHeader.jpeg";

const MyBookPl = () => {
  return (
    <div className="MyBook">
      <Hero
        img={heroBook}
        imgDescription={"Swiątynie w Birmie"}
        text="Moja Książka"
      />
      <div id="textSection">
        <p>
          Właśnie wydałem moja książkę “Popatrz inaczej. Pułapki komunikacji w biznesie
          międzynarodowym”. Od dawna o niej marzyłem, kilka razy zabierałem się do jej napisania.
          Wiele razy zmieniałem jej koncepcję. Tak jak sobie chciałem, książka jest elegancka,
          naprawdę premium, z zakładką i cudowną grafiką. Łączy w sobie zarówno moje historie z
          pracy w Dubaju, Chinach, Rosji, Ukrainie, Indonezji i Hong Kongu.
        </p>
        <p>
          Warta przeczytania przez ekspatów, ludzi pracujących międzynarodowo, zespół HR oraz
          wszystkich tych którzy lubią dowiedzieć się czegoś nowego o innych kulturach.
        </p>
        <p>
          Od początku zależało mi aby książka była elegancka i premium. Ma twardą okładkę, zakładkę
          i cudowną grafikę. Kosztuje 60 PLN plus około +/- 12-14 PLN za przesyłke (w zależności od
          wybranego przez Ciebie sposobu).
        </p>
        <div id="topTextContainer">
          <div className="textContainer">
            <h3>
              Jak i po co czytać tę ksziążkę
            </h3>
            <p>Dziękuję, że otworzyłeś moją książkę. Dowiesz się z niej:</p>
            <ul>
              <li>jak być efektywnym liderem w międzynarodowym zespole;</li>
              <li>jak być produktywnym pracownikiem;</li>
              <li>jak radzić sobie z pułapkami stereotypów i pokusami automatycznych reakcji;</li>
              <li>jak odczytywać kontekst komunikacyjny i dostosować się do niego;</li>
              <li>jak skutecznie udzielać feedbacku przedstawicielom różnych kultur oraz jak rozumieć informację zwrotną od szefa i współpracowników pochodzących z innych kręgów kulturowych;</li>
              <li>jak budować zaufanie w zespole, w którym kluczowym spoiwem są relacje;</li>
              <li>jak budować zaufanie w zespole nastawionym na zadania;</li>
              <li>jak produktywnie wykorzystywać czas na pracę;</li>
              <li>jak podnieść swoją efektywność;</li>
              <li>jak pracować i co brać pod uwagę w kierowaniu wirtualnymi zespołami.</li>
            </ul>
          </div>
          <div class="textContainer">
            <h3>Podziękowania</h3>
            <p>Wielu osobom chciałem podziękować. A przedewszystkim:</p>
            <ul>
              <li>
                Dziękuję mojej żonie, Krzysi, która przez te wszystkie lata szalonych przeprowadzek panowała nad mnogością codziennych spraw. Gdyby nie ona, nie bylibyśmy tu, gdzie dziś jesteśmy.
              </li>
              <li>Dziękuję moim dzieciom, Adze, Juli i Mikołajowi. Często mam wyrzuty sumienia, że musieliście co kilka lat zmieniać szkoły, kraje i przyjaciół. Jestem bardzo dumny, gdy obserwuję, jak wykorzystujecie swoją otwartość na świat i kompetencje językowe, aby szukać miejsca w życiu.</li>
              <li>
                Dziękuję Iwonie Kokoszce za współpracę, mentorskie pomysły na rozwój koncepcji mojej publikacji, trzymanie mnie w ryzach struktury i motywowanie.
              </li>
              <li>
                Dziękuję Karolowi Romanowskiemu za inspirujący koncept graficzny tej książki i Agnieszce Trzebskiej–Cwalinie za profesjonalną pracę nad redakcją i korektą tekstu.
              </li>
              <li>
                Dziękuję wszystkim wspaniałym ludziom, których spotkałem na swojej drodze. Bez nich nie byłbym tym, kim jestem.
              </li>
            </ul>
          </div>
        </div>


        <div id="imgContainer">
          <img
            src={require("../../../images/book2.jpeg")}
            alt="Moja książka: Popatrz inaczej"
          />
          <img
            src={require("../../../images/book4.jpeg")}
            alt="Moja książka: Popatrz inaczej"
          />
          <img
            src={require("../../../images/book5.jpeg")}
            alt="Moja książka: Popatrz inaczej"
          />
        </div>


      </div>
      <Footer />
    </div>
  );
};

export default MyBookPl;
