import { useDeferredValue, useState, useTransition } from 'react';

let a = new Array(10000).fill(0);

function Transition() {
    let [name, setName] = useState('');
    let [isPending, startTransition] = useTransition();
    let state = useDeferredValue(name);

    return (
        <div className="App">
            <input
                type="text"
                onChange={(e) => {
                    startTransition(() => {
                        setName(e.target.value);
                    });
                }}
            />
            {isPending
                ? '로딩중'
                : a.map((a, i) => {
                      return <div key={i}>{state}</div>;
                  })}
        </div>
    );
}

export default Transition;
