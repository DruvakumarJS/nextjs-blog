import Head from 'next/head';
import Link from 'next/Link';
import Image from 'next/image';
import Script from 'next/script';
import Layout from '../../components/layout'

export default function firstPost(){
	return(
      <Layout>
	   <Head>
		  <title>First Post</title>
       </Head>

       

	   <h1>First Post</h1>

	   <h2> 
	     <Link href="/"> Back to home </Link>
        
         
	   </h2>

	 </Layout>
	 );
}