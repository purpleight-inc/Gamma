import{ trigger, style, state, transition, animate, query, group } from "@angular/animations"

export const HideRayon = trigger("HideRayon",[
    state('collapsed',
        style({
            height: 0,
            opacity: 0,
        })),
    state('expanded',
        style({
        height: "50px",
        opacity: 1,
        })),
    transition('collapsed => expanded',[animate('250ms 100ms ease-in')]),
    transition('expanded => collapsed',[animate('300ms ease-in')])
])

export const DisplayMenu = trigger("DisplayMenu",[
    state('collapsed',style({
        maxHeight: "*",
        opacity: 0
    })),
    state('expanded',style({
        maxHeight: "300px",
        opacity: 1
    })),
    transition('collapsed => expanded',[animate('300ms 290ms ease-in-out')]),
    transition('expanded => collapsed',[animate('80ms ease-in')])
])