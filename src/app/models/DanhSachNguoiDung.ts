import { NguoiDung } from './NguoiDung';
// import { HocVien } from './HocVien';

export class DanhSachNguoiDung{

	DSND:Array<NguoiDung> = [];
	// DSHV:Array<HocVien> = [];

	
	themNguoiDung(nd:NguoiDung){
		this.DSND.push(nd);
	}
	timNguoiDungTheoTK(tk:string):number{
		let indexND = -1;
		for(let i:number = 0; i < this.slNguoiDung(); i++){
			let ND = this.DSND[i];
			if(ND._TaiKhoan === tk){
				indexND = i;
				break;
			}
		}
		return indexND;
	}
	slNguoiDung():number{
		return this.DSND.length;
	}
	xoaNguoiDung(){}
	suaNguoiDung(){}
	ghiDanhKhoaHoc(){}
}




