import Link from "next/link"

export function Navigation(){
    return (
        <ul style={{display:'flex', listStyle:'none', marginLeft:'.1em'}}>
            <li><Link href="/">Home</Link></li>
            <li style={{marginLeft:'1em'}}><Link href="/transition">Transition Component</Link></li>
            <li style={{marginLeft:'1em'}}><Link href="/csstransition">CSS Transition Component</Link></li>
        </ul>
    )
}