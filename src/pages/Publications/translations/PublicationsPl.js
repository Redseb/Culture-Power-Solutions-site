import React, { useState } from "react";
import "../../../App.scss";
import "../Publications.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Hero from "../../../components/Hero/Hero";
import Footer from "../../../components/Footer/Footer";
import Article from "../../../components/Article/Article";
import OnlineArticle from "../../OnlineArticle/OnlineArticle";

//Resources
const heroImg = require("../../../images/heroPublications.jpg");
const art1Img = require("../../../images/articles/online/art1Img.png");
const PublicationsPl = () => {
  const [onlineArticle, setOnlineArticle] = useState({
    paragraphs: ["Test paragraph 1", "Test paragraph 2", "Test Paragraph 2"],
    title: "Article title",
    img: { art1Img },
    description:
      "This is an article about a very important topic where I am discussing a thi",
  });
  return (
    <Router>
      <Switch>
        <Route exact path="/publications/onlineArticle">
          <OnlineArticle onlineArticle={onlineArticle} />
        </Route>
        <Route exact path="/publications">
          <div className="Publications">
            <Hero
              img={heroImg}
              imgDescription="Grupa mnichów Buddyjskich"
              text="Publikacje"
            />
            <div id="content">
              <div id="online">
                <h2 className="listHeader">Online</h2>
                <Article
                  thumbnail={art1Img}
                  title="Komunikacja i zarządzanie międzykulturowe to kluczowa lecz często niedoceniania kompetencja menadżera XXI wieku."
                  description="Nie, to nie będzie polityczny tekst na tak ostatnio nośny temat. To artykuł o jednej z najważniejszych, a jednocześnie jakże często ignorowanej, kompetencji menadżera XXI wieku w Polsce jak i w innych miejscach na świecie."
                  paragraphs={[
                    "HEADER Krytyczna kompetencja menadżera XXI wieku",
                    "Komunikacja i zarządzanie międzykulturowe to kluczowa lecz często niedoceniania kompetencja menadżera XXI wieku. Nie, to nie będzie polityczny tekst na tak ostatnio nośny temat. To artykuł o jednej z najważniejszych, a jednocześnie jakże często ignorowanej, kompetencji menadżera XXI wieku w Polsce jak i w innych miejscach na świecie",
                    "HEADER Kluczowa kompetencja XXI wieku",
                    "Lata temu, kiedy zaczęła się polska transformacja, ekspaci byli kimś wyjątkowym, traktowani dość czołobitnie, często spijano mądrości biznesowe i życiowe z ich ust. Problem adaptacji międzykulturowej praktycznie nie istniał, po prostu należało się dostosować, czasami zgrzytnąć zębami i pośmiać się z ich niezrozumienia naszych obyczajów. Z pewnością nie był to główny problem działu HR. Teraz sytuacja zmieniła się diametralnie. Ekspaci przestali być kimś szczególnym, międzynarodowe centra serwisowe stały się stałym elementem krajobrazu a praca w wirtualnych zespołach projektowych, których członkowie są rozsiani po całym świecie jest codziennością. Coraz więcej Polaków robi kariery zasiadając w zarządach korporacji z kolegami z innych krajów.",
                    "Umiejętność skutecznej pracy w zespołach międzykulturowych stała się kluczową kompetencją dla zespołów współczesnego HR. Często wysłanie do innego kraju utalentowanego lokalnego pracownika bez kulturowego przygotowania, wiąże się z jego porażką, odejściem z firmy i dużymi kosztami. Pracownicy HR odpowiedzialni za wysyłanie i przyjmowanie ekspatów koncentrują się na fizycznej stronie ich relokacji: na zapewnieniu mieszkania, szkoły dla dzieci, przedstawieniu informacji jak korzystać z lokalnej służby zdrowia czy na podpowiedzeniu jak robić zakupy. I to oczywiście jest ważne i niezbędne ale niewystarczające. Często zapominamy o miękkiej stronie relokacji, np. dla większości pracowników z Azji zabieranie głosu na spotkaniach zdominowanych przez pracowników z Europy będzie bardzo niekomfortowe. W ich kulturze otwarte wyrażanie poglądów innych niż opinie obecnych na sali szefów jest po prostu niewyobrażalne. Kończy się to ich frustracją i poczuciem że grupa jest bardzo arogancka a nawet agresywna. Z drugiej strony, ich zachodni koledzy pytają o wartość wniesioną do dyskusji przez pracownika, który się nie odzywa. A wystarczy po prostu zrozumieć, że mamy do czynienia z klasycznym konfliktem komunikacji międzykulturowej, innym kulturowym DNA i, poprzez odpowiednie poprowadzenie spotkania, stworzyć wszystkim przestrzeń do dyskusji.",
                    "HEADER Osobiste doświadczenia",
                    "Kiedy myślę o początkach mojej przygody z poznawaniem innych kultur, zawsze przypomina mi się mój pierwszy wyjazd zagraniczny. W połowie lat osiemdziesiątych, po drugim roku arabistyki wyjechałem na stypendium językowe do Bagdadu. To były inne czasy Nie trzymaliśmy paszportów w domu, aby wyjechać należało otrzymać zieloną kartę przekroczenia granicy, a średnie zarobki przeciętnego Polaka oscylowały w granicy 20-30 dolarów miesięcznie, oczywiście po czarnorynkowym kursie (po innym nie dało się tych dolarów kupić).",
                    "Pierwszy dzień po przylocie, idę ulicą, naprzeciw mnie idzie dwóch żołnierzy z kałasznikowami. Idą i…. trzymają się za ręce. Dla tamtego mnie był to szok. Jakże to? W mojej kulturze faceci nie chodzą po ulicy trzymając się za ręce. To nie jest normalne. Oczywiście szybko wytłumaczono mi, że w tej kulturze trzymanie się za ręce jest absolutnie normalne. Był to taki pierwszy “aha”- moment, zrozumienie, że rzeczy które traktowałem jako “normalne” i uniwersalne, wcale nie muszą takimi być wszędzie. Być może w jakimś innym miejscu ludzie umówili się na coś zupełnie innego, i że to, na co się umówili jest tam “normalne”.",
                    "Minęło wiele lat od tego momentu “aha”. Miałem przywilej pracować przez długie lata w międzynarodowej korporacji, wraz z rodziną przenosiliśmy się na Ukrainę, do Dubaju, Chin, Rosji, Indonezji i Hong Kongu. Miałem szefów 14 narodowości, pracowałem z prawdziwie międzykulturowymi zespołami. Na własnej skórze i na mojej rodzinie testowałem dobre i złe praktyki HR, sam popełniłem wiele błędów, niektóre śmieszne, niektóre raczej poważne. 18 lat na różnych kontynentach i w różnych rolach dużo mnie nauczyło; m.in. tego ze okulary kulturowe, które dostaliśmy w procesie wychowania determinują to, co widzimy. Patrząc każdy z nas tworzy rzeczywistość. Każdy z nas ma na nosie takie okulary, ale nie każdy o tym wie. Nauczyłem się wielkiej pokory i szacunku dla innych. Zarządzanie i komunikacja pomiędzy kulturami stała się moją pasją i chcę się z Wami podzielić tą wiedzą.",
                    "HEADER Kluczowa rola HR",
                    "Współczesny menadżer HR musi dzisiaj być kulturowym tłumaczem pomiędzy zagranicznym pracownikiem a lokalnym zespołem. Konflikty, na które wcześniej czy później natkniemy się pracując w międzynarodowym środowisku, mają wiele przyczyn. Związane są z różnicami w postrzeganiu upływu czasu, tego jak bardzo pośrednio lub bezpośrednio komunikujemy się z innymi, czy nasze ustalone plany projektu są niezmienne czy raczej negocjowalne, jak odnosimy się do hierarchii w organizacji, czy szef to kumpel, który dodatkowo ma więcej odpowiedzialności, czy też niedostępny dyktator, którego opinia nie może być kwestionowana. Musimy także pamiętać, że źle dobrany sposób przekazania komunikacji zwrotnej pracownikowi może spowodować reakcję odwrotną od oczekiwanej.Wszystkie te aspekty są dużo ważniejsze dla sukcesu biznesowego organizacji niż mogłoby się to wydawać",
                  ]}
                  isLeft={true}
                  isPrint={false}
                  setOnlineArticle={setOnlineArticle}
                />
                <Article
                  thumbnail={require("../../../images/articles/online/art2Img.png")}
                  title="Dzisiaj o podejściu do struktury i hierarchii."
                  description="W swojej karierze korporacyjnej miałem przełożonych czternastu  narodowości: raportowałem między innymi do Duńczyka, Chińczyka, Anglika, Turka, Malezyjki, Tajwanki, Indonezyjczyka, Francuza, Amerykanina, no i oczywiście do Polaków"
                  paragraphs={[
                    "HEADER Dystans i hierarchia",
                    "W poprzednim artykule pisałem o obszarach potencjalnych konfliktów międzykulturowych, na które wcześniej czy później natknie się każdy międzynarodowy zespół, czy to pracujący w tej samej lokalizacji, czy też w ramach projektów, rozsiany po świecie. Współczesny menedżer HR musi rozumieć podstawowe zasady komunikacji międzykulturowej, być kulturowym tłumaczem i coachem.",
                    "HEADER Dystans zależy od kultury",
                    "Dzisiaj o podejściu do struktury i hierarchii. W swojej karierze korporacyjnej miałem przełożonych czternastu narodowości: raportowałem między innymi do Duńczyka, Chińczyka, Anglika, Turka, Malezyjki, Tajwanki, Indonezyjczyka, Francuza, Amerykanina, no i oczywiście do Polaków. Pomimo tego, iż każdy z nich był dobrym lub przynajmniej w miarę sprawnym profesjonalistą w swojej dziedzinie, to różnice wynikające z kultury, z której pochodzili, wpojonych wzorców, rozumienia co to znaczy być przywódcą, były ogromne. Zrozumienie tego, co jest ich osobistym kaprysem, a co wynika z kulturowego wzorca, zabierało czas i energię.",
                    "W niektórych krajach przełożony jest postrzegany jako kolega, który, co prawda stoi wyżej w strukturze, lecz to wcale nie czyni go kimś lepszym. Jest w pełni akceptowalne, że szef nie zna odpowiedzi na wszystkie pytania i że będzie angażował podwładnych w proces podejmowania decyzji. Taki menedżer często będzie miał normalne biuro i będzie jeździł podobnym samochodem co jego podwładni. Z takim szefem można się nie zgadzać i wyrażać swoją, odmienną opinię. Otwarte komunikowanie własnego zdania jest postrzegane jako pozytywna umiejętność, pomagająca w rozwoju kariery. Z taką sytuacją spotkamy się w Australii, krajach skandynawskich czy też w Holandii.",
                    "Po drugiej stronie skali mamy kultury, w których bycie szefem czyni człowieka od razu lepszym, mądrzejszym. Symbole statusu nabierają wręcz magicznego charakteru - większe biuro, z lepszym widokiem, wielki samochód, a przede wszystkim niekwestionowany szacunek stojących niżej w strukturze. Podwładny nigdy otwarcie nie zakwestionuje słów swojego szefa, szczera dyskusja nie jest oczekiwana lub pożądana. Przełożony z definicji zna odpowiedzi na wszystkie pytania a kwestionowanie jego zdania oznacza “utratę twarzy” i złamanie tabu. Taka sytuacja ma miejsce w większości kultur azjatyckich, w Chinach, w Korei, w Japonii czy też w Indonezji. Podobnie niekwestionowany szacunek do przełożonych znajdziemy w krajach arabskich , w Turcji czy w niektórych krajach afrykańskich.",
                    "Oczywiście pomiędzy tymi skrajnościami jest całe spektrum kultur. Nawet wewnątrz Europy inaczej postrzegają hierarchię Francuzi, Niemcy, Włosi, Anglicy czy też Rosjanie. My Polacy, jesteśmy gdzieś pośrodku, akceptujemy to, że “Pan Kierownik” powinien być trochę na dystans, mieć lepszy samochód i biuro, ale jednocześnie nie powinien za bardzo zadzierać nosa w kontaktach z podwładnymi. Musimy rozumieć wzajemne relacje pomiędzy kulturami. To samo zachowanie dla ludzi Azji będzie bardzo bezpośrednie i demokratyczne, dla kogoś innego, sztywne i hierarchiczne. Odczułem to na samym sobie – raportując do chińskiego przełożonego dostawałem czasami delikatne przypomnienie, że powinienem być bardziej formalny i okazywać więcej szacunku. Ten sam styl owocował komentarzami o byciu zbyt sztywnym i formalnym ze strony następnego szefa, Duńczyka.",
                    "HEADER Pole konfliktów i nieporozumień",
                    "Widzicie już ogromne pole do potencjalnych konfliktów, prawda? Azjatyccy ekspaci w polskim oddziale firmy będą zszokowani brakiem kultury i szacunku od polskich pracowników, ci zaś z kolei będą postrzegać ich jako ignorujących opinię podwładnych, wywyższających się, niedostępnych tyranów, którzy nie rozumieją, jak pracuje się w Europie. I odwrotnie, Norweg obejmujący wysokie stanowisko w Chinach przyprawi swoich podwładnych o palpitację serca, gdy zamiast przysługującego mu wielkiego mercedesa zaproponuje dla siebie stojącego klasę czy dwie niżej, passata, takiego jakim jeżdżą jego podwładni. Usłyszałem kiedyś cyniczny komentarz od chińskich kolegów - że w takiej sytuacji musieliby się przesiąść do aut klasy polo lub na rowery. Dodatkowo, jeżeli szefowie innych działów nadal pozostaną w swoich mercedesach, a ich szef nie, to automatycznie cały dział utraci organizacyjny szacunek – wysoki status przełożonego wpływa pozytywnie na podwładnych. Na początku mojej pracy w Chinach natknąłem się na barierę hierarchii. Jako z natury, angażujący pracowników demokrata, starałem się często pytać swój zespół o zdanie. Po pewnym czasie, ku swojemu zaskoczeniu odkryłem, że wszystkie moje propozycje, nawet te sprzeczne ze sobą lub nie mające za dużo sensu, spotykają się wyłącznie z aprobatą i potakiwaniem. Gdy któregoś dnia przycisnąłem chłopaków do muru podczas wyjścia na piwo, powiedzieli mi jasno, iż nie czują się komfortowo, wyrażając odmienną od mojej opinię , a ja jako ich manager mogę pokazywać swoje rozterki tylko tym którzy, są na moim poziomie. Ode mnie zaś oczekują “leadershipu” - wytyczenia kierunku i wydania jasnych poleceń. To była dobra lekcja, zmuszająca do zmiany stylu pracy. Pomimo iż nie było to dla mnie łatwe i naturalne, przyjąłem rolę tego „który wie i bez wahania komunikuje”, zapewniając im większy komfort pracy. Coś, co jest zupełnie oczywistym zachowaniem szefa w jednej kulturze, będzie odebrane jako bufonada, albo jako brak przywództwa, przez ludzi wywodzących się z innej kultury. Znajomy Amerykanin opowiadał mi historię wizyty swojego szefa z Centrali z wczesnego etapu swojej kariery. Pracował wtedy jako Krajowy Menadżer w Kuwejcie. Pomimo dobrych wyników biznesowych, ta pierwsza wizyta zakończyła się porażką, której głównym powodem była jasno wyrażona informacja zwrotna o “braku szacunku do przełożonego”. Kolega bowiem odebrał szefa z lotniska swoim służbowym samochodem, a ponieważ był to piekielnie upalny kuwejcki weekend, ubrał się w dżinsy i polo. Niestety, nie wziął pod uwagę, że pochodzący z Turcji przełożony ma zupełnie inne oczekiwania dotyczące sposobu okazywania szacunku dla zajmowanej przez niego pozycji. W Turcji takie przyjęcie przez podwładnego jest jawnym afrontem. Na następną wizytę mój kolega zjawił się na lotnisku w garniturze, a na Regionalnego Prezydenta czekał wielki hotelowy Bentley z kierowcą. Wizyta zakończyła się sukcesem.",
                    "HEADER Niebezpieczeństwo szufladkowania innych",
                    "Lata międzykulturowych doświadczeń nauczyły mnie szacunku do innych ludzi i kultur. Wiele razy obserwowałem tarcia powstające z oceniania innych ze swojego “jedynie słusznego” punktu widzenia, przykłady niezrozumienia jak funkcjonuje inna kultura i podświadomego zakładania, że jeżeli coś jest inne to musi być gorsze. Mamy, niestety, tendencję raczej do oceniania i szufladkowania innych, niż do zaakceptowania istnienia różnych tak samo właściwych, wzorców i schematów kulturowych.",
                    "Często, aby dostrzec prawdziwą wartość człowieka, wydobyć ze swoich pracowników to co najlepsze, musimy zrozumieć ich uwarunkowania kulturowe jak również być świadomi swoich własnych. Współczesny menedżer HR powinien być kulturowym tłumaczem pomiędzy zagranicznym pracownikiem a lokalnym zespołem. Co zrobić w sytuacji tarć związanych z hierarchią pomiędzy lokalnym zespołem a ekspatami ? Nazwanie i zrozumienie problemu to pierwszy ważny krok do jego rozwiązania. Warsztaty i indywidualny coaching może bardzo pomóc. Gdy uświadomimy zaangażowanym stronom kulturowe podłoże konfliktu, łatwiej oczyścimy atmosferę wzajemnych oskarżeń w zespole, wypracujemy kompromis i dostosujemy się do siebie.",
                    "HEADER ...",
                    "To powód, dla ktorego powstała ta seria “Wielokulturowa jazda bez trzymanki” o komunikacji i zarządzaniu w międzynarodowym środowisku. W następnym odcinku porozmawiamy o różnicach kulturowych pomiędzy Wschodem a Zachodem, a szczególnie koncepcji “utraty twarzy”, o której wspomniałem dzisiaj i o potencjalnych tego konsekwencjach w międzynarodowym miejscu pracy.",
                  ]}
                  isLeft={true}
                  isPrint={false}
                  setOnlineArticle={setOnlineArticle}
                />
                <Article
                  thumbnail={require("../../../images/articles/online/art3Img.png")}
                  title="Twarz to cenny kapitał"
                  description='który buduje się poprzez relacje z innymi i wypełnianie naszej roli społecznej, zarówno w firmie, w rodzinie czy w grupie znajomych. Zjawisko "utraty twarzy" występuje na całym świecie, w końcu nikt z nas nie lubi być poniżony, ośmieszony i skompromitowany. Prawdą jest, że wpływ twarzy jest niewspółmiernie większy na Wschodzie niż w Europie.'
                  paragraphs={[
                    "HEADER Utracona twarz menadżera",
                    'Twarz to cenny kapitał, który buduje się poprzez relacje z innymi i wypełnianie naszej roli społecznej, zarówno w firmie, w rodzinie czy w grupie znajomych. Zjawisko "utraty twarzy" występuje na całym świecie, w końcu nikt z nas nie lubi być poniżony, ośmieszony i skompromitowany. Prawdą jest, że wpływ twarzy jest niewspółmiernie większy na Wschodzie niż w Europie.',
                    '"Utrata twarzy" jest jednym z najważniejszych czynników wpływających na zachowanie ludzi w wielu krajach Bliskiego Wschodu i Azji, szczególnie w Chinach, Japonii, Korei i Indonezji. Po mandaryńsku brzmi to "mei-mianzi" – nie mieć twarzy. Coraz więcej firm azjatyckich pojawia się w Polsce. Wystarczy wymienić gigantów telefonii komórkowej, elektroniki użytkowej czy sprzedaży internetowej. Do naszego kraju przeprowadzają się zarówno menedżerowie średniego jak i wyższego stopnia. Stres zderzenia z inną kulturą jest równie silny dla nich jak i dla nas. Jako HR coraz częściej będziemy musieli zarządzać konfliktami pomiędzy „dyktatorskimi” przełożonymi z Azji (nasza perspektywa) a „aroganckimi, bez kultury i dobrego wychowania” pracownikami z Europy (ich perspektywa).',
                    "HEADER Wschód i Zachód w praktyce",
                    "W biznesowej kulturze zachodnich firm oczekuje się, że pracownik w uprzejmy sposób demonstruje swój punkt widzenia. Gdy szukamy w firmie ludzi z potencjałem, owych “talentów”, umiejętność wyrażania własnego zdania i kontrolowanej konfrontacji z grupą lub przełożonymi są wręcz konieczne. Przeniesienie tej zasady na grunt firm z Azji zakończy się nieporozumieniami. Oto jedno z moich doświadczeń z Indonezji- firma w której pracowałem, jak i inne zachodnie korporacje wysyłały do Europy swoich utalentowanych i obdarzonych dużym potencjałem pracowników na krótko i średnioterminowe staże. Wysyłaliśmy doświadczonych ludzi, zarządzających sporymi zespołami, którzy doskonale radzili sobie w swoim kraju. Wyjeżdżali, aby poznać inną perspektywę, nawiązać kontakty i przy okazji, aby zostać obejrzanym i ocenienionym przez „najwyższą górę”. Na początku nie był to niestety udany eksperyment. Większość z nich wracała z raczej chłodną niż z entuzjastyczną oceną. Zarzucano im, że nie wnoszą nic nowego do dyskusji i nie są w stanie wyrazić własnego zdania czy nawiązać solidnych relacji z wysokiej rangi przełożonymi.",
                    'Po bliższym przyjrzeniu się problemowi, zrozumieliśmy- że to my jako wysyłający popełniliśmy błąd “zakładania i zaniechania”. Założyliśmy, że świetnie radzący sobie w Indonezji ludzie, będą demonstrować te same cechy siedząc na spotkaniu w naszej światowej centrali. Tymczasem czynnik twarzy jak i szacunku do hierarchii sprawił, że w nowym środowisku nie byli w stanie zademonstrować swoich mocnych stron. Jeden z powracających menedżerów opowiada mi: "Jak ja mogę odezwać się niepytany, kiedy na sali siedzi Regionalny Prezydent? Do tego moi europejscy koledzy wręcz przekrzykują się wzajemnie i nie dają mi dojść do głosu. Jeżeli będę im przerywał to zademonstruję brak wychowania i szacunku do innych".',
                    "Podeszliśmy więc poważniej do międzykulturowych przygotowań przed następnymi wyjazdami, objaśnialiśmy im różnicę w oczekiwanych zachowaniach, ćwiczyliśmy scenki, aby wyprowadzić ich poza strefę komfortu i przydzieliliśmy im coachów i mentorów. Następni wyjeżdżający, bardziej rozumiejący zasady gry, radzili sobie już znacznie lepiej. Anegdotycznie, stanęli przed podobnym problemem po powrocie do Indonezji. Po rocznym pobycie na tyle dostosowali swoje zachowania do wymogów centrali, iż wracając, to oni sami zaczęli być postrzegani jako aroganccy i nieprzestrzegający lokalnych zasad. Aby dobrze funkcjonować pomiędzy kulturami, musieli nauczyć się dynamicznego dostosowywania swoich zachowań do sytuacji wymaganej przez otoczenie. Jak sami potem stwierdzili, wyjście poza komfortową strefę własnej kultury było jedną z największych zalet ich pobytu w Europie",
                    'HEADER Inne sposoby "utraty twarzy"',
                    'Otwarte powiedzenie „nie”, szczególnie przełożonemu, spowoduje natychmiastową "utratę twarzy". Utraci ją zarówno pracownik, który śmiał publicznie i otwarcie wyrazić swoje zdanie, jak i przełożony który w ten sposób został poniżony przez swojego pracownika. Jest to jedna z tych sytuacji, które są trudne do wyobrażenia przez naszych kolegów z Azji. Obawa przed utratą twarzy potrafi być tak silna, że nasz rozmówca raczej nie powie otwarcie całej prawdy lub nawet skłamie, po to, aby obie strony zachowały twarz. Pisałem już o problemach z otwartym mówieniem “nie”. Pracując z moim chińskim zespołem, byłem zaskoczony, iż pomimo zachęt z mojej strony, nie słyszałem od nich “Nie masz racji, myślimy, że to należy zrobić inaczej”. Gdyby to zrobili, to zarówno ja, jak i oni utraciliby twarz. Aby do tego nie mogli dopuścić, po prostu milczeli. Często informacja jest przekazywana, tylko to my nie potrafimy jej odczytać. Ważne jest zarówno to, co zostało, jak i to, co nie zostało powiedziane. To ostatnie może komunikować odmowę, której my, z naszym kulturowym oprogramowaniem po prostu nie dostrzegamy. Byłem świadkiem rozmów biznesowych w Chinach, które początkowo odczytywałem jako udane i prowadzące do podpisania kontraktu. Dopiero moi chińscy koledzy wyjaśniali mi, że druga strona zupełnie nie zgadza się z naszymi propozycjami.',
                    'Przecież oni powiedzieli "hm, to może być interesująca propozycja” - co w tym kontekście oznaczało “nie ma szans, zapomnij”, a paragraf drugi i trzeci pominęli zupełnym milczeniem, co również wskazuje, że zupełnie się z tym nie zgadzają. Dla nich jest oczywiste, że powiedzieli nam “nie”. Nie mogli tego zrobić w bardziej bezpośredni sposób, gdyż i oni i my "stracilibyśmy twarz”. "Utracić twarz" można na wiele sposobów, jednym z najprostszych jest publicznie przekazana negatywna informacja zwrotna. Tutaj potrafi aż iskrzyć od konfliktów, szczególnie jeżeli spotkają się ludzie z krajów, w których bezpośrednie przekazanie złych wiadomości, takie nasze “kawa na ławę” jest normą. Duże problemy spotykają tutaj zespoły, w których przełożony pochodzi z takiej kultury, np. z Francji i, nie zdając sobie z tego zupełnie sprawy, rozbija morale zespołu, kiedy podczas spotkań w otwarty sposób wytyka im błędy. Publiczne wytknięcie błędu pracownikowi w Azji jest jedną z najbardziej upokarzających kar, powodujących "utratę twarzy". Zachodni ekspaci często nie zdają sobie z tego sprawy. Stosując wyuczone w Europie narzędzia zarządzania zespołem i dawania informacji zwrotnej, są zdziwieni, kiedy „normalny” sposób komunikacji przynosi dewastujące efekty.',
                    'Innym problemem, z którym stykają się menedżerowie z Europy, jest również nieumiejętne poprowadzenie okresowych rozmów oceniających, szczególnie jeżeli mają do przekazania negatywne informacje zwrotne. Pracownik bierze bardzo osobiście każdą złą informację, i widzi w niej przyczynę do "utraty twarzy". Sposób, którego ja używałem to „depersonifikacja” pracownika, tak aby negatywna informacja nie dotyczyła jego. Jak wyglądało to w praktyce? Siadaliśmy do rozmowy okresowej, na stole kładłem dwa przypadkowe przedmioty i prosiłem pracownika, aby wyobraził sobie że jeden z tych przedmiotów to Irek a drugi to on, np. Anton. Potem prosiłem go, aby opowiedział mi o Antonie (czyli przyjął zewnętrzną perspektywę)- jaką marką jest Anton, jakie ma zalety i jak inni go postrzegają. Prosiłem o sugestie co należy zrobić, aby jeszcze lepiej rozwinąć i wzmocnić markę Anton. Pozwalało mi to zniwelować czynnik osobistego ataku i obawy utraty twarzy. W ten sposób byłem w stanie skutecznie przekazać odpowiednią informację o obszarach do poprawy, jednocześnie kontynuując budowanie wzajemnych relacji i zaufania.',
                    "HEADER Zespoły międzykulturowe w Polsce i rola HR",
                    "Dopóki ekspaci z Dalekiego Wschodu byli u nas rzadkością, problem dotyczył małej grupy Polaków wyjeżdżających do pracy w Azji lub na Bliski Wschód. Tam czasami w lżejszy, czasami w trudniejszy sposób uczyli się na samych sobie różnic międzykulturowych. Dzisiaj problem w Polsce jest już zauważalny. Według ostatnich raportów, samych Centrów Usług Biznesowych, obejmujących swoich zasięgiem często cały świat jest w Polsce ponad 600. Do pełnego obrazu doliczcie “regularne” oddziały międzynarodowych korporacji.",
                    "Rozmawiałem ostatnio z kolegami z dużej firmy zajmującej się przeprowadzkami ekspatów. Szczerze mówiąc, wyłania się dość przygnębiający obraz zespołów HR odpowiedzialnych za relokacje pracowników. Oczywiście, że załatwienie zezwolenia na pracę, znalezienia mieszkania, szkoły dla dzieci i przewiezienie rzeczy osobistych jest konieczne, ale zatrzymanie się tylko na tym etapie nie dodaje oczekiwanej wartości. Brak sukcesu czy też przyspieszony powrót do kraju powodują bardzo wymierne koszty.",
                    "HEADER ...",
                    "Jedną ze strategicznych ról HR jest zredukowanie nieproduktywności, często związanych z nieporozumieniami wynikającymi z komunikacyjnych różnic kulturowych. Czas więc na poważne podejście do przygotowania międzykulturowego- zarówno tych którzy przyjeżdżają do nas do pracy, jak i naszych zespołów, w których ekspaci będą pracować. Kulturowy trening relokacyjny i coaching dla pracownika oraz jego rodziny to absolutne minimum, które jako HR powinniśmy zapewnić.",
                  ]}
                  isLeft={true}
                  isPrint={false}
                  setOnlineArticle={setOnlineArticle}
                />
                <Article
                  thumbnail={require("../../../images/articles/online/art4Img.png")}
                  title="Czas nie wszędzie jest taki sam"
                  description="Na pierwszy rzut oka wydawać by się mogło, że czas biegnie tak samo dla wszystkich. A jednak tydzień szwajcarski czy niemiecki będzie miał inne znaczenie niż tydzień włoski, hiszpański czy arabski."
                  paragraphs={[
                    "HEADER Czas nie wszędzie płynie tak samo",
                    "W poprzednich odcinkach naszego cyklu poruszaliśmy tematy związane ze świadomością własnej kultury, rolą i dystansem do przełożonego, jak również znaczeniem „zachowania twarzy”. Dzisiaj zastanowimy się nad postrzeganiem czasu w różnych kulturach i związanych z nim pułapkach w pracy międzynarodowych zespołów.",
                    "HEADER Czas w różnych kulturach",
                    "Na pierwszy rzut oka wydawać by się mogło, że czas biegnie tak samo dla wszystkich. A jednak tydzień szwajcarski czy niemiecki będzie miał inne znaczenie niż tydzień włoski, hiszpański czy arabski. Wyrażenia „to będzie gotowe na jutro” usłyszane od Holendra oznacza coś zupełnie innego niż słynne arabskie bukra czyli jutro, które może znaczyć cokolwiek poczynając od jutra, kilku dni, tygodnia czy też bliżej nieokreślonej, ale dalekiej przyszłości.",
                    "Nie musimy wyjeżdżać poza Europę, aby doświadczyć różnego postrzegania i zarządzania czasem. Porównajmy naszych zachodnich sąsiadów: Niemcy, Holandię czy Szwajcarię z krajami Morza Śródziemnego: z Grecją, Włochami czy też Hiszpanią. W jednym obszarze czas jest precyzyjnie zaplanowany, w drugim czas zawija się i jest elastycznie definiowany przez ludzi.",
                    "Badacze międzykulturowi dzielą kultury na monochroniczne i polichroniczne. W pierwszej czas biegnie liniowo. Ustalone terminy są przestrzegane, punktualność jest ważną zaletą, wykonujemy jedną rzecz w danym czasie. W drugiej czas jest elastyczny, zmieniamy nasze priorytety w zależności od sytuacji i potrzeb, wykonujemy kilka czynności w tym samym czasie, a tak zwane przerywniki są w pełni akceptowane.",
                    "HEADER Dopasuj prezentację do postrzegania czasu przez daną kulturę",
                    "Postrzeganie czasu przez różne kultury będzie miało również wpływ na tak prozaiczną sprawę jak struktura naszych prezentacji. Typowa prezentacja, powiedzmy sprzedażowa korporacyjnej Ameryki, składa się z dość krótkiej części opisującej przeszłość, trochę dłuższej analizy teraźniejszości i najdłuższej części opisującej przyszłość. Benefity, zalety, korzyści… pięknie namalowany obraz tego jak to będzie, kiedy już tam dojdziemy. Koncentracja na przyszłości i czekających nas konkretnych korzyściach finansowych.",
                    "Jeżeli jednak taką samą strukturę zastosujecie, prezentując swój produkt partnerowi z Bliskiego Wschodu, macie dużą szansę, iż skończy się ona niepowodzeniem. Dla tamtej kultury ważniejsza jest przeszłość. To co zrobiłeś kiedyś, uwiarygadnia to, co możesz zrobić w przyszłości. Skuteczna prezentacja skupi się na zbudowaniu naszej wiarygodności poprzez opowiedzenie o przeszłości i teraźniejszości. A przyszłość? Cóż, możemy ją sobie planować, ale kimże jesteśmy, aby wiedzieć jak będzie ona wyglądać? Dlatego nasza prezentacja nie powinna się przesadnie skupiać na przyszłości, która jest po prostu wypadkową naszych zdolności z przeszłości i teraźniejszości (z tego co było i tego co jest).",
                    "Możecie sobie łatwo wyobrazić, jak wielki wpływ na pracę wielokulturowych zespołów będzie miało różne postrzeganie czasu. Pracownicy z kultur liniowego czasu będą postrzegać tych z grupy czasu elastycznego jako niezorganizowanych, chaotycznych i niedotrzymujących terminów. I odwrotnie, ci pierwsi będą postrzegani jako nieelastyczni i niepotrafiący wykorzystać nadarzających się biznesowych okazji.",
                    "HEADER Czas to pieniądz. Ale czy dla wszystkich?",
                    "Dla korporacyjnej Ameryki czas to pieniądz, zasób łatwo policzalny i skrupulatnie planowany w kalendarzach. Spotkanie o 9:30 rozpocznie się o 9:30 i potrwa dokładnie tyle, ile zaplanowaliśmy w agendzie. Tymczasem na drugiej półkuli, na przykład w Indonezji, czas to bardziej materiał tkany przez uczestników. Spotkanie planowane na 9:30 może i rozpocznie się o tej godzinie, ale może też i kilkadziesiąt minut później, ponieważ jeden czy więcej uczestników zostało akurat zatrzymanych przez coś innego, ważniejszego… Może zadzwonił ich szef, może inne spotkanie się przedłużyło, a może po prostu zmieniły się ich priorytety. I oczywiście wszyscy, oprócz łykających tabletki na obniżenie ciśnienia cudzoziemców, to w pełni akceptują.",
                    "Mówiąc o osobistym doświadczeniu związanym z czasem: lata temu, podczas jednego z moich pierwszych międzynarodowych transferów musiałem w przyśpieszonym tempie przejść przez szkołę międzykulturowej jazdy bez trzymanki. W moim zespole spotkali się: szwajcarski menedżer, który zarządzał programistami z Indii oraz Turcji, kilku menedżerów z Libanu oraz sekretarka z Indii. Do tego pracowaliśmy nad projektami dla arabskich dystrybutorów. Był to niesamowicie barwny i jednocześnie profesjonalny zespół, który tym niemniej potrafił przyprawić o zawrót głowy.",
                    "Szwajcarki menedżer zakładał, iż uzgodniony na jednym spotkaniu zakres projektu i terminy są już… po prostu uzgodnione. Tymczasem następne spotkanie z dystrybutorem rozpoczynało się od ponownej dyskusji o funkcjonalności poszczególnych modułów oprogramowania. Nasi klienci zorientowali się, że pewne procesy działają jednak inaczej, albo że funkcjonalność programu należy zmienić. Dla nich czas projektu i jego zakres był nadal w zależności od potrzeb, negocjowalny. Dla mojego kolegi Szwajcara, coś co zostało uzgodnione i zaplanowane, nie powinno się już zmieniać.",
                    "HEADER Czas a sprawa polska",
                    "Pomimo iż kultura korporacyjna w Polsce bliższa jest czasowi liniowemu (któż z nas nie przechodził przez treningi zarządzania czasem?), to jednak jako Polacy jesteśmy bliżej kultury elastycznego czasu, mamy nasz akademicki kwadrans. Akceptujemy to, że spotkanie zacznie się trochę później, że podczas zebrania komuś zadzwoni telefon albo ktoś wpadnie na przysłowiową chwileczkę do naszego biura, przerywając nam pracę nad opracowywanym właśnie raportem. Dlatego, mówiąc o zarządzaniu czasem, jest nam Polakom, zdecydowanie łatwiej dostosować się do pracy z kulturami Bliskiego Wschodu i Azji, niż pracownikom ze Stanów czy też krajów kultury niemieckiej.",
                    "HEADER ...",
                    "Tak jak z innymi różnicami międzykulturowymi, nie można podejścia do czasu oceniać i wartościować, należy jednak zdawać sobie sprawę z różnic i pomóc międzynarodowym zespołom wypracować wspólne standardy. Jak to zrobić? Najlepiej rozpocząć od zbudowania świadomości członków zespołu o ich różnych wzorcach kulturowych, szczególnie związanych z podejściem do czasu. Następnie podczas warsztatu grupowego pozwolić im stworzyć kontrakt współpracy, który jako grupa będą przestrzegać. Następnie wspierać, szczególnie tych pracowników, dla których zasady z kontraktu nie w pełni zgadzają się z ich naturalnym stylem kulturowym.",
                  ]}
                  isLeft={true}
                  isPrint={false}
                  setOnlineArticle={setOnlineArticle}
                />
                <Article
                  thumbnail={require("../../../images/articles/online/art5Img.png")}
                  title="Niektórzy uwielbiają konflikty, czują się w nich jak ryba w wodzie. Inni, wręcz przeciwnie, wolą harmonię niż walkę."
                  description="Nawet, jeżeli najchętniej siedzielibyśmy w kręgu i trzymali się za ręce śpiewając “cumba-ya” to i tak będziemy musieli się zmierzyć z konfliktowymi sytuacjami."
                  paragraphs={[
                    "HEADER Konflikt czy harmonia?",
                    "Niektórzy uwielbiają konflikty, czują się w nich jak ryba w wodzie. Inni, wręcz przeciwnie, wolą harmonię niż walkę. Nawet, jeżeli najchętniej siedzielibyśmy w kręgu i trzymali się za ręce śpiewając “cumba-ya” to i tak będziemy musieli się zmierzyć z konfliktowymi sytuacjami.",
                    "Czasami trzeba zawalczyć o swój budżet, projekt, dodatkowy etap w zespole czy też zmierzyć się z odmiennym zdaniem naszego przełożonego lub kolegi. Czy tego chcemy czy nie, konflikt jest nieodłączną częścią naszego korporacyjnego życia. W kontekście zarządzania zespołami wielokulturowymi, zaczynamy prawdziwą “jazdę bez trzymanki”- różne kultury podchodzą do konfliktów w diametralnie odmienny sposób. Zarządzanie konfliktem potrafi być prawdziwym polem minowym, jeden zły krok i możemy odnieść bolesne i długo gojące się rany.",
                    "HEADER Wybuchowe pułapki",
                    'Opowiem o moim doświadczeniu związanym z pułapkami różnego podejścia do konfliktów. Na takie lub podobne problemy natykają się zachodni menedżerowie pracujący w Azji lub na Bliskim Wschodzie. Podobne pułapki czyhają na menedżerów, którzy pracują w Polsce przy międzynarodowych projektach - czy to w jednej fizycznej lokalizacji czy też w wirtualnym świecie. Nieumiejętnie zarządzane konflikty potrafią "wysadzić" grupy projektowe o dużym intelektualnym potencjale, co obniży ich szansę na sukces.',
                    "Jeżeli w zespole projektowym spotkają się osoby z kultur, które otwarcie i wprost przekazują negatywne informacje zwrotne z osobami z kultur, które cenią harmonię, to szybko pojawi się problem wzajemnego postrzegania się. Pomimo, że potencjał intelektualny obu grup może być podobny, to jedni będą odbierani jako aroganccy, a drudzy jako ci, którzy nie potrafią precyzyjnie wyrazić własnego zdania. To z kolei wywoła problem z motywacją zespołu, chęcią współpracy i wpłynie na osiągane wyniki.",
                    "Jak zwykle pierwszym krokiem naprawczym jest zrozumienie: zarówno własnych jak i innych okularów kulturowych, dotyczy to przełożonych i podwładnych. Drugim zaś koniecznym krokiem jest pokorna akceptacja potrzeby dobrania właściwego do sytuacji stylu komunikacji.",
                    "HEADER Harmonia czy walka?",
                    "Niektóre kultury cenią harmonię. W wielu korporacjach w Azji konflikt jest tym, czego należy unikać, nie dawać bezpośredniej informacji zwrotnej, nie wywlekać publicznie na światło dzienne, że coś nie wyszło, nie działa… Aktywnie przeczekać, może problem sam zniknie, albo przestanie być istotny… Jeżeli już trzeba podjąć jakąś akcję, dać informację zwrotną, to należy zrobić to nie bezpośrednio. Najlepiej użyć trzeciej osoby, czy to z wewnątrz teamu, czy może konsultanta, który przekaże negatywną informację i nie spowoduje, że dwie strony wejdą w bezpośredni konflikt.",
                    'Z kolei w korporacjach zanurzonych bardziej w kulturę Zachodu, konflikt to często "śniadanie menedżera", proces w którym mniej lub bardziej agresywnie przedstawiamy nasz punkt widzenia, walczymy o swoje. Nie do końca myślimy o ranach zadanych innym. Umiejętność wejścia w bezpośredni konflikt jest wręcz wymaganą cechą przyszłych liderów korporacyjnych, selekcjonowanych przy okazji wewnętrznych programów zarządzania talentami…. Harmonia? A któż by się przejmował harmonią…',
                    "HEADER Szok kulturowy",
                    "Azjatycki menedżer przeniesiony do Polski, często będzie zaszokowany naszym otwartym sposobem wyrażania własnego zdania, bezpośrednim i publicznym niezgadzaniem się z przełożonym, kwestionowaniem jego autorytetu. Będzie to dla niego wręcz aroganckie zachowanie się niewychowanych ludzi, którzy burzą harmonię i nie okazują szacunku.",
                    "Z drugiej strony zachodni menedżer, przyzwyczajony do “brania problemów na klatę”, otwartego dawania informacji zwrotnej, przeniesiony do Azji przeżyje szok. Zespół nie będzie otwarcie mówić i analizować problemów w zachodnim stylu, problemy zamiata się często pod dywan, a pracownicy wolą zachować milczenie niż naruszyć harmonię grupy.",
                    "Widziałem jak trudnym było dla moich kolegów z Azji otwarte i publiczne wyrażanie własnej opinii, kiedy na sali obecny był Regionalny Prezydent. W tym czasie ich zachodni koledzy wykorzystywali okazję, aby pokazać swoją niezależność myślenia i otwartość wyrażania swojego zdania. I oczywiście to oni byli potem ocenieni jako Ci rokujący nadzieję na wielkie korporacyjne kariery. A koledzy z Azji, chociaż wcale nie ustępowali im sprawnością intelektualną, nie potrafili zapomnieć o mądrości, w której się wychowali: “Kto nie wie ten mówi, kto wie ten milczy”. W efekcie byli oceniani dużo niżej na skali potencjału.",
                    'Pamiętam swój szok, kiedy na jednej z pierwszych prezentacji w rosyjskiej organizacji otrzymałem masę negatywnej informacji zwrotnej, w większości związanej z niemerytorycznymi aspektami. Typowe: "A ja sądzę, że to jest inaczej”, "A ja się nie zgadzam”, “A niby dlaczego tak to ma być”. Z mojego punktu widzenia prezentacja była całkowitą porażką, ale godzinę później na lunchu dowiedziałem się, że generalnie wszystko jest ok, że im się podobało i projekt ma sens. Moje pytanie o ich wcześniejsze obiekcje spotkało się ze zdziwieniem. “No jak to, normalno, nada pogawarit szto my dumajem”. Już dużo później odkryłem, że Rosjanie mają bardzo wysoki indeks bezpośredniego i otwartego przekazywania informacji zwrotnej, coś co ja postrzegałem jako wręcz agresywny, osobisty atak było z ich punktu widzenia po prostu zdrową dyskusją.',
                    "Przy zachowaniu dyplomacji i taktu, oraz zrozumienia innej kultury, można oczywiście w efektowny sposób zminimalizować te problemy. Oto jeszcze dwa przykłady z mojego doświadczenia, związane z międzykulturowymi konfliktami. Może podsuną Wam jakiś pomysł dla Waszego zespołu?",
                    "HEADER Japonia i Indonezja",
                    "W Japonii harmonia grupy jest bardzo ważna, otwarte powiedzenie “nie” jest bardzo trudne…. W zespole HR wyczuwaliśmy konflikt i niewypowiedziane napięcie związane ze zmianą struktury organizacyjnej. Wiedzieliśmy, że podczas warsztatów nikt nie zdecyduje się mówić o niepokojach w swoim własnym imieniu. Podzieliliśmy uczestników na grupy. Poprosiliśmy, aby sami przedyskutowali niepokoje, a potem ich reprezentant przedstawiał opinię innych. Ten sposób zadziałał doskonale, gdyż reprezentant nie mówił już w swoim imieniu, a więc i nie tracił swojej “twarzy”, lecz przedstawiał stanowisko grupy. Zebraliśmy mnóstwo cennych informacji.",
                    "Na początku mojej pracy w Indonezji, popełniłem kulturowy nietakt, nieświadomie urażając, skądinnąd bardzo sympatycznego lokalnego dyrektora sprzedaży, bardzo szanowanego w organizacji. Nie mogłem mu wyjaśnić co się stało i go przeprosić, gdyż zaczął mnie aktywnie unikać, aby nie spowodować konfrontacji. Użyłem więc instytucji mediatora, o której wspomniałem wcześniej. Wyjaśniłem wszystko jednemu z jego zaufanych menedżerów i poprosiłem o przekazanie wyjaśnienia mojego błędu i przeproszenia. Zadziałało, wyjaśnienie nie tylko zostało przyjęte, również doceniono dopasowanie się do lokalnego stylu komunikacji, co spowodowało odzyskanie twarzy.",
                    "Często źródłem konfliktów będzie również język. Angielski stał się uniwersalnym językiem korporacji, a e-maile standardowym kanałem komunikacji. Dla większości zespołu angielski nie jest pierwszym językiem i mimo, że będziemy poprawnie go używać, ludzie z innych kultur mogą inaczej odszyfrowywać jego znaczenie (szczególnie, jeżeli korespondencja jest pomiędzy ludźmi, którzy używają na codzień komunikacji bezpośredniej, a tymi z wysoko kontekstowej). Jeżeli w nagłówku raz napiszesz “Hi Irek” a drugi raz “Dear Irek”, to ktoś może poważnie zacząć się głowić czy jest tutaj jakiś komunikat, który należy odnaleźć, gdyż piszący chciał zawrzeć coś pomiędzy wierszami.",
                    "To czy udzielisz odpowiedzi w kilku krótkich słowach, czy też opiszesz w szekspirowskim stylu, może nieść duże znaczenie w zależności od kultury. Wielu Indonezyjczyków odczytywało e-maile wysłane przez ich australijskich kolegów jako zimne, agresywne i stawiające ich pod ścianą. Tymczasem Australijczycy używali swojej naturalnej, precyzyjnej i bezpośredniej komunikacji, na której byli wychowani. Świadome wprowadzenie kilku umilających zwrotów mogłoby zmienić ten odbiór.",
                    "HEADER ...",
                    "Często nieświadomie, poprzez nasz naturalny styl możemy wpaść w pułapkę komunikacji, wywołać niepotrzebne konflikty, zniszczyć swoją reputację lub skuteczność pracy w grupie. Jak HR może temu zaradzić? Po pierwsze nie czekać na pojawienie się problemów, tylko przewidzieć je i zaradzić im z wyprzedzeniem. Potrzeba rozwoju kompetencji międzykulturowych jest wciąż niedoceniana w międzynarodowych firmach, podczas gdy powinna być wpisana w proces budowania kultury organizacyjnej. Na rynku dostępnych jest mnóstwo narzędzi, książek, warsztatów, procesów mentoringowych i coachingowych zarówno dla zespołów jak i dla menedżerów.",
                    "HEADER Obszary, nad którymi HR powinien popracować:",
                    "LISTSTART",
                    "zrozumienie sytuacji, w której jesteśmy, dynamiki kulturowej naszej grupy",
                    "zrozumienie jaki jest akceptowany sposób komunikacji i jakie są kulturowe tabu",
                    "pomoc organizacji w zrozumieniu, że inność nie wynika z agresywności czy też nieumiejętności wyrażania się",
                    "wpisanie rozwoju kompetencji międzykulturowych do długofalowych strategii budowania i rozwoju organizacji.",
                    "LISTEND",
                  ]}
                  isLeft={true}
                  isPrint={false}
                  setOnlineArticle={setOnlineArticle}
                />
                <Article
                  thumbnail={require("../../../images/articles/online/art6Img.png")}
                  title="Angielski jest dzisiaj lingua franca większości korporacji. "
                  description="Czy nam się to podoba czy też nie, w naszej rzeczywistości, to właśnie angielski jest dzisiaj lingua franca większości korporacji. Wymóg posługiwania się językiem angielskim jest dzisiaj tak samo oczywisty jak znajomość MsOffice. Poważny pracodawca zakłada po prostu, że go znasz. I tyle. Kropka."
                  paragraphs={[
                    "HEADER Czy nam się to podoba czy też nie, w naszej rzeczywistości, to właśnie angielski jest dzisiaj lingua franca większości korporacji.",
                    "Oczywiście istnieją jeszcze inne korporacyjne języki. Ale dzisiaj o języku angielskim w kontekście międzykulturowości.",
                    "Wymóg posługiwania się językiem angielskim jest dzisiaj tak samo oczywisty jak znajomość MsOffice. Poważny pracodawca zakłada po prostu, że go znasz. I tyle. Kropka.",
                    "HEADER Wspólny język?",
                    "To, że zespół posługuje się wspólnym językiem, wcale nie musi oznaczać braku kłopotów w komunikacji. Często, wręcz niesie ze sobą pułapki w które menedżerowie czy HR Business Partnerzy mogą nieoczekiwanie wpaść. To że rozmawiamy tym samym językiem, nie oznacza automatycznie wyeliminowania kulturowego kontekstu. Jeżeli go nie rozumiemy, to odcyfrujemy komunikat w inny sposób niż było to intencją naszego rozmówcy. Najczęstsze pułapki to niezdawanie sobie sprawy z potęgi zasad zachowania harmonii i obawa przed utratą twarzy.",
                    "HEADER Yes, yes, yes",
                    "Kiedy nasi rozmówcy odpowiadają yes, yes, yes wcale nie zawsze będzie to oznaczało ich zgodę. W kulturach dążących do utrzymania harmonii, jak np. w większości krajów Azji, yes ma bardzo szerokie spektrum znaczeniowe. Zaczynając od właściwego „tak, zgadzam się”, poprzez „tak, słyszę Cię ale się wcale z Tobą nie zgadzam” aż do „tak, ale mam na myśli nie”. Rozmówca oczekuje, że to Ty z kontekstu sytuacji, z tego co zostało, a co nie zostało powiedziane, zrozumiesz o co mu chodziło.",
                    "Często zachodni menedżerowie w Azji ślą do swoich zachodnich central optymistyczne raporty ze swoich rozmów i negocjacji. Niestety, często nie przynoszą one owoców, gdyż druga strona nigdy nie zgodziła się na propozycje, tyle tylko że nie zostało to właściwie zrozumiane.",
                    "HEADER Zachować twarz",
                    "Konieczność zachowania twarzy również odgrywa ważną rolę. Pamiętam, gdy podczas przerwy w studiach pracowałem jako tłumacz arabskiego w Libii. Przez prawie dwa miesiące, co kilka dni jeździliśmy ponad 100 kilometrów z dyrektorem kontraktu do Trypolisu, aby odebrać czek za wykonane prace. Przed każdym wyjazdem zapewniano nas telefonicznie, że oczywiście czek czeka już w sejfie. A po przyjeździe zawsze znalazł się jakiś kosmiczny powód, że sejfu nie można było otworzyć, że ktoś tam zachorował lub dostał wezwanie na pilne spotkanie do kogoś Bardzo Ważnego. I zapewniano nas uprzejmie, przy filiżance znakomitej arabskiej kawy, że następnym razem to oczywiście wszystko będzie w porządku. Zasada zachowania twarzy nie pozwoliła powiedzieć im wcześniej „nie mamy pieniędzy”, „dostaliśmy polecenie, aby opóźnić wypłatę”, „nie zapłacimy wam, no i co nam zrobicie?”. Dopiero dostosowanie się do warunków gry i znalezienie kogoś „kto zna kogoś” pozwoliło zakończyć sprawę.",
                    "HEADER Mądrzejszy…",
                    "Innym obszarem, na który warto zwrócić uwagę to niebezpieczeństwo mylenia umiejętności biznesowych i znajomości języka. Efekt kalki sprawia, że dobrze znający angielski ekspaci mogą mieć nieświadomą tendencję do uznania tych, którzy biegle używają angielskiego za mądrzejszych i bardziej utalentowanych. Oczywiście często idzie to razem, ale nie zapominajmy o powiedzeniu, że można mówić pięcioma językami i w żadnym nie mieć nic ważnego do powiedzenia.",
                    "Będąc raz oceniającym w Development Center obserwowałem koleżanki z indonezyjskiego zespołu, które powiedziały tylko kilka słów podczas ćwiczenia grupowego. W grupie było kilku Australijczyków, którzy dominując swoim angielskim, po prostu nie dopuścili ich do głosu. Znałem te osoby i wiedziałem, że są naprawdę świetne w pracy. Mieliśmy więc ostrą dyskusję podsumowującą w gronie assessorów, ponieważ wielu w oczywisty sposób stawiało znak równości pomiędzy umiejętnościami językowymi a potencjałem.",
                    "Często tak już jest, że native speakerzy uważają za oczywiste, że inni powinni opanować angielski na ich poziomie. Ponieważ zdarza się nierzadko, że angielsko mówiący native speakerzy nie znają innych języków, więc trudno jest im się postawić w sytuacji kogoś kto używa angielskiego jako drugiego języka. Niewyraźne mówienie, używanie idomów, lub wysokokontekstowych wypowiedzi (mistrzami w tym są Anglicy) potrafi być zmorą komunikacji w międzynarodowych zespołach. Byłem świadkiem stresu moich kolegów Indonezyjczyków, często znających angielski w stopniu lepszym niż średni, gdy przeniosła się do nas grupa australijskich menedżerów, których język i akcent był po prostu mocno australijski. Indonezyjczycy, ze swoim zamiłowaniem do harmonii i awersją do przyznania się, że czegoś nie rozumieją, czuli się bardzo niekomfortowo.",
                    "Jako HR Business Partner miałem dużo frajdy by zwracać Australijczykom uwagę na obszary do poprawy i pół w żartach, pół serio sugerować im kursy angielskiego.",
                    "HEADER Komunikacja bezpośrednia",
                    "Innym problemem jest sposób zwracania się do siebie. Zależy to oczywiście od kultury korporacji, ale kultura narodowa będzie odgrywała tutaj ogromne znaczenie. W mojej poprzedniej firmie przyjęte było zwracanie się do siebie po imieniu. Gdy Przedstawiciel Handlowy spotykał Dyrektora Zarządzającego rozmawiali na „ty”. Bez żadnego „mister” czy innego tytułu. Gdy pracowałem na Bliskim Wschodzie, naszym Regionalnym Prezydentem był Turek, i oczywiście zwracaliśmy się do niego po imieniu. Jakież było moje zdziwienie, gdy byłem świadkiem rozmowy pomiędzy nim a jego podwładnymi z Turcji. Żaden nie ośmielił się zwrócić do niego po imieniu, zawsze dodawał „bej” jako wyraz szacunku.",
                    "To jest wpływ lokalnej kultury na kulturę korporacji. W Japonii działa to podobnie. Będziemy postrzegani jako niewychowane prymitywy nie dodając „san” do imienia naszego rozmówcy. W Indonezji dodamy „pak” do mężczyzny lub „ibu” do kobiety.",
                    "HEADER Jak zarządzać takim zespołem?",
                    "W jaki sposób my, jako międzynarodowi menedżerowie lub HR Business Partnerzy możemy zaadresować problemy związane z językiem w naszych zespołach? Jak zwykle najważniejsze to uświadomienie sobie problemu- jaki mamy zespół, jakim poziomem angielskiego się posługuje, czy są w zespole native speakerzy, czy są ludzie z kultur nisko i wysokokontekstowych? Wprowadźmy jasne zasady, zróbmy warsztat, aby grupa sama ustaliła reguły: jak się do siebie zwracamy, jak się komunikujemy, co robimy gdy czegoś nie zrozumieliśmy. Stwórzmy tzw. strefę bezpieczeństwa językowego. Zachęcajmy zespół, aby upewniał się co inni chcieli powiedzieć, zwracajmy uwagę native speakerów do używania prostego języka, bez idiomów.",
                    "Nie mylmy wiedzy i kompetencji biznesowych z biegłością językową. Jest oczywiste, że jeżeli ktoś nie potrafi się jasno wyrazić, to często jego pomysły nie będą brane pod uwagę. Tym niemniej, jako zarządzający zespołem, upewnijmy się, że dostrzegamy „co” dana osoba chce powiedzieć, a nie „jak” to mówi. Jeżeli jest taka potrzeba, to stwórzmy warunki do nauki języka, ale niekoniecznie wysyłajmy pracowników na standardowe kursy. Często nie przynoszą one pożądanych efektów.",
                    "HEADER ...",
                    "Jeżeli pracownik poważnie myśli o zawodowym i osobistym rozwoju to jego znajomość angielskiego powinna być czymś oczywistym. Było mi smutno kiedy nie mogłem wysłać na zagraniczne konferencje, warsztaty i treningi dobrych pracowników, którzy jednakże nie mieli wystarczającej kompetencji językowej. Na spotkaniach wprowadzających z nowo przyjętymi ludźmi, radziłem im aby poważnie zainwestowali w siebie i podnosili poziom angielskiego.",
                    "Pamiętajmy jednakże o ryzyku fałszywego poczucia pewności, iż mówiąc w tym samym języku, wszystkie strony tak samo zrozumieją treść komunikacji. Zarządzanie wielokulturowymi zespołami wymaga od nas czegoś więcej niż tylko znajomości angielskiego.",
                  ]}
                  isLeft={true}
                  isPrint={false}
                  setOnlineArticle={setOnlineArticle}
                />
                <Article
                  thumbnail={require("../../../images/articles/online/art7Img.jpg")}
                  title="Polska vs Malezja"
                  description="Wyobraź sobie, że jesteś menadżerem HR w firmie, której polski oddział na co dzień współpracuje z zespołem z Malezji. I nagle otrzymujesz skargi od obu stron. Zespół z Malezji skarży się na agresywność, nieuprzejmość i brak elastyczności polskich kolegów.
                  Oni z kolei zarzucają Malezyjczykom brak informacji zwrotnej o tym, że z czymś się nie zgadzają lub czegoś nie rozumieją, niedotrzymywanie terminów i częste przerwy w pracy (kiedy większość malezyjskiego zespołu nagle znika na dłużej)."
                  paragraphs={[
                    "Wyobraź sobie, że jesteś menadżerem HR w firmie, której polski oddział na co dzień współpracuje z zespołem z Malezji. I nagle otrzymujesz skargi od obu stron. Zespół z Malezji skarży się na agresywność, nieuprzejmość i brak elastyczności polskich kolegów. Oni z kolei zarzucają Malezyjczykom brak informacji zwrotnej o tym, że z czymś się nie zgadzają lub czegoś nie rozumieją, niedotrzymywanie terminów i częste przerwy w pracy (kiedy większość malezyjskiego zespołu nagle znika na dłużej).",
                    "HEADER Można zadać pytanie: „Jak tu żyć i pracować  menedżerze HR?” W jaki sposób HR i liniowi liderzy mogą pomóc obu zespołom?",
                    "HEADER Daleka i fascynująca Malezja",
                    "Ostatnio  prowadziłem  kilkudniowe szkolenie w Malezji. Mam wielki sentyment do tego kraju. Jego stolica Kuala Lumpur była pierwszym azjatyckim miastem, które odwiedziłem lata temu, podczas służbowego wyjazdu z mojej byłej firmy. Od razu zachwyciłem się tym niesamowitym połączeniem nowoczesności i tradycji. Petronas Tower, które było wtedy najwyższym budynkiem świata, wygodny miejski transport w postaci napowietrznej sieci pociągów oplatających miasto, niesamowita atmosfera China Town i Little India, oraz zabytki i różne turystyczne atrakcje. Do tego wszystkiego ludzie: mili, uśmiechnięci i przyjaźni. Ten idealny pierwszy obraz został  potem zweryfikowany przez rzeczywistość. Podczas następnych pobytów zaczęły mi doskwierać uliczne korki, wilgotność powietrza, temperatura i biurokracja, a miłe i uśmiechnięte twarze były coraz trudniejsze do rozszyfrowania i coraz częściej wpadałem w pułapki komunikacyjne. Znajdziemy dużo podobieństw Malezji do Polski- zbliżona liczba ludności (31 milionów), podobny kurs waluty do dolara (około 4 ringitów), czy też indeks kosztów utrzymania. Z drugiej strony, Malezja w odróżnieniu od Polski jest dużo bardziej zróżnicowana etniczno – religijnie. Malajowie stanowią 68% populacji, Chińczycy to następne 23%, Hindusi kolejne 7% plus 2% innych mniejszości. Oficjalną religią jest islam (ponad 60% populacji), ale buddyzm, hinduizm, taoizm, konfucjanizm i chrześcijaństwo cieszą się wolnością, a w ich główne święta wszyscy mają dni wolne od pracy. W swojej korporacyjnej karierze miałem fantastyczną szefową z Malezji  często wspierałem lokalny zespół przy różnych projektach. Bardzo ciepło wspominam Malezję i chętnie do niej wracam. Dlatego bardzo się ucieszyłem kiedy Zosia Barańska z Blackbirda zaproponowała mi wspólny projekt z firmą, której polski i malezyjski zespół zderzyły się z problemami komunikacji.",
                    "HEADER Zderzenie na styku kultur",
                    "Wróćmy do naszej firmy  – dział HR w dużej, globalnie działającej firmie, zaczyna otrzymywać skargi od zespołów z Malezji i Polski. Malezyjczycy skarżą się na aroganckość i nieuprzejmość polskiej strony, z kolei zespół z Polski jest coraz bardziej sfrustrowany brakiem jasnej komunikacji, zdarza się że zadania które wydają się być wzajemnie uzgodnione, są wykonywane przez Malezyjczyków w inny sposób. Problemem są również nieplanowane długie przerwy, kiedy cały lub większość zespołu nie jest dostępna. Frustracja i spirala wzajemnych oskarżeń narasta.",
                    "Co takiego się wydarzyło? Zakładając, że obie strony mają dobrą wolę i chcą osiągnąć swoje cele, w jakie międzykulturowe pułapki wpadli  i jaki jest przepis na udaną współpracę polsko – malezyjską? Jeden rzut oka na mapę wymiarów kulturowych Erin Meyer wystarczy  by zauważyć, że te dwie kultury są osadzone na przeciwnych stronach skali większości wymiarów kulturowych. Może to tworzyć wybuchową mieszankę, szczególnie gdy różnice oraz ich konsekwencje pozostają w blind spot (martwym punkcie) obu zespołów.",
                    "HEADER Czyhające pułapki komunikacji międzykulturowej",
                    "HEADER Między słowami",
                    "Kultura malezyjska jest dużo bardziej kontekstowa niż polska. To oznacza, że Malezyjczycy nie mówią rzeczy wprost, rozmówca musi rozumieć sytuację i jej kontekst, aby poprawnie odczytać przekaz. Polski sposób komunikacji, bardziej dosłowny i rzeczowy, będzie postrzegany jako nieuprzejmy, a nasz otwarty sposób przekazywania negatywnej informacji zwrotnej będzie po prostu agresywno – atakujący i załączy mechanizmy obronne u drugiej strony.",
                    "HEADER Rada dla polskiego zespołu:",
                    "LISTSTART",
                    "z pewnością komunikujecie się po angielsku więc; stonuj bezpośredniość przekazu używając tzw. „downgraders”, czyli słów takich jak „a little bit”, „partially”, „maybe”",
                    "w korespondencji, dołączaj frazy takie jak „I hope you are doing well”, „thank you in advance for your help and support”, „I wish you a nice day” - nie tylko zmiękczy to przekaz, ale również pomoże w budowaniu relacji",
                    "rozmawiając używaj prostych wyrażeń, unikaj idiomów, mów powoli, pogódź się z tym, że często malezyjski akcent może być przyczyną problemów, pytaniami upewniaj się, że obie strony się rozumieją",
                    "nigdy nie wybuchaj gniewem, nie pokazuj negatywnych emocji",
                    "LISTEND",
                    "HEADER Nie mówię nie",
                    "Malezyjczycy wyrażają swoją niezgodę w zawoalowany sposób. Jeżeli słyszysz od Malezyjczyka że „jest to interesujący pomysł, ale należy nad nim jeszcze pomyśleć”, albo „że wykonanie tego będzie trudne i zajmie zdecydowanie więcej czasu”, to należy to odczytać albo jako zdecydowane „nie” albo jako brak zrozumienia propozycji. Otwarte przyznanie się do braku zrozumienia lub zgody będzie powodowało utratę twarzy, co w kulturach Wschodu ma o wiele większe znaczenie niż u nas.",
                    "HEADER Rada dla polskiego zespołu:",
                    "LISTSTART",
                    "słuchaj pomiędzy wierszami, gdyż raczej nie usłyszysz od rozmówcy bezpośredniej odmowy",
                    "uważaj na sygnały, że coś będzie bardzo trudne do wykonania – to najczęściej oznaka niezgody",
                    "nie używaj taktyki „zaganiania do rogu”, nie przyniesie ona skutku. Jeżeli będziesz naciskał na uzyskanie odpowiedzi „no to w końcu tak czy nie” – najczęściej usłyszysz „tak”, ale masz dużą szansę przykro zdziwić się w niedalekiej przyszłości",
                    "pamiętaj jak bardzo ważna jest harmonia - twoje otwarte „nie” będzie postrzegane jako agresywne, w rezultacie może nastąpić paraliż komunikacyjny",
                    "LISTEND",
                    "HEADER Relacja w centrum uwagi",
                    "Kultura malezyjska jest bardzo relacyjna, więzi osobiste i poczucie przynależności do grupy, firmy, rodziny, społeczności jest niezwykle ważne. W pracy liczy się „pracuję z Tobą, ponieważ Ciebie znam, ponieważ chodzimy razem na lunch, ponieważ dzielimy się opowieściami o prywatnych rzeczach”. Jeżeli w Malezji wychodzisz sam na lunch, to może się spodziewać troski i pytań w rodzaju:: „co się stało, jaki masz problem, jak możemy Ci pomóc?”. Na lunch po prostu idziesz z grupą. I właśnie te wspólne wyjścia na posiłki kiedy w biurze pozostają pojedyncze osoby były przysłowiową kością niezgody. Polacy w dość otwarty sposób, również na piśmie eskalowali problem do przełożonych. Niestety to tylko pogarszało sytuację, ponieważ kultura malezyjska jest dużo bardziej hierarchiczna niż nasza, więc skarga do szefa wywoływała burzę i utratę twarzy.",
                    "HEADER Rada dla polskiego zespołu:",
                    "LISTSTART",
                    "siedząc w biurach oddalonych o kilka tysięcy kilometrów i 6 stref czasowych, zbudowanie relacji nie jest łatwe, ale w pełni możliwe do osiągnięcia",
                    "podczas rozmów spędź trochę czasu zarówno pytając się jak i dzieląc się osobistymi informacjami; rodzina, hobby, wakacje, pogoda…. Nie bądź zdziwiony, jeżeli rozmówca wejdzie na bardzo prywatne obszary, na przykład pytając o religię - w pełni akceptowalne pytania, które usłyszysz komunikując się z kulturami mocno opartymi o relacje",
                    "personalizuj korespondencję – dodanie czegoś osobistego będzie mile widziane",
                    "LISTEND",
                    "HEADER Szef ma zawsze rację",
                    "Znaczenie hierarchii w Malezji jest dużo większe niż w Polsce. Z szefem się nie dyskutuje tylko wykonuje jego polecenia. Otwarty wyrażenie własnego zdania skutkuje utratą twarzy, ostracyzmem grupowym, a często i wyrzuceniem z pracy. O ile firmy międzynarodowe wprowadzają większą kulturę otwartości i wyrażanie swojej opinii jest stymulowane jako pozytywne zachowanie, o tyle w przypadku firm lokalnych i administracji – takie zachowanie jest po prostu nie do pomyślenia. Do tego jeszcze dochodzi malezyjska duma ze swojego kraju i jego osiągnięć. Malezja jest jednym z azjatyckich tygrysów, z rozwiniętym sektorem IT i elektronicznym, a miejskiej infrastruktury mógłby pozazdrościć jej niejeden europejski kraj. Nie zapomnijmy o niesamowitej przyrodzie i raju dla turystów. Hasło „Malaysia Truly Asia” – (Malezja – prawdziwa Azja) jest rozpoznawalną marką na całym świecie.",
                    "HEADER Rada dla polskiego zespołu:",
                    "LISTSTART",
                    "jest takie wschodnie przysłowie-  kapitan rozmawia z kapitanem, a generał z generałem – staraj się zachowywać swój poziom komunikacji. Nigdy nie proś o coś podwładnego Twojego partnera bez poproszenia go o zgodę.",
                    "omijanie hierarchii w komunikacji wprowadzi chaos i będzie odebrane jako brak respektu",
                    "zastanów się zanim dasz na kopii przełożonych (chyba, że to listy pochwalne) – wprowadzenie przełożonych do korespondencji powoduje dużo większy poziom stresu niż u nas",
                    "nigdy nie proś o opinię podwładnego Twojego rozmówcy, nie tylko postawisz wszystkich w niezręcznej sytuacji , ale również z pewnością nie uzyskasz innej opinii niż pełnej zgody z przełożonym",
                    "LISTEND",
                    "HEADER RECEPTA DLA LIDERÓW I HR",
                    "Zwyczaje kulturowe są bardzo głęboko zakorzenione, często na poziomie wartości. Międzykulturowa inteligencja nie polega na tym, że dopasowujemy się do drugiej strony lub też przeciwnie próbujemy za wszelką cenę zmienić jej zachowanie. Międzykulturowa inteligencja to świadomość różnic i konsekwencji tych różnic dla biznesu i mądre budowanie synergii i adresowanie potencjalnych konfliktów.",
                    "Jako lider zespołu lub Partner Biznesowy HR powinieneś zadbać o:",
                    "LISTSTART",
                    "zrozumienie przez zespół istnienia różnic kulturowych",
                    "zdiagnozowanie najważniejszych problemów komunikacyjnych",
                    "wypracowanie krótko i długofalowych rozwiązań",
                    "wdrożenie ich w życie",
                    "budowanie kultury organizacyjnej",
                    "LISTEND",
                    "HEADER ...",
                    "Podczas warsztatu który ostatnio prowadziłem w Kuala Lumpur, poszedłem ze znajomym Malezyjczykiem na kolację i zapytałem go jak ocenia współpracę z Europejczykami. Przyznał, że może być dla nich bardzo frustrująca. Nasz bezpośredni styl komunikacji jest postrzegany jako agresywny, nasze rutynowe kopiowanie szefów na korespondencji często jest jak wpuszczenie słonia do sklepu z porcelaną. A na końcu ze śmiechem stwierdził, że cokolwiek byśmy nie robili to tak i tak wspólne wyjścia na posiłki będą miały miejsce i lepiej się do tego przyzwyczajmy.",
                  ]}
                  isLeft={true}
                  isPrint={false}
                  setOnlineArticle={setOnlineArticle}
                />
              </div>
              <div id="printed">
                <h2 className="listHeader">Drukowane</h2>
                <Article
                  thumbnail={require("../../../images/articles/printed/cover.png")}
                  title='Czytam "Personel Plus"'
                  description="„Personel Plus” jest pismem tworzonym przez
                  praktyków HR dla praktyków HR, wspierającym
                  wzajemne uczenie się"
                  isLeft={false}
                  isPrint={true}
                  pdf={require("../../../images/articles/printed/cover.pdf")}
                />
                <Article
                  thumbnail={require("../../../images/articles/printed/wirtualnezespolypracy.jpeg")}
                  title="Wirtualne zespoły pracy - trend czy konieczność?"
                  description="Jakie wyzwania i pułapki czyhają na wirtualne zespoły?"
                  isLeft={false}
                  isPrint={true}
                  pdf={require("../../../images/articles/printed/wirtualnezespolypracy.pdf")}
                />
                <Article
                  thumbnail={require("../../../images/articles/printed/Rowneszanse.jpeg")}
                  title="Równe szanse i zdrowa organizacja - Perspektywa innych kultur"
                  description="Nie widziałem jeszcze długofalowego planu HR-owego, który
                  nie zawierałby strategii mającej zapewnić równe szanse wszystkim
                  pracownikom i przeciwdziałać dyskryminacji."
                  isLeft={false}
                  isPrint={true}
                  pdf={require("../../../images/articles/printed/Rowneszanse.pdf")}
                />
                <Article
                  thumbnail={require("../../../images/articles/printed/Lekarstwoczy.jpeg")}
                  title="Lekwarstwo czy trucizna?"
                  description="Często przyjmujemy za niekwestionowaną prawdę,
                  że system premiowy motywuje pracowników, a w szczególności
                  pracowników działów sprzedaży, do lepszej pracy.
                  I jak to w życiu bywa, czasami będzie motywował,
                  a czasami przyniesie odwrotne rezultaty."
                  isLeft={false}
                  isPrint={true}
                  pdf={require("../../../images/articles/printed/Lekarstwoczy.pdf")}
                />
                <Article
                  thumbnail={require("../../../images/articles/printed/Oddelegowanie.jpeg")}
                  title="Oddelegowanie
                  do pracy w innym
                  kraju: możliwości
                  i pułapki rozwoju"
                  description="Jak spozycjonować
                  zagraniczne oddelegowania wśród innych narzędzi rozwojowych?
                  Na co zwrócić uwagę, wybierając i przygotowując ludzi do wyjazdu?
                  No i w końcu – jak nie stracić naszej inwestycji w pracownika
                  po jego powrocie do kraju?"
                  isLeft={false}
                  isPrint={true}
                  pdf={require("../../../images/articles/printed/Oddelegowanie.pdf")}
                />
                <Article
                  thumbnail={require("../../../images/articles/printed/JakUslyszec.jpeg")}
                  title='Jak Usłyszeć "nie"'
                  description="Pracując w wielokulturowych zespołach,
                   często nie rozróżniamy niuansów, bogactwa ani ukrytych znaczeń komunikatów"
                  isLeft={false}
                  isPrint={true}
                  pdf={require("../../../images/articles/printed/JakUslyszec.pdf")}
                />
                <Article
                  thumbnail={require("../../../images/articles/printed/inteligencja.jpeg")}
                  title="Inteligencja Międzykulturowa"
                  description="Nawet wieloletnia praca w międzynarodowym środowisku
                  – w Europie, na Bliskim Wschodzie i w Azji – nie chroni
                  przed czyhającymi pułapkami ani podstawowymi błędami
                  związanymi z komunikacją i zarządzaniem międzykulturowym."
                  isLeft={false}
                  isPrint={true}
                  pdf={require("../../../images/articles/printed/inteligencja.pdf")}
                />
                <Article
                  thumbnail={require("../../../images/articles/printed/about.jpeg")}
                  title="About"
                  description='Sekcja "About" w Personel Plusie'
                  isLeft={false}
                  isPrint={true}
                  pdf={require("../../../images/articles/printed/about.pdf")}
                />
              </div>
            </div>
            <Footer />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default PublicationsPl;
