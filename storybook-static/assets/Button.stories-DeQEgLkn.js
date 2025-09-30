import{j as r}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";const e=({variant:Zr="primary",color:re="on",size:ee="medium",children:ae,onClick:oe,disabled:T=!1,className:ne="",...ie})=>{const te=["pba-button",`pba-button--${Zr}`,`pba-button--${re}`,`pba-button--${ee}`,T?"pba-button--disabled":"",ne].filter(Boolean).join(" ");return r.jsx("button",{type:"button",className:te,onClick:oe,disabled:T,...ie,children:ae})};e.__docgenInfo={description:"Button component based on Figma design",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'danger' | 'invisible'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'invisible'"}]},description:"Button variant",defaultValue:{value:"'primary'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'on' | 'off'",elements:[{name:"literal",value:"'on'"},{name:"literal",value:"'off'"}]},description:"Button color scheme",defaultValue:{value:"'on'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'extra-large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'extra-large'"}]},description:"Button size",defaultValue:{value:"'medium'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Button content"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const ce={title:"Components/Button",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary","danger","invisible"]},color:{control:{type:"select"},options:["on","off"]},size:{control:{type:"select"},options:["small","medium","large","extra-large"]},disabled:{control:{type:"boolean"}},children:{control:{type:"text"}}}},a={args:{variant:"primary",color:"on",size:"medium",children:"Button"}},o={args:{variant:"primary",color:"on",size:"small",children:"Small Button"}},n={args:{variant:"primary",color:"on",size:"large",children:"Large Button"}},i={args:{variant:"primary",color:"on",size:"extra-large",children:"Extra Large Button"}},t={args:{variant:"primary",color:"off",size:"medium",children:"Grey Button"}},s={args:{variant:"primary",color:"off",size:"small",children:"Grey Small"}},l={args:{variant:"primary",color:"off",size:"large",children:"Grey Large"}},c={args:{variant:"secondary",color:"on",size:"medium",children:"Secondary Button"}},d={args:{variant:"secondary",color:"on",size:"small",children:"Secondary Small"}},m={args:{variant:"secondary",color:"on",size:"large",children:"Secondary Large"}},p={args:{variant:"secondary",color:"off",size:"medium",children:"Secondary Grey"}},y={args:{variant:"secondary",color:"off",size:"small",children:"Secondary Grey Small"}},u={args:{variant:"secondary",color:"off",size:"large",children:"Secondary Grey Large"}},g={args:{variant:"tertiary",color:"on",size:"medium",children:"Tertiary Button"}},v={args:{variant:"tertiary",color:"off",size:"medium",children:"Tertiary Grey"}},f={args:{variant:"danger",color:"on",size:"medium",children:"Danger Button"}},x={args:{variant:"danger",color:"off",size:"medium",children:"Danger Grey"}},h={args:{variant:"invisible",color:"on",size:"medium",children:"Invisible Button"}},z={args:{variant:"invisible",color:"off",size:"medium",children:"Invisible Grey"}},B={args:{variant:"primary",color:"on",size:"medium",children:"Disabled Button",disabled:!0}},S={args:{variant:"primary",color:"off",size:"medium",children:"Disabled Grey",disabled:!0}},b={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",color:"on",children:"Primary"}),r.jsx(e,{variant:"secondary",color:"on",children:"Secondary"}),r.jsx(e,{variant:"tertiary",color:"on",children:"Tertiary"}),r.jsx(e,{variant:"danger",color:"on",children:"Danger"}),r.jsx(e,{variant:"invisible",color:"on",children:"Invisible"})]})},G={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",color:"off",children:"Primary Grey"}),r.jsx(e,{variant:"secondary",color:"off",children:"Secondary Grey"}),r.jsx(e,{variant:"tertiary",color:"off",children:"Tertiary Grey"}),r.jsx(e,{variant:"danger",color:"off",children:"Danger Grey"}),r.jsx(e,{variant:"invisible",color:"off",children:"Invisible Grey"})]})},j={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(e,{variant:"primary",color:"on",size:"small",children:"Small"}),r.jsx(e,{variant:"primary",color:"on",size:"medium",children:"Medium"}),r.jsx(e,{variant:"primary",color:"on",size:"large",children:"Large"}),r.jsx(e,{variant:"primary",color:"on",size:"extra-large",children:"Extra Large"})]})},L={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(e,{variant:"primary",color:"off",size:"small",children:"Small Grey"}),r.jsx(e,{variant:"primary",color:"off",size:"medium",children:"Medium Grey"}),r.jsx(e,{variant:"primary",color:"off",size:"large",children:"Large Grey"}),r.jsx(e,{variant:"primary",color:"off",size:"extra-large",children:"Extra Large Grey"})]})},P={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsxs("div",{children:[r.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:"600"},children:"Color On"}),r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",color:"on",size:"small",children:"Primary S"}),r.jsx(e,{variant:"primary",color:"on",size:"medium",children:"Primary M"}),r.jsx(e,{variant:"primary",color:"on",size:"large",children:"Primary L"}),r.jsx(e,{variant:"primary",color:"on",size:"extra-large",children:"Primary XL"})]}),r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",marginTop:"8px"},children:[r.jsx(e,{variant:"secondary",color:"on",size:"medium",children:"Secondary"}),r.jsx(e,{variant:"tertiary",color:"on",size:"medium",children:"Tertiary"}),r.jsx(e,{variant:"danger",color:"on",size:"medium",children:"Danger"}),r.jsx(e,{variant:"invisible",color:"on",size:"medium",children:"Invisible"})]})]}),r.jsxs("div",{children:[r.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:"600"},children:"Color Off (Grey)"}),r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",color:"off",size:"small",children:"Primary S"}),r.jsx(e,{variant:"primary",color:"off",size:"medium",children:"Primary M"}),r.jsx(e,{variant:"primary",color:"off",size:"large",children:"Primary L"}),r.jsx(e,{variant:"primary",color:"off",size:"extra-large",children:"Primary XL"})]}),r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",marginTop:"8px"},children:[r.jsx(e,{variant:"secondary",color:"off",size:"medium",children:"Secondary"}),r.jsx(e,{variant:"tertiary",color:"off",size:"medium",children:"Tertiary"}),r.jsx(e,{variant:"danger",color:"off",size:"medium",children:"Danger"}),r.jsx(e,{variant:"invisible",color:"off",size:"medium",children:"Invisible"})]})]})]})};var D,I,w;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    color: 'on',
    size: 'medium',
    children: 'Button'
  }
}`,...(w=(I=a.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var W,C,E;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    color: 'on',
    size: 'small',
    children: 'Small Button'
  }
}`,...(E=(C=o.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var O,A,V;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    color: 'on',
    size: 'large',
    children: 'Large Button'
  }
}`,...(V=(A=n.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var M,q,N;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    color: 'on',
    size: 'extra-large',
    children: 'Extra Large Button'
  }
}`,...(N=(q=i.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var R,X,_;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    color: 'off',
    size: 'medium',
    children: 'Grey Button'
  }
}`,...(_=(X=t.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};var $,k,F;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    color: 'off',
    size: 'small',
    children: 'Grey Small'
  }
}`,...(F=(k=s.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var H,J,K;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    color: 'off',
    size: 'large',
    children: 'Grey Large'
  }
}`,...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,Y;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    color: 'on',
    size: 'medium',
    children: 'Secondary Button'
  }
}`,...(Y=(U=c.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,rr,er;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    color: 'on',
    size: 'small',
    children: 'Secondary Small'
  }
}`,...(er=(rr=d.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};var ar,or,nr;m.parameters={...m.parameters,docs:{...(ar=m.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    color: 'on',
    size: 'large',
    children: 'Secondary Large'
  }
}`,...(nr=(or=m.parameters)==null?void 0:or.docs)==null?void 0:nr.source}}};var ir,tr,sr;p.parameters={...p.parameters,docs:{...(ir=p.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    color: 'off',
    size: 'medium',
    children: 'Secondary Grey'
  }
}`,...(sr=(tr=p.parameters)==null?void 0:tr.docs)==null?void 0:sr.source}}};var lr,cr,dr;y.parameters={...y.parameters,docs:{...(lr=y.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    color: 'off',
    size: 'small',
    children: 'Secondary Grey Small'
  }
}`,...(dr=(cr=y.parameters)==null?void 0:cr.docs)==null?void 0:dr.source}}};var mr,pr,yr;u.parameters={...u.parameters,docs:{...(mr=u.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    color: 'off',
    size: 'large',
    children: 'Secondary Grey Large'
  }
}`,...(yr=(pr=u.parameters)==null?void 0:pr.docs)==null?void 0:yr.source}}};var ur,gr,vr;g.parameters={...g.parameters,docs:{...(ur=g.parameters)==null?void 0:ur.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    color: 'on',
    size: 'medium',
    children: 'Tertiary Button'
  }
}`,...(vr=(gr=g.parameters)==null?void 0:gr.docs)==null?void 0:vr.source}}};var fr,xr,hr;v.parameters={...v.parameters,docs:{...(fr=v.parameters)==null?void 0:fr.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    color: 'off',
    size: 'medium',
    children: 'Tertiary Grey'
  }
}`,...(hr=(xr=v.parameters)==null?void 0:xr.docs)==null?void 0:hr.source}}};var zr,Br,Sr;f.parameters={...f.parameters,docs:{...(zr=f.parameters)==null?void 0:zr.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    color: 'on',
    size: 'medium',
    children: 'Danger Button'
  }
}`,...(Sr=(Br=f.parameters)==null?void 0:Br.docs)==null?void 0:Sr.source}}};var br,Gr,jr;x.parameters={...x.parameters,docs:{...(br=x.parameters)==null?void 0:br.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    color: 'off',
    size: 'medium',
    children: 'Danger Grey'
  }
}`,...(jr=(Gr=x.parameters)==null?void 0:Gr.docs)==null?void 0:jr.source}}};var Lr,Pr,Tr;h.parameters={...h.parameters,docs:{...(Lr=h.parameters)==null?void 0:Lr.docs,source:{originalSource:`{
  args: {
    variant: 'invisible',
    color: 'on',
    size: 'medium',
    children: 'Invisible Button'
  }
}`,...(Tr=(Pr=h.parameters)==null?void 0:Pr.docs)==null?void 0:Tr.source}}};var Dr,Ir,wr;z.parameters={...z.parameters,docs:{...(Dr=z.parameters)==null?void 0:Dr.docs,source:{originalSource:`{
  args: {
    variant: 'invisible',
    color: 'off',
    size: 'medium',
    children: 'Invisible Grey'
  }
}`,...(wr=(Ir=z.parameters)==null?void 0:Ir.docs)==null?void 0:wr.source}}};var Wr,Cr,Er;B.parameters={...B.parameters,docs:{...(Wr=B.parameters)==null?void 0:Wr.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    color: 'on',
    size: 'medium',
    children: 'Disabled Button',
    disabled: true
  }
}`,...(Er=(Cr=B.parameters)==null?void 0:Cr.docs)==null?void 0:Er.source}}};var Or,Ar,Vr;S.parameters={...S.parameters,docs:{...(Or=S.parameters)==null?void 0:Or.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    color: 'off',
    size: 'medium',
    children: 'Disabled Grey',
    disabled: true
  }
}`,...(Vr=(Ar=S.parameters)==null?void 0:Ar.docs)==null?void 0:Vr.source}}};var Mr,qr,Nr;b.parameters={...b.parameters,docs:{...(Mr=b.parameters)==null?void 0:Mr.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary" color="on">Primary</Button>
      <Button variant="secondary" color="on">Secondary</Button>
      <Button variant="tertiary" color="on">Tertiary</Button>
      <Button variant="danger" color="on">Danger</Button>
      <Button variant="invisible" color="on">Invisible</Button>
    </div>
}`,...(Nr=(qr=b.parameters)==null?void 0:qr.docs)==null?void 0:Nr.source}}};var Rr,Xr,_r;G.parameters={...G.parameters,docs:{...(Rr=G.parameters)==null?void 0:Rr.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary" color="off">Primary Grey</Button>
      <Button variant="secondary" color="off">Secondary Grey</Button>
      <Button variant="tertiary" color="off">Tertiary Grey</Button>
      <Button variant="danger" color="off">Danger Grey</Button>
      <Button variant="invisible" color="off">Invisible Grey</Button>
    </div>
}`,...(_r=(Xr=G.parameters)==null?void 0:Xr.docs)==null?void 0:_r.source}}};var $r,kr,Fr;j.parameters={...j.parameters,docs:{...($r=j.parameters)==null?void 0:$r.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Button variant="primary" color="on" size="small">Small</Button>
      <Button variant="primary" color="on" size="medium">Medium</Button>
      <Button variant="primary" color="on" size="large">Large</Button>
      <Button variant="primary" color="on" size="extra-large">Extra Large</Button>
    </div>
}`,...(Fr=(kr=j.parameters)==null?void 0:kr.docs)==null?void 0:Fr.source}}};var Hr,Jr,Kr;L.parameters={...L.parameters,docs:{...(Hr=L.parameters)==null?void 0:Hr.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Button variant="primary" color="off" size="small">Small Grey</Button>
      <Button variant="primary" color="off" size="medium">Medium Grey</Button>
      <Button variant="primary" color="off" size="large">Large Grey</Button>
      <Button variant="primary" color="off" size="extra-large">Extra Large Grey</Button>
    </div>
}`,...(Kr=(Jr=L.parameters)==null?void 0:Jr.docs)==null?void 0:Kr.source}}};var Qr,Ur,Yr;P.parameters={...P.parameters,docs:{...(Qr=P.parameters)==null?void 0:Qr.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '16px',
        fontWeight: '600'
      }}>Color On</h3>
        <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
          <Button variant="primary" color="on" size="small">Primary S</Button>
          <Button variant="primary" color="on" size="medium">Primary M</Button>
          <Button variant="primary" color="on" size="large">Primary L</Button>
          <Button variant="primary" color="on" size="extra-large">Primary XL</Button>
        </div>
        <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
        marginTop: '8px'
      }}>
          <Button variant="secondary" color="on" size="medium">Secondary</Button>
          <Button variant="tertiary" color="on" size="medium">Tertiary</Button>
          <Button variant="danger" color="on" size="medium">Danger</Button>
          <Button variant="invisible" color="on" size="medium">Invisible</Button>
        </div>
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '16px',
        fontWeight: '600'
      }}>Color Off (Grey)</h3>
        <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
          <Button variant="primary" color="off" size="small">Primary S</Button>
          <Button variant="primary" color="off" size="medium">Primary M</Button>
          <Button variant="primary" color="off" size="large">Primary L</Button>
          <Button variant="primary" color="off" size="extra-large">Primary XL</Button>
        </div>
        <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
        marginTop: '8px'
      }}>
          <Button variant="secondary" color="off" size="medium">Secondary</Button>
          <Button variant="tertiary" color="off" size="medium">Tertiary</Button>
          <Button variant="danger" color="off" size="medium">Danger</Button>
          <Button variant="invisible" color="off" size="medium">Invisible</Button>
        </div>
      </div>
    </div>
}`,...(Yr=(Ur=P.parameters)==null?void 0:Ur.docs)==null?void 0:Yr.source}}};const de=["Primary","PrimarySmall","PrimaryLarge","PrimaryExtraLarge","PrimaryGrey","PrimaryGreySmall","PrimaryGreyLarge","Secondary","SecondarySmall","SecondaryLarge","SecondaryGrey","SecondaryGreySmall","SecondaryGreyLarge","Tertiary","TertiaryGrey","Danger","DangerGrey","Invisible","InvisibleGrey","Disabled","DisabledGrey","AllVariantsOn","AllVariantsOff","AllSizes","AllSizesGrey","CompleteShowcase"];export{j as AllSizes,L as AllSizesGrey,G as AllVariantsOff,b as AllVariantsOn,P as CompleteShowcase,f as Danger,x as DangerGrey,B as Disabled,S as DisabledGrey,h as Invisible,z as InvisibleGrey,a as Primary,i as PrimaryExtraLarge,t as PrimaryGrey,l as PrimaryGreyLarge,s as PrimaryGreySmall,n as PrimaryLarge,o as PrimarySmall,c as Secondary,p as SecondaryGrey,u as SecondaryGreyLarge,y as SecondaryGreySmall,m as SecondaryLarge,d as SecondarySmall,g as Tertiary,v as TertiaryGrey,de as __namedExportsOrder,ce as default};
