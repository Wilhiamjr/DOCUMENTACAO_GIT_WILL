import { useConfig } from "nextra-theme-docs"
import Image from "next/image"
import { title } from "process"
export default {
  // project: {
  //   link: 'https://github.com/shuding/nextra'
  // }
  logo: <Image src="https://sdc.com.br/wp-content/uploads/2020/03/sdc-logo_black-blue-1536x477.png" alt="SDC" unoptimized width={150} height={150} style={{ backgroundColor: '#FFFFFF;', padding: '10px', borderRadius: '10px' }} />,
  useNextSeoProps() {
    return {
      titleTemplate: 'SDC | %s'
    }
  },
  themeSwitch: {
    useOptions() {
      return {
        light: 'Light',
        dark: 'Dark',
        system: 'System',
      }
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="SDC" />
      <meta property="og:description" content="Sistema da SDC para Higienização de Mãos Pré-Cirúrgica" />
      <link rel="icon" href="https://sdc.com.br/wp-content/uploads/2024/02/icon-192x192-1-60x60.png" sizes="32x32"></link>
      <link rel="apple-touch-icon" href="https://sdc.com.br/wp-content/uploads/2024/02/icon-192x192-1.png"></link>
      <link rel="apple-touch-icon" href="https://sdc.com.br/wp-content/uploads/2024/02/icon-192x192-1.png"></link>
    </>
  ),
  useConfig() {
    return{
    darkMode: false,
    }
  },
  toc:{
    title:'Nesta página',
  },
  feedback:{
    labels:null,
    content:null
  },
  editLink:{
    text:null
  },
  footer:{
    text:(
      <span>
      {new Date().getFullYear()} ©{' '}
      <a href="https://sdc.com.br" target="_blank" >
        SDC
      </a>
    </span>
    )
  },
  sidebar:{
    defaultMenuCollapseLevel:0,
    
  }
}