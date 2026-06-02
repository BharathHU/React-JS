import React from 'react'
import cars from '../assets/bmw.jpg'
function Example5() {
    let direction="rtl"
    let direction2="ltr"
    let title="Chennai super kings"
let content="csk"
let height="200px"
let width="200px"
 let imageURL="https://imgs.search.brave.com/9TN8Q4tyAiTii8Mej-GdHEYz5P1Wm8Tw-qT9GbFW-I8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDcv/NDQ5LzE4NC9zbWFs/bC90cmVlLWdyb3d0/aC1vbi1nbG9iZS1n/bGFzcy1pbi1uYXR1/cmUtY29uY2VwdC1l/Y28tZWFydGgtZGF5/LWZyZWUtcGhvdG8u/anBn"
 let images=[
    "https://imgs.search.brave.com/mV3qSLo3U01PA6zivTpBGI6xGvZpsFcfDRrcRZgfO2I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjgv/ODI4LzM4My9zbWFs/bC9hLWdsYXNzLWJh/bGwtd2l0aC1sYW5k/c2NhcGVzLWluc2lk/ZS1vZi1pdC1uYXR1/cmUtc3RvY2stcGhv/dG8uanBn",
    "https://imgs.search.brave.com/hkBJtkFd8gmIj3_fJYElvKIdzmyj0aP23bgacz-r6PI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ0/Mzg2NDY3OS9waG90/by9mZWVsLXRoZS1i/ZWF1dHktb2YtbmF0/dXJlLXdpdGgtYWxs/LXlvdXItc2Vuc2Vz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1wSEFaU0tod0FO/aVZDcXNDME9vT3B1/OVNMZ3FoS2lIWUdB/eG5aOExkd3FFPQ",]
    return (
    <div>
      <bdo dir={direction1}>Hello</bdo>
      <abbr title={content}>{title}</abbr>
      {/* 1st way to add image */}
      <img src="https://imgs.search.brave.com/Jlb773O-QMFQDtUsVoFhrQnCpy-WDP5-e1c3ejIWhyE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/MjU3LzMxOC9zbWFs/bC9haS1nZW5lcmF0/ZWQtZWFydGgtbmF0/dXJlLWVhcnRoLWlu/LWEtYmFsbC1uYXR1/cmUtaW4tYS1iYWxs/LWdlbmVyYXRpdmUt/YWktcGhvdG8uanBn" alt="no image" height={height} width={width}/>
      {/* 2nd way to add image */}
      <img src={imageURL} alt="no image" height={height} width={width}/>
        {/* 3rd way to add image */}
        <img src={imageURL} alt="no image" height={height} width={width}/>
            {/* 4th way to add image */}
            <img src={images[0]} alt="no image" height={height} width={width}/>
             <img src={images[1]} alt="no image" height={height} width={width}/>
             <img src={cars} alt="no image" height={height} width={width}/>
    </div>
  )
}

export default Example5