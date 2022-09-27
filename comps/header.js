import Link from 'next/link'
const Header = () => {
    return (
        <nav class="bg-cyan-900 mx-3 p-2 text-white">
            <div>
                <div>
                    <Link href="/personal"><a><img class="h-16" src="image/marine.png"/></a></Link>
                </div>
            </div>
        </nav>
       
    
    );
}
export default Header;