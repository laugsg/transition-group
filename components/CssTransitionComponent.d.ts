declare namespace React {
  export interface HTMLAttributes<T> {
    className?: string | undefined | object
  }
}

// declare namespace React {
//   interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//     className?: string | undefined | object;
//   }
// }

// index.d.ts(1853, 9): The expected type comes from property 'className'
//  which is declared here on type 
//  'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'
// interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//   className?: string | undefined | object;