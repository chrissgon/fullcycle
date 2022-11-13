package main

import "testing"

func TestSome(t *testing.T) {
	expect := 2
	have := sum(1, 1)

	if expect != have {
		t.Errorf("expect %v, but have %v", expect, have)
	}
}
