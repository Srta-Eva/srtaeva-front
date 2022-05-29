import icon from '@assets/images/logo.svg';

import { FC, useState } from 'react';

const Home: FC = function () {
  const [count, setCount] = useState(0);

  return (
    <>
      <img src={icon} />
      <h1 data-testid='title'>
        count is {count}
      </h1>
      <div>
        <button onClick={() => setCount(val => val + 1)} data-testid='increment'>
          increment
        </button>
        <button onClick={() => setCount(val => val - 1)} data-testid='reduce'>
          reduce
        </button>
      </div>
    </>
  );
};

export default Home;
