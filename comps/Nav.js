import Link from 'next/link';
import Image from 'next/image';
// 
const Nav = () => {
    return ( 
        <nav>
        <div className="logo">
            <Image src="/users.svg" width={30}   height={30}  />
            <h1>Users List</h1>
            
        </div>
        <Link href="/"><a >Home</a></Link>
        <Link href="/about"><a >About</a></Link>
        <Link href="/users"><a >User List</a></Link>
        
        </nav>
     );
}
 
export default Nav;