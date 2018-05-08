"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var No_1 = require("./No");
var Arvore = /** @class */ (function () {
    function Arvore() {
        this.raiz = null;
        this.propSBB = true;
    }
    Arvore.prototype.search = function (reg, p) {
        if (p == null)
            return null;
        else if (reg.compare(p.getItem()) < 0)
            return this.search(reg, p.getFilhoEsq());
        else if (reg.compare(p.getItem()) > 0)
            return this.search(reg, p.getFilhoEsq());
        else
            return p.getItem();
    };
    Arvore.ee = function (ap) {
        var ap1 = ap.getFilhoEsq();
        ap.setFilhoEsq(ap1.getFilhoDir());
        ap1.setFilhoDir(ap);
        ap1.setIncE(Arvore.Vertical);
        ap.setIncE(Arvore.Vertical);
        ap = ap1;
        return ap;
    };
    Arvore.ed = function (ap) {
        var ap1 = ap.getFilhoEsq(), ap2 = ap1.getFilhoDir();
        ap1.setIncD(Arvore.Vertical);
        ap.setIncE(Arvore.Vertical);
        ap1.setFilhoDir(ap2.getFilhoEsq());
        ap2.setFilhoEsq(ap1);
        ap.setFilhoEsq(ap2.getFilhoDir());
        ap2.setFilhoDir(ap);
        ap = ap2;
        return ap;
    };
    Arvore.dd = function (ap) {
        var ap1 = ap.getFilhoDir();
        ap.setFilhoDir(ap1.getFilhoEsq());
        ap1.setFilhoEsq(ap);
        ap1.setIncD(Arvore.Vertical);
        ap.setIncD(Arvore.Vertical);
        ap = ap1;
        return ap;
    };
    Arvore.de = function (ap) {
        var ap1 = ap.getFilhoDir(), ap2 = ap1.getFilhoEsq();
        ap1.setIncE(Arvore.Vertical);
        ap.setIncD(Arvore.Vertical);
        ap1.setFilhoEsq(ap2.getFilhoDir());
        ap2.setFilhoDir(ap1);
        ap.setFilhoDir(ap2.getFilhoEsq());
        ap2.setFilhoEsq(ap);
        ap = ap2;
        return ap;
    };
    Arvore.prototype.insert = function (reg, pai, filho, filhoEsq) {
        if (filho == null) {
            filho = new No_1.No(reg);
            if (pai != null)
                if (filhoEsq)
                    pai.setIncE(Arvore.Horizontal);
                else
                    pai.setIncD(Arvore.Horizontal);
            this.propSBB = false;
        }
        else if (reg.compare(filho.getItem()) < 0) {
            filho.setFilhoEsq(this.insert(reg, filho, filho.getFilhoEsq(), true));
            if (!this.propSBB)
                if (filho.getIncE() == Arvore.Horizontal) {
                    if (filho.getFilhoEsq().getIncE() == Arvore.Horizontal) {
                        filho = Arvore.ee(filho);
                        if (pai != null)
                            if (filhoEsq)
                                pai.setIncE(Arvore.Horizontal);
                            else
                                pai.setIncD(Arvore.Horizontal);
                    }
                    else if (filho.getFilhoEsq().getIncD() == Arvore.Horizontal) {
                        filho = Arvore.ed(filho);
                        if (pai != null)
                            if (filhoEsq)
                                pai.setIncE(Arvore.Horizontal);
                            else
                                pai.setIncD(Arvore.Horizontal);
                    }
                }
                else
                    this.propSBB = true;
        }
        else if (reg.compare(filho.getItem()) > 0) {
            filho.setFilhoDir(this.insert(reg, filho, filho.getFilhoDir(), false));
            if (!this.propSBB)
                if (filho.getIncD() == Arvore.Horizontal) {
                    if (filho.getFilhoDir().getIncD() == Arvore.Horizontal) {
                        filho = Arvore.dd(filho);
                        if (pai != null)
                            if (filhoEsq)
                                pai.setIncE(Arvore.Horizontal);
                            else
                                pai.setIncD(Arvore.Horizontal);
                    }
                    else if (filho.getFilhoDir().getIncE() == Arvore.Horizontal) {
                        filho = Arvore.de(filho);
                        if (pai != null)
                            if (filhoEsq)
                                pai.setIncE(Arvore.Horizontal);
                            else
                                pai.setIncD(Arvore.Horizontal);
                    }
                }
                else
                    this.propSBB = true;
        }
        else {
            console.log("Erro: Registro ja existente");
            this.propSBB = true;
        }
        return filho;
    };
    Arvore.prototype.esqCurto = function (ap) {
        if (ap.getIncE() == Arvore.Horizontal) {
            ap.setIncE(Arvore.Vertical);
            this.propSBB = true;
        }
        else if (ap.getIncD() == Arvore.Horizontal) {
            var ap1 = ap.getFilhoDir();
            ap.setFilhoDir(ap1.getFilhoEsq());
            ap1.setFilhoEsq(ap);
            ap = ap1;
            if (ap.getFilhoEsq().getFilhoDir().getIncE() == Arvore.Horizontal) {
                ap.setFilhoEsq(Arvore.de(ap.getFilhoEsq()));
                ap.setIncE(Arvore.Horizontal);
            }
            else if (ap.getFilhoEsq().getFilhoDir().getIncD() == Arvore.Horizontal) {
                ap.setFilhoEsq(Arvore.dd(ap.getFilhoEsq()));
                ap.setIncE(Arvore.Horizontal);
            }
            this.propSBB = true;
        }
        else {
            ap.setIncD(Arvore.Horizontal);
            if (ap.getFilhoDir().getIncE() == Arvore.Horizontal) {
                ap = Arvore.de(ap);
                this.propSBB = true;
            }
            else if (ap.getFilhoDir().getIncD() == Arvore.Horizontal) {
                ap = Arvore.dd(ap);
                this.propSBB = true;
            }
        }
        return ap;
    };
    Arvore.prototype.dirCurto = function (ap) {
        if (ap.getIncD() == Arvore.Horizontal) {
            ap.setIncD(Arvore.Vertical);
            this.propSBB = true;
        }
        else if (ap.getIncE() == Arvore.Horizontal) {
            var ap1 = ap.getFilhoEsq();
            ap.setFilhoEsq(ap1.getFilhoDir());
            ap1.setFilhoDir(ap);
            ap = ap1;
            if (ap.getFilhoDir().getFilhoEsq().getIncD() == Arvore.Horizontal) {
                ap.setFilhoDir(Arvore.ed(ap.getFilhoDir()));
                ap.setIncD(Arvore.Horizontal);
            }
            else if (ap.getFilhoDir().getFilhoEsq().getIncE() == Arvore.Horizontal) {
                ap.setFilhoDir(Arvore.ee(ap.getFilhoDir()));
                ap.setIncD(Arvore.Horizontal);
            }
            this.propSBB = true;
        }
        else {
            ap.setIncE(Arvore.Horizontal);
            if (ap.getFilhoEsq().getIncD() == Arvore.Horizontal) {
                ap = Arvore.ed(ap);
                this.propSBB = true;
            }
            else if (ap.getFilhoEsq().getIncE() == Arvore.Horizontal) {
                ap = Arvore.ee(ap);
                this.propSBB = true;
            }
        }
        return ap;
    };
    Arvore.prototype.antecessor = function (q, r) {
        if (r.getFilhoDir() != null) {
            r.setFilhoDir(this.antecessor(q, r.getFilhoDir()));
            if (!this.propSBB)
                r = this.dirCurto(r);
        }
        else {
            q.setItem(r.getItem());
            r = r.getFilhoEsq();
            if (r != null)
                this.propSBB = true;
        }
        return r;
    };
    Arvore.prototype.delete = function (reg, ap) {
        if (ap == null) {
            console.log("Erro: Registro nao encontrado");
            this.propSBB = true;
        }
        else if (reg.compare(ap.getItem()) < 0) {
            ap.setFilhoEsq(this.delete(reg, ap.getFilhoEsq()));
            if (!this.propSBB)
                ap = this.esqCurto(ap);
        }
        else if (reg.compare(ap.getItem()) > 0) {
            ap.setFilhoDir(this.delete(reg, ap.getFilhoDir()));
            if (!this.propSBB)
                ap = this.dirCurto(ap);
        }
        else {
            this.propSBB = false;
            if (ap.getFilhoDir() == null) {
                ap = ap.getFilhoEsq();
                if (ap != null)
                    this.propSBB = true;
            }
            else if (ap.getFilhoEsq() == null) {
                ap = ap.getFilhoDir();
                if (ap != null)
                    this.propSBB = true;
            }
            else {
                ap.setFilhoEsq(this.antecessor(ap, ap.getFilhoEsq()));
                if (!this.propSBB)
                    ap = this.esqCurto(ap);
            }
        }
        return ap;
    };
    Arvore.prototype.pesquisa = function (reg) {
        return this.search(reg, this.raiz);
    };
    Arvore.prototype.insere = function (reg) {
        this.raiz = this.insert(reg, null, this.raiz, true);
    };
    Arvore.prototype.retira = function (reg) {
        this.raiz = this.delete(reg, this.raiz);
    };
    Arvore.Horizontal = 0;
    Arvore.Vertical = 1;
    return Arvore;
}());
exports.Arvore = Arvore;
