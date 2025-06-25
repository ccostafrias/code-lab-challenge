import * as math from 'mathjs'

export function estimarNota({alunos, nota}) {
    const notas_p1 = alunos.map(n => n.p1)
    const notas_p2 = alunos.map(n => n.p2)

    const size = alunos.length
    const med_x = math.mean(notas_p1)
    console.log(`Média de x: ${med_x}`)
    const med_y = math.mean(notas_p2)
    console.log(`Média de y: ${med_y}`)
    // cov = (somatório de xi*yi) - n*med(x)*med(y)
    const covariance = math.dot(notas_p1, notas_p2)/size - med_x*med_y
    console.log(`cov(x, y): ${covariance}`)
    const variance = math.variance(notas_p1, 'uncorrected')
    console.log(`var(x): ${variance}`)
    
    // fórmulas:
    // a = cov(x,y)/var(x)
    // b = med(y) - a * med(x)
    const coef_ang = covariance/variance
    const coef_lin = med_y - (coef_ang * med_x)
    console.log(`A = ${coef_ang} e B = ${coef_lin}`)
    
    // EQUAÇÃO DA RETA: y = ax + b
    // y = nota estimada
    // a = coeficiente angular
    // x = primeira nota
    // b = coeficiente linear
    return (coef_ang * nota + coef_lin)
}