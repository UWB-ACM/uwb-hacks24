import './Home.css';
import CollapseButton from "./CollapseButton"

function FAQ() {
        return (
            <div id="faqSection" className="bg-white rounded-xl shadow-md overflow-hidden border-4 border-yellow-600 rounded-lg mx-5 my-5">
                <div className="font-bold text-4xl text-center mb-2">FAQ</div>
                    <div className="mx-4">
                            <CollapseButton buttonID="faqb1" buttonText= "Will UWB Hacks 2023 be in-person or virtual?" className="mx-4"> Consequat ullamco id voluptate quis. Nostrud qui duis cupidatat excepteur minim sit ad irure elit qui Lorem do qui proident. Culpa ea sunt occaecat duis esse. Exercitation id laboris qui culpa eu. Proident minim enim Lorem commodo proident consequat qui sit commodo quis. In proident aute est amet nulla dolore quis Lorem duis commodo amet do.</CollapseButton>
                            <CollapseButton buttonID="faqb2" buttonText= "Do I have to be a UWB student to register?"> Minim exercitation laboris do officia ea magna magna veniam aute ipsum dolor. Enim Lorem nostrud irure fugiat deserunt. Lorem magna pariatur nulla reprehenderit ullamco eu ea eiusmod nostrud nisi magna non. </CollapseButton>
                            <CollapseButton buttonID="faqb3" buttonText= "massive paragraph for testing"> Eiusmod aliqua labore laborum dolor non ea culpa veniam aliquip irure commodo dolor Lorem dolore. In consequat dolore cupidatat minim minim do nostrud in magna dolore minim sunt aliquip. Et fugiat incididunt in sint. Do amet magna in voluptate excepteur officia duis pariatur qui cillum ad amet sint voluptate.

                                    Qui id sunt laboris officia eu. Quis adipisicing nostrud eiusmod deserunt eiusmod nulla. Commodo dolore incididunt eu dolor velit duis tempor cillum officia veniam qui reprehenderit pariatur. Minim amet adipisicing Lorem exercitation esse.

                                    Duis ullamco deserunt aliqua irure ipsum. Excepteur officia deserunt deserunt labore adipisicing commodo dolor eu ipsum voluptate. Et laborum nostrud consequat eiusmod incididunt cupidatat Lorem amet. Nulla quis esse nulla labore ad deserunt consectetur duis officia ea officia laboris nisi sunt. Lorem excepteur culpa sunt magna ullamco ipsum deserunt ea id laboris proident pariatur consectetur cupidatat. Quis excepteur ex id nisi aute pariatur.

                                    Proident do reprehenderit sit veniam pariatur incididunt dolor pariatur aliquip cupidatat sint Lorem ut esse. Laboris irure quis mollit qui laborum nostrud dolore dolore. Consectetur pariatur id non minim.

                                    Deserunt dolor exercitation tempor adipisicing non officia. Duis dolore tempor tempor dolore cupidatat aliquip. Lorem dolor ut velit deserunt voluptate minim nostrud eiusmod ullamco duis occaecat sit amet. Consectetur incididunt reprehenderit tempor anim ea. Excepteur sit proident est in est eiusmod minim consequat occaecat quis adipisicing fugiat.

                                    Lorem laborum aute occaecat est elit deserunt duis velit laboris velit quis. Culpa consectetur Lorem excepteur ex mollit consectetur qui nulla. Anim duis reprehenderit dolor pariatur aliqua in aliquip id enim esse ut ullamco ullamco culpa. Do mollit consequat ipsum exercitation tempor duis id ad Lorem.

                                    Cupidatat voluptate in do duis proident ex aute aute ullamco sit velit eu fugiat.
                            </CollapseButton>
                    </div>
            </div>
        );
}

export default FAQ;