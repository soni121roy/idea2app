import React, { useState } from 'react'

const clones = {
  "Instagram Clone": { id: "insta", color: "#E1306C", desc: "Photo, Reels, Stories" },
  "Swiggy Clone": { id: "swiggy", color: "#FC8019", desc: "Food Delivery" },
  "WhatsApp Clone": { id: "whatsapp", color: "#25D366", desc: "Chat App" },
  "Netflix Clone": { id: "netflix", color: "#E50914", desc: "Movie Streaming" },
  "Amazon Clone": { id: "amazon", color: "#FF9900", desc: "E-commerce" },
  "YouTube Clone": { id: "youtube", color: "#FF0000", desc: "Video Platform" },
}

function RealPreview({ id }) {
  if (id === 'insta') return (
    <div style={{background:'#fff', color:'#000', height:'100%'}}>
      <div style={{display:'flex', justifyContent:'space-between', padding:'12px', borderBottom:'1px solid #eee', fontWeight:'bold'}}>Instagram <span>♡ 💬 ✈</span></div>
      <div style={{padding:'10px', display:'flex', gap:'10px', alignItems:'center'}}><div style={{width:32, height:32, background:'#ddd', borderRadius:'50%'}}/><b>food_lover</b></div>
      <div style={{height:260, background:'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)'}}/>
      <div style={{padding:'12px'}}><b>2,342 likes</b><p style={{marginTop:4}}>Best biryani in town 😍 #fooddelivery #swiggy</p></div>
    </div>
  )
  if (id === 'swiggy') return (
    <div style={{background:'#fff', color:'#000', padding:15, height:'100%'}}>
      <h3 style={{fontWeight:'bold', fontSize:18}}>Order Food Online</h3>
      <input placeholder="Search biryani, pizza..." style={{width:'100%', marginTop:10, padding:10, borderRadius:8, border:'1px solid #ddd'}}/>
      {['Biryani House - 30 mins - ⭐4.3','Pizza Hut - 25 mins - ⭐4.5','Burger King - 20 mins - ⭐4.2'].map(x=><div key={x} style={{border:'1px solid #eee', padding:12, borderRadius:10, marginTop:10, display:'flex', justifyContent:'space-between'}}>{x}<button style={{background:'#FC8019', color:'#fff', border:'none', borderRadius:6, padding:'4px 10px'}}>ADD</button></div>)}
    </div>
  )
  if (id === 'whatsapp') return (
    <div style={{background:'#e5ddd5', height:'100%', display:'flex', flexDirection:'column'}}>
      <div style={{background:'#075E54', color:'#fff', padding:12, fontWeight:'bold'}}>WhatsApp • Food Delivery Support</div>
      <div style={{flex:1, padding:15}}><div style={{background:'#fff', padding:8, borderRadius:10, width:'fit-content'}}>Hi, order kab ayega?</div><div style={{background:'#dcf8c6', padding:8, borderRadius:10, width:'fit-content', marginLeft:'auto', marginTop:10}}>2 min me rider aa raha hai!</div></div>
      <div style={{background:'#f0f0f0', padding:10, display:'flex', gap:8}}><input placeholder="Type a message" style={{flex:1, padding:10, borderRadius:20, border:'none'}}/><button style={{background:'#25D366', color:'#fff', border:'none', borderRadius:'50%', width:36, height:36}}>➤</button></div>
    </div>
  )
  if (id === 'netflix') return <div style={{background:'#000', color:'#fff', padding:15, height:'100%'}}><h2 style={{color:'#E50914', fontWeight:'900'}}>NETFLIX</h2><p style={{marginTop:10}}>Trending Now</p><div style={{display:'flex', gap:10, marginTop:12}}>{[1,2,3,4].map(i=><div key={i} style={{width:100, height:150, background:'#222', borderRadius:6}}/> )}</div><button style={{marginTop:20, background:'#E50914', color:'#fff', border:'none', padding:'10px 20px', borderRadius:4}}>▶ Play</button></div>
  if (id === 'amazon') return <div style={{background:'#fff', color:'#000', height:'100%'}}><div style={{background:'#131921', color:'#fff', padding:10}}>amazon.in</div><div style={{padding:10, display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>{['iPhone 15','Sony Headphones','Nike Shoes','Watch'].map(p=><div key={p} style={{border:'1px solid #ddd', padding:10, borderRadius:8}}><div style={{height:80, background:'#f3f3f3'}}/><div style={{fontSize:13, marginTop:6}}>{p}</div><b>₹1,999</b><button style={{width:'100%', marginTop:6, background:'#FFD814', border:'none', padding:6, borderRadius:12}}>Add to Cart</button></div>)}</div></div>
  if (id === 'youtube') return <div style={{background:'#fff', color:'#000', height:'100%'}}><div style={{padding:10, fontWeight:'bold'}}><span style={{color:'red'}}>▶</span> YouTube</div><div style={{height:200, background:'#000'}}/><div style={{padding:10}}><b>How to Build Food Delivery App - Full Tutorial</b><p style={{color:'#666', fontSize:13}}>1.2M views • Idea2App</p></div></div>
  return null
}

export default function App(){
  const [idea, setIdea] = useState('food delivery app chahiye')
  const [selected, setSelected] = useState(null)
  const [tab, setTab] = useState('preview')

  const liveLink = `${window.location.origin}/?clone=${selected?.replace(/\s+/g,'-').toLowerCase()}`

  const handleDownload = () => {
    const html = `<!DOCTYPE html><html><head><title>${selected}</title></head><body><h1>${selected} - Idea: ${idea}</h1><p>This is deployable React code for ${selected}. Upload to Vercel.</p></body></html>`
    const blob = new Blob([html], {type:'text/html'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a'); a.href=url; a.download=`${selected.replace(' ','_')}.html`; a.click()
  }

  return (
    <div style={{background:'#000', color:'#fff', minHeight:'100vh', fontFamily:'sans-serif'}}>
      <div style={{textAlign:'center', padding:'50px 20px 20px'}}><h1 style={{fontSize:50, fontWeight:900, letterSpacing:2}}>IDEA2APP</h1><p style={{color:'#888'}}>Idea likh, clone pe click kar, preview + code + live link le</p>
      <div style={{maxWidth:600, margin:'30px auto', display:'flex', gap:10}}><input value={idea} onChange={e=>setIdea(e.target.value)} placeholder="Ex: mujhe food delivery app chahiye" style={{flex:1, padding:16, borderRadius:12, border:'none', color:'#000', fontSize:16}}/><button style={{padding:'16px 28px', background:'#fff', color:'#000', borderRadius:12, fontWeight:'bold'}}>Generate</button></div></div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:20, maxWidth:1100, margin:'0 auto', padding:'0 20px 60px'}}>
        {Object.keys(clones).map(name=>(
          <div key={name} style={{background:'#141414', border:'1px solid #262626', borderRadius:18, padding:22}}>
            <div style={{display:'flex', justifyContent:'space-between'}}><b style={{fontSize:18}}>{name}</b><span style={{width:10, height:10, borderRadius:'50%', background:clones[name].color, display:'inline-block'}}/></div>
            <p style={{color:'#777', fontSize:13, marginTop:6}}>{clones[name].desc} • Ready for {idea}</p>
            <button onClick={()=>{setSelected(name); setTab('preview')}} style={{marginTop:16, width:'100%', padding:12, background:'#fff', color:'#000', borderRadius:10, fontWeight:'bold', cursor:'pointer'}}>Open → Live Preview</button>
          </div>
        ))}
      </div>

      {selected && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.9)', display:'flex', alignItems:'center', justifyContent:'center', padding:20, zIndex:100}}>
          <div style={{background:'#111', width:'100%', maxWidth:950, borderRadius:20, border:'1px solid #333', overflow:'hidden', maxHeight:'90vh', display:'flex', flexDirection:'column'}}>
            <div style={{padding:16, display:'flex', justifyContent:'space-between', borderBottom:'1px solid #222', alignItems:'center'}}>
              <b>{selected} - Live</b>
              <div style={{display:'flex', gap:8}}><button onClick={()=>setTab('preview')} style={{padding:'6px 14px', borderRadius:20, border:'none', background:tab==='preview'?'#fff':'#222', color:tab==='preview'?'#000':'#fff'}}>Preview</button><button onClick={()=>setTab('code')} style={{padding:'6px 14px', borderRadius:20, border:'none', background:tab==='code'?'#fff':'#222', color:tab==='code'?'#000':'#fff'}}>Code</button><button onClick={()=>setSelected(null)} style={{background:'#222', color:'#fff', border:'none', borderRadius:20, padding:'6px 12px'}}>✕</button></div>
            </div>
            <div style={{display:'flex', flexWrap:'wrap', flex:1, overflow:'auto'}}>
              <div style={{flex:'1 1 400px', background:'#000', minHeight:450}}>{tab==='preview'? <RealPreview id={clones[selected].id}/> : <pre style={{padding:15, color:'#0f0', fontSize:12, whiteSpace:'pre-wrap'}}>{`// ${selected} Source Code\n// Idea: ${idea}\nimport React from 'react'\nexport default function App(){\n return <div>${selected} for ${idea}</div>\n}\n// Deploy this to Vercel for live link`}</pre>}</div>
              <div style={{flex:'1 1 280px', padding:20, background:'#0a0a0a', borderLeft:'1px solid #222'}}>
                <b>Share & Deploy</b>
                <p style={{fontSize:12, color:'#666', marginTop:10}}>Real Live Link:</p>
                <div style={{background:'#1a1a1a', padding:10, borderRadius:8, fontSize:12, marginTop:6, wordBreak:'break-all', color:'#4ade80'}}>{liveLink}</div>
                <button onClick={()=>{navigator.clipboard.writeText(liveLink); alert('Live link copied!')}} style={{width:'100%', marginTop:12, padding:10, background:'#fff', color:'#000', borderRadius:8, fontWeight:'bold'}}>Copy Live Link</button>
                <button onClick={handleDownload} style={{width:'100%', marginTop:10, padding:10, background:'#1f1f1f', color:'#fff', border:'1px solid #333', borderRadius:8}}>Download Code ZIP</button>
                <p style={{fontSize:11, color:'#666', marginTop:15}}>Ab localhost ki jagah Vercel pe deploy karne ke baad ye link sabke liye khulega.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}