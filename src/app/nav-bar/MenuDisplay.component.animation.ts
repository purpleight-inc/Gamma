import{ trigger, style, state, transition, animate, query, group } from "@angular/animations"

export const ExpandMenuRayon = trigger("ExpandMenuRayon",[
    state('collapsed',style({
        height:0,
        opacity:0,
    })),
    state('expanded',style({
      height:"*",
      padding:"*",
      opacity:"*",
  })),
    transition('collapsed => expanded',[animate('300ms ease-in-out')]),
    transition('expanded => collapsed',[animate('80ms ease-in')]) 
])

export const ExpandSearchContainer = trigger("ExpandSearchContainer",[
    state('collapsed',style({
        position: "*",
        width: "*",
        borderRadius: "*"
        // boxSahdow: "*"

    })),
    state('expanded',style({
        position: "absolute",
        width: "825px",
        borderRadius: "42px 42px 0 0 / 100%"
        

  })),
    transition('collapsed => expanded',[animate('0s',style({borderRadius: "42px 42px 0 0 / 100%"})),animate('100ms ease')]),
    transition('expanded => collapsed',[animate('100ms ease')]) 
])

export const RayonContainerAnim = trigger("RayonContainerAnim",[
    state('collapsed',style({
        opacity:"*"
    })),
    state('expanded',style({
        opacity:"1"
    })),
    transition('collapsed => expanded',[animate("300ms 500ms")
    ]),

    transition('expanded => collapsed',[animate("300ms")
    ])
        
])
