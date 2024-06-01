"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const items = [
    {
      title: 'Tsuki Harvester (Pre-Production)',
      imgSrc: '/holochibi.png',
      description: 'A psychological horror RPG game inspired by "The Harvester"',
    },
    {
      title: 'Char.io (In Progress)',
      imgSrc: '/holochibi.png',
      description: 'Description for item 4.',
    },
    {
      title: 'Horo.chat',
      imgSrc: '/holochibi.png',
      description: 'A "slice of life" chatbot powered by GPT-4o based off the character Holo from Spice and Wolf.',
      url: "https://horo.chat",
    },
    {
      title: 'Kiona',
      imgSrc: '/kiona.png',
      description: 'Discord chatbot using the Dialogflow API to converse about mental health, ',
    },
    {
      title: 'Hellbent',
      imgSrc: '/hellbent.png',
      description: 'Rogue like 2D adventure game with bullet hell inspiration.',
      url: 'https://oscosan.itch.io/hellbent-full-demo',
    },
    {
      title: 'Adventure.ai',
      imgSrc: '/adventureAi2.png',
      description: '2D text-based adventure game using GPT-2 and Pygame.',
    },
  ];

  return (
    <main>

      <div> 
        <p class="font-semibold pt-2 px-2">Jeff | jeff-li@live.ca</p>
      </div>

      <div class="pt-2 px-2">
        <Link href="https://github.com/darkshade70" passHref>
              <Image 
                src='/github-mark.png'
                alt='github icon image'
                width={30}
                height={30}
              />
        </Link>
      </div>
      <div className='project-container pt-16 md:px-44'><a class="font-semibold">Projects</a>:
        <ul className="item-list">
          {items.map((item, index) => (
            <DropdownItem
              key={index}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
              url={item.url}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

const DropdownItem = ({ title, imgSrc, description, url }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="item">
      <div className="item-container">
        <button className="item-button" onClick={toggleContent}>
          {title}
        </button>
        <div className={`item-content ${isOpen ? 'item-content-enter' : ''}`}>
          <Image src={imgSrc} alt={title} width={500} height={300} />
          <p>{description}</p>
          {url && (
            <Link href={url} legacyBehavior>
              <a className="text-blue-500 underline">view</a>
            </Link>
          )}
        </div>
      </div>
    </li>
  );
};