import './FilterBtn.css'

export default function FilterBtn({func , activeBTN , filter , txt}) {

    return (
        <button onClick={func} className={activeBTN === filter ? 'FM-active-btn' : 'FM-normal-btn'}>{txt}</button>
    )
}
