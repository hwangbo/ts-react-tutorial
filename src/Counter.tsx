import React, {useState} from 'react';

function Counter() {
    // js와 다른점 : <>로 타입을 명시해준다.
    // 근데 알아서 타입을 유추하기 때문에 생략해도 된다.
    // nullable 일 경우 명시해주면 좋다.
    // 상태의 타입이 까다로운 구조를 가진 객체이거나 배열일 때 명시해주면 좋다.
    const [count, setCount] = useState<number>(0);
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);
    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}

export default Counter;