import * as React from 'react';

interface Card {
  id: number;
  url: string;
  title: string;
  subTitle: string;
};

interface Props {
  data: Array<Card>;
};

const ExpandingCards = ({
    data
}: Props) => {
  const [activeId, setActiveId] = React.useState<number>(1)

  const onClick = (id: number) => setActiveId(id);

  return (
    <div className="flex w-full">
      {
        data.map(card => (
          <div
            key={card.id}
            className={`relative panel ${activeId === card.id ? 'active !skew-y-0' : card.id > activeId ? "skew-y-6" : '-skew-y-6'}`}
            onClick={() => onClick(card.id)}
            style={{ backgroundImage: `url(${card.url})` }}>
                <div className='absolute -bottom-20 w-full cursor-default'>
                    <p className={`${card.id === activeId ? "block" : "hidden"} text-center text-primary text-2xl font-semibold`}>{card.title}</p>
                    <p className={`${card.id === activeId ? "block" : "hidden"} text-center text-black text-base`}>{card.subTitle}</p>
                </div>
            
          </div>
        ))
      }
    </div>
  )
}

export default ExpandingCards;