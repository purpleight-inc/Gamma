import{ trigger, style, state, transition, animate} from "@angular/animations"

export const ChangeSign = trigger("ChangeSign",[
    state('show',
        style({
            opacity: 1,
        })),
    state('hide',
        style({
            opacity: 0,
        })),
    transition('show => hide',[animate('150ms ease-in')]),
    transition('hide => show',[animate('200ms 50ms ease-in')])
])