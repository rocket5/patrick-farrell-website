"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("for-everyone");
  const [booksToShow, setBooksToShow] = useState(8);

  const books = [
    {
      image: "/images/book1.jpg",
      title: "The Brain's Way of Healing",
      author: "by Norman Doidge",
      role: "Assistant, copy editing, research",
    },
    {
      image: "/images/book2.jpg",
      title: "The Uses of Humans in Experiment: Perspectives From the 17th to the 20th Century",
      author: "by Erika Dyck & Larry Stewart",
      role: "Index",
    },
    {
      image: "/images/book3.jpg",
      title: "A Culture's Catalyst: Historical Encounters with Peyote and the Native American Church In Canada",
      author: "by Fannie Kahan & Erika Dyck",
      role: "Index",
    },
    {
      image: "/images/book4.jpg",
      title: "Psychedelic Prophets: The Letters of Aldous Huxley and Humphry Osmond",
      author: "by Patrick Farrell et al.",
      role: "Copy editing, annotations, index",
    },
    {
      image: "/images/book5.jpg",
      title: "Prairie Fairies: A History of Queer Communities and People in Western Canada, 1930–1985",
      author: "by Valerie J. Korinek",
      role: "Index",
    },
    {
      image: "/images/book6.jpg",
      title: "Hermann Cohen and the Crisis of Liberalism",
      author: "by Paul E. Nahme",
      role: "Index",
    },
    {
      image: "/images/book7.jpg",
      title: "Challenging Choices: Canada's Population Control in the 1970s",
      author: "by Erika Dyck & Maureen Lux",
      role: "Editing",
    },
    {
      image: "/images/book8.jpg",
      title: "Yiddish in Israel: A History",
      author: "by Rachel Rojanski",
      role: "Index",
    },
    {
      image: "/images/book9.jpg",
      title: "Health Systems in Transition: Mexico",
      author: "by Miguel A Gonzalez Block et al.",
      role: "Copy editing",
    },
    {
      image: "/images/book10.jpg",
      title: "The Acid Room: The Psychedelic Trials and Tribulations of Hollywood Hospital",
      author: "by Jesse Donaldson & Erika Dyck",
      role: "Editor",
    },
    {
      image: "/images/book11.jpg",
      title: "Educating for Citizenship in a Canada-China Sister School Reciprocal Learning Partnership: A West-East Collaborative Inquiry",
      author: "by Yishin Khoo",
      role: "Editor",
    },
    {
      image: "/images/book12.jpg",
      title: "Women and Psychedelics: Uncovering Invisible Voices",
      author: "by Patrick Farrell et al.",
      role: "Editor",
    },
    {
      image: "/images/book13.jpg",
      title: "Metis Matriarchs: Agents of Transition",
      author: "by Cheryl Troupe & Doris Jeanne Mackinnon",
      role: "Editorial support",
    },
    {
      image: "/images/book14.jpg",
      title: "Expanding Mindscapes: A Global History of Psychedelics",
      author: "by Erika Dyck & Chris Elcock",
      role: "Editorial support",
    },
    {
      image: "/images/book15.jpg",
      title: "Psychedelics: A Visual Odyssey",
      author: "by Erika Dyck",
      role: "Editorial and research support",
    },
    {
      image: "/images/book16.jpg",
      title: "Putting Down Roots: Metis Agency, Land Use, and Women's Food Labour in a Qu'Appelle Valley Road Allowance Community",
      author: "by Cheryl Troupe",
      role: "Editorial support",
    },
    {
      image: "/images/book17.jpg",
      title: "Tommy Douglas and the Quest for Medicare in Canada",
      author: "by Greg P. Marchildon",
      role: "Provided editorial feedback on an early draft",
    },
    {
      image: "/images/book18.jpg",
      title: "West-East Reciprocal Learning in a Canada-China Sister School Network: Stories of Hope",
      author: "by Yishin Khoo et al.",
      role: "Developmental Editing",
    },
    {
      image: "/images/book19.jpg",
      title: "West-East Reciprocal Learning in Teacher Education: From Knowing to Doing",
      author: "by Shijin Xu et al.",
      role: "Developmental Editing",
    },
    {
      image: "/images/book20.jpg",
      title: "Winter Never Fails to Turn to Spring: Miyo's Story",
      author: "by Miyo Kozasa & Linda Page",
      role: "Developmental Editing",
    },
  ];

  const displayedBooks = books.slice(0, booksToShow);
  const hasMoreBooks = booksToShow < books.length;

  const accordionSections = [
    {
      id: "for-everyone",
      title: "For Everyone",
      content: "I've contributed to more than two dozen book projects, offering everything from meticulous copy editing to substantive structural revisions. My editorial services include fact-checking, annotation, and indexing, ensuring each manuscript is not only polished but also rigorous and reliable. Whether working with first-time authors or seasoned professionals, I bring a thoughtful, collaborative approach to every project—respecting the writer's voice while refining the final product for maximum impact.",
    },
    {
      id: "for-academic",
      title: "For Academic Authors",
      content: "I am a professional editor with more than 20 years of experience supporting scholarly authors across disciplines, including neuroscience, education and pedagogy, and medical, psychedelic, Indigenous, and LGBTQ+ history. My editorial contributions span over two dozen book projects, encompassing copy editing, substantive editing, fact-checking, annotations, and indexing. I bring rigour and precision to every stage of the editorial process, with a deep respect for intellectual clarity and scholarly integrity. Whether refining the language of a complex argument or ensuring citation accuracy, my goal is to help authors present their ideas with authority and polish.",
    },
    {
      id: "for-creative",
      title: "For Creative Writers",
      content: "I’m a professional editor with two decades of experience helping writers shape and strengthen their work. I’ve worked on over two dozen books, offering everything from line-by-line copy editing, to big-picture story development. My approach is thoughtful and collaborative: I listen closely, edit carefully, and help authors refine their voice while enhancing the overall coherence and emotional impact of their writing. Whether you’re polishing a finished manuscript or navigating early drafts, I bring insight, structure, and attention to detail that supports your creative vision.",
    },
    {
      id: "for-publishers",
      title: "For Publishers",
      content: "With over 20 years in the field, I bring seasoned editorial expertise to a wide range of publishing projects. I’ve worked on more than two dozen books, in close partnership with prestigious/esteemed/highly reputed publishing houses such as Viking Penguin, MIT Press, and McGill-Queen University Press among others. On these projects, I have provided services that include copy editing, substantive editing, fact-checking, annotation, production, and indexing. I understand the demands of production schedules and the importance of consistency, clarity, and accuracy. As a trusted freelance partner, I offer meticulous, deadline-driven work and a flexible editorial skill set to support your publishing needs from manuscript to final proof.",
    },
  ];

  const testimonials = [
    {
      quote: "Patrick Farrell's impressive passion for the history of science and for literature made him an ideal helper when he began working with me halfway through the long process. He helped as my assistant, with copy editing, with tracking down research, and above all by providing his extremely thoughtful, nuanced reactions to the chapters.",
      author: "Norman Doidge",
      book: "The Brain's Way of Healing",
    },
    {
      quote: "I am indebted to my dear friend and second set of eyes, Patrick Farrell. He has been my editor for many years and has made a habit of improving my work at every turn. In this case he truly exceeded expectations, scouring libraries and digital repositories for both iconic and rare images. His input and passion for psychedelic history has fundamentally helped to bring this book to completetion.",
      author: "Erika Dyck",
      book: "Psychedelics: A Visual Odyssey",
    },
    {
      quote: "To Masa Shimozato, for designing the beautiful cover, and to the entire Shimozato family for their kindness and support. I'm especially grateful to you for introducing me to Patrick Farrell – a wonderful editor whose thoughtful guidance, care, and encouragement went far beyond the words on the page.",
      author: "Winter Never Fails to Turn to Spring: Miyo's Story",
      book: "Miyo Kozasa & Linda Page",
    },
    {
      quote: "Thanks especially to Patrick Farrell, who read the entire manuscript and offered detailed feedback.",
      author: "Erika Dyck & Maureen Lux",
      book: "Challenging Choices: Canada's Population Control in the 1970s",
    },
    {
      quote: "I also wish to acknowledge the outstanding, timely, and professional editorial support provided by my book editor, Patrick Farrell.",
      author: "Educating for Citizenship in a Canada-China Sister School Reciprocal Learning Partnership: A West-East Collaborative Inquiry",
      book: "Yishin Khoo",
    },
    {
      quote: "The authors also appreciated the substantive editing by Sara Allin and Gregory Marchildon and the copy-editing work of Patrick Farrell, and the editorial staff at the European Observatory.",
      author: "Health Systems in Transition: Mexico",
      book: "Miguel A Gonzalez Block et al.",
    },
    {
      quote: "We acknowledge the assistance of editor Patrick Farrell in ensuring the integrity of the narrative",
      author: "Metis Matriarchs: Agents of Transition",
      book: "Cheryl Troupe & Doris Jeanne Mackinnon",
    },
    {
      quote: "Thank you to Patrick Farrell… for various editorial and production work.",
      author: "Putting Down Roots: Metis Agency, Land Use, and Women's Food Labour in a Qu'Appelle Valley Road Allowance Community",
      book: "Miguel A Gonzalez Block et al.",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-light">
      <main className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[175px] pt-16 sm:pt-24 lg:pt-32 pb-4">
        {/* Hero Section */}
        <section className="mb-12 sm:mb-16 lg:mb-24">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-end">
            <div className="flex flex-col gap-6 lg:gap-8 w-full">
              <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
                {/* Headshot */}
                <div className="w-full sm:w-[217px] flex-shrink-0">
                  <div className="aspect-[217/281] relative">
                    <Image
                      src="/images/headshot.jpg"
                      alt="Patrick Farrell"
                      fill
                      sizes="(max-width: 640px) 100vw, 217px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Name and Navigation */}
                <div className="flex flex-col gap-4 flex-1">
                  <div className="flex flex-col gap-2">
                    <h1 className="font-[family-name:var(--font-source-sans)] text-4xl sm:text-5xl lg:text-[80px] font-bold leading-none text-text-black">
                      Patrick Farrell
                    </h1>
                    <p className="font-[family-name:var(--font-inter)] text-lg sm:text-2xl lg:text-[32px] font-medium text-text-muted leading-normal">
                      In an era of artificial intelligence, I bring human attention and human intelligence to ensure every element of your writing is as good as it can be.
                    </p>
                  </div>

                  {/* Navigation */}
                  <nav className="border-t-2 border-bg-dark pt-4">
                    <ul className="flex flex-wrap gap-6 lg:gap-[72px] text-base font-[family-name:var(--font-inter)]">
                      <li><a href="#services" className="hover:text-text-muted transition-colors">Services</a></li>
                      <li><a href="#books" className="hover:text-text-muted transition-colors">Books</a></li>
                      <li><a href="#expertise" className="hover:text-text-muted transition-colors">Expertise</a></li>
                      <li><a href="#testimonials" className="hover:text-text-muted transition-colors">Testimonials</a></li>
                      <li><a href="#contact" className="hover:text-text-muted transition-colors">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* Bio */}
              <div className="text-base leading-6 space-y-4">
                <p>
                  Beginning as a copy editor at the English-language daily The New Anatolian in Turkey, he transitioned into professional editing of academic and commercial book projects in 2015. He's worked on 20+ books and memoirs over the last decade, including as a primary editor on{" "}
                  <a href="https://www.mqup.ca/psychedelic-prophets-products-9780773555068.php" className="underline hover:text-text-muted transition-colors">
                    Psychedelic Prophets: The Letters of Aldous Huxley and Humphry Osmond
                  </a>{" "}
                  (2018) and{" "}
                  <a href="https://synergeticpress.com/catalog/women-and-psychedelics/" className="underline hover:text-text-muted transition-colors">
                    Women and Psychedelics
                  </a>{" "}
                  (2024).
                </p>

                <p>
                  Beyond book editing, Patrick served as the in-house editor for the{" "}
                  <a href="https://naohealthobservatory.ca/" className="underline hover:text-text-muted transition-colors">
                    North American Observatory on Health Systems and Policies
                  </a>{" "}
                  to copy edit and help prepare for publication reviews and reports commissioned by NGOs, and private and governmental agencies. In 2024 he became the in-house editor and policy developer at{" "}
                  <a href="https://stayathomenursing.com/" className="underline hover:text-text-muted transition-colors">
                    Stay at Home Nursing
                  </a>
                  , a home healthcare company based in Toronto. Most recently he was brought on to copy edit the journal{" "}
                  <a href="https://uwpress.wisc.edu/Journals/History-of-Pharmacy-and-Pharmaceuticals" className="underline hover:text-text-muted transition-colors">
                    History of Pharmacy and Pharmaceuticals
                  </a>{" "}
                  published by the University of Wisconsin Press.
                </p>

                <p>
                  Patrick's editorial toolkit is rounded out with strong writing, research, and communication skills. He has authored and co-authored several peer-reviewed articles specializing in the early history of psychedelics. His passion for ideas extended to nearly 15-years teaching at the University of Toronto's School of Continuing Studies, where he developed multiple courses in the history of ideas, delivering more than 25 class-sections to more than 300 students.
                </p>

                <p>
                  Contact Patrick at{" "}
                  <a href="mailto:pherzen@gmail.com" className="underline hover:text-text-muted transition-colors">
                    pherzen@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-xl font-bold font-[family-name:var(--font-inter)] border-b-2 border-bg-dark pb-2 mb-3">
            Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-bg-dark p-6 lg:p-8">
              <p className="text-base leading-6">Developmental and substantive editing</p>
            </div>
            <div className="bg-bg-dark p-6 lg:p-8">
              <p className="text-base leading-6">Copy editing and proofreading</p>
            </div>
            <div className="bg-bg-dark p-6 lg:p-8">
              <p className="text-base leading-6">Manuscription preparation and production editing</p>
            </div>
            <div className="bg-bg-dark p-6 lg:p-8">
              <p className="text-base leading-6">Indexing</p>
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section id="books" className="mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-xl font-bold font-[family-name:var(--font-inter)] border-b-2 border-bg-dark pb-2 mb-3">
            Books
          </h2>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-x-6 lg:gap-y-16">
            {displayedBooks.map((book, index) => (
              <div key={index} className="w-full sm:w-[250px] flex flex-col items-center gap-3">
                <div className="w-full aspect-[826/1253] relative">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 250px"
                    className="object-cover"
                  />
                </div>
                <div className="text-center px-2 space-y-2">
                  <p className="font-bold text-base leading-6">{book.title}</p>
                  <p className="text-base leading-6">{book.author}</p>
                </div>
                <div className="h-0 w-24 border-t border-text-muted" />
                <div className="px-2">
                  <p className="text-base leading-6 text-center">{book.role}</p>
                </div>
              </div>
            ))}
          </div>
          {hasMoreBooks && (
            <div className="flex justify-center pt-8">
              <button
                onClick={() => setBooksToShow(prev => prev + 4)}
                className="bg-bg-dark border border-text-muted px-4 py-3 text-base hover:bg-text-muted hover:text-bg-light transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-xl font-bold font-[family-name:var(--font-inter)] border-b-2 border-bg-dark pb-2 mb-8">
            Expertise
          </h2>
          <p className="text-base leading-6 mb-8">
            I'm a professional editor with over 20 years of experience helping writers bring clarity, precision, and depth to their work.
          </p>
          <div className="space-y-8">
            {accordionSections.map((section) => (
              <div key={section.id} className="bg-bg-dark p-2">
                <button
                  onClick={() => setOpenAccordion(openAccordion === section.id ? null : section.id)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-xl font-bold font-[family-name:var(--font-inter)]">
                    {section.title}
                  </h3>
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image
                      src={openAccordion === section.id ? "/images/chevron-up.svg" : "/images/chevron-down.svg"}
                      alt={openAccordion === section.id ? "Collapse" : "Expand"}
                      width={24}
                      height={24}
                    />
                  </div>
                </button>
                {openAccordion === section.id && section.content && (
                  <div className="mt-4 text-base leading-6">
                    <p>{section.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-xl font-bold font-[family-name:var(--font-inter)] border-b-2 border-bg-dark pb-2 mb-8">
            Testimonials
          </h2>
          <div className="flex flex-wrap gap-[18px]">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full sm:w-[calc(50%-9px)] lg:w-[calc(33.333%-12px)] bg-bg-dark p-2 flex flex-col gap-6">
                <p className="text-base leading-6">{testimonial.quote}</p>
                <div className="text-base leading-6">
                  <p className="font-bold">{testimonial.author}</p>
                  <p>{testimonial.book}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-xl font-bold font-[family-name:var(--font-inter)] border-b-2 border-bg-dark pb-2 mb-3">
            Contact
          </h2>
          <p className="text-base leading-6">
            Email{" "}
            <a href="mailto:pherzen@gmail.com" className="underline hover:text-text-muted transition-colors">
              pherzen@gmail.com
            </a>{" "}
            to talk about how I can help with your project.
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-16 sm:pt-24 lg:pt-32">
          <div className="flex flex-col sm:flex-row justify-between text-base gap-4">
            <p>© 2025 Patrick Farrell</p>
            <p>Website by Rocket5</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
