import { useState } from "react";

export default function App(){
  const [tab,setTab] = useState("YouTube Clone");
  const [input,setInput] = useState("");
  const [idea,setIdea] = useState("Hostel Food Delivery App");

  const gen = ()=>{ if(input.trim()) setIdea(input.trim()) };

  return(
    <div style={{fontFamily:"Inter, Arial", background:"#fff", minHeight:"100vh"}}>
      <div style={{padding:"25px 0", textAlign:"center", borderBottom:"1px solid #eee"}}>
        <h1 style={{margin:"0 0 10px", fontSize:"22px"}}>Turn idea into working preview</h1>
        <div style={{display:"flex", gap:"10px", justifyContent:"center"}}>
          <input value={input} onChange={e=>setInput(e.target.value)} placeholder="e.g., Food delivery app for hostel students" style={{width:"420px", padding:"13px 20px", borderRadius:"25px", border:"1px solid #ddd"}}/>
          <button onClick={gen} style={{background:"#111", color:"#fff", padding:"13px 22px", borderRadius:"25px", border:"none", cursor:"pointer", fontWeight:"700"}}>Generate ✨</button>
        </div>
        <div style={{fontSize:"12px", marginTop:"8px", color:"#666"}}>Current: <b style={{color:"#000"}}>{idea}</b></div>
      </div>

      <div style={{display:"flex", gap:"8px", padding:"12px 20px", borderBottom:"1px solid #eee", overflowX:"auto"}}>
        {[
          ["YouTube Clone","#FF0000"],
          ["Facebook Clone","#0866FF"],
          ["Amazon Clone","#131A22"],
          ["Spotify Clone","#000"],
          ["Netflix Clone","#E50914"],
        ].map(([name,color])=>(
          <button key={name} onClick={()=>setTab(name)} style={{padding:"7px 14px", borderRadius:"20px", border:"1px solid #ddd", background: tab===name?color:"#fff", color: tab===name?"#fff":"#000", fontWeight:"600", cursor:"pointer", whiteSpace:"nowrap"}}>{name}</button>
        ))}
      </div>

      <div style={{background:"#f9f9f9", padding:"15px"}}>
        {tab==="YouTube Clone" && (
          <div style={{background:"#fff", borderRadius:"12px", overflow:"hidden"}}>
            <div style={{display:"flex", alignItems:"center", padding:"10px 16px", gap:"20px"}}>
              <div style={{display:"flex", alignItems:"center", gap:"16px"}}><span style={{fontSize:"20px"}}>☰</span><img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" style={{height:"20px"}}/></div>
              <div style={{flex:1, maxWidth:"600px", margin:"0 auto", display:"flex"}}><input value={idea} readOnly style={{flex:1, padding:"10px 16px", border:"1px solid #ccc", borderRadius:"40px 0 0 40px"}}/><button style={{border:"1px solid #ccc", borderLeft:"0", padding:"0 22px", borderRadius:"0 40px 40px 0", background:"#f8f8f8"}}>🔍</button></div>
              <div style={{display:"flex", gap:"16px"}}>🎙️ 🔔 👤</div>
            </div>
            <div style={{display:"flex"}}>
              <div style={{width:"200px", padding:"12px", fontSize:"14px", lineHeight:"2.3", borderRight:"1px solid #eee"}}>🏠 Home<br/>🩳 Shorts<br/>📺 Subscriptions<br/><hr/>You ▸<br/>History<br/>Playlists<br/>Your videos<br/>Watch Later</div>
              <div style={{flex:1, padding:"16px"}}>
                <div style={{display:"flex", gap:"8px", marginBottom:"16px", overflowX:"auto"}}>{["All",idea,"Music","Live","Gaming","News"].map(c=><span key={c} style={{padding:"7px 12px", background:c===idea?"#0f0f0f":"#f2f2f2", color:c===idea?"#fff":"#000", borderRadius:"8px", fontSize:"13px", whiteSpace:"nowrap"}}>{c}</span>)}</div>
                <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"16px"}}>
                  {[1,2,3,4,5,6].map(i=>(
                    <div key={i}><div style={{position:"relative", borderRadius:"12px", overflow:"hidden"}}><img src={`https://picsum.photos/seed/${idea}${i}/320/180`} style={{width:"100%"}}/><span style={{position:"absolute", bottom:"6px", right:"6px", background:"rgba(0,0,0,0.8)", color:"#fff", fontSize:"11px", padding:"2px 4px", borderRadius:"4px"}}>12:34</span></div><div style={{display:"flex", gap:"8px", marginTop:"8px"}}><img src="https://i.pravatar.cc/40" style={{width:"32px", height:"32px", borderRadius:"50%"}}/><div><div style={{fontSize:"14px", fontWeight:"600", lineHeight:"1.3"}}>{idea} - Part {i} | Full Project Explained</div><div style={{fontSize:"12px", color:"#606060"}}>Apna College • 1.{i}M views • 2 days ago</div></div></div></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {tab==="Amazon Clone" && (
          <div style={{background:"#fff"}}>
            <div style={{background:"#131921", color:"#fff", display:"flex", alignItems:"center", padding:"8px 12px", gap:"18px"}}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" style={{height:"28px", filter:"invert(1)"}}/>
              <span style={{fontSize:"12px"}}>Deliver to<br/><b>Rohtak 124001</b></span>
              <div style={{flex:1, display:"flex", height:"40px"}}><span style={{background:"#e6e6e6", color:"#555", padding:"10px", fontSize:"12px", borderRadius:"4px 0 0 4px"}}>All</span><input value={idea} readOnly style={{flex:1, padding:"0 10px", border:"none"}}/><span style={{background:"#febd69", padding:"10px 15px", borderRadius:"0 4px 4px 0"}}>🔍</span></div>
              <span style={{fontSize:"13px"}}>Hello, Soni<br/><b>Account & Lists</b></span><span style={{fontSize:"13px"}}>Returns<br/><b>& Orders</b></span><span style={{fontSize:"20px"}}>🛒 3</span>
            </div>
            <div style={{background:"#232f3e", color:"#fff", padding:"8px 12px", fontSize:"13px", display:"flex", gap:"16px"}}><span>☰ All</span><span>Fresh</span><span>Amazon Pay</span><span>Today's {idea} Deals</span></div>
            <div style={{background:"#e3e6e6", padding:"15px", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"15px"}}>
              {[
                {t:`Best of ${idea}`, p:"Deals on utensils & boxes"},
                {t:`Top picks for you`, p:`For ${idea} lovers`},
                {t:`Up to 60% off`, p:"Kitchen essentials"},
                {t:`Start your ${idea}`, p:"Business starter kit"},
              ].map((b,i)=><div key={i} style={{background:"#fff", padding:"15px"}}><b>{b.t}</b><div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", margin:"12px 0"}}><div style={{background:"#f7f7f7", height:"80px", display:"grid", placeItems:"center", fontSize:"30px"}}>🍱</div><div style={{background:"#f7f7f7", height:"80px", display:"grid", placeItems:"center", fontSize:"30px"}}>🥘</div><div style={{background:"#f7f7f7", height:"80px", display:"grid", placeItems:"center", fontSize:"30px"}}>🛵</div><div style={{background:"#f7f7f7", height:"80px", display:"grid", placeItems:"center", fontSize:"30px"}}>📱</div></div><a style={{color:"#007185", fontSize:"12px"}}>See all offers</a></div>)}
            </div>
          </div>
        )}

        {tab==="Facebook Clone" && (
          <div style={{background:"#f0f2f5"}}>
            <div style={{background:"#fff", display:"flex", justifyContent:"space-between", padding:"8px 16px", boxShadow:"0 1px 2px rgba(0,0,0,0.1)"}}><div style={{display:"flex", gap:"10px", alignItems:"center"}}><span style={{background:"#0866FF", color:"#fff", width:"40px", height:"40px", display:"grid", placeItems:"center", borderRadius:"50%", fontWeight:"900", fontSize:"24px"}}>f</span><input placeholder={`Search ${idea}`} style={{background:"#f0f2f5", border:"none", padding:"10px 16px", borderRadius:"20px", width:"240px"}}/></div><div style={{display:"flex", gap:"30px", fontSize:"22px", alignItems:"center"}}>🏠 📺 🏪 👥 🎮</div><div style={{display:"flex", gap:"10px"}}>☰ 💬 🔔 <img src="https://i.pravatar.cc/40?img=5" style={{width:"32px", borderRadius:"50%"}}/></div></div>
            <div style={{display:"grid", gridTemplateColumns:"260px 1fr 260px", gap:"15px", padding:"15px", maxWidth:"1200px", margin:"0 auto"}}>
              <div style={{fontSize:"14px", lineHeight:"2.6"}}>👤 Soni Roy<br/>👥 Find Friends<br/>🕒 Memories<br/>💾 Saved<br/>👥 Groups<br/>📺 Video<br/>🏪 Marketplace for {idea}</div>
              <div><div style={{background:"#fff", borderRadius:"8px", padding:"10px", display:"flex", gap:"8px"}}><img src="https://i.pravatar.cc/40?img=5" style={{borderRadius:"50%"}}/><input placeholder={`What's on your mind about ${idea}?`} style={{flex:1, background:"#f0f2f5", border:"none", borderRadius:"20px", padding:"10px"}}/></div>
              <div style={{background:"#fff", borderRadius:"8px", marginTop:"12px"}}><div style={{display:"flex", gap:"4px", padding:"10px", overflowX:"auto"}}>{[1,2,3,4,5].map(i=><div key={i} style={{minWidth:"100px", height:"180px", borderRadius:"10px", backgroundImage:`url(https://picsum.photos/seed/${i}${idea}/100/180)`, backgroundSize:"cover", padding:"8px", color:"#fff", fontSize:"11px", display:"flex", alignItems:"end"}}>{idea.slice(0,10)}</div>)}</div>
              <div style={{padding:"12px", borderTop:"1px solid #eee"}}><div style={{display:"flex", gap:"8px"}}><img src="https://i.pravatar.cc/40?img=8" style={{borderRadius:"50%", width:"32px"}}/><div><b>Food Hunter Rohtak</b><div style={{fontSize:"11px", color:"gray"}}>5h • 🌍</div></div></div><p style={{fontSize:"14px", margin:"10px 0"}}>We just launched <b>{idea}</b> in MDU Hostel! 50% off for first 100 students. Order now! 🍛🔥 #Startup #Rohtak</p><img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600" style={{width:"100%", borderRadius:"8px"}}/><div style={{display:"flex", justifyContent:"space-between", padding:"8px 0", borderTop:"1px solid #eee", marginTop:"8px", fontSize:"14px", color:"#65676b"}}><span>👍 1.2K</span><span>342 comments • 89 shares</span></div><div style={{display:"flex", justifyContent:"space-around", borderTop:"1px solid #eee", paddingTop:"8px", color:"#65676b", fontSize:"14px"}}><span>👍 Like</span><span>💬 Comment</span><span>↗️ Share</span></div></div></div></div>
              <div style={{fontSize:"13px"}}><b>Sponsored • {idea}</b><div style={{background:"#fff", borderRadius:"8px", padding:"10px", marginTop:"8px"}}><img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300" style={{width:"100%", borderRadius:"8px"}}/><div style={{marginTop:"6px"}}>Get your {idea} app built today - Limited offer!</div></div></div>
            </div>
          </div>
        )}

        {tab==="Netflix Clone" && (
          <div style={{background:"#141414", color:"#fff"}}>
            <div style={{display:"flex", justifyContent:"space-between", padding:"15px 30px", position:"absolute", width:"100%", zIndex:2, background:"linear-gradient(rgba(0,0,0,0.8), transparent)"}}><span style={{color:"#e50914", fontWeight:"900", fontSize:"28px", letterSpacing:"1px"}}>NETFLIX</span><div style={{display:"flex", gap:"20px", fontSize:"13px"}}>Home • TV Shows • Movies • New about {idea} <button style={{background:"#e50914", border:"none", color:"#fff", padding:"6px 12px", borderRadius:"4px"}}>Sign In</button></div></div>
            <div style={{height:"380px", backgroundImage:`linear-gradient(to bottom, rgba(0,0,0,0.3), #141414), url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200)`, backgroundSize:"cover", padding:"100px 40px 0"}}><h1 style={{fontSize:"42px", maxWidth:"500px", margin:0}}>{idea}: The Billion Dollar Journey</h1><p style={{maxWidth:"450px", fontSize:"15px", marginTop:"10px"}}>A girl from Haryana builds {idea} from her hostel room. Watch how she cracks MDU market. Top 10 in India today.</p><div style={{display:"flex", gap:"10px", marginTop:"18px"}}><button style={{background:"#fff", color:"#000", border:"none", padding:"10px 26px", borderRadius:"4px", fontWeight:"700", fontSize:"16px"}}>▶ Play</button><button style={{background:"rgba(109,109,110,0.7)", color:"#fff", border:"none", padding:"10px 26px", borderRadius:"4px", fontWeight:"700"}}>ⓘ More Info</button></div></div>
            <div style={{padding:"15px 30px"}}><b>Trending Now • {idea} Specials</b><div style={{display:"flex", gap:"8px", marginTop:"10px", overflowX:"auto"}}>{[1,2,3,4,5,6,7].map(i=><img key={i} src={`https://picsum.photos/seed/netflix${idea}${i}/140/80`} style={{borderRadius:"4px", minWidth:"140px"}}/> )}</div></div>
          </div>
        )}

        {tab==="Spotify Clone" && (
          <div style={{background:"#000", color:"#fff", display:"flex", height:"550px", borderRadius:"12px", overflow:"hidden"}}>
            <div style={{width:"240px", background:"#121212", padding:"10px", display:"flex", flexDirection:"column", gap:"8px"}}><div style={{background:"#121212", borderRadius:"8px", padding:"12px", lineHeight:"2.2", fontSize:"14px", fontWeight:"600"}}>🏠 Home<br/>🔍 Search<br/>📚 Your Library</div><div style={{background:"#121212", borderRadius:"8px", padding:"12px", flex:1}}><div style={{display:"flex", justifyContent:"space-between"}}><span>Playlists for {idea}</span><span>+</span></div><div style={{marginTop:"15px", background:"#242424", padding:"12px", borderRadius:"8px"}}><b>Create your first playlist for {idea}</b><p style={{fontSize:"12px"}}>It's easy, we'll help you</p><button style={{background:"#fff", color:"#000", border:"none", padding:"6px 14px", borderRadius:"20px", fontWeight:"700", marginTop:"8px", fontSize:"12px"}}>Create playlist</button></div></div></div>
            <div style={{flex:1, background:"linear-gradient(#1f1f1f, #121212)", padding:"20px", overflowY:"auto"}}><div style={{display:"flex", gap:"20px", alignItems:"end"}}><div style={{width:"180px", height:"180px", background:"linear-gradient(135deg, #8e2de2, #4a00e0)", display:"grid", placeItems:"center", fontSize:"80px", borderRadius:"6px"}}>🍱</div><div><p style={{fontSize:"12px"}}>Playlist</p><h1 style={{fontSize:"48px", margin:"5px 0"}}>{idea}</h1><p style={{fontSize:"13px"}}>Soni Roy • 12 songs • Made for MDU Hostel</p></div></div>
            <div style={{marginTop:"20px"}}><div style={{display:"flex", alignItems:"center", gap:"20px", marginBottom:"15px"}}><div style={{width:"56px", height:"56px", background:"#1ed760", borderRadius:"50%", display:"grid", placeItems:"center", color:"#000", fontSize:"24px"}}>▶</div><span style={{fontSize:"24px"}}>♡</span></div><div style={{display:"grid", gridTemplateColumns:"30px 4fr 2fr 1fr", fontSize:"12px", color:"#b3b3b3", padding:"8px", borderBottom:"1px solid #333"}}><span>#</span><span>Title</span><span>Album - {idea}</span><span>⏱</span></div>{[`${idea} Anthem`, `Hostel Life - ${idea}`, `3 AM Cravings`, `${idea} Success`, `Rohtak to Silicon Valley`].map((t,i)=><div key={i} style={{display:"grid", gridTemplateColumns:"30px 4fr 2fr 1fr", padding:"10px 8px", fontSize:"13px", borderRadius:"4px", background:i===0?"#2a2a2a":"transparent"}}><span>{i+1}</span><span><b>{t}</b><br/><span style={{fontSize:"11px", color:"#b3b3b3"}}>Soni</span></span><span style={{color:"#b3b3b3"}}>{idea} Hits</span><span style={{color:"#b3b3b3"}}>3:{20+i*5}</span></div>)}</div></div>
          </div>
        )}
      </div>
    </div>
  )
}