f=require('fs'),n=0,U='udlr'
for(;++n<6;){
r=''+f.readFileSync('/input/i00'+n+'/level.txt'),w=r.search('\n')+1,D=[-w,w,-1,1],o={},m='',p=r.search('@')
r.replace(/[$*]/g,(c,i)=>(o[k=(i>9*w)*2|i%w>7]??=[]).push(i))
r=[...r]
for(k in o){
B=[o[k]],S=[p],A=[m],Z={},a=0
for(h=0;!a&&B[h];h++){u=B[h],v={[S[h]]:''},q=[S[h]]
for(e of q)for(j=4;j--;){z=e+D[j]
r[z]!='#'&&!v[z]&&!u.includes(z)&&(v[z]=v[e]+U[j],q.push(z))
y=z+D[j],r[y]!='#'&u.includes(z)&!u.includes(y)&&(nb=u.map(c=>c-z?c:y).sort(),V=nb+'|'+z,Z[V]||(Z[V]=B.push(nb),S.push(z),A.push(A[h]+v[e]+U[j]),nb.every(c=>r[c]>')'&r[c]<'/')&&(a=B.length-1)))
}}
m=A[a],p=S[a]
B[a].map(b=>r[b]='#')
}
f.mkdirSync(d='/output/i00'+n,{recursive:!0}),f.writeFileSync(d+='/solution.txt',m)
}
