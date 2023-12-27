"use client"

import { useRouter } from "next/navigation"


export default function Home() {

  const router = useRouter();


  return (
    <div>
      <main className="ova">
        <div className="container">
          <h2 className="text6">Листа на автобуски станици</h2>
          <ul  className="towns-list">
            <li><a className="cursor-pointer" onClick={() => router.push("/avtobuska-prilep")}>Прилеп</a></li>
            <li><a href="link-to-skopje">Скопје</a></li>
            <li><a href="link-to-tetovo">Тетово</a></li>
            <li><a href="link-to-bitola">Битола</a></li>
            <li><a href="link-to-ohrid">Охрид</a></li>
            <li><a href="link-to-kumanovo">Куманово</a></li>
            <li><a href="link-to-veles">Велес</a></li>
            <li><a href="link-to-gostivar">Гостивар</a></li>
            <li><a href="link-to-kavadarci">Кавадарци</a></li>
            <li><a href="link-to-shtip">Штип</a></li>
            <li><a href="link-to-strumica">Струмица</a></li>
            <li><a href="link-to-radovish">Радовиш</a></li>
            <li><a href="link-to-gevgelija">Гевгелија</a></li>
            <li><a href="link-to-kocani">Кочани</a></li>
            <li><a href="link-to-kratovo">Кратово</a></li>
            <li><a href="link-to-delcevo">Делчево</a></li>
            <li><a href="link-to-vinica">Виница</a></li>
            <li><a href="link-to-probistip">Пробиштип</a></li>
            <li><a href="link-to-negotino">Неготино</a></li>
            <li><a href="link-to-debar">Дебар</a></li>
            <li><a href="link-to-kicevo">Кичево</a></li>
            <li><a href="link-to-kriva-palanka">Крива Паланка</a></li>
            <li><a href="link-to-krushevo">Крушево</a></li>
            <li><a href="link-to-struga">Струга</a></li>
            
          </ul>
        </div>


        
      </main>
    </div>
  )
}

 